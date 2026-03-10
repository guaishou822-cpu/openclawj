import { motion } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "@/i18n/LanguageContext";
import { Locale, localeNames } from "@/i18n/translations";
import { useState, useRef, useEffect } from "react";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const locales: Locale[] = ["en", "zh", "ja"];

  return (
    <motion.div
      className="fixed top-0 right-0 z-50 flex items-center gap-2 p-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="topbar-btn"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Language selector */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="topbar-btn gap-1.5"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-medium">{localeNames[locale]}</span>
        </button>
        {langOpen && (
          <motion.div
            className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[100px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
          >
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => { setLocale(l); setLangOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  l === locale
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {localeNames[l]}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TopBar;
