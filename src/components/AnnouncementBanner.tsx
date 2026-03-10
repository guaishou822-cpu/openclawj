import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const AnnouncementBanner = () => {
  const { t } = useLanguage();
  return (
    <motion.section
      className="flex justify-center py-6 px-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <a
        href="https://openclaw.ai/blog/virustotal-partnership"
        target="_blank"
        rel="noopener noreferrer"
        className="announcement-banner group"
      >
        <span className="announcement-badge">New</span>
        <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-300">
          {t("announce.text")}
        </span>
        <motion.span
          className="text-muted-foreground"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </a>
    </motion.section>
  );
};

export default AnnouncementBanner;
