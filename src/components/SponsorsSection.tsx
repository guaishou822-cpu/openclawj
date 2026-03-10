import { motion } from "framer-motion";

const sponsors = [
  { name: "OpenAI", url: "https://openai.com/" },
  { name: "Vercel", url: "https://vercel.com/" },
  { name: "Blacksmith", url: "https://blacksmith.sh/" },
  { name: "Convex", url: "https://www.convex.dev/" },
];

const SponsorsSection = () => {
  return (
    <motion.section
      className="py-12 max-w-4xl mx-auto px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        <span className="claw-accent">⟩</span> Sponsors
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {sponsors.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-logo text-xl md:text-2xl font-bold text-foreground/50 hover:text-foreground transition-all"
          >
            {s.name}
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default SponsorsSection;
