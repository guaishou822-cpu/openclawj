import { motion } from "framer-motion";

const AnnouncementBanner = () => {
  return (
    <motion.section
      className="flex justify-center py-6 px-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <a
        href="https://openclaw.ai/blog/virustotal-partnership"
        target="_blank"
        rel="noopener noreferrer"
        className="announcement-banner"
      >
        <span className="announcement-badge">New</span>
        <span className="text-sm text-foreground">OpenClaw Partners with VirusTotal for Skill Security</span>
        <span className="text-muted-foreground">→</span>
      </a>
    </motion.section>
  );
};

export default AnnouncementBanner;
