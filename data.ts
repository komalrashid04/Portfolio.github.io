import { Service, SkillCategory, Project, ExperienceItem, EducationItem } from "./types";

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Creating premium custom-crafted and fully responsive websites, tailored with lightweight layouts to maximize conversion rate and ensure seamless user experiences.",
    iconName: "Globe",
    details: [
      "Custom responsive websites",
      "Business websites",
      "Landing pages",
      "Website optimization"
    ]
  },
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    description: "Customized WordPress design and high-performance layout construction. Harnessing Elementor Pro and deep theme modifications to match branding guidelines.",
    iconName: "Layout",
    details: [
      "Custom WordPress websites",
      "Elementor customization",
      "Theme customization",
      "Performance improvements"
    ]
  },
  {
    id: "shopify-dev",
    title: "Shopify Development",
    description: "Creating premium Shopify stores with custom product configurations, high-converting checkout flows, and completely personalized layout design.",
    iconName: "ShoppingBag",
    details: [
      "E-commerce store creation",
      "Product page design",
      "Store customization",
      "User experience improvements"
    ]
  },
  {
    id: "uiux-design",
    title: "UI/UX & Brand Design",
    description: "Crafting beautiful interactive user interfaces and highly functional branding styleguides that enhance credibility and resonate with international markets.",
    iconName: "Palette",
    details: [
      "Modern interfaces",
      "Landing page designs",
      "Visual branding",
      "User-focused designs"
    ]
  },
  {
    id: "seo-presence",
    title: "SEO & Digital Presence",
    description: "Configuring robust technical seo parameters, clean site structures, and search engine registrations to secure organic discoverability from day one.",
    iconName: "Search",
    details: [
      "Basic SEO optimization",
      "Website structure improvement",
      "Online presence setup"
    ]
  },
  {
    id: "app-dev",
    title: "Application Development",
    description: "Building responsive, modern web applications and client-side custom solutions. Providing excellent, standard-compliant technical documentation and full-cycle support.",
    iconName: "Code",
    details: [
      "Web applications",
      "Software solutions",
      "Documentation and technical support"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Responsive Design", level: 96 }
    ]
  },
  {
    title: "CMS",
    skills: [
      { name: "WordPress", level: 95 },
      { name: "Elementor", level: 98 },
      { name: "Shopify", level: 92 }
    ]
  },
  {
    title: "Design",
    skills: [
      { name: "UI/UX Design", level: 92 },
      { name: "Figma", level: 90 },
      { name: "Brand Design", level: 88 }
    ]
  },
  {
    title: "Marketing",
    skills: [
      { name: "SEO", level: 90 },
      { name: "Digital Marketing", level: 85 }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", level: 96 },
      { name: "GitHub", level: 88 },
      { name: "Google AI Studio", level: 85 },
      { name: "Canva", level: 92 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "business-website-platform",
    title: "Business Website Platform",
    category: "Website Development",
    description: "A responsive business website designed with modern UI, optimized layout, and smooth user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "WordPress"],
    features: [
      "Structured lightweight framework with beautiful grid alignment",
      "Smooth modern section transitions and interactive sliders",
      "Comprehensive speed optimization and search indexing markers",
      "Dynamic interactive contact portal with robust validations"
    ]
  },
  {
    id: "ecommerce-store-design",
    title: "E-commerce Store Design",
    category: "E-commerce & Design",
    description: "A complete online store concept with product pages, shopping experience, and modern design.",
    tech: ["Figma", "UI/UX Design", "WooCommerce", "WordPress", "Custom CSS"],
    features: [
      "High-fidelity desktop-first and mobile-responsive layout modeling",
      "Fully functional shopping cart interface with immediate state update",
      "Elegant product gallery showcasing interactive hover effects",
      "Clean branding typography matched with luxury aesthetic principles"
    ]
  },
  {
    id: "shopify-fashion-store",
    title: "Shopify Fashion Store",
    category: "Shopify Development",
    description: "A Shopify store layout focused on product presentation and customer experience.",
    tech: ["Shopify Storefront", "Liquid Customization", "CSS3", "SEO Strategy"],
    features: [
      "Intuitive product filtering and smooth, lag-free variant picker",
      "Conversion-optimized cart drawer workflow to reduce friction",
      "High-performance media assets with lazy loading algorithms",
      "Tailored styling matches premium fashion house expectations"
    ]
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Website Development",
    description: "A modern restaurant website with menu presentation, booking concept, and attractive visuals.",
    tech: ["WordPress", "Elementor Pro", "Responsive Design", "Google Maps Integration"],
    features: [
      "Visual menu catalog highlighting elegant coffee-inspired grids",
      "Interactive table booking concepts with instantaneous response indicators",
      "Fully integrated location guides and social feeds",
      "Optimized load pipelines ensuring mobile-first speed compliance"
    ]
  },
  {
    id: "digital-agency-website",
    title: "Digital Agency Website",
    category: "UI/UX & Brand Design",
    description: "A creative agency website showcasing services, portfolio, and professional branding.",
    tech: ["Tailwind CSS", "JavaScript", "Figma Design", "Motion Animation"],
    features: [
      "Striking, bento-inspired layouts and minimal, crisp typography",
      "Interactive case study galleries featuring fluid entering animations",
      "Dynamic lead generator modules mapped with stable performance",
      "Modern dark/light thematic sync ensuring user accessibility"
    ]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Website Development",
    description: "A personal portfolio platform featuring projects, skills, and professional information.",
    tech: ["React", "Vite", "Tailwind CSS", "Motion/React", "TypeScript"],
    features: [
      "Single-page application powered by highly modular components",
      "Custom-themed coffee colors providing a highly unique luxury identity",
      "Dynamic filter triggers allowing smooth, seamless project discovery",
      "Interactive hiring console storing logs locally for review"
    ]
  },
  {
    id: "software-documentation-project",
    title: "Software Documentation Project",
    category: "Application Development",
    description: "A structured software documentation project including requirements, planning, and technical details.",
    tech: ["SRS Standards", "UML Diagrams", "Database Schema", "Requirement Engineering"],
    features: [
      "Exhaustive Software Requirement Specification matching professional standards",
      "Logical Entity-Relationship Diagrams mapping complete data structures",
      "Detailed system use-case narratives outlining interactive processes",
      "Development execution roadmap mapping architecture milestone delivery"
    ]
  },
  {
    id: "landing-page-collection",
    title: "Landing Page Collection",
    category: "UI/UX & Brand Design",
    description: "Modern conversion-focused landing pages designed for different business needs.",
    tech: ["HTML5", "CSS3", "Responsive Layout", "Figma Prototyping"],
    features: [
      "Highly responsive blocks structured for rapid marketing experimentation",
      "Compelling call-to-action clusters with precise layout hierarchies",
      "Extremely clean, modern code structure suitable for easy adaptation",
      "Excellent Core Web Vitals rating with lightweight custom graphic elements"
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-freelance",
    role: "Freelance Application Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    description: "Developed websites and digital solutions according to different project requirements, working closely with international clients to deliver high-converting platforms.",
    highlights: [
      "Worked with WordPress, Shopify, and modern web technologies to engineer robust platforms.",
      "Focused on responsive design, high performance, and deep client-focused usability.",
      "Customized themes and developed bespoke scripts matching varied specifications.",
      "Ensured clear communications, standard-compliant markup, and post-launch support."
    ]
  },
  {
    id: "exp-developer",
    role: "Developer",
    company: "Auralyx Labs",
    period: "2023 - Present",
    description: "Worked on website development, e-commerce solutions, branding, and digital presence projects in a fast-paced agency context.",
    highlights: [
      "Led technical execution of custom Shopify storefronts and WordPress directories.",
      "Configured robust on-page SEO structures and clean semantic layouts for clients.",
      "Designed modern mockups in Figma, translating them directly into interactive frontend code.",
      "Coordinated with marketing teams to boost client conversion rates via technical optimizations."
    ]
  }
];

export const EDUCATION: EducationItem = {
  degree: "BS Information Technology (BS IT)",
  institution: "Government College University Faisalabad (GCUF)",
  period: "2020 - 2024",
  details: "Graduated with honors. Deepened core software engineering concepts, database systems administration, web programming frameworks, and requirements engineering methodologies."
};
