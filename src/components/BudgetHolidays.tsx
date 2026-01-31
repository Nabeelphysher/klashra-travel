import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "./DestinationCard";

import baliBg from "@/assets/destination-bali.jpg";
import santoriniBg from "@/assets/destination-santorini.jpg";
import switzerlandBg from "@/assets/destination-switzerland.jpg";
import thailandBg from "@/assets/destination-thailand.jpg";
import maldivesBg from "@/assets/destination-maldives.jpg";
import parisBg from "@/assets/destination-paris.jpg";

const destinations = [
  { image: baliBg, destination: "Bali", nights: 5, days: 6, price: 2499 },
  { image: santoriniBg, destination: "Santorini", nights: 4, days: 5, price: 3299 },
  { image: switzerlandBg, destination: "Switzerland", nights: 6, days: 7, price: 4599 },
  { image: thailandBg, destination: "Thailand", nights: 5, days: 6, price: 1899 },
  { image: maldivesBg, destination: "Maldives", nights: 4, days: 5, price: 3999 },
  { image: parisBg, destination: "Paris", nights: 4, days: 5, price: 2899 },
];

export const BudgetHolidays = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3">
              Budget Holidays
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Discover incredible destinations at unbeatable prices. Your dream vacation awaits.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-border hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-border hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 lg:-mx-0 lg:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[300px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <DestinationCard {...dest} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {destinations.slice(0, 4).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === 0 ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
