import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

interface Testimonial {
  handle: string;
  quote: string;
  url: string;
}

const row1: Testimonial[] = [
  { handle: "nickvasiles", quote: "OpenClaw is a 24/7 assistant with access to its own computer. What if there were ten, or a hundred?", url: "#" },
  { handle: "davemorin", quote: "This is the first time I have felt like I am living in the future.", url: "#" },
  { handle: "nateliason", quote: "Yeah this was 1,000% worth it. The future is here.", url: "#" },
  { handle: "markjaquith", quote: "Even if LLMs suddenly stopped improving, we could spend years discovering new transformative uses. OpenClaw feels like that kind of leap.", url: "#" },
  { handle: "cnakazawa", quote: "OpenClaw is the first software in ages for which I constantly check for new releases on GitHub.", url: "#" },
  { handle: "karpathy", quote: "Excellent reading thank you. Love oracle and Claw.", url: "#" },
];

const row2: Testimonial[] = [
  { handle: "nathanclark_", quote: "A smart model with eyes and hands at a desk. You message it like a coworker.", url: "#" },
  { handle: "therno", quote: "It's running my company.", url: "#" },
  { handle: "crossiBuilds", quote: "Everything Siri was supposed to be. And it goes so much further.", url: "#" },
  { handle: "theysayheygreg", quote: "Updates from OpenClaw absolutely rule.", url: "#" },
  { handle: "zachknicker", quote: "OpenClaw is what you are looking for.", url: "#" },
  { handle: "KrauseFx", quote: "What steipete has built with OpenClaw is out of this world.", url: "#" },
];

const TestimonialCard = ({ t: testimonial }: { t: Testimonial }) => (
  <div
    className="testimonial-card block group"
  >
    <div className="flex items-start gap-3 mb-3">
      <img
        src={`https://unavatar.io/x/${testimonial.handle}`}
        alt={testimonial.handle}
        className="w-10 h-10 rounded-full bg-secondary flex-shrink-0 group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-300"
        loading="lazy"
      />
      <p className="text-sm text-foreground leading-relaxed line-clamp-4">"{testimonial.quote}"</p>
    </div>
    <p className="text-sm text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">@{testimonial.handle}</p>
  </div>
);

const MarqueeRow = ({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ "--duration": `${items.length * 6}s` } as React.CSSProperties}
      >
        {doubled.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.handle}-${i}`} t={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { t } = useLanguage();
  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="claw-accent">⟩</span> {t("testimonials.title")}
          </h2>
        </div>
      </div>
      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
