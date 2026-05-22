import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const trainings = [
  { title: "Web Development Intern — Tata Steel", venue: "Internship", abstract: "Built a static QR Code Generator website with download support for contact and business QR codes (Jun–Aug 2024)." },
  { title: "Programming Fundamentals in Kotlin", venue: "Meta", abstract: "Foundational Kotlin programming course on Coursera by Meta (Nov 2024)." },
  { title: "Introduction to Android App Development", venue: "Meta", abstract: "Android app development essentials covered through Meta's official program (Oct 2024)." },
  { title: "Programming in C++", venue: "Codio", abstract: "Hands-on C++ programming certification focusing on OOP and STL (Nov 2023)." },
  { title: "Programming in Java", venue: "NPTEL", abstract: "NPTEL-certified Java programming course covering core language and OOP principles (Oct 2023)." },
  { title: "WebVista Agency — Freelance", venue: "Self-led", abstract: "Ongoing freelance practice in full-stack web dev, SEO and AI-driven customer behaviour insights." },
];

export const Research = () => (
  <section id="trainings" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Trainings & Certifications"
        title={<>Continuous <span className="text-gradient">Learning</span></>}
        description="Internships and certifications across AI, mobile, web and core programming."
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
