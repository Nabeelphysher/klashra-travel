import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import timelessBanner from "@/assets/banner.jpg";

export const PromoBanner = () => {
  return (
    <section className="pt-2 pb-8 lg:py-12 bg-white flex justify-center">
      <div className="container mx-auto px-4 max-w-[1217.15px] w-full">
        <div className="relative overflow-hidden rounded-[20px] lg:rounded-[40px] shadow-lg lg:shadow-2xl h-[152px] lg:h-[501.05px] group w-full max-w-[370px] lg:max-w-full mx-auto lg:mx-0">
          {/* Background Image */}
          <div className="absolute inset-0 bg-blue-500">
            <img
              src={timelessBanner}
              alt="Timeless Holidays"
              className="w-full h-full object-cover object-right lg:object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/90 via-[#0ea5e9]/40 to-transparent lg:hidden" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-blue-600/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 lg:px-24 text-left">
            <h2 className="text-[22px] lg:text-7xl font-bold text-white mb-3 lg:mb-8 leading-tight drop-shadow-md">
              Timeless Holidays.
              <br />
              Unlocked
            </h2>

            <Button
              className="bg-white text-[#1e293b] hover:bg-slate-50 transition-all rounded-full w-[110px] lg:w-[212.07px] h-[30px] lg:h-[52px] flex items-center justify-center text-[10px] lg:text-lg font-bold shadow-sm"
            >
              Explore Now
              <ArrowRight className="ml-1.5 h-3 w-3 lg:ml-2 lg:h-5 lg:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
