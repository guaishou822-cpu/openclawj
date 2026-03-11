import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const DownloadSection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      className="py-12 max-w-3xl mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        <span className="claw-accent">⟩</span> {t("download.title")}
      </h2>
      

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          href="https://github.com/openclaw/openclaw/releases/latest/download/OpenClaw-macOS.dmg"
          className="download-btn group"
          whileHover={{ scale: 1.03, boxShadow: "0 0 25px hsl(var(--primary) / 0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className="text-xs text-muted-foreground">{t("download.downloadFor")}</div>
            <div className="font-semibold">macOS</div>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/openclaw/openclaw/releases/latest/download/OpenClaw-Windows.exe"
          className="download-btn group"
          whileHover={{ scale: 1.03, boxShadow: "0 0 25px hsl(var(--primary) / 0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
          </svg>
          <div className="text-left">
            <div className="text-xs text-muted-foreground">{t("download.downloadFor")}</div>
            <div className="font-semibold">Windows</div>
          </div>
        </motion.a>
      </div>

      
    </motion.section>
  );
};

export default DownloadSection;
