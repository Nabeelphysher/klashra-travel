import { useNavigate } from "react-router-dom";
import { CountryCard } from "./CountryCard";

import uaeImg from "@/assets/country-uae.jpg";
import omanImg from "@/assets/hero-maldives.jpg"; // Placeholder
import qatarImg from "@/assets/hero-dubai.jpg";   // Placeholder
import hongkongImg from "@/assets/country-japan.jpg"; // Placeholder
import saudiImg from "@/assets/country-usa.jpg";  // Placeholder
import azerbaijanImg from "@/assets/azerbaijan.png";
import armeniaImg from "@/assets/destination-switzerland.jpg";
import uzbekistanImg from "@/assets/destination-thailand.jpg";

const countries = [
  { image: uaeImg, country: "United Arab Emirates" },
  { image: omanImg, country: "Oman" },
  { image: qatarImg, country: "Qatar" },
  { image: hongkongImg, country: "Hong Kong" },
  { image: saudiImg, country: "Saudi Arabia" },
  { image: azerbaijanImg, country: "Azerbaijan" },
  { image: armeniaImg, country: "Armenia" },
  { image: uzbekistanImg, country: "Uzbekistan" },
];

export const VisaCountryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-4 lg:py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-4 lg:mb-10">
          <h2
            className="font-['Inter'] font-semibold text-[#233F50] mb-2"
            style={{
              fontSize: 'clamp(28px, 5vw, 40px)',
              lineHeight: '1.2',
              letterSpacing: '-0.03em', // -3%
            }}
          >
            Enjoy Visa Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              onClick={() => navigate(`/visa/${encodeURIComponent(country.country)}`)}
              className="group bg-white rounded-[10px] lg:rounded-[16px] border border-slate-200 p-2 lg:p-2.5 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[8px] lg:rounded-[12px] h-[100px] sm:h-[120px] lg:h-[180px] w-full">
                <img
                  src={country.image}
                  alt={country.country}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Country Name */}
              <div className="mt-3 mb-1 px-1">
                <h3 className="text-[#233F50] font-bold lg:font-medium text-[12px] lg:text-base text-left leading-tight">
                  {country.country}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
