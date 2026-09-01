import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';       
import Skills from './pages/Skills';     
import Projects from './pages/Projects'; 
import Contact from './pages/Contact';  

export default function App() {
  return (
    <div className="w-full bg-white text-slate-800">
      <Navbar />

      <main className="w-full">
        <section id="home" className="scroll-mt-20">
          <Home />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}