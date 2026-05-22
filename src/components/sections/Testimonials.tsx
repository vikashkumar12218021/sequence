import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const testimonials = [
  { name: "Project Mentor", role: "Tata Steel · Web Dev Internship", text: "Vikash delivered the QR Code Generator project ahead of schedule with clean, well-structured code." },
  { name: "LPU Faculty", role: "Computer Science Department", text: "A consistent performer with a real passion for AI — his SmartRMS project showcased great engineering depth." },
  { name: "Client", role: "WebVista Agency", text: "Vikash is responsive, creative and technically sharp. Our site's conversions improved noticeably after his work." },
  { name: "Peer", role: "B.Tech CSE · LPU", text: "Go-to person for anything React, Node or AI — explains concepts patiently and ships fast." },
];

export const Testimonials = () => (
  <section id="testimonials" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Testimonials"
        title={<>What People <span className="text-gradient">Say</span></>}
        description="Feedback from mentors, faculty, clients and peers."
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
