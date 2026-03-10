import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

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
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input flex-1"
        />
        <motion.button
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-all"
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          {t("newsletter.subscribe")}
        </motion.button>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;
