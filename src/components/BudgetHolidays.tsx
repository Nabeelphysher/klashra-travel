import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using placeholders/existing assets but mapping to requested destinations
import azerbaijanBg from "@/assets/azerbaijan.png";
import georgiaBg from "@/assets/destination-santorini.jpg";
import armeniaBg from "@/assets/destination-switzerland.jpg";
import kazakhstanBg from "@/assets/destination-thailand.jpg";

const destinations = [
  { image: azerbaijanBg, destination: "Azerbaijan", nights: 3, days: 4, price: 1800 },
  { image: georgiaBg, destination: "Georgia", nights: 4, days: 5, price: 1950 },
  { image: armeniaBg, destination: "Armenia", nights: 3, days: 4, price: 2050 },
  { image: kazakhstanBg, destination: "Kazakhstan", nights: 3, days: 4, price: 1800 },
];

export const BudgetHolidays = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-2 lg:py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 lg:mb-4">
          <h2 className="font-['Inter'] font-bold text-2xl lg:text-[32px] text-[#233F50]">
            Budget Holidays
          </h2>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full text-[#233F50] hover:bg-slate-50 bg-transparent border border-slate-200 w-8 h-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full text-white hover:bg-[#1a2f3d] bg-[#233F50] border-[#233F50] w-8 h-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-3 -mx-4 px-4 lg:mx-0 lg:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex-shrink-0 group cursor-pointer w-[224px] lg:w-[285.62px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative rounded-[20px] lg:rounded-[28px] overflow-hidden h-[237px] lg:h-auto lg:aspect-[1.1] shadow-md border border-slate-100">
                <img
                  src={dest.image}
                  alt={dest.destination}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end h-3/4">
                  <h3 className="text-white font-['Inter'] font-bold text-[20px] lg:text-3xl mb-1.5 lg:mb-2">
                    {dest.destination}
                  </h3>

                  <div className="flex gap-2 mb-2 lg:mb-3">
                    <span className="bg-white/15 backdrop-blur-md text-white text-[9px] lg:text-[10px] font-bold px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-lg border border-white/20">
                      {dest.nights} Nights
                    </span>
                    <span className="bg-white/15 backdrop-blur-md text-white text-[9px] lg:text-[10px] font-bold px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-lg border border-white/20">
                      {dest.days} Days
                    </span>
                  </div>

                  <p className="text-white/90 text-xs lg:text-sm font-medium">
                    Starts From <span className="font-bold text-[#98D5D4]">AED {dest.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
