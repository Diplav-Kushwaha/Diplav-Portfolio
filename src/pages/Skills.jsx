import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      accent: "#4F6A52", 
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "React.js",
        "React Router",
        "Axios",
        "Responsive Design",
        "REST API Integration",
      ],
    },
    {
      title: "Backend Development",
      accent: "#4F6A52", 
      skills: [
        "Core Java",
        "Spring Boot",
        "Spring MVC",
        "JPA/Hibernate",
        "Spring Security",
        "JWT & OAuth2",
        "REST API",
        "Logging",
        "JUnit/Mockito Testing",
      ],
    },
    {
      title: "Devops & Tools",
      accent: "#4F6A52", 
      skills: [
        "DSA",
        "MySQL",
        "Redis",
        "Docker",
        "Apache Kafka",
        "Maven",
        "Postman",
        "Git/GitHub",
        "Problem Solving",
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playball&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        .skills-title {
          font-family: 'Alfa Slab One', cursive, serif;
          letter-spacing: 0.04em;
          line-height: 1.05;
        }

        .skills-script {
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
            <h1 className="skills-title text-4xl sm:text-5xl md:text-6xl text-[#4F6A52] uppercase">
              PROFICIENCIES
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="skills-script text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide flex items-center flex-wrap gap-x-2 font-normal"
          >
            <span className="text-[#1E293B]">Engineered with</span>
            <span className="text-[#2563EB]">Precision,</span>
            <span className="text-[#EA580C]">Distributed Scalability</span>
            <span className="text-[#334155]">&amp;</span>
            <span className="text-[#4F6A52]">Clean Architecture.</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2"
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="border border-[#4F6A52]/20 bg-white/40 backdrop-blur-sm p-6 rounded-sm shadow-sm hover:border-[#4F6A52]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#4F6A52]/10">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: category.accent }}
                    />
                    <h2 className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#1E293B]">
                      {category.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#4F6A52]/[0.05] border border-[#4F6A52]/15 text-[#334155] text-xs font-medium rounded-sm hover:bg-[#4F6A52]/10 hover:border-[#4F6A52]/30 transition-colors cursor-default"
                      >
                        <span className="text-[#EA580C] text-[10px]">▹</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}