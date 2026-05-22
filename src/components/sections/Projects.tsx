import { motion } from "framer-motion";
import { Bot, ShoppingCart, Hotel, BarChart3, Globe } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const projects = [
  {
    icon: Bot,
    name: "SmartRMS — AI Request Automation",
    tag: "LPU · May 2025 – Present",
    desc: "AI chatbots & assistants modernizing request management with intent recognition and automated routing to departments.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: ShoppingCart,
    name: "Grosari-Wala — Grocery Platform",
    tag: "React · Node · MongoDB · Stripe",
    desc: "AI-enhanced grocery store with personalized recommendations, cart management, Stripe payments and secure auth.",
    color: "from-secondary to-primary",
  },
  {
    icon: Hotel,
    name: "HotelWilla — Django Booking App",
    tag: "Python · Django · MySQL",
    desc: "AI-powered hotel booking with personalized room suggestions and Django Forms for contact inquiries.",
    color: "from-accent to-secondary",
  },
  {
    icon: BarChart3,
    name: "SocialBoost — Marketing Platform",
    tag: "React · Node · AI Analytics",
    desc: "Automated social campaign scheduling with AI insights on optimal posting times and engagement dashboards.",
    color: "from-primary to-accent",
  },
  {
    icon: Globe,
    name: "WebVista Agency",
    tag: "Freelance · Full-Stack",
    desc: "Full-stack web dev for small businesses — responsive UX, SEO, AI behaviour insights and social integrations.",
    color: "from-secondary to-accent",
  },
];

export const Projects = () => (
  <section id="projects" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Projects"
        title={<>Selected <span className="text-gradient">Work</span></>}
        description="AI-powered apps, full-stack platforms and freelance products built end-to-end."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
