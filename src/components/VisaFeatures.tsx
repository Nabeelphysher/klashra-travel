import { Clock, ShieldCheck, Headphones, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Get your visa approved in as little as 24-48 hours with our express service.",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure",
    description: "Your documents and personal information are encrypted and protected.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our visa specialists are available 24/7 to assist with your application.",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Pay securely online with multiple payment options available.",
  },
];

export const VisaFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Why Choose Klashra?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We make the visa application process simple, secure, and stress-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-5">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
