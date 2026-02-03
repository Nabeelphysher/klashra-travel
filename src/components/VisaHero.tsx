import { Search, Briefcase, Mountain, Plane, FileText, BedDouble, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import visaHero from "@/assets/hero-visa.jpg";

const visaCategories = [
  { icon: Briefcase, label: "Holidays" },
  { icon: Mountain, label: "Activities" },
  { icon: Plane, label: "Flight" },
  { icon: FileText, label: "Visa", active: true },
  { icon: BedDouble, label: "Hotel" },
];

export const VisaHero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden h-[283px] lg:h-[600px] mt-0 lg:mt-0 rounded-b-[15px] lg:rounded-b-[30px]"
        style={{
          maxWidth: "1440.69px",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={visaHero}
            alt="Global visa services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Tag - Top Hanging */}
        {/* Tag - Top Hanging */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-[#98D5D4] rounded-b-[5px] lg:rounded-b-[20px] shadow-sm flex items-center justify-center 
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

        {/* Decorative Airplane Trail - Left Side (Hidden on mobile) */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 opacity-30">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path
              d="M20 60 Q40 40, 60 60 T100 60"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M100 60 L110 55 L115 60 L110 65 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none hidden lg:block">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-12 top-1/2 -translate-y-1/2 pointer-events-auto text-white/50 hover:text-white border border-white/30 hover:border-white rounded-full h-10 w-10 bg-transparent hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4 stroke-1" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-auto text-white/50 hover:text-white border border-white/30 hover:border-white rounded-full h-10 w-10 bg-transparent hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRight className="h-4 w-4 stroke-1" />
          </Button>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center px-4 justify-center pb-12 lg:pb-0">
          <div className="w-full max-w-[1440px] flex flex-col items-center relative">



            {/* Headline with Gradient */}
            <h1
              className="font-['Inter'] font-semibold text-center mx-auto bg-clip-text text-transparent mb-8 lg:mb-12 w-full max-w-[1000px]"
              style={{
                fontSize: 'clamp(28px, 8vw, 74px)',
                lineHeight: '1.2',
                letterSpacing: '0%',
                backgroundImage: 'linear-gradient(180deg, #A8C6C4 18%, #FFFFFF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
              }}
            >
              Getting Visa is Simple
              <br />
              <span className="capitalize">With Klashra</span>
            </h1>

            {/* Search Bar */}
            <div className="mx-auto w-full max-w-[569px] px-2 lg:px-0 relative z-30">
              <div
                className="flex items-center bg-white shadow-lg overflow-hidden w-full"
                style={{
                  height: '50px',
                  borderRadius: '12px',
                  paddingRight: '6px',
                  gap: '8px'
                }}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a country..."
                  className="flex-1 pl-6 text-sm lg:text-[15px] bg-transparent text-[#1e293b] placeholder:text-[#1e293b]/80 focus:outline-none h-full font-medium font-['Inter']"
                />
                <button
                  className="bg-[#7DD3D0] hover:bg-[#6ec2bf] text-white flex items-center justify-center transition-colors flex-shrink-0"
                  style={{
                    borderRadius: '8px',
                    width: '38px',
                    height: '38px',
                    marginRight: '2px'
                  }}
                >
                  <Search className="h-4 w-4 text-white stroke-[2.5px]" />
                </button>
              </div>
            </div>

            {/* Category Icons - Desktop (Inside Layout) */}
            <div className="hidden lg:flex w-full px-4 mt-32 justify-center">
              <div
                className="flex justify-center items-center gap-5 w-auto"
              >
                {visaCategories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = category.active;
                  return (
                    <button
                      key={index}
                      className={`flex flex-col items-center justify-center rounded-[8px] shadow-sm transition-all duration-300 hover:scale-105 group h-[100.7px] w-[106.37px] ${isActive
                        ? 'bg-[#87CDCA] text-[#1e293b]'
                        : 'bg-white hover:bg-slate-50 text-[#1e293b]'
                        }`}
                    >
                      <Icon className={`h-9 w-9 mb-4 transition-colors stroke-[1.5px] ${isActive ? 'text-[#1e293b]' : 'text-[#1e293b]'
                        }`} />
                      <span className="text-[11px] font-semibold text-center leading-tight font-['Inter']">
                        {category.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Icons - Mobile (Overlapping Outline) */}
      <div className="lg:hidden w-full px-4 -mt-8 mb-1 flex justify-center sticky z-20">
        <div className="flex justify-center items-center gap-2 w-full max-w-[360px]">
          {visaCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = category.active;
            return (
              <button
                key={index}
                className={`flex flex-col items-center justify-center rounded-[10px] shadow-sm transition-all duration-300 scale-100 group w-[59.39px] h-[57.62px] ${isActive
                  ? 'bg-[#87CDCA] text-[#1e293b]'
                  : 'bg-white hover:bg-slate-50 text-[#1e293b]'
                  }`}
              >
                <Icon className={`h-5 w-5 mb-1 transition-colors stroke-[1.5px] ${isActive ? 'text-[#1e293b]' : 'text-[#1e293b]'
                  }`} />
                <span className="text-[9px] font-semibold text-center leading-tight font-['Inter']">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
