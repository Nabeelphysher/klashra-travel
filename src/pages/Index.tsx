import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExclusiveOffers } from "@/components/ExclusiveOffers";
import { BudgetHolidays } from "@/components/BudgetHolidays";
import { PromoBanner } from "@/components/PromoBanner";
import { TrustMetrics } from "@/components/TrustMetrics";
import { Footer } from "@/components/Footer";
import { PayLaterBanner } from "@/components/PayLaterBanner";

import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const isHolidaysPage = location.pathname === "/";
  const isHotelPage = location.pathname === "/hotel";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      {!isHolidaysPage && (
        <div className={isHotelPage ? "hidden lg:block" : ""}>
          <ExclusiveOffers />
        </div>
      )}
      {!isHolidaysPage && <PayLaterBanner />}
      {!isHotelPage && <BudgetHolidays />}
      {!isHotelPage && <PromoBanner />}
      {!isHotelPage && <TrustMetrics />}
      <Footer />
    </div>
  );
};

export default Index;
