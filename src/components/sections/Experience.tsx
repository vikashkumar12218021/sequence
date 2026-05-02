import { motion } from "framer-motion";
import { GraduationCap, Server, Cloud, Network } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  {
    icon: GraduationCap,
    title: "Assistant Professor",
    org: "Lovely Professional University (CS&E), Jalandhar",
    sub: "July 2024 — Present",
    points: [
      "Teaching PHP (Server-Side Scripting) & Laravel (MVC)",
      "Upcoming: Django (Python) — PHP → Laravel → Django path",
      "Mentoring students, projects & research guidance",
    ],
  },
  {
    icon: Network,
    title: "Network Administrator",
    org: "Opstree Solutions Pvt. Ltd., Noida",
    sub: "July 2022 — Jan 2024",
    points: [
      "Monitoring with Zabbix, Kubernetes, GCP, Grafana, Prometheus",
      "Transaction systems: Rummy Circle, Razorpay",
      "Jenkins pipelines, cron jobs, memory & PID debugging",
      "Projects: Games 24x7, Miko, EZ Mall",
    ],
  },
  {
    icon: Cloud,
    title: "AWS Engineer",
    org: "Umbrella Infocare Pvt. Ltd., Noida",
    sub: "July 2021 — July 2022",
    points: [
      "AWS monitoring — EC2, RDS, ELB",
      "RCA, server diagnostics & Docker setup",
      "Clients: Herocorp, Clovia, Dabur, Sketchers",
    ],
  },
  {
    icon: Server,
    title: "Cloud Engineer & NOC Specialist",
    org: "Progressive Infotech Pvt. Ltd., Noida",
    sub: "June 2019 — Aug 2020",
    points: [
      "24x7 NOC monitoring & incident response",
      "Cloud infrastructure operations",
      "Linux administration & ticket resolution",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Experience"
        title={<>Where <span className="text-gradient">Industry</span> meets <span className="text-gradient">Academia</span></>}
        description="A unique blend of cloud engineering, monitoring, and educational impact."
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-25 transition-opacity blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 glow-primary">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{it.title}</h3>
                <p className="text-sm text-foreground/80 mb-1">{it.org}</p>
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-4">
                  {it.sub}
                </p>
                <ul className="space-y-2">
                  {it.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
