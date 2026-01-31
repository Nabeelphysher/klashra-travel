import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

import dubaiBg from "@/assets/hero-dubai.jpg";

export const PromoBanner = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={dubaiBg}
              alt="Dubai skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Plane className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Limited Time Offer</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
                Explore Dubai
                <br />
                <span className="text-gradient-gold">Like Never Before</span>
              </h2>

              <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                Experience the magic of Dubai with our exclusive packages. Luxury accommodations, guided tours, and unforgettable memories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-gold px-8 py-6 text-lg">
                  Explore Packages
                </Button>
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Plane */}
          <div className="absolute top-8 right-8 lg:top-12 lg:right-12 opacity-20">
            <Plane className="h-24 w-24 lg:h-40 lg:w-40 text-primary-foreground transform rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};
