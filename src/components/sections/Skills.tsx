import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const skills = [
  { name: "React.js", icon: "⚛️" },
  { name: "Operating Systems", icon: "🖥️" },
  { name: "DBMS", icon: "🗄️" },
  { name: "Laravel", icon: "🔺" },
  { name: "PHP", icon: "🐘" },
  { name: "HTML / CSS / JS", icon: "🌐" },
  { name: "C++", icon: "⚙️" },
  { name: "Java", icon: "☕" },
];

export const Skills = () => (
  <section id="skills" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Skills & Stack"
        title={<>Technical <span className="text-gradient">Arsenal</span></>}
        description="Languages, frameworks and concepts I teach, build with, and research on."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{
              rotateY: 12,
              rotateX: -8,
              y: -8,
              transition: { duration: 0.3 },
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="relative group"
          >
            <div className="glass-card p-6 text-center h-full border-gradient transition-all group-hover:glow-primary">
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="font-display font-semibold">{s.name}</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
