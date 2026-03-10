import { motion } from "framer-motion";

const integrations = [
  "WhatsApp", "Telegram", "Discord", "Slack", "Signal", "iMessage",
  "Claude", "GPT", "Spotify", "Hue", "Obsidian", "Twitter",
  "Browser", "Gmail", "GitHub",
];

const IntegrationsSection = () => {
  return (
    <motion.section
      className="py-12 max-w-6xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        <span className="claw-accent">⟩</span> Works With Everything
      </h2>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {integrations.map((name) => (
          <span key={name} className="integration-badge">
            {name}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-4 text-sm">
        <a
          href="https://openclaw.ai/integrations"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View all 50+ integrations →
        </a>
        <span className="text-muted-foreground">·</span>
        <a
          href="https://openclaw.ai/showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          See what people built →
        </a>
      </div>
    </motion.section>
  );
};

export default IntegrationsSection;
