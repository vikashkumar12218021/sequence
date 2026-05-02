import { motion } from "framer-motion";
import { Briefcase, Users, Trophy } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  {
    icon: Briefcase,
    title: "IT Industry Experience",
    sub: "2 Years · 2022 — 2024",
    points: [
      "Full-stack development on production systems",
      "Hands-on with Laravel, PHP & modern JS stacks",
      "Real-world software engineering & deployment",
    ],
  },
  {
    icon: Users,
    title: "Teaching Experience",
    sub: "2 Years · Assistant Professor",
    points: [
      "Computer Science fundamentals & advanced topics",
      "Mentoring students through projects & research",
      "Curriculum design with industry alignment",
    ],
  },
  {
    icon: Trophy,
    title: "Placement Coordinator",
    sub: "Bridging campus to industry",
    points: [
      "Liaison between students & recruiters",
      "Interview preparation & soft-skill mentoring",
      "Strengthening company partnerships",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Experience"
        title={<>Where <span className="text-gradient">Industry</span> meets <span className="text-gradient">Academia</span></>}
        description="A unique blend of professional engineering and educational impact."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-25 transition-opacity blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 glow-primary">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{it.title}</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-4">
                  {it.sub}
                </p>
                <ul className="space-y-2">
                  {it.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
