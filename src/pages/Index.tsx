import HeroSection from "@/components/HeroSection";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuickStartSection from "@/components/QuickStartSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import NewsletterSection from "@/components/NewsletterSection";
import SponsorsSection from "@/components/SponsorsSection";
import TopBar from "@/components/TopBar";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="stars-bg" />
      <div className="nebula-bg" />
      <TopBar />
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
        <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
          <p>{t("footer.text")}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
