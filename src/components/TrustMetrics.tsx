import { motion } from "framer-motion";
import ollivesBg from "@/assets/ollives.jpg";

const metrics = [
  { value: "1000 +", label: "Travelers Served Monthly" },
  { value: "650 +", label: "Global Travel Connections" },
  { value: "65 +", label: "Destinations Covered Worldwide" },
  { value: "97%", label: "Customer Satisfaction Score" },
];

export const TrustMetrics = () => {
  return (
    <section className="relative h-[120px] lg:h-[300.6px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Aerial Coastline Theme */}
      <div className="absolute inset-0">
        <img
          src={ollivesBg}
          alt="Background"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 lg:px-4 max-w-[1216px] w-full h-full flex items-center">
        <div className="grid grid-cols-4 gap-1.5 lg:gap-6 lg:h-[122px] w-full">
          {[
            { ...metrics[0], bg: "bg-[#2F5254]/90" },
            { ...metrics[1], bg: "bg-[#455A58]/90" },
            { ...metrics[2], bg: "bg-[#625F56]/90" },
            { ...metrics[3], bg: "bg-[#56593D]/90" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[14px] lg:rounded-[15px] ${metric.bg} lg:bg-white/10 backdrop-blur-sm border border-white/20 h-[85px] lg:h-full flex flex-col justify-center items-center px-1 lg:px-6 text-center hover:bg-white/15 transition-colors group shadow-lg`}
            >
              <div className="text-[13px] lg:text-4xl font-bold text-white mb-1 lg:mb-1.5 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-white/90 text-[8px] lg:text-sm font-medium leading-[1.1] text-center max-w-[64px] lg:max-w-none">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
