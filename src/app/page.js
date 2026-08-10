import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollMotion from "@/components/layout/ScrollMotion";

import ExperienceCanvas from "@/components/three/ExperienceCanvas";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import AIChat from "@/components/sections/AIChat";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ExperienceCanvas />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <AIChat />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <ScrollMotion />
    </>
  );
}