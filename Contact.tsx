import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SavedMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject line is required.";
    if (!formData.message.trim()) newErrors.message = "Message text cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const newMessage: SavedMessage = {
        ...formData,
        timestamp: new Date().toLocaleTimeString()
      };
      setSavedMessages([newMessage, ...savedMessages]);
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success feedback after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background visual element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            06 // Project Initiation
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 tracking-tight">
            Let's build something exceptional together.
          </h2>
          <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed">
            Have an application design, a custom WordPress build, a Shopify storefront requirement, or a software documentation project? Drop a line and let's configure your solution.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and social handles */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-sans font-bold text-xl text-zinc-900 dark:text-white">
              Direct Channels
            </h3>

            {/* Direct Connect cards with click-to-copy */}
            <div className="space-y-4">
              {/* Email Connection */}
              <div id="contact-email-card" className="p-6 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200 shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 text-emerald-600 dark:text-emerald-400 border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Send Email
                    </span>
                    <a
                      href="mailto:rashidkomal155@gmail.com"
                      className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 transition-colors duration-150"
                    >
                      rashidkomal155@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={() => handleCopy("rashidkomal155@gmail.com", "email")}
                  className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800/80 shadow-sm transition-colors duration-150"
                  aria-label="Copy email address"
                >
                  {copiedType === "email" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Connection */}
              <div id="contact-phone-card" className="p-6 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200 shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 text-emerald-600 dark:text-emerald-400 border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Direct Dial
                    </span>
                    <a
                      href="tel:03354732165"
                      className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 transition-colors duration-150"
                    >
                      03354732165
                    </a>
                  </div>
                </div>

                <button
                  id="copy-phone-btn"
                  onClick={() => handleCopy("03354732165", "phone")}
                  className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800/80 shadow-sm transition-colors duration-150"
                  aria-label="Copy phone number"
                >
                  {copiedType === "phone" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-start space-x-4 shadow-md">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 text-emerald-600 dark:text-emerald-400 border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="font-sans font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                    Faisalabad, Pakistan (Available GMT+5 / Remote Sync)
                  </span>
                </div>
              </div>
            </div>

            {/* Socials Block */}
            <div className="pt-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold mb-4">
                Global Handles
              </h4>
              <div className="flex gap-3">
                <a
                  id="social-linkedin-link"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150 text-xs font-semibold shadow-md"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={10} />
                </a>

                <a
                  id="social-github-link"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150 text-xs font-semibold shadow-md"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Client-Side Email Form */}
          <div className="lg:col-span-7">
            <div id="contact-form-container" className="p-8 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-lg relative">
              <h3 className="font-sans font-bold text-xl text-zinc-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block font-sans text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all ${
                        errors.name ? "border-red-500" : "border-zinc-200 dark:border-zinc-800/80"
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-500 font-medium mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="client-email" className="block font-sans text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all ${
                        errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-800/80"
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-500 font-medium mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="client-subject" className="block font-sans text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-1.5">
                    Subject Line
                    <span className="font-normal text-zinc-400 font-mono lowercase"> (specifies requirement)</span>
                  </label>
                  <input
                    id="client-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Custom WordPress Customization"
                    className={`w-full px-4 py-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all ${
                      errors.subject ? "border-red-500" : "border-zinc-200 dark:border-zinc-800/80"
                    }`}
                  />
                  {errors.subject && <span className="text-[11px] text-red-500 font-medium mt-1 block">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="client-message" className="block font-sans text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-1.5">
                    Message Detail
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly detail what you are looking to build..."
                    className={`w-full px-4 py-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none ${
                      errors.message ? "border-red-500" : "border-zinc-200 dark:border-zinc-800/80"
                    }`}
                  />
                  {errors.message && <span className="text-[11px] text-red-500 font-medium mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-sans font-bold text-sm rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-zinc-400 border-t-zinc-950 dark:border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Secure Inquiry</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>

              {/* Message Success feedback */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    id="contact-form-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-8 text-center z-10 border border-emerald-500/20"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                      <Check size={28} />
                    </div>
                    <h3 className="font-sans font-bold text-lg text-zinc-900 dark:text-white">
                      Inquiry Transmitted Successfully
                    </h3>
                    <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm">
                      Thank you for your message! This simulates a real API endpoint, saving your text to local state memory. I'll respond shortly.
                    </p>
                    <button
                      id="reset-success-feedback-btn"
                      onClick={() => setSuccess(false)}
                      className="mt-6 px-4 py-2 rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-sans text-xs font-semibold border border-zinc-200/50 dark:border-zinc-800/40"
                    >
                      Dismiss Confirmation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Local Messages Log Viewer (Hiring playground) */}
        {savedMessages.length > 0 && (
          <div id="local-messages-log" className="mt-16 border-t border-zinc-150 dark:border-zinc-800 pt-10">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold mb-4">
              Local Transmitted Queries Console ({savedMessages.length})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedMessages.map((msg, mIdx) => (
                <div key={mIdx} className="p-5 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 text-xs shadow-md">
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 mb-2">
                    <span>{msg.timestamp}</span>
                    <span className="text-emerald-500 font-semibold">STABLE_MEMORY</span>
                  </div>
                  <p className="font-sans font-bold text-zinc-800 dark:text-zinc-100">
                    {msg.name} ({msg.email})
                  </p>
                  <p className="font-sans font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Subject: {msg.subject}
                  </p>
                  <p className="font-sans text-zinc-500 dark:text-zinc-400 mt-2 bg-zinc-50 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 italic">
                    "{msg.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
