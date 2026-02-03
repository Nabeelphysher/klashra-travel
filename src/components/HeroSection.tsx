import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchPanel } from "./SearchPanel";

import heroMaldives from "@/assets/hero-maldives.jpg";
import heroDubai from "@/assets/hero-dubai.jpg";

const heroSlides = [
  {
    image: heroMaldives,
    title: "Discover Paradise",
    subtitle: "Experience the world's most breathtaking destinations",
  },
  {
    image: heroDubai,
    title: "Luxury Awaits",
    subtitle: "Unforgettable journeys crafted just for you",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative flex flex-col items-center">
      {/* Hero Container */}
      <div
        className="relative w-full overflow-hidden h-[283px] lg:h-[898.69px] mt-20 lg:mt-[-49.06px] rounded-b-[15px] lg:rounded-[25px]"
        style={{
          maxWidth: "1440.4px",
        }}
      >
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 overflow-hidden ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 pointer-events-auto text-white/50 hover:text-white border border-white/30 hover:border-white rounded-full h-8 w-8 lg:h-10 lg:w-10 bg-transparent hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4 stroke-1" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-auto text-white/50 hover:text-white border border-white/30 hover:border-white rounded-full h-8 w-8 lg:h-10 lg:w-10 bg-transparent hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRight className="h-4 w-4 stroke-1" />
          </Button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 pt-4 lg:pt-0">
          {/* Inspire Badge */}
          <div
            className="absolute top-0 lg:top-[129px] left-1/2 -translate-x-1/2 z-30 bg-[#98D5D4] rounded-b-[5px] lg:rounded-b-[20px] shadow-sm flex items-center justify-center 
                       w-[80px] h-[12px] lg:w-[286px] lg:h-[44px]"
          >
            <span
              className="uppercase font-medium text-[#000000] leading-none 
                         text-[5px] lg:text-[20px]"
              style={{ fontFamily: 'Inter' }}
            >
              INSPIRE TO TRAVEL
            </span>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-6xl mx-auto space-y-2 lg:space-y-6 flex flex-col items-center mt-6 lg:mt-0">
            <h1
              className="font-['Inter'] font-semibold text-center flex flex-col items-center justify-center text-[28px] lg:text-[74px] leading-tight lg:leading-[80px]"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #98D5D4 0%, #FFFFFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Discover Your Next
              </span>
              <span className="text-white">
                Great Adventure
              </span>
            </h1>
            <p className="text-[10px] lg:text-2xl text-white/90 max-w-md lg:max-w-4xl mx-auto font-normal leading-relaxed drop-shadow-md">
              Immerse yourself in the extraordinary with us takes you on a <br className="hidden md:block" />
              journey to uncover the world's hidden gems.
            </p>
          </div>
        </div>
      </div>

      {/* Search Panel Section */}
      <div className="relative z-20 w-full px-4 -mt-10 lg:-mt-48 mb-2 lg:mb-10 flex justify-center">
        <div className="w-full max-w-[1440px]">
          <SearchPanel />
        </div>
      </div>

    </section>
  );
};
