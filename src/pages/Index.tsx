import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Lalit Verma — Assistant Professor · AI & ML Researcher";
    const desc = "Portfolio of Lalit Verma — Assistant Professor, AI & ML Researcher and Placement Coordinator based in Lakhimpur, India. 11 publications, 4+ years of teaching & industry experience.";
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
        <Hero />
        <section id="about" className="sr-only">About Lalit Verma — Assistant Professor, AI & ML Researcher</section>
        <Education />
        <Experience />
        <Skills />
        <Research />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
