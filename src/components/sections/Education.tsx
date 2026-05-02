import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Brain } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    period: "2019 — 2022",
    place: "Foundations of CS, programming & systems",
    color: "from-primary to-primary-glow",
  },
  {
    icon: BookOpen,
    title: "M.Tech in Computer Science",
    period: "2022 — 2024",
    place: "Advanced algorithms, ML & distributed systems",
    color: "from-secondary to-primary",
  },
  {
    icon: Brain,
    title: "PhD in AI & Machine Learning",
    period: "Ongoing",
    place: "Research in deep learning & intelligent systems",
    color: "from-accent to-secondary",
  },
];

export const Education = () => (
  <section id="education" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Education"
        title={<>Academic <span className="text-gradient">Journey</span></>}
        description="A continuous pursuit of knowledge from undergraduate foundations to doctoral research."
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-px" />

        {items.map((item, i) => {
          const Icon = item.icon;
          const left = i % 2 === 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                left ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className={`pl-12 md:pl-0 ${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ y: -6, rotateX: 5, rotateY: left ? -5 : 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="glass-card p-6 inline-block w-full"
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${item.color} text-primary-foreground mb-3`}>
                    {item.period}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                </motion.div>
              </div>

              <div className="hidden md:block" />

              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center glow-primary border-4 border-background`}>
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
