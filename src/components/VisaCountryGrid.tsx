import { CountryCard } from "./CountryCard";

import uaeImg from "@/assets/country-uae.jpg";
import ukImg from "@/assets/country-uk.jpg";
import usaImg from "@/assets/country-usa.jpg";
import australiaImg from "@/assets/country-australia.jpg";
import canadaImg from "@/assets/country-canada.jpg";
import schengenImg from "@/assets/country-schengen.jpg";
import japanImg from "@/assets/country-japan.jpg";
import singaporeImg from "@/assets/country-singapore.jpg";

const countries = [
  { image: uaeImg, country: "UAE" },
  { image: ukImg, country: "United Kingdom" },
  { image: usaImg, country: "United States" },
  { image: australiaImg, country: "Australia" },
  { image: canadaImg, country: "Canada" },
  { image: schengenImg, country: "Schengen" },
  { image: japanImg, country: "Japan" },
  { image: singaporeImg, country: "Singapore" },
];

export const VisaCountryGrid = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your destination country to explore visa requirements and begin your application.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              image={country.image}
              country={country.country}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
            View all countries
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
