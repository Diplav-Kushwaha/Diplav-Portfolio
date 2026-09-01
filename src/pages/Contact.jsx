import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:diplavkushwaha07@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "diplav-kushwaha",
      href: "https://www.linkedin.com/in/diplav-kushwaha-533416328/",
      color: "#2563EB",
    },
    {
      name: "GitHub",
      handle: "Diplav-Kushwaha",
      href: "https://github.com/Diplav-Kushwaha",
      color: "#1E293B",
    },
    {
      name: "YouTube",
      handle: "@diplavkushwaha",
      href: "https://www.youtube.com/@diplavkushwaha",
      color: "#EA580C",
    },
    {
      name: "Instagram",
      handle: "@diplav.kushwaha",
      href: "https://www.instagram.com/diplav.kushwaha",
      color: "#E1306C",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playball&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        .contact-title {
          font-family: 'Alfa Slab One', cursive, serif;
          letter-spacing: 0.04em;
          line-height: 1.05;
        }

        .contact-script {
          font-family: 'Playball', cursive;
        }
      `}</style>

      <section className="relative min-h-screen w-full flex items-center justify-start ml-0 md:ml-20 lg:ml-32 px-6 sm:px-12 md:px-16 py-20 overflow-hidden select-none font-sans">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center max-w-4xl w-full space-y-8"
        >

          <motion.div variants={itemVariants} className="flex flex-col items-start gap-1">

            <h1 className="contact-title text-4xl sm:text-5xl md:text-6xl text-[#4F6A52] uppercase">
              LET'S HANDSHAKE
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="contact-script text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide flex items-center flex-wrap gap-x-2 font-normal"
          >
            <span className="text-[#1E293B]">Have an idea?</span>
            <span className="text-[#2563EB]">Let's build</span>
            <span className="text-[#334155]">something</span>
            <span className="text-[#EA580C]">impactful together.</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2"
          >

            <div className="md:col-span-5 space-y-6">
              <div className="border border-[#4F6A52]/20 bg-white/40 backdrop-blur-sm p-5 rounded-sm space-y-4">
                <h2 className="text-xs uppercase font-bold tracking-wider text-[#4F6A52]">
                  Direct Contact
                </h2>

                <div className="space-y-3 text-xs sm:text-sm">

                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#334155]/60 block">
                      Email Address
                    </span>
                    <a
                      href="mailto:diplavkushwaha07@gmail.com"
                      className="font-medium text-[#1E293B] hover:text-[#2563EB] transition-colors break-all"
                    >
                      diplavkushwaha07@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#334155]/60 block">
                      Phone &amp; WhatsApp
                    </span>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a
                        href="tel:+916396404473"
                        className="font-medium text-[#1E293B] hover:text-[#4F6A52] transition-colors"
                      >
                        +91 6396404473
                      </a>
                      <span className="text-[#334155]/30">|</span>
                      <a
                        href="https://wa.me/916396404473"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#25D366] hover:underline"
                      >
                        WhatsApp ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#4F6A52]/20 bg-white/40 backdrop-blur-sm p-5 rounded-sm space-y-3">
                <h2 className="text-xs uppercase font-bold tracking-wider text-[#4F6A52]">
                  Social Profiles
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-[#4F6A52]/10 bg-[#4F6A52]/[0.02] rounded-sm hover:border-[#4F6A52]/30 hover:bg-[#4F6A52]/5 transition-all text-left group"
                    >
                      <span
                        className="text-[10px] uppercase font-bold tracking-wider block"
                        style={{ color: social.color }}
                      >
                        {social.name}
                      </span>
                      <span className="text-xs text-[#334155] group-hover:text-[#1E293B] transition-colors flex items-center justify-between mt-0.5">
                        <span className="truncate">{social.handle}</span>
                        <span className="text-[10px] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">↗</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-7 border border-[#4F6A52]/20 bg-white/40 backdrop-blur-sm p-6 sm:p-7 rounded-sm shadow-sm">
              <h2 className="text-xs uppercase font-bold tracking-wider text-[#4F6A52] mb-4">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase font-semibold tracking-wider text-[#334155]/70 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-3 py-2 bg-white/70 border border-[#4F6A52]/20 rounded-sm text-xs text-[#1E293B] focus:outline-none focus:border-[#4F6A52] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase font-semibold tracking-wider text-[#334155]/70 block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 bg-white/70 border border-[#4F6A52]/20 rounded-sm text-xs text-[#1E293B] focus:outline-none focus:border-[#4F6A52] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-semibold tracking-wider text-[#334155]/70 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-3 py-2 bg-white/70 border border-[#4F6A52]/20 rounded-sm text-xs text-[#1E293B] focus:outline-none focus:border-[#4F6A52] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-semibold tracking-wider text-[#334155]/70 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or role..."
                    className="w-full px-3 py-2 bg-white/70 border border-[#4F6A52]/20 rounded-sm text-xs text-[#1E293B] focus:outline-none focus:border-[#4F6A52] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#4F6A52] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#3d5340] active:scale-95 group shadow-sm"
                >
                  <span>Send via Email</span>
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-[#4F6A52]/15 text-[#334155]"
          >
            <div className="flex items-center gap-2 text-xs font-medium">
              <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-[#4F6A52]/70">
                Location &amp; Availability:
              </span>
              <span className="font-semibold text-[#4F6A52]">
                India • Open to Remote &amp; Hybrid
              </span>
            </div>

            <span className="text-[11px] text-[#334155]/60 font-sans tracking-wide">
              © {new Date().getFullYear()} Diplav Kushwaha. All rights reserved.
            </span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}