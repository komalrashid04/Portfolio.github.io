import React from "react";
import { ArrowUp, Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      id="main-footer"
      className="bg-zinc-100/50 dark:bg-[#0c0c0e]/50 border-t border-zinc-200/60 dark:border-zinc-800/80 transition-colors duration-300 py-12"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
        {/* Left column: Brand and copyright */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-sans font-bold text-base text-zinc-900 dark:text-white tracking-tight">
              Komal Rashid
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] text-zinc-400 font-semibold uppercase">
              Application Developer
            </span>
          </div>
          <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400">
            &copy; 2026 Komal Rashid. All rights reserved. Made with precision and modern web standards.
          </p>
        </div>

        {/* Right column: Social shortcuts & back to top */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a
              id="footer-github"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile Link"
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-150"
            >
              <Github size={16} />
            </a>
            <a
              id="footer-linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile Link"
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-150"
            >
              <Linkedin size={16} />
            </a>
            <a
              id="footer-email"
              href="mailto:rashidkomal155@gmail.com"
              aria-label="Email Address Link"
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-150"
            >
              <Mail size={16} />
            </a>
          </div>

          <button
            id="back-to-top-btn"
            onClick={handleBackToTop}
            className="p-2.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-150"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
