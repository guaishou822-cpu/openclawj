import { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <motion.section
      className="py-12 max-w-xl mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="claw-accent">⟩</span> Stay in the Loop
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Get updates on new features, integrations, and lobster wisdom. No spam, unsubscribe anytime.
      </p>
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input flex-1"
        />
        <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
          Subscribe
        </button>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;
