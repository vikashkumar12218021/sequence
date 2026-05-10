import { motion } from "framer-motion";
import { Cog, Factory } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  {
    icon: Cog,
    title: "Diploma Trainee Engineer — Tool Room",
    org: "Mahindra & Mahindra Ltd · Tool & Die Plant 2",
    sub: "Oct 2021 — Oct 2022",
    points: [
      "Assembly of press tools: draw, forming, blank & pierce, trim and progressive dies",
      "Quality checking and inspection of die parts and sheet-metal components",
      "Static & dynamic checking of sheet-metal components and dies",
      "Inspection of sub-contracted die parts, trim-line passing and CAM alignment",
      "Trim clearance verification and safe shop-floor practices",
    ],
  },
  {
    icon: Factory,
    title: "InPlant Trainee — New Product Development",
    org: "Kiswok Industries Pvt. Ltd.",
    sub: "Jan 2020 — Sep 2020",
    points: [
      "Worked with the NPD team on casting product development",
      "Hands-on exposure to design and manufacturing of casting materials",
      "Process documentation and inspection support for new components",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Experience"
        title={<>Where <span className="text-gradient">Industry</span> meets <span className="text-gradient">Craft</span></>}
        description="Real shop-floor experience across press-tool assembly and new product development."
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
