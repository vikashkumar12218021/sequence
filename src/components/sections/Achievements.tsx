import { motion } from "framer-motion";
import { Award, Trophy, Bot, Code2 } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  { icon: Trophy, title: "1st Runner-up · Game Dev Contest", desc: "Awarded 1st Runner-up in a Game Development Competition (Feb 2025)." },
  { icon: Bot, title: "AI Product Builder", desc: "Designed and shipped multiple AI-powered apps including SmartRMS and Grosari-Wala." },
  { icon: Code2, title: "Tata Steel Internship", desc: "Successfully delivered the Tata Steel QR Generator project during summer internship." },
  { icon: Award, title: "Meta Certified Developer", desc: "Certified by Meta in Kotlin & Android app development fundamentals." },
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
