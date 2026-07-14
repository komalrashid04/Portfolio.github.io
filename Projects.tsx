import React, { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ArrowUpRight, Filter, Folder, X, ShieldCheck, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
  "All",
  "Website Development",
  "Shopify Development",
  "E-commerce & Design",
  "UI/UX & Brand Design",
  "Application Development"
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category
  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  return (
    <section
      id="projects"
      className="py-24 bg-coffee-ivory dark:bg-[#130D0A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-coffee-brown dark:text-coffee-caramel">
              04 // Portfolio Showcase
            </span>
            <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-coffee-brown dark:text-coffee-ivory mt-3 tracking-tight">
              A curated catalog of custom design & web development.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-mono text-coffee-brown/60 dark:text-coffee-beige/50">
            <Filter size={12} className="text-coffee-caramel animate-pulse" />
            <span className="tracking-wider uppercase font-semibold">Filter and classify digital assets</span>
          </div>
        </div>

        {/* Categories filters scrollable */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 overflow-x-auto scrollbar-none border-b border-coffee-beige/30 dark:border-coffee-mocha/30">
          {CATEGORIES.map((cat) => (
            <button
              id={`filter-btn-${cat.toLowerCase().replace(/[^a-z]/g, "-")}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold font-serif tracking-wide transition-all duration-200 shrink-0 border cursor-pointer ${
                activeCategory === cat
                  ? "bg-coffee-brown dark:bg-coffee-caramel text-coffee-ivory dark:text-coffee-espresso border-transparent shadow-md"
                  : "bg-coffee-cream dark:bg-coffee-mocha/40 text-coffee-brown/80 dark:text-coffee-beige/80 border-coffee-beige dark:border-coffee-mocha/50 hover:border-coffee-caramel dark:hover:border-coffee-caramel hover:text-coffee-brown dark:hover:text-coffee-beige"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl bg-coffee-cream dark:bg-coffee-mocha/40 border border-coffee-beige/50 dark:border-coffee-mocha/70 hover:border-coffee-caramel dark:hover:border-coffee-caramel hover:bg-coffee-beige/10 dark:hover:bg-coffee-roast/20 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl"
              >
                {/* Visual placeholder top bar */}
                <div className="h-40 bg-coffee-beige/20 dark:bg-[#1C1410] border-b border-coffee-beige/50 dark:border-coffee-mocha/70 relative overflow-hidden flex items-center justify-center">
                  {/* Subtle code pattern backdrop */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
                  
                  {/* Accent glow on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-coffee-caramel/15 dark:bg-coffee-caramel/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                  
                  {/* Minimalistic mock screen graphic */}
                  <div className="relative w-[85%] h-[75%] rounded-t-xl bg-coffee-cream dark:bg-coffee-roast border border-coffee-beige/80 dark:border-coffee-mocha p-3 shadow-md flex flex-col justify-between">
                    <div className="flex items-center space-x-1.5 pb-2 border-b border-coffee-beige/40 dark:border-coffee-mocha/50">
                      <div className="w-2 h-2 rounded-full bg-coffee-caramel/40" />
                      <div className="w-2 h-2 rounded-full bg-coffee-beige" />
                      <div className="w-2 h-2 rounded-full bg-coffee-oak" />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <Folder className="text-coffee-oak/60 dark:text-coffee-caramel/60 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center justify-between text-[8px] font-mono text-coffee-brown/50 dark:text-coffee-beige/40 tracking-wider">
                      <span>KOMAL_R_WORKSPACE</span>
                      <span>SECURE_HTTPS</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="font-mono text-[9px] font-bold text-coffee-caramel uppercase tracking-widest">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="font-serif font-bold text-xl text-coffee-brown dark:text-coffee-ivory mt-2 group-hover:text-coffee-caramel dark:group-hover:text-coffee-caramel transition-colors duration-200">
                      {project.title}
                    </h3>

                    {/* Project Short Description */}
                    <p className="font-sans text-sm text-coffee-brown/75 dark:text-coffee-beige/70 mt-2.5 line-clamp-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges and details */}
                  <div className="mt-6">
                    {/* Tech badging */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded bg-coffee-beige/40 dark:bg-coffee-roast text-coffee-brown dark:text-coffee-beige text-[10px] font-mono border border-coffee-beige/30 dark:border-coffee-mocha/40 font-semibold">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2.5 py-1 rounded bg-coffee-beige/40 dark:bg-coffee-roast text-coffee-brown/50 dark:text-coffee-beige/40 text-[10px] font-mono border border-coffee-beige/30 dark:border-coffee-mocha/40 font-semibold">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action trigger */}
                    <button
                      id={`project-detail-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-3 bg-coffee-beige/20 dark:bg-coffee-roast hover:!bg-coffee-brown dark:hover:!bg-coffee-caramel text-coffee-brown dark:text-coffee-beige hover:!text-coffee-ivory dark:hover:!text-coffee-espresso group-hover:text-coffee-caramel rounded-2xl text-xs font-bold font-sans transition-all duration-200 flex items-center justify-center space-x-1 border border-coffee-beige/40 dark:border-coffee-mocha/45 cursor-pointer"
                    >
                      <span>Explore Project Specifications</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Overlay detail component */}
        <AnimatePresence>
          {selectedProject && (
            <div id="project-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-coffee-brown/40 dark:bg-black/75 backdrop-blur-md"
              />

              {/* Modal Card body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative bg-coffee-cream dark:bg-coffee-mocha border border-coffee-beige dark:border-coffee-mocha w-full max-w-2xl rounded-3xl shadow-2xl z-10 overflow-hidden"
              >
                {/* Header detail */}
                <div className="p-6 border-b border-coffee-beige/40 dark:border-coffee-mocha/40 flex items-center justify-between bg-coffee-beige/10 dark:bg-coffee-roast/30">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] font-bold text-coffee-caramel uppercase tracking-widest">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-coffee-brown dark:text-coffee-ivory mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    id="close-modal-btn"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close details"
                    className="p-2 rounded-2xl hover:bg-coffee-beige/40 dark:hover:bg-coffee-roast text-coffee-brown/70 dark:text-coffee-beige/60 hover:text-coffee-brown dark:hover:text-coffee-ivory transition-colors duration-200 border border-transparent hover:border-coffee-beige dark:hover:border-coffee-mocha cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                  {/* Overview description */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-coffee-brown/50 dark:text-coffee-beige/55 mb-2">
                      Project Objective & Scope
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-coffee-brown/90 dark:text-coffee-beige/90 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights Deliverables */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-coffee-brown/50 dark:text-coffee-beige/55 mb-3">
                      Key Implementation Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-sm text-coffee-brown/80 dark:text-coffee-beige/80">
                          <Check size={14} className="text-coffee-caramel mt-1 shrink-0" />
                          <span className="leading-relaxed font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-coffee-brown/50 dark:text-coffee-beige/55 mb-3">
                      Core Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((technology) => (
                        <span key={technology} className="px-3 py-1 rounded-lg bg-coffee-beige/40 dark:bg-coffee-roast text-coffee-brown dark:text-coffee-beige text-xs font-mono font-bold border border-coffee-beige/30 dark:border-coffee-mocha/30">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="p-5 border-t border-coffee-beige/40 dark:border-coffee-mocha/40 bg-coffee-beige/10 dark:bg-coffee-roast/30 flex items-center justify-between text-xs font-mono text-coffee-brown/50 dark:text-coffee-beige/40">
                  <div className="flex items-center space-x-1.5 font-semibold">
                    <ShieldCheck size={12} className="text-coffee-caramel" />
                    <span>STRICTLY PRODUCTION READY</span>
                  </div>
                  <span>ID: {selectedProject.id.toUpperCase()}</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
