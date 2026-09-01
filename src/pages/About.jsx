import React from "react";
import { motion } from "framer-motion";

export default function About() {
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playball&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        .about-title {
          font-family: 'Alfa Slab One', cursive, serif;
          letter-spacing: 0.04em;
          line-height: 1.05;
        }

        .about-script {
          font-family: 'Playball', cursive;
        }
      `}</style>

      <section className="relative min-h-screen w-full flex items-center justify-start ml-0 md:ml-20 lg:ml-32 px-6 sm:px-12 md:px-16 py-20 overflow-hidden select-none font-sans">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center max-w-5xl w-full space-y-8"
        >

          <motion.div variants={itemVariants} className="flex flex-col items-start gap-1">
            <h1 className="about-title text-4xl sm:text-5xl md:text-6xl text-[#4F6A52] uppercase">
              README
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="about-script text-lg sm:text-xl md:text-2xl tracking-wide flex items-center flex-wrap gap-x-2 font-normal"
          >
            <span className="text-[#1E293B]">Crafting</span>
            <span className="text-[#EA580C]">Full Stack Web Application </span>
            <span className="text-[#334155]">with</span>
            <span className="text-[#2563EB]">Advance Frontend UI</span>
            <span className="text-[#334155]">&amp;</span>
            <span className="text-[#2563EB]">Efficient Backend Architectures</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4 text-sm sm:text-base leading-relaxed text-[#334155]"
          >
            <p>
              Hello! I'm <strong className="text-[#4F6A52] font-semibold">Diplav Kushwaha</strong>, a dedicated{" "}
              <span className="font-semibold text-[#4F6A52]">Java Full Stack Developer</span> who loves bridging the gap 
              between robust server-side systems and polished, responsive frontends.
            </p>
            <p>
              My expertise lies in building resilient services with <span className="font-semibold text-[#4F6A52]">Java &amp; Spring Boot</span>, 
              paired with reactive interfaces using <span className="font-semibold text-[#4F6A52]">React and modern CSS frameworks</span>. 
              I focus on writing clean, maintainable code, optimizing API performance, and building production-ready architectures.
            </p>
            <p>
              My expertise spans distributed architectures and real-time data streaming using <span className="font-semibold text-[#4F6A52]">Apache Kafka </span>&amp;
              ultra-fast caching with <span className="font-semibold text-[#4F6A52]">Redis </span>. I place a strong emphasis on enterprise-grade security with 
              <span className="font-semibold text-[#4F6A52]"> JWT, OAuth2,</span> and multi-factor verification workflows including Email and SMS OTP.
            </p>
            <p>
              I enjoy solving programming problems, learning new technologies, and <span className="font-semibold text-[#4F6A52]">turning ideas </span>into
              <span className="font-semibold text-[#4F6A52]"> real-world applications </span>. My goal is to continuously improve my development skills and build reliable software that provides a good user experience.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
             