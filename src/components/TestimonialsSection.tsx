import { motion } from "framer-motion";

interface Testimonial {
  handle: string;
  quote: string;
  url: string;
}

const row1: Testimonial[] = [
  { handle: "nickvasiles", quote: "OpenClaw is a 24/7 assistant with access to its own computer. What if there were ten, or a hundred, or a thousand?? All running 24/7 in the cloud...", url: "https://x.com/nickvasiles/status/2014790519529095447" },
  { handle: "davemorin", quote: "At this point I don't even know what to call @openclaw. It is something new. After a few weeks in with it, this is the first time I have felt like I am living in the future.", url: "https://x.com/davemorin/status/2013723700668096605" },
  { handle: "nateliason", quote: "Yeah this was 1,000% worth it. Separate Claude subscription + Claw, managing Claude Code / Codex sessions I can kick off anywhere... The future is here.", url: "https://x.com/nateliason/status/2013725082850414592" },
  { handle: "markjaquith", quote: "I've been saying for like six months that even if LLMs suddenly stopped improving, we could spend years discovering new transformative uses. @openclaw feels like that kind of leap forward.", url: "https://x.com/markjaquith/status/2010430366944055433" },
  { handle: "cnakazawa", quote: "OpenClaw is the first 'software' in ages for which I constantly check for new releases on GitHub. It's hard to put into words. It's a special project.", url: "https://x.com/cnakazawa/status/2014145277465432519" },
  { handle: "karpathy", quote: "Excellent reading thank you. Love oracle and Claw.", url: "https://x.com/karpathy/status/2005692186470514904" },
];

const row2: Testimonial[] = [
  { handle: "nathanclark_", quote: "A smart model with eyes and hands at a desk with keyboard and mouse. You message it like a coworker and it does everything a person could do with that Mac mini.", url: "https://x.com/nathanclark_/status/2014647048612773912" },
  { handle: "therno", quote: "It's running my company.", url: "https://x.com/therno/status/2014216984267780431" },
  { handle: "crossiBuilds", quote: "Everything Siri was supposed to be. And it goes so much further.", url: "https://x.com/crossiBuilds/status/2008478023826153665" },
  { handle: "theysayheygreg", quote: "updates from @openclaw absolutely rule", url: "https://x.com/theysayheygreg/status/2010867523713945666" },
  { handle: "zachknicker", quote: "@openclaw is what you are looking for.", url: "https://x.com/zachknicker/status/2010172821495001180" },
  { handle: "KrauseFx", quote: "What @steipete has built with @openclaw is out of this world.", url: "https://x.com/KrauseFx/status/2008531076487246176" },
];

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <a
    href={t.url}
    target="_blank"
    rel="noopener noreferrer"
    className="testimonial-card block no-underline"
  >
    <div className="flex items-start gap-3 mb-3">
      <img
        src={`https://unavatar.io/x/${t.handle}`}
        alt={t.handle}
        className="w-10 h-10 rounded-full bg-secondary flex-shrink-0"
        loading="lazy"
      />
      <p className="text-sm text-foreground leading-relaxed line-clamp-4">"{t.quote}"</p>
    </div>
    <p className="text-sm text-primary font-medium">@{t.handle}</p>
  </a>
);

const MarqueeRow = ({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ "--duration": `${items.length * 12}s` } as React.CSSProperties}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.handle}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="claw-accent">⟩</span> What People Say
          </h2>
          <a
            href="https://openclaw.ai/shoutouts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline"
          >
            View all →
          </a>
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
