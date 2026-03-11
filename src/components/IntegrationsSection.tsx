import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const integrations = [
  "WhatsApp", "Telegram", "Discord", "Slack", "Signal", "iMessage",
  "Claude", "GPT", "Spotify", "Hue", "Obsidian", "Twitter",
  "Browser", "Gmail", "GitHub",
];

const IntegrationsSection = () => {
  const { t } = useLanguage();
  return (
    <motion.section
      className="py-12 max-w-6xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        <span className="claw-accent">⟩</span> {t("integrations.title")}
      </h2>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {integrations.map((name, i) => (
          <motion.span
            key={name}
            className="integration-badge cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            whileHover={{ scale: 1.08, borderColor: "hsl(var(--primary))", transition: { duration: 0.2 } }}
          >
            {name}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default IntegrationsSection;
