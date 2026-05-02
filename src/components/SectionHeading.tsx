import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center max-w-2xl mx-auto mb-14"
  >
    <div className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3 px-3 py-1 rounded-full glass">
      {eyebrow}
    </div>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);
