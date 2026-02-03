import { Navigation } from "@/components/Navigation";
import { VisaHero } from "@/components/VisaHero";
import { VisaCountryGrid } from "@/components/VisaCountryGrid";
import { Footer } from "@/components/Footer";

const Visa = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-20">
      <Navigation />
      <VisaHero />
      <VisaCountryGrid />
      <Footer />
    </div>
  );
};

export default Visa;
