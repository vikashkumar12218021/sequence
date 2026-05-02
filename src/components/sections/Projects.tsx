import { motion } from "framer-motion";
import { Smartphone, TrendingUp, ScanFace, BookOpen } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const projects = [
  {
    icon: Smartphone,
    name: "Video Surveillance System",
    tag: "Android · Java",
    desc: "Mobile-based video surveillance with real-time streaming and motion-trigger alerts.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: TrendingUp,
    name: "Bitcoin Prediction Model",
    tag: "Python · LSTM",
    desc: "Deep-learning sequential model forecasting Bitcoin price using historical OHLCV data.",
    color: "from-secondary to-primary",
  },
  {
    icon: ScanFace,
    name: "Facial Recognition Attendance",
    tag: "OpenCV · ML",
    desc: "Automated attendance pipeline using face detection & recognition for classrooms.",
    color: "from-accent to-secondary",
  },
  {
    icon: BookOpen,
    name: "AI E-learning Platform",
    tag: "Django · AI",
    desc: "Adaptive learning system that personalizes content delivery using AI recommendations.",
    color: "from-primary to-accent",
  },
];

export const Projects = () => (
  <section id="projects" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Projects"
        title={<>Selected <span className="text-gradient">Work</span></>}
        description="Applied projects spanning mobile, AI, computer vision and adaptive learning."
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: 4 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${p.color} opacity-10 group-hover:opacity-25 transition-opacity blur-2xl`} />
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 glow-primary`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-3">{p.tag}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
