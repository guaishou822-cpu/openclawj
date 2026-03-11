import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "@/hooks/use-toast";

type Status = "idle" | "loading" | "error";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useLanguage();

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async () => {
    if (!email.trim()) {
      setStatus("error");
      setErrorMsg(t("newsletter.errorEmpty"));
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMsg(t("newsletter.errorInvalid"));
      return;
    }

    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setEmail("");
    setStatus("idle");
    toast({ title: t("newsletter.successToast") });
  };

  return (
    <motion.section
      className="py-12 max-w-xl mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="claw-accent">⟩</span> {t("newsletter.title")}
      </h2>
      <p className="text-sm text-muted-foreground mb-6">{t("newsletter.desc")}</p>

      <div className="flex gap-3">
        <input
          type="email"
          placeholder={t("newsletter.placeholder")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className={`newsletter-input flex-1 ${status === "error" ? "!border-destructive" : ""}`}
          disabled={status === "loading"}
        />
        <motion.button
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-all disabled:opacity-50"
          whileHover={status !== "loading" ? { scale: 1.03, boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" } : {}}
          whileTap={status !== "loading" ? { scale: 0.97 } : {}}
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="inline-block"
            >
              ⏳
            </motion.span>
          ) : (
            t("newsletter.subscribe")
          )}
        </motion.button>
      </div>
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs text-destructive mt-2 text-left"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default NewsletterSection;
