import { motion } from "framer-motion";
import { Code2, Briefcase } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  {
    icon: Code2,
    title: "Web Development Intern",
    org: "Tata Steel",
    sub: "Jun 2024 — Aug 2024",
    points: [
      "Built a static QR Code Generator website from the ground up",
      "Integrated download functionality for contact and business QR codes",
      "Focused on clean UI, responsive layout and zero-dependency performance",
    ],
  },
  {
    icon: Briefcase,
    title: "Founder & Full-Stack Developer — WebVista Agency",
    org: "Freelance",
    sub: "May 2023 — Present",
    points: [
      "Led full-stack web development for small businesses",
      "Delivered responsive design, SEO and social media integrations",
      "Provided AI-driven insights into customer behaviour on client websites",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Experience"
        title={<>Where <span className="text-gradient">Code</span> meets <span className="text-gradient">Impact</span></>}
        description="Real-world internship and freelance work across web, AI and product development."
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-25 transition-opacity blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 glow-primary">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{it.title}</h3>
                <p className="text-sm text-foreground/80 mb-1">{it.org}</p>
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
