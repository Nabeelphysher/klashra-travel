import { Users, Globe, MapPin, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

import maldivesHero from "@/assets/hero-maldives.jpg";

const metrics = [
  {
    icon: Users,
    value: "50K+",
    label: "Travelers Monthly",
  },
  {
    icon: Globe,
    value: "200+",
    label: "Global Connections",
  },
  {
    icon: MapPin,
    value: "150+",
    label: "Destinations",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

export const TrustMetrics = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={maldivesHero}
          alt="Tropical paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have discovered their perfect getaway with Klashra.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="trust-card rounded-2xl p-6 lg:p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent/10 mb-4">
                  <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-accent" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="text-muted-foreground text-sm lg:text-base">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
