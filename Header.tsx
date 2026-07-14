import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Spy & Header shadow detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120; // offset for header height

      for (const item of NAV_ITEMS) {
        const id = item.href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="main-nav-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-coffee-ivory/90 dark:bg-[#130D0A]/90 backdrop-blur-md border-b border-coffee-beige/40 dark:border-coffee-mocha/60 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand/Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-coffee-brown dark:bg-coffee-carval text-coffee-ivory dark:text-coffee-espresso flex items-center justify-center font-serif font-bold text-base transition-transform duration-300 group-hover:scale-105 shadow-md bg-gradient-to-tr from-coffee-brown to-coffee-caramel text-white dark:from-coffee-caramel dark:to-coffee-oak dark:text-coffee-espresso">
            KR
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base leading-none text-coffee-brown dark:text-coffee-caramel tracking-wide">
              Komal Rashid
            </span>
            <span className="font-mono text-[9px] text-coffee-oak dark:text-coffee-beige mt-1 font-semibold tracking-widest">
              APPLICATION DEV
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-menu" className="hidden lg:flex items-center space-x-1 bg-coffee-beige/40 dark:bg-coffee-mocha/40 p-1.5 rounded-full border border-coffee-beige/60 dark:border-coffee-mocha/60">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                id={`desktop-nav-link-${id}`}
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-300 relative ${
                  isActive
                    ? "text-coffee-brown dark:text-coffee-caramel"
                    : "text-coffee-brown/70 dark:text-coffee-beige/70 hover:text-coffee-brown dark:hover:text-coffee-ivory"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeBubble"
                    className="absolute inset-0 bg-coffee-cream dark:bg-coffee-roast rounded-full -z-10 shadow-[0_2px_8px_rgba(139,94,60,0.08)] border border-coffee-oak/20 dark:border-coffee-mocha/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            id="desktop-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-2.5 rounded-full border border-coffee-oak/30 dark:border-coffee-mocha/80 hover:bg-coffee-beige/40 dark:hover:bg-coffee-mocha/45 transition-colors duration-200 text-coffee-brown dark:text-coffee-beige cursor-pointer"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact CTA */}
          <a
            id="desktop-contact-cta"
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center space-x-1.5 px-5 py-2.5 bg-coffee-brown hover:bg-coffee-brown/95 dark:bg-coffee-caramel/15 dark:hover:bg-coffee-caramel/25 text-coffee-ivory dark:text-coffee-caramel border border-transparent dark:border-coffee-caramel/30 rounded-full font-sans text-xs font-bold tracking-wide uppercase transition-all duration-200 shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Action Controls & Menu Trigger */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Theme Toggle Mobile */}
          <button
            id="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 rounded-xl border border-coffee-oak/30 dark:border-coffee-mocha/50 text-coffee-brown dark:text-coffee-beige"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Menu Toggle */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl border border-coffee-oak/30 dark:border-coffee-mocha/50 text-coffee-brown dark:text-coffee-beige"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden w-full bg-coffee-ivory border-b border-coffee-beige dark:bg-coffee-espresso dark:border-coffee-mocha absolute top-full left-0 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const id = item.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    id={`mobile-nav-link-${id}`}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-semibold tracking-wide uppercase py-2 px-4 rounded-xl transition-colors duration-200 flex items-center justify-between ${
                      isActive
                        ? "bg-coffee-beige/40 dark:bg-coffee-mocha text-coffee-brown dark:text-coffee-caramel font-bold"
                        : "text-coffee-brown/70 dark:text-coffee-beige/70 hover:text-coffee-brown dark:hover:text-coffee-ivory"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-coffee-caramel" />}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-coffee-beige dark:border-coffee-mocha flex flex-col space-y-3">
                <a
                  id="mobile-contact-cta"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-coffee-brown text-coffee-ivory dark:bg-coffee-caramel/15 dark:text-coffee-caramel border border-transparent dark:border-coffee-caramel/30 rounded-full font-sans text-xs font-bold tracking-wide uppercase"
                >
                  <span>Let's Collaborate</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
