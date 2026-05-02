import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const testimonials = [
  { name: "Ananya Sharma", role: "B.Tech CSE, Final Year", text: "Sir's mentoring transformed my approach to problem solving. He doesn't just teach — he ignites curiosity." },
  { name: "Rahul Yadav", role: "M.Tech Graduate · Placed at MNC", text: "From research guidance to placement prep, his support was unwavering. A true mentor in every sense." },
  { name: "Priya Singh", role: "Research Scholar", text: "Collaborating with him on ML research opened my eyes to how deep theoretical foundations meet real impact." },
  { name: "Aman Verma", role: "B.Tech CSE, 3rd Year", text: "His OS and DBMS classes are legendary — clear, intuitive and packed with real-world examples." },
];

export const Testimonials = () => (
  <section id="testimonials" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Testimonials"
        title={<>Voices of <span className="text-gradient">Students</span></>}
        description="What students and mentees have to say about the journey."
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
