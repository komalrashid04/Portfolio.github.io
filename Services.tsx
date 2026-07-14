import React from "react";
import { Globe, ShoppingBag, Palette, Search, Code, Layout, Check } from "lucide-react";
import { SERVICES } from "../data";
import { motion } from "motion/react";

// Helper component to resolve icon name to dynamic component
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  const props = { className, size: 22 };
  switch (name) {
    case "Globe":
      return <Globe {...props} />;
    case "Layout":
      return <Layout {...props} />;
    case "ShoppingBag":
      return <ShoppingBag {...props} />;
    case "Palette":
      return <Palette {...props} />;
    case "Search":
      return <Search {...props} />;
    case "Code":
      return <Code {...props} />;
    default:
      return <Globe {...props} />;
  }
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-coffee-ivory dark:bg-[#130D0A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-coffee-brown dark:text-coffee-caramel">
            02 // Technical Offerings
          </span>
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-coffee-brown dark:text-coffee-ivory mt-3 tracking-tight">
            Comprehensive services designed to unlock brand potential.
          </h2>
          <p className="font-sans text-sm text-coffee-brown/70 dark:text-coffee-beige/60 mt-4 leading-relaxed font-light">
            From customized e-commerce solutions to high-converting landing pages, I provide structured digital results with absolute attention to performance and standard-compliance.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              id={`service-card-${service.id}`}
              key={service.id}
              className="p-8 rounded-3xl bg-coffee-cream dark:bg-coffee-mocha/40 border border-coffee-beige/50 dark:border-coffee-mocha/70 hover:border-coffee-caramel dark:hover:border-coffee-caramel hover:bg-coffee-beige/10 dark:hover:bg-coffee-roast/20 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-coffee-beige/20 dark:bg-coffee-roast text-coffee-brown dark:text-coffee-caramel border border-coffee-beige/50 dark:border-coffee-mocha flex items-center justify-center transition-colors duration-300 group-hover:bg-coffee-caramel/15 group-hover:text-coffee-brown dark:group-hover:text-coffee-caramel group-hover:border-coffee-caramel/30 shadow-sm mb-6">
                  <ServiceIcon name={service.iconName} />
                </div>

                {/* Service Title */}
                <h3 className="font-serif font-bold text-xl text-coffee-brown dark:text-coffee-ivory tracking-tight group-hover:text-coffee-caramel dark:group-hover:text-coffee-caramel transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-sans text-sm text-coffee-brown/70 dark:text-coffee-beige/60 mt-3 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Service Deliverables */}
              <div className="mt-8 pt-6 border-t border-coffee-beige/40 dark:border-coffee-mocha/40">
                <h4 className="font-mono text-[10px] font-bold text-coffee-brown/60 dark:text-coffee-beige/50 uppercase tracking-widest mb-3">
                  Key Deliverables:
                </h4>
                <ul className="space-y-2">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2 text-xs text-coffee-brown/80 dark:text-coffee-beige/70">
                      <Check size={12} className="text-coffee-caramel mt-0.5 shrink-0" />
                      <span className="leading-tight font-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
