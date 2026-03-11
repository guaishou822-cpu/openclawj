import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const pressItems = [
  {
    outlet: "MacStories",
    quote: "OpenClaw Showed Me What the Future of Personal AI Assistants Looks Like",
    author: "Federico Viticci",
    url: "https://www.macstories.net/stories/clawdbot-showed-me-what-the-future-of-personal-ai-assistants-looks-like/",
  },
  {
    outlet: "StarryHope",
    quote: "The Lobster Takeover: Why Developers Are Buying Mac Minis to Run Their Own AI Agents",
    author: "Jim Mendenhall",
    url: "https://www.starryhope.com/minipcs/clawdbot-mac-mini-ai-agent-trend/",
  },
];

const FeaturedInSection = () => {
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
        <span className="claw-accent">⟩</span> {t("featured.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pressItems.map((item, i) => (
          <motion.a
            key={item.outlet}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="press-card block no-underline group"
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <p className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {item.outlet}
            </p>
            <blockquote className="text-muted-foreground text-sm italic mb-3 border-l-2 border-primary pl-3">
              "{item.quote}"
            </blockquote>
            <p className="text-sm text-muted-foreground">{item.author}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedInSection;
