import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Credentials } from "@/components/sections/Credentials";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Ankit Kumar Choudhary — Mechanical Engineer · Tool & Die Specialist";
    const desc = "Portfolio of Ankit Kumar Choudhary — B.Tech Mechanical Engineering student and Tool & Die specialist with experience at Mahindra & Mahindra, Tata Motors and Kiswok Industries.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <ScrollyCanvas />
        <section id="about" className="sr-only">About Ankit Kumar Choudhary — Mechanical Engineer & Tool & Die Specialist</section>
        <Education />
        <Experience />
        <Skills />
        <Research />
        <Projects />
        <Achievements />
        <Credentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
