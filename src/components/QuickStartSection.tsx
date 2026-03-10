import { useState } from "react";
import { motion } from "framer-motion";

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
    {
      comment: "# Install OpenClaw",
      commands: ["npm i -g openclaw"],
    },
    {
      comment: "# Meet your lobster",
      commands: ["openclaw onboard"],
    },
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
    {
      comment: "# You built it, now meet it",
      commands: ["pnpm run openclaw onboard"],
    },
  ],
};

const QuickStartSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("oneliner");

  return (
    <motion.section
      className="py-12 max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        <span className="claw-accent">⟩</span> Quick Start
      </h2>

      <div className="terminal-window">
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
            <span className="text-xs text-muted-foreground font-mono">macOS/Linux</span>
            <span className="text-xs text-accent font-mono cursor-pointer">change</span>
          </div>
        </div>
        <div className="terminal-body">
          {codeBlocks[activeTab].map((block, i) => (
            <div key={i} className={i > 0 ? "mt-4" : ""}>
              <div className="terminal-comment">{block.comment}</div>
              {block.commands.map((cmd, j) => (
                <div key={j}>
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command">{cmd}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg border border-border bg-secondary/30">
        <p className="text-sm font-medium mb-1">Companion App (Beta)</p>
        <p className="text-xs text-muted-foreground mb-2">
          Menubar access to your lobster. Works great alongside the CLI.
        </p>
        <a
          href="https://github.com/openclaw/openclaw/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:underline"
        >
          Download for macOS
        </a>
        <span className="text-xs text-muted-foreground ml-2">
          Requires macOS 15+ · Universal Binary
        </span>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Works on macOS, Windows & Linux. The one-liner installs Node.js and everything else for you.
      </p>
    </motion.section>
  );
};

export default QuickStartSection;
