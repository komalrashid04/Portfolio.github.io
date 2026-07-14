import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data";
import { Check, Cpu, Award } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-24 bg-coffee-beige/25 dark:bg-coffee-roast/30 border-y border-coffee-beige/50 dark:border-coffee-mocha/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-coffee-brown dark:text-coffee-caramel">
              03 // Skills & Toolkit
            </span>
            <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-coffee-brown dark:text-coffee-ivory mt-3 tracking-tight">
              A comprehensive stack designed for modern requirements.
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 font-sans text-sm text-coffee-brown/70 dark:text-coffee-beige/60 max-w-sm leading-relaxed font-light">
            I continuously refine my expertise in both structured frontend engineering and CMS platforms to build robust solutions that deliver real-world business results.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category Selection Drawer */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-coffee-brown/50 dark:text-coffee-beige/55 mb-4 px-2">
              Browse by expertise:
            </h3>

            {/* Reset / View All */}
            <button
              id="skill-cat-all"
              onClick={() => setSelectedCategory(null)}
              className={`w-full text-left p-4 rounded-3xl font-serif text-sm font-bold border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                selectedCategory === null
                  ? "bg-coffee-brown dark:bg-coffee-caramel text-coffee-ivory dark:text-coffee-espresso border-transparent shadow-md"
                  : "bg-coffee-cream dark:bg-coffee-mocha/50 text-coffee-brown dark:text-coffee-beige border-coffee-beige dark:border-coffee-mocha/70 hover:border-coffee-caramel dark:hover:border-coffee-caramel hover:bg-coffee-beige/10 dark:hover:bg-coffee-roast/20"
              }`}
            >
              <span>Show All Technologies</span>
              <Cpu size={14} />
            </button>

            {SKILL_CATEGORIES.map((category, idx) => (
              <button
                id={`skill-cat-btn-${idx}`}
                key={category.title}
                onClick={() => setSelectedCategory(idx)}
                className={`w-full text-left p-4 rounded-3xl font-serif text-sm font-bold border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  selectedCategory === idx
                    ? "bg-coffee-brown dark:bg-coffee-caramel text-coffee-ivory dark:text-coffee-espresso border-transparent shadow-md"
                    : "bg-coffee-cream dark:bg-coffee-mocha/50 text-coffee-brown dark:text-coffee-beige border-coffee-beige dark:border-coffee-mocha/70 hover:border-coffee-caramel dark:hover:border-coffee-caramel hover:bg-coffee-beige/10 dark:hover:bg-coffee-roast/20"
                }`}
              >
                <span>{category.title}</span>
                <span className="font-mono text-xs text-coffee-brown/60 dark:text-coffee-beige/50">
                  ({category.skills.length})
                </span>
              </button>
            ))}
          </div>

          {/* Right Skills Detail Panel */}
          <div className="lg:col-span-8 bg-coffee-cream dark:bg-coffee-mocha/40 p-8 rounded-3xl border border-coffee-beige/50 dark:border-coffee-mocha/70 shadow-lg min-h-[300px]">
            {SKILL_CATEGORIES.map((category, catIdx) => {
              // Hide if a category is selected and it's not this one
              if (selectedCategory !== null && selectedCategory !== catIdx) {
                return null;
              }

              return (
                <div key={category.title} className="mb-10 last:mb-0">
                  <div className="flex items-center space-x-2.5 mb-6 pb-2 border-b border-coffee-beige/40 dark:border-coffee-mocha/40">
                    <div className="w-1.5 h-4 bg-coffee-caramel rounded" />
                    <h3 className="font-serif font-bold text-lg text-coffee-brown dark:text-coffee-ivory">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                    {category.skills.map((skill) => (
                      <div id={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`} key={skill.name} className="group">
                        <div className="flex items-center justify-between mb-1.5 text-sm">
                          <span className="font-sans font-medium text-coffee-brown dark:text-coffee-beige group-hover:text-coffee-caramel dark:group-hover:text-coffee-caramel transition-colors duration-150">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-coffee-brown/60 dark:text-coffee-beige/50 uppercase tracking-wider font-semibold">
                            {skill.level >= 95 ? "Elite" : skill.level >= 90 ? "Expert" : "Advanced"}
                          </span>
                        </div>
                        {/* Progress Bar background */}
                        <div className="w-full h-1.5 bg-coffee-beige/40 dark:bg-coffee-roast rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-coffee-brown dark:bg-coffee-caramel rounded-full group-hover:bg-coffee-caramel dark:group-hover:bg-coffee-caramel/90 transition-colors duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom micro-info line */}
        <div className="mt-12 p-5 rounded-3xl bg-coffee-cream dark:bg-coffee-mocha/40 border border-coffee-beige/50 dark:border-coffee-mocha/70 flex items-center justify-center space-x-2 max-w-xl mx-auto shadow-md">
          <Award size={14} className="text-coffee-caramel shrink-0" />
          <span className="font-sans text-xs text-coffee-brown/80 dark:text-coffee-beige/70 font-medium text-center font-light">
            Adhering strictly to standard engineering frameworks and responsive practices.
          </span>
        </div>
      </div>
    </section>
  );
}
