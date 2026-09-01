import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", targetId: "home" },
  { name: "Readme", targetId: "about" },
  { name: "Proficiencies", targetId: "skills" },
  { name: "Creations", targetId: "projects" },
  { name: "Handshake", targetId: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-18 z-50 bg-white shadow-sm border-b border-[#4F6A52]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          <button
            onClick={() => scrollToSection("home")}
            className="group font-mono text-base font-semibold tracking-wider text-[#4F6A52]/80 hover:text-[#4F6A52] transition-all duration-300 cursor-pointer bg-transparent border-none p-0"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block transition-all duration-300 drop-shadow-[0_0_12px_rgba(79,106,82,0.3)] group-hover:text-[#4F6A52]"
            >
              &lt;/diplav-kushwaha&gt;
            </motion.span>
          </button>

          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <button
                  onClick={() => scrollToSection(item.targetId)}
                  className={`group relative inline-block text-sm font-medium tracking-widest [word-spacing:0.16em] py-1 transition-all duration-300 cursor-pointer ${
                    item.name === "Handshake"
                      ? "px-5 py-2.5 bg-[#4F6A52]/10 hover:bg-[#4F6A52]/20 text-[#4F6A52] border border-[#4F6A52]/70 backdrop-blur-sm shadow-[0_0_15px_rgba(79,106,82,0.15)]"
                      : "text-[#4F6A52]/70 hover:text-[#4F6A52] hover:drop-shadow-[0_0_10px_rgba(79,106,82,0.3)]"
                  }`}
                >
                  {item.name}

                  {item.name !== "Handshake" && (
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#4F6A52] transition-all duration-300 ease-out group-hover:w-full" />
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#4F6A52] hover:text-[#384c3a] focus:outline-none p-2 "
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 pt-2 pb-6 bg-white border-b border-[#4F6A52]/20 shadow-lg"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-end space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`group relative text-base font-medium tracking-widest [word-spacing:0.16em] py-1 transition-all duration-200 cursor-pointer ${
                    item.name === "Handshake"
                      ? "px-4 py-2 bg-[#4F6A52]/10 text-[#4F6A52] border border-[#4F6A52]/40 font-semibold"
                      : "text-[#4F6A52]/70 hover:text-[#4F6A52]"
                  }`}
                >
                  {item.name}

                  {item.name !== "Handshake" && (
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#4F6A52] transition-all duration-300 ease-out group-hover:w-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}