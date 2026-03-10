import HeroSection from "@/components/HeroSection";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuickStartSection from "@/components/QuickStartSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import NewsletterSection from "@/components/NewsletterSection";
import SponsorsSection from "@/components/SponsorsSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div className="stars-bg" />
      <div className="nebula-bg" />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AnnouncementBanner />
        <TestimonialsSection />
        <QuickStartSection />
        <FeaturesSection />
        <IntegrationsSection />
        <FeaturedInSection />
        <NewsletterSection />
        <SponsorsSection />

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
          <p>© 2024 OpenClaw. Open source and proud of it. 🦞</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
