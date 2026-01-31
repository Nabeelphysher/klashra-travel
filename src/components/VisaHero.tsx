import { Search, Shield } from "lucide-react";
import { useState } from "react";
import { CategoryTabs } from "./CategoryTabs";

import visaHero from "@/assets/hero-visa.jpg";

export const VisaHero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={visaHero}
          alt="Global visa services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Text */}
          <div className="text-center mb-8 lg:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Trusted Visa Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-4 lg:mb-6">
              Visa Made Simple
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Apply for your visa online with ease. Fast processing, transparent pricing, and expert support.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search country for visa..."
                  className="w-full pl-14 pr-6 py-5 rounded-full text-lg bg-card text-foreground placeholder:text-muted-foreground shadow-elevated focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-8">
            <CategoryTabs />
          </div>
        </div>
      </div>
    </section>
  );
};
