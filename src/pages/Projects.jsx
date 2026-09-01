import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
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

  const projects = [
    {
      number: "01",
      title: "WorkMitra",
      subtitle: "Employment Platform for Local Daily Workers",
      type: "Major Project",
      duration: "March – April 2026",
      description:
        "A scalable employment platform designed to connect local daily workers with job providers and reduce job discovery friction in the informal labor market.",
      details: [
        "Architected the complete backend and database layer in a 2-member team.",
        "Developed REST APIs consumed by the frontend.",
        "Integrated Redis for caching and Kafka for asynchronous messaging.",
        "Collaborated daily using Git and GitHub throughout development.",
        "Delivered the platform within a 1-month development timeline.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST API",
        "JPA/Hibernate",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
      ],
      github: null,
    },
    {
      number: "02",
      title: "URL Shortener",
      subtitle: "HACKGEAR 2.0 Hackathon Project",
      type: "Hackathon Project",
      duration: "12-Hour Solo Hackathon",
      description:
        "An end-to-end URL Shortener application developed individually during HACKGEAR 2.0, successfully delivering a functional application within a strict 12-hour deadline.",
      details: [
        "Developed secure REST APIs and backend services using Java and Spring Boot.",
        "Implemented authentication and security using Spring Security.",
        "Designed database entities and persistence using JPA/Hibernate and MySQL.",
        "Built an advanced and responsive frontend using HTML, CSS, JavaScript, and React.js.",
        "Integrated frontend services with backend REST APIs for complete end-to-end functionality.",
        "Successfully completed and delivered the working application as a solo participant within 12 hours.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST API",
        "JPA/Hibernate",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
      ],
      github: null,
    },
    {
      number: "03",
      title: "9+ Supplementary Projects",
      subtitle: "Backend & Full Stack Development",
      type: "Supporting Projects",
      duration: "2024 – 2026",
      description:
        "Built 9+ additional projects to strengthen practical understanding of backend architecture, database design, REST APIs, and full-stack application development.",
      details: [
        "Built multiple applications using Java and Spring Boot.",
        "Practiced REST API development and request handling.",
        "Implemented database integration using MySQL and JPA.",
        "Worked with authentication, validation and exception handling.",
        "Strengthened understanding of backend architecture through hands-on projects.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JPA",
        "Hibernate",
        "MySQL",
        "React",
        "REST API",
      ],
      github: null,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playball&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        .projects-title {
          font-family: 'Alfa Slab One', cursive, serif;
          letter-spacing: 0.04em;
          line-height: 1.05;
        }

        .projects-script {
          font-family: 'Playball', cursive;
        }
      `}</style>

      <section className="relative min-h-screen w-full flex items-center justify-start ml-0 md:ml-20 lg:ml-32 px-6 sm:px-12 md:px-16 py-20 overflow-hidden select-none font-sans">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center max-w-4xl w-full space-y-10"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-1">
            <h1 className="projects-title text-4xl sm:text-5xl md:text-6xl text-[#4F6A52] uppercase">
              FEATURED CREATIONS
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="projects-script text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide flex items-center flex-wrap gap-x-2 font-normal"
          >
            <span className="text-[#1E293B]">Demonstrating</span>
            <span className="text-[#2563EB]">Real-Time Streaming,</span>
            <span className="text-[#EA580C]">Robust Security</span>
            <span className="text-[#334155]">&amp;</span>
            <span className="text-[#4F6A52]">Full-Stack Systems.</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 pt-2">
            {projects.map((project) => (
              <div
                key={project.number}
                className="border border-[#4F6A52]/20 bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-sm shadow-sm hover:border-[#4F6A52]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#4F6A52]/15 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-[#EA580C] font-mono">
                      {project.number}
                    </span>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-[#1E293B]">
                        {project.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#4F6A52] font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded-sm">
                      {project.type}
                    </span>
                    <span className="text-[11px] text-[#334155]/70 mt-1">
                      {project.duration}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-5 space-y-1.5">
                  <h3 className="text-[11px] uppercase font-bold tracking-wider text-[#4F6A52]/80">
                    Key Highlights
                  </h3>
                  <ul className="space-y-1 text-xs text-[#334155]/90">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#EA580C] text-[10px] mt-0.5">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#4F6A52]/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-[#4F6A52]/[0.05] border border-[#4F6A52]/15 text-[#334155] text-[11px] font-medium rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4F6A52] hover:text-[#2563EB] transition-colors"
                    >
                      <span>View Source</span>
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}