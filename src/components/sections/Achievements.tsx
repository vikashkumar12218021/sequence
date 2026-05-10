import { motion } from "framer-motion";
import { Award, Medal, Factory, GraduationCap } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  { icon: Factory, title: "Tata Motors Internship", desc: "6-week summer internship at the DGM Engine Plant — Assembly Line." },
  { icon: GraduationCap, title: "IDTR CNC Workshop", desc: "4-week internship in CNC Engineering Workshop (Production)." },
  { icon: Award, title: "Heavy Manufacturing Specialization", desc: "Coursera specialization on heavy manufacturing processes." },
  { icon: Medal, title: "TPM Management Programme", desc: "Management Development Programme on Total Productive Maintenance — IDTR." },
];

export const Achievements = () => (
  <section id="achievements" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Achievements"
        title={<>Milestones & <span className="text-gradient">Recognition</span></>}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="neumorph p-6 text-center group"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-primary">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
