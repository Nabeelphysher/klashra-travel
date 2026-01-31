import { motion } from "framer-motion";

interface DestinationCardProps {
  image: string;
  destination: string;
  nights: number;
  days: number;
  price: number;
  currency?: string;
}

export const DestinationCard = ({
  image,
  destination,
  nights,
  days,
  price,
  currency = "AED",
}: DestinationCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-card">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={destination}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary-foreground mb-1">
            {destination}
          </h3>
          <p className="text-primary-foreground/70 text-sm mb-3">
            {nights} Nights / {days} Days
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-primary-foreground/70 text-sm">Starting from</span>
            <span className="text-accent font-bold text-lg">
              {currency} {price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
