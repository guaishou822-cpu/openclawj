import { motion } from "framer-motion";
import { Monitor, MessageSquare, Brain, Globe, Terminal, Puzzle, LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Feature {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  url: string;
}

const features: Feature[] = [
  { icon: Monitor, titleKey: "features.runs.title", descKey: "features.runs.desc", url: "#" },
  { icon: MessageSquare, titleKey: "features.chat.title", descKey: "features.chat.desc", url: "#" },
  { icon: Brain, titleKey: "features.memory.title", descKey: "features.memory.desc", url: "#" },
  { icon: Globe, titleKey: "features.browser.title", descKey: "features.browser.desc", url: "#" },
  { icon: Terminal, titleKey: "features.system.title", descKey: "features.system.desc", url: "#" },
  { icon: Puzzle, titleKey: "features.skills.title", descKey: "features.skills.desc", url: "#" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const FeaturesSection = () => {
  const { t } = useLanguage();
  return (
    <motion.section
      className="py-12 max-w-6xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        <span className="claw-accent">⟩</span> {t("features.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.a
            key={f.titleKey}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="feature-card block no-underline group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <f.icon className="w-6 h-6 text-primary mb-3" />
            </motion.div>
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {t(f.titleKey)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
