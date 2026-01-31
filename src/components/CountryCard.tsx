import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CountryCardProps {
  image: string;
  country: string;
  onClick?: () => void;
}

export const CountryCard = ({ image, country, onClick }: CountryCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-card aspect-square">
        {/* Image */}
        <img
          src={image}
          alt={country}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary-foreground">
              {country}
            </h3>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="h-5 w-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
