import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const sponsors = [
  { name: "OpenAI", url: "https://openai.com/" },
  { name: "Vercel", url: "https://vercel.com/" },
  { name: "Blacksmith", url: "https://blacksmith.sh/" },
  { name: "Convex", url: "https://www.convex.dev/" },
];

const SponsorsSection = () => {
  const { t } = useLanguage();
  return (
    <motion.section
      className="py-12 max-w-4xl mx-auto px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        <span className="claw-accent">⟩</span> {t("sponsors.title")}
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {sponsors.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-logo text-xl md:text-2xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ opacity: 1, scale: 1.05, transition: { duration: 0.2 } }}
          >
            {s.name}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default SponsorsSection;
