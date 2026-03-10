import { motion } from "framer-motion";
import mascotImg from "@/assets/openclaw-mascot.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center pt-12 pb-8 px-4">
      <motion.img
        src={mascotImg}
        alt="OpenClaw mascot"
        className="w-24 h-24 md:w-28 md:h-28 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        OpenClaw
      </motion.h1>
      <motion.p
        className="text-primary font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        THE AI THAT ACTUALLY DOES THINGS.
      </motion.p>
      <motion.p
        className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Clears your inbox, sends emails, manages your calendar, checks you in for flights.
        <br />
        All from WhatsApp, Telegram, or any chat app you already use.
      </motion.p>
    </section>
  );
};

export default HeroSection;
