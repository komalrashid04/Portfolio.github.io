import { ArrowUpRight, Github, Linkedin, Mail, Smartphone } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-coffee-ivory dark:bg-[#130D0A] transition-colors duration-300"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-60">
        {/* Retro Dot Grid */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#C7A88A_1px,transparent_1px)] dark:bg-[radial-gradient(#8B5E3C_1.2px,transparent_1px)] [background-size:24px_24px]" 
        />
        {/* Subtle Ambient Glows - Luxury Coffee Aesthetics */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-coffee-caramel/15 dark:bg-coffee-caramel/5 blur-[90px] md:blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-coffee-oak/20 dark:bg-coffee-mocha/30 blur-[90px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Available for hire badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-coffee-beige/50 dark:bg-coffee-mocha/60 border border-coffee-oak/30 dark:border-coffee-mocha text-coffee-brown dark:text-coffee-caramel font-mono text-xs font-semibold mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coffee-caramel opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coffee-caramel"></span>
          </span>
          <span>Available for global contract work</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif font-semibold text-4xl sm:text-5xl md:text-6xl text-coffee-brown dark:text-coffee-ivory tracking-tight leading-[1.1] max-w-4xl"
        >
          Creating{" "}
          <span className="font-serif italic font-medium text-coffee-caramel dark:text-coffee-caramel block sm:inline">
            modern digital experiences
          </span>{" "}
          through websites, applications, and{" "}
          <span className="relative inline-block text-coffee-brown dark:text-coffee-oak">
            smart solutions.
            <span className="absolute bottom-1 left-0 w-full h-[6px] bg-coffee-caramel/20 dark:bg-coffee-caramel/10 rounded" />
          </span>
        </motion.h1>

        {/* Professional Tagline */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 font-sans text-base sm:text-lg text-coffee-brown/80 dark:text-coffee-beige/80 max-w-2xl font-light leading-relaxed"
        >
          Hi, I am <strong className="font-medium text-coffee-brown dark:text-coffee-ivory">Komal Rashid</strong>. 
          An elite Application Developer & Web Developer specializing in custom high-performance website development, premium WordPress & Shopify builds, and results-driven SEO solutions.
        </motion.p>

        {/* Core Credentials Badges */}
        <motion.div
          id="hero-tech-pills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-2 justify-center max-w-xl"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-coffee-beige/40 dark:bg-coffee-mocha/40 text-coffee-brown dark:text-coffee-beige text-xs font-mono font-medium border border-coffee-oak/25 dark:border-coffee-mocha/60">
            Application Dev
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-coffee-beige/40 dark:bg-coffee-mocha/40 text-coffee-brown dark:text-coffee-beige text-xs font-mono font-medium border border-coffee-oak/25 dark:border-coffee-mocha/60">
            WordPress Specialist
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-coffee-beige/40 dark:bg-coffee-mocha/40 text-coffee-brown dark:text-coffee-beige text-xs font-mono font-medium border border-coffee-oak/25 dark:border-coffee-mocha/60">
            Shopify Specialist
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-coffee-beige/40 dark:bg-coffee-mocha/40 text-coffee-brown dark:text-coffee-beige text-xs font-mono font-medium border border-coffee-oak/25 dark:border-coffee-mocha/60">
            SEO & Brand Design
          </span>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
        >
          <button
            id="hero-btn-projects"
            onClick={() => handleScrollTo("projects")}
            className="px-8 py-4 rounded-full bg-coffee-brown hover:bg-coffee-brown/95 dark:bg-coffee-caramel dark:hover:bg-coffee-caramel/90 text-coffee-ivory dark:text-coffee-espresso font-sans font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-lg shadow-coffee-brown/10 flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            id="hero-btn-contact"
            onClick={() => handleScrollTo("contact")}
            className="px-8 py-4 rounded-full border border-coffee-brown/40 dark:border-coffee-caramel/40 hover:border-coffee-brown dark:hover:border-coffee-caramel bg-transparent text-coffee-brown dark:text-coffee-caramel font-sans font-bold text-sm tracking-wide uppercase transition-all duration-200 cursor-pointer hover:bg-coffee-brown/5 dark:hover:bg-coffee-caramel/5"
          >
            Let's Work Together
          </button>
        </motion.div>

        {/* Social Badges / Links */}
        <motion.div
          id="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center space-x-6 text-coffee-brown/50 dark:text-coffee-beige/40"
        >
          <a
            id="hero-social-github"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile Placeholder"
            className="hover:text-coffee-brown dark:hover:text-coffee-caramel transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            id="hero-social-linkedin"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile Placeholder"
            className="hover:text-coffee-brown dark:hover:text-coffee-caramel transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            id="hero-social-email"
            href="mailto:rashidkomal155@gmail.com"
            aria-label="Send direct email"
            className="hover:text-coffee-brown dark:hover:text-coffee-caramel transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
          <a
            id="hero-social-phone"
            href="tel:03354732165"
            aria-label="Call directly"
            className="hover:text-coffee-brown dark:hover:text-coffee-caramel transition-colors duration-200"
          >
            <Smartphone size={20} />
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-coffee-brown/50 dark:text-coffee-beige/45 mb-2 font-bold">
          Scroll Down
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-coffee-oak to-transparent dark:from-coffee-brown" />
      </div>
    </section>
  );
}
