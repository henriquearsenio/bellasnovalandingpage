import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PromotionalBanner from "@/components/PromotionalBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PromotionalBanner />
      <Navbar />
      <HeroSection />
      <PainPoints />
      <Features />
      <WhatsAppDemo />
      <HowItWorks />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

