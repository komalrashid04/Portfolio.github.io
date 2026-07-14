import { GraduationCap, Award, CheckCircle, ShieldCheck, Heart } from "lucide-react";
import { EDUCATION } from "../data";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-coffee-beige/25 dark:bg-coffee-roast/30 border-y border-coffee-beige/50 dark:border-coffee-mocha/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-coffee-brown dark:text-coffee-caramel">
              01 // Professional Bio
            </span>
            <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-coffee-brown dark:text-coffee-ivory mt-3 tracking-tight">
              Crafting premium solutions with technical excellence.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-coffee-brown/60 dark:text-coffee-beige/50 tracking-wider">
            [ BASED IN PAKISTAN // GLOBAL DELIVERY ]
          </div>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif italic text-2xl text-coffee-brown dark:text-coffee-caramel">
              Who is Komal Rashid?
            </h3>
            <p className="font-sans text-base text-coffee-brown/80 dark:text-coffee-beige/80 leading-relaxed font-light">
              I am a dedicated Application and Web Developer with a strong academic foundation in Information Technology and extensive hands-on experience crafting high-performance digital systems. My mission is simple: to build high-converting, modern, and user-centric web assets that help brands scale and make an impact on the global market.
            </p>
            <p className="font-sans text-base text-coffee-brown/80 dark:text-coffee-beige/80 leading-relaxed font-light">
              With deep capabilities in both modern framework development and flexible content management platforms like WordPress and Shopify, I bridge the gap between technical complexity and business usability. I focus intensely on speed, user experience (UX), proper SEO markup, and pristine typography, ensuring that every project is a tailor-made digital asset, not a generic template.
            </p>

            {/* Core Values / Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-6 rounded-3xl bg-coffee-cream dark:bg-coffee-mocha/50 border border-coffee-beige/40 dark:border-coffee-mocha shadow-md">
                <ShieldCheck className="text-coffee-caramel mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-serif font-bold text-base text-coffee-brown dark:text-coffee-ivory">
                    Reliability & Standards
                  </h4>
                  <p className="font-sans text-xs text-coffee-brown/70 dark:text-coffee-beige/60 mt-1 leading-relaxed">
                    Industry standard guidelines, semantic HTML structures, and neat version control via GitHub.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-6 rounded-3xl bg-coffee-cream dark:bg-coffee-mocha/50 border border-coffee-beige/40 dark:border-coffee-mocha shadow-md">
                <CheckCircle className="text-coffee-caramel mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-serif font-bold text-base text-coffee-brown dark:text-coffee-ivory">
                    Speed & SEO Focus
                  </h4>
                  <p className="font-sans text-xs text-coffee-brown/70 dark:text-coffee-beige/60 mt-1 leading-relaxed">
                    Fast asset loading, clean asset queries, and solid metadata setups to ensure top-tier organic discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Side Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Box */}
            <div id="education-card" className="p-8 rounded-3xl bg-coffee-cream dark:bg-coffee-mocha/50 border border-coffee-beige/40 dark:border-coffee-mocha shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-coffee-caramel/5 blur-2xl group-hover:scale-125 transition-transform duration-300" />
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl bg-coffee-caramel/10 text-coffee-brown dark:text-coffee-caramel">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-serif font-bold text-lg text-coffee-brown dark:text-coffee-ivory">
                  Formal Education
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-coffee-beige/30 dark:bg-coffee-roast text-coffee-brown dark:text-coffee-beige font-mono text-[10px] font-bold uppercase tracking-wider">
                    {EDUCATION.period}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-coffee-brown dark:text-coffee-ivory mt-3">
                    {EDUCATION.degree}
                  </h4>
                  <p className="font-sans text-sm text-coffee-caramel font-semibold mt-0.5">
                    {EDUCATION.institution}
                  </p>
                </div>
                <p className="font-sans text-sm text-coffee-brown/75 dark:text-coffee-beige/70 leading-relaxed border-t border-coffee-beige/40 dark:border-coffee-mocha/40 pt-4 font-light">
                  {EDUCATION.details}
                </p>
              </div>
            </div>

            {/* Developer Philosophy Card */}
            <div id="philosophy-card" className="p-8 rounded-3xl bg-coffee-brown dark:bg-coffee-mocha text-coffee-ivory border border-coffee-oak/20 dark:border-coffee-roast shadow-lg relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-coffee-caramel/10 blur-3xl" />
              <div className="flex items-center space-x-3 mb-4">
                <Award size={18} className="text-coffee-caramel" />
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-coffee-caramel font-bold">
                  Personal Commitment
                </h4>
              </div>
              <p className="font-sans text-sm text-coffee-ivory/90 leading-relaxed relative z-10 italic font-light">
                "I believe a developer's finest work lives at the intersection of logical engineering and human intuition. When I construct a platform, it is optimized to perform, engineered to last, and designed to engage."
              </p>
              <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-coffee-ivory/50">
                <span>KOMAL RASHID</span>
                <span className="flex items-center">
                  MADE WITH <Heart size={10} className="mx-1 text-coffee-caramel fill-coffee-caramel animate-pulse" /> FOR WEB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
