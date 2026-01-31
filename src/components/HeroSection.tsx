import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryTabs } from "./CategoryTabs";
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
    <section className="relative min-h-screen flex flex-col">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 h-12 w-12"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 h-12 w-12"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Text */}
          <div className="text-center mb-8 lg:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Inspire to Travel</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-foreground mb-4 lg:mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-8 lg:mb-12">
            <CategoryTabs />
          </div>

          {/* Search Panel */}
          <div className="max-w-5xl mx-auto">
            <SearchPanel />
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-accent"
                    : "bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
