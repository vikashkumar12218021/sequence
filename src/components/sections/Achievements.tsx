import { motion } from "framer-motion";
import { Award, Medal, BookMarked, UserCheck } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  { icon: UserCheck, title: "Placement Coordinator", desc: "Driving 100+ student placements through industry partnerships." },
  { icon: BookMarked, title: "11 Research Publications", desc: "Peer-reviewed contributions in AI, ML, NLP and systems." },
  { icon: Award, title: "Academic Excellence", desc: "Consistent merit recognition through B.Tech and M.Tech." },
  { icon: Medal, title: "Best Mentor Recognition", desc: "Acknowledged by students for impact-driven guidance." },
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
