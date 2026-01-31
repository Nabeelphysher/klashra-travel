import { Navigation } from "@/components/Navigation";
import { VisaHero } from "@/components/VisaHero";
import { VisaCountryGrid } from "@/components/VisaCountryGrid";
import { VisaFeatures } from "@/components/VisaFeatures";
import { Footer } from "@/components/Footer";

const Visa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <VisaHero />
      <VisaCountryGrid />
      <VisaFeatures />
      <Footer />
    </div>
  );
};

export default Visa;
