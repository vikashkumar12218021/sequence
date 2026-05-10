import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const trainings = [
  { title: "Mahindra & Mahindra — Tool & Die Plant 2", venue: "Diploma Trainee", abstract: "12 months in the DIE Shop Assembly Department, working on draw, forming, blank, pierce, trim and progressive dies." },
  { title: "Tata Motors — DGM Engine Plant", venue: "Internship", abstract: "6-week summer internship on the engine assembly line during 7th semester of B.Tech." },
  { title: "IDTR — CNC Engineering Workshop", venue: "Internship", abstract: "4-week summer internship in 4th semester focused on CNC production processes." },
  { title: "Kiswok Industries — NPD", venue: "InPlant Training", abstract: "9 months supporting the New Product Development team on casting product design and validation." },
  { title: "Heavy Manufacturing Specialization", venue: "Coursera", abstract: "Specialization covering large-scale manufacturing systems, processes and quality." },
  { title: "TPM Management Development Programme", venue: "IDTR", abstract: "Programme on Total Productive Maintenance principles and shop-floor implementation." },
];

export const Research = () => (
  <section id="trainings" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Trainings & Internships"
        title={<>Industry <span className="text-gradient">Exposure</span></>}
        description="Internships, on-the-job trainings and professional programmes across leading manufacturing setups."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {trainings.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="relative group"
          >
            <div className="glass-card p-6 h-full flex flex-col transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {p.venue}
                </span>
              </div>
              <h3 className="font-display font-bold text-base mb-2 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">
                {p.abstract}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
