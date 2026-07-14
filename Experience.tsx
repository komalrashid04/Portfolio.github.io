import React from "react";
import { EXPERIENCES } from "../data";
import { Calendar, Briefcase, ChevronRight, Check } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-zinc-100/40 dark:bg-[#0c0c0e]/40 border-y border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              05 // Chronological Track
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 tracking-tight">
              A history of delivering digital transformation.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-sm text-zinc-500 dark:text-zinc-400">
            [ OFF-LINE & ON-LINE INITIATIVES ]
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical central connector (desktop only, offsets left for small screen) */}
          <div className="absolute left-6 md:left-1/3 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div
                id={`experience-row-${exp.id}`}
                key={exp.id}
                className="relative md:grid md:grid-cols-12 md:gap-8 items-start group"
              >
                {/* Left Side: Timeline Period & Company Detail (Desktop) */}
                <div className="md:col-span-4 md:text-right pr-8 pb-4 md:pb-0">
                  <div className="flex items-center md:justify-end space-x-2 text-zinc-400 dark:text-zinc-500 font-mono text-xs mb-1">
                    <Calendar size={12} className="text-emerald-500" />
                    <span className="font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 font-mono text-[10px] uppercase border border-zinc-200/50 dark:border-zinc-800/40 font-semibold tracking-wide">
                    {idx === 0 ? "Active Contract" : "Established"}
                  </span>
                </div>

                {/* Center Node (Floating Pulse) */}
                <div className="absolute left-0 md:left-1/3 top-1.5 -translate-x-1.5 md:-translate-x-1.5 z-10">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/20 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-zinc-50 dark:bg-[#09090b] border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors duration-200"></span>
                  </span>
                </div>

                {/* Right Side: Professional Role & Achievement Details */}
                <div className="md:col-span-8 pl-8 md:pl-4">
                  <div className="bg-white dark:bg-zinc-900/60 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <Briefcase size={16} className="text-zinc-400" />
                      <h4 className="font-sans font-bold text-lg text-zinc-900 dark:text-white">
                        {exp.role}
                      </h4>
                    </div>

                    <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Timeline bullet points */}
                    <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-5">
                      <h5 className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                        Key Responsibilities & Deliverables
                      </h5>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                            <Check size={14} className="text-emerald-500 mt-1 shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
