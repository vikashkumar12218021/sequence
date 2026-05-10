import { motion } from "framer-motion";
import { Hammer, Layers, Boxes, Wrench } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const projects = [
  {
    icon: Hammer,
    name: "Progressive Press Tool Assembly",
    tag: "Mahindra · Plant 2",
    desc: "Hands-on assembly and alignment of progressive dies for sheet-metal panels with trim-line and clearance checks.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Layers,
    name: "Draw & Forming Die Inspection",
    tag: "Tool & Die Shop",
    desc: "Static and dynamic inspection of draw / forming dies and sub-contracted die parts before production release.",
    color: "from-secondary to-primary",
  },
  {
    icon: Boxes,
    name: "Casting Component Development",
    tag: "Kiswok · NPD",
    desc: "Supported the New Product Development team in developing and validating new casting components.",
    color: "from-accent to-secondary",
  },
  {
    icon: Wrench,
    name: "CAD Design — Jigs & Fixtures",
    tag: "AutoCAD · SolidWorks · CATIA",
    desc: "Modeled and detailed press tools, molds, jigs and fixtures using industry-standard CAD packages.",
    color: "from-primary to-accent",
  },
];

export const Projects = () => (
  <section id="projects" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Projects"
        title={<>Selected <span className="text-gradient">Work</span></>}
        description="Industry projects spanning press-tool assembly, inspection, casting NPD and CAD design."
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: 4 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${p.color} opacity-10 group-hover:opacity-25 transition-opacity blur-2xl`} />
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 glow-primary`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-3">{p.tag}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
