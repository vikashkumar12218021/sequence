import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, Globe } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const certifications = [
  "Android with Core Java — Netcamp",
  "Web Development — Netcamp",
  "Networking — Netcamp",
  "Java — NASSCOM",
];

const fdps = [
  "AI & ML Certification (2024 — 2025)",
  "Full-Stack Development — React, Node, Django",
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
  { name: "French", level: "Basic" },
  { name: "Japanese", level: "Basic" },
];

const Card = ({
  icon: Icon,
  title,
  items,
  delay = 0,
}: {
  icon: typeof BadgeCheck;
  title: string;
  items: React.ReactNode[];
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6 }}
    className="glass-card p-6 group relative overflow-hidden"
  >
    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-25 transition-opacity blur-2xl" />
    <div className="relative">
      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 glow-primary">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <h3 className="font-display font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary mt-1">▸</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export const Credentials = () => (
  <section id="credentials" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Credentials"
        title={<>Certifications, FDPs & <span className="text-gradient">Languages</span></>}
        description="Continuous learning across technologies and cultures."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card icon={BadgeCheck} title="Certifications" items={certifications} delay={0} />
        <Card icon={Sparkles} title="Faculty Development" items={fdps} delay={0.1} />
        <Card
          icon={Globe}
          title="Languages"
          items={languages.map((l) => (
            <span key={l.name}>
              <span className="text-foreground font-medium">{l.name}</span>{" "}
              <span className="text-xs font-mono text-primary">· {l.level}</span>
            </span>
          ))}
          delay={0.2}
        />
      </div>
    </div>
  </section>
);
