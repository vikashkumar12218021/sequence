import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const testimonials = [
  { name: "Shop Floor Lead", role: "Mahindra & Mahindra · Tool Room", text: "Ankit consistently showed strong attention to detail during press-tool assembly and was reliable on quality checks." },
  { name: "NPD Engineer", role: "Kiswok Industries", text: "A quick learner who picked up casting fundamentals fast and contributed meaningfully during his InPlant training." },
  { name: "Faculty", role: "Arka Jain University", text: "Disciplined and curious — Ankit balances theory with practical tool-room experience exceptionally well." },
  { name: "Peer", role: "B.Tech Mechanical", text: "Always the go-to person for CAD doubts — great with SolidWorks and CATIA workflows." },
];

export const Testimonials = () => (
  <section id="testimonials" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Testimonials"
        title={<>What People <span className="text-gradient">Say</span></>}
        description="Feedback from mentors, peers and shop-floor leads."
      />
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card p-7 relative"
          >
            <Quote className="absolute top-5 right-5 w-10 h-10 text-primary/20" />
            <p className="text-foreground/90 leading-relaxed mb-5 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
