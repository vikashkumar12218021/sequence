import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const projects = [
  { name: "neural-tutor", desc: "AI-powered tutoring assistant for CS students with adaptive feedback loops.", lang: "Python", stars: 142, forks: 28, color: "bg-primary" },
  { name: "placement-portal", desc: "Full-stack Laravel platform for managing campus placements & analytics.", lang: "PHP", stars: 87, forks: 19, color: "bg-secondary" },
  { name: "vision-grader", desc: "OCR + ML pipeline that auto-grades hand-written student answer sheets.", lang: "Python", stars: 213, forks: 45, color: "bg-accent" },
  { name: "react-classroom", desc: "Interactive virtual classroom built with React, WebRTC and live coding rooms.", lang: "TypeScript", stars: 98, forks: 22, color: "bg-primary" },
  { name: "research-tracker", desc: "Tool to organize publications, citations and research collaborations.", lang: "JavaScript", stars: 64, forks: 11, color: "bg-secondary" },
  { name: "ml-playground", desc: "In-browser ML experimentation sandbox for teaching core algorithms visually.", lang: "TypeScript", stars: 175, forks: 38, color: "bg-accent" },
];

export const Projects = () => (
  <section id="projects" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Projects"
        title={<>Selected <span className="text-gradient">Work</span></>}
        description="A glimpse at projects across teaching, research, and applied engineering."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card p-6 group block transition-all hover:border-primary/40"
          >
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm font-semibold text-primary">
                {p.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 min-h-[3rem]">{p.desc}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded-full ${p.color}`} />
                {p.lang}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" /> {p.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3 h-3" /> {p.forks}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
