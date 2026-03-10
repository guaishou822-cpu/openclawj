import { motion } from "framer-motion";
import { Monitor, MessageSquare, Brain, Globe, Terminal, Puzzle } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Runs on Your Machine",
    desc: "Mac, Windows, or Linux. Anthropic, OpenAI, or local models. Private by default—your data stays yours.",
    url: "https://docs.openclaw.ai/getting-started",
  },
  {
    icon: MessageSquare,
    title: "Any Chat App",
    desc: "Talk to it on WhatsApp, Telegram, Discord, Slack, Signal, or iMessage. Works in DMs and group chats.",
    url: "https://openclaw.ai/integrations",
  },
  {
    icon: Brain,
    title: "Persistent Memory",
    desc: "Remembers you and becomes uniquely yours. Your preferences, your context, your AI.",
    url: "https://docs.openclaw.ai/session",
  },
  {
    icon: Globe,
    title: "Browser Control",
    desc: "It can browse the web, fill forms, and extract data from any site.",
    url: "https://docs.openclaw.ai/browser",
  },
  {
    icon: Terminal,
    title: "Full System Access",
    desc: "Read and write files, run shell commands, execute scripts. Full access or sandboxed—your choice.",
    url: "https://docs.openclaw.ai/bash",
  },
  {
    icon: Puzzle,
    title: "Skills & Plugins",
    desc: "Extend with community skills or build your own. It can even write its own.",
    url: "https://docs.openclaw.ai/skills",
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      className="py-12 max-w-6xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        <span className="claw-accent">⟩</span> What It Does
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <a
            key={f.title}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="feature-card block no-underline group"
          >
            <f.icon className="w-6 h-6 text-primary mb-3" />
            <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
