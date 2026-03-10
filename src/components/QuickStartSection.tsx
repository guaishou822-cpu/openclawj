import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type TabKey = "oneliner" | "npm" | "hackable" | "macos";

const tabs: { key: TabKey; label: string }[] = [
  { key: "oneliner", label: "One-liner" },
  { key: "npm", label: "npm" },
  { key: "hackable", label: "Hackable" },
  { key: "macos", label: "macOS" },
];

const codeBlocks: Record<TabKey, { comment: string; commands: string[] }[]> = {
  oneliner: [
    {
      comment: "# Works everywhere. Installs everything. You're welcome. 🦞",
      commands: ["curl -fsSL https://openclaw.ai/install.sh | bash"],
    },
  ],
  npm: [
    { comment: "# Install OpenClaw", commands: ["npm i -g openclaw"] },
    { comment: "# Meet your lobster", commands: ["openclaw onboard"] },
  ],
  hackable: [
    {
      comment: "# For those who read source code for fun",
      commands: ["curl -fsSL https://openclaw.ai/install.sh | bash -s -- --install-method git"],
    },
  ],
  macos: [
    {
      comment: "# You clearly know what you're doing",
      commands: [
        "git clone https://github.com/openclaw/openclaw.git",
        "cd openclaw && pnpm install && pnpm run build",
      ],
    },
    { comment: "# You built it, now meet it", commands: ["pnpm run openclaw onboard"] },
  ],
};

const QuickStartSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("oneliner");
  const { t } = useLanguage();

  return (
    <motion.section
      className="py-12 max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        <span className="claw-accent">⟩</span> {t("quickstart.title")}
      </h2>

      <motion.div
        className="terminal-window"
        whileHover={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="terminal-titlebar">
          <div className="flex gap-2 mr-4">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
          </div>
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={activeTab === tab.key ? "tab-active" : "tab-inactive"}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono">{t("quickstart.os")}</span>
            <span className="text-xs text-accent font-mono cursor-pointer hover:underline">
              {t("quickstart.change")}
            </span>
          </div>
        </div>
        <div className="terminal-body">
          {codeBlocks[activeTab].map((block, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              className={i > 0 ? "mt-4" : ""}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="terminal-comment">{block.comment}</div>
              {block.commands.map((cmd, j) => (
                <div key={j} className="group cursor-pointer">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command group-hover:text-primary transition-colors duration-200">
                    {cmd}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-4 p-4 rounded-lg border border-border bg-secondary/30 hover:border-primary/30 transition-colors duration-300"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-sm font-medium mb-1">{t("quickstart.companion")}</p>
        <p className="text-xs text-muted-foreground mb-2">{t("quickstart.companionDesc")}</p>
        <a
          href="https://github.com/openclaw/openclaw/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          {t("quickstart.download")}
        </a>
        <span className="text-xs text-muted-foreground ml-2">{t("quickstart.requires")}</span>
      </motion.div>

      <p className="text-xs text-muted-foreground mt-4 text-center">{t("quickstart.footer")}</p>
    </motion.section>
  );
};

export default QuickStartSection;
