import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BudgetHolidays } from "@/components/BudgetHolidays";
import { PromoBanner } from "@/components/PromoBanner";
import { TrustMetrics } from "@/components/TrustMetrics";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BudgetHolidays />
      <PromoBanner />
      <TrustMetrics />
      <Footer />
    </div>
  );
};

export default Index;
