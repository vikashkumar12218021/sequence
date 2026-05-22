import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero3D } from "../Hero3D";
import { Typewriter } from "../Typewriter";
import { CountUp } from "../CountUp";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">
              Lovely Professional University · Punjab
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient animate-gradient bg-gradient-hero">
              Vikash Kumar
            </span>
          </h1>

          <div className="text-lg sm:text-xl text-muted-foreground font-mono h-7">
            <Typewriter
              words={[
                "AI Developer",
                "Web & App Developer",
                "Full-Stack Engineer",
                "Digital Content Creator",
              ]}
            />
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Building intelligent{" "}
            <span className="text-foreground font-semibold">AI Chatbots</span>,{" "}
            <span className="text-gradient font-semibold">Web & Mobile Apps</span>.
            Blending modern stacks like React, Node.js and Django with AI/NLP.
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
            <a href="mailto:vk5march2003@gmail.com" className="hover:text-primary transition-colors">vk5march2003@gmail.com</a>
            <span className="hidden sm:inline">·</span>
            <a href="tel:+919693880632" className="hover:text-primary transition-colors">+91 9693880632</a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-full glow-primary group"
              asChild
            >
              <a href="/Vikash_Kumar_CV.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/40 hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 max-w-md">
            {[
              { num: 7.15, suffix: "", label: "B.Tech CGPA" },
              { num: 5, suffix: "+", label: "Projects Shipped" },
              { num: 4, suffix: "", label: "Certifications" },
            ].map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[620px]"
        >
          <Hero3D />
          <motion.div
            className="absolute top-10 left-4 glass-card px-4 py-2 font-mono text-xs"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-primary">{"{"}</span> AI · NLP{" "}
            <span className="text-primary">{"}"}</span>
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-4 glass-card px-4 py-2 font-mono text-xs"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="text-secondary">React</span> · Node · Django
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
