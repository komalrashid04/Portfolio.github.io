import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Safe default to Dark Mode for premium tech feel, but user can easily toggle
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Sync dark class on document element so animations, scrollbars, etc., align perfectly
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div 
        id="app-root-container" 
        className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300 antialiased selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:bg-emerald-500/20 dark:selection:text-emerald-400"
      >
        {/* Navigation Bar */}
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* Home & Hero Section */}
        <Hero />

        {/* Main Content Sections with Unique Anchor Identifiers */}
        <main id="portfolio-main-sections">
          {/* About Section */}
          <About />

          {/* Services Section */}
          <Services />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Experience Section */}
          <Experience />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}
