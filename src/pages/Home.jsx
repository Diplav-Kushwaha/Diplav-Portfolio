import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playball&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        .hero-title {
          font-family: 'Alfa Slab One', cursive, serif;
          letter-spacing: 0.04em;
          line-height: 1.05;
        }

        .hero-script {
          font-family: 'Playball', cursive;
        }
      `}</style>

      <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center md:items-center justify-start ml-0 md:ml-40 md:pl-[50vw] lg:pl-[50vw] xl:pl-[32vw] px-6 sm:px-12 md:px-50 pt-28 pb-12 md:py-12 overflow-hidden select-none">
        
        {/* Background / Hero Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:absolute md:left-0 md:bottom-0 md:top-0 w-full sm:w-2/3 md:w-1/2 lg:w-5/12 h-[45vh] sm:h-[60vh] md:h-full z-0 flex items-end justify-center md:justify-start pointer-events-none mb-6 md:mb-0"
        >
          <img
            src="/diplav.png"
            alt="Diplav Kushwaha"
            className="h-full md:h-[80vh] sm:md:h-[88vh] md:max-h-[900px] w-auto object-contain object-bottom"
          />
        </motion.div>

        {/* Text / Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center max-w-xl w-full my-auto mt-0 md:mt-30 space-y-3 sm:space-y-4"
        >

          <motion.div variants={itemVariants} className="flex flex-col items-start gap-1">
            <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#4F6A52] uppercase">
              DIPLAV KUSHWAHA
            </h1>
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6A52]/75 font-sans">
              Java Full Stack Developer
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hero-script text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide flex items-center flex-wrap gap-x-2 font-normal"
          >
            <span className="text-[#1E293B]">Building Fast,</span>
            <span className="text-[#2563EB]">Scalable</span>
            <span className="text-[#334155]">&amp;</span>
            <span className="text-[#EA580C]">Modern Web Applications.</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center flex-wrap gap-5 mt-6 md:mt-10 sm:gap-7 pt-4 sm:pt-10 font-sans"
          >
            <a
              href="/diplav-resume.pdf"
              download="Diplav_Kushwaha_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#4F6A52] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#3d5340] active:scale-95 group shadow-sm"
            >
              <span>Download Resume</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>

            <div className="h-7 w-[1px] bg-[#4F6A52]/20 hidden sm:block" />

            <div className="flex flex-col items-start">
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#4F6A52]/60">
                Available For
              </span>
              <a
                href="#contact"
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4F6A52] hover:text-[#2563EB] transition-colors flex items-center gap-1"
              >
                <span>Freelance</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}