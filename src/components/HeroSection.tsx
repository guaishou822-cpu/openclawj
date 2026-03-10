import { motion, useScroll, useTransform } from "framer-motion";
import mascotImg from "@/assets/openclaw-mascot.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useRef } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center text-center pt-16 pb-12 px-4 relative"
      style={{ opacity }}
    >
      <motion.img
        src={mascotImg}
        alt="OpenClaw mascot"
        className="w-24 h-24 md:w-32 md:h-32 mb-6 drop-shadow-[0_0_25px_hsl(var(--claw-glow)/0.4)]"
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
        style={{ y }}
      />
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {t("hero.title")}
      </motion.h1>
      <motion.p
        className="text-primary font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {t("hero.tagline")}
      </motion.p>
      <motion.p
        className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        {t("hero.desc1")}
        <br />
        {t("hero.desc2")}
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;
