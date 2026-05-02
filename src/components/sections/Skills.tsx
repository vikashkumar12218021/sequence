import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const skillGroups = [
  { title: "Programming", items: ["C", "C++", "Java"] },
  { title: "Web", items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Django"] },
  { title: "Core CS", items: ["DBMS", "Data Structures", "Operating Systems"] },
  { title: "AI / ML", items: ["Machine Learning", "Artificial Intelligence", "Deep Learning"] },
  { title: "Cloud & Networking", items: ["AWS", "GCP", "Networking", "Linux"] },
  { title: "Other", items: ["Software Testing", "Android"] },
];

const tools = [
  "AWS", "GCP", "Jenkins", "Dynatrace", "Grafana",
  "Prometheus", "Zabbix", "Nagios XI", "Kubernetes", "Docker",
  "ServiceNow", "Freshservice", "Zoho People",
];

export const Skills = () => (
  <section id="skills" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Skills & Stack"
        title={<>Technical <span className="text-gradient">Arsenal</span></>}
        description="Languages, frameworks and platforms I teach, build with, and operate at scale."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, rotateX: 4 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="glass-card p-6 group"
          >
            <h3 className="font-display font-bold text-lg mb-4 text-gradient">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="font-display text-2xl font-bold text-center mb-8">
          DevOps & <span className="text-gradient">Tools</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="px-4 py-2 rounded-xl glass font-mono text-sm hover:glow-primary transition-all cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
