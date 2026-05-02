import { motion, MotionValue, useTransform } from "framer-motion";
import { GraduationCap, Sparkles, Briefcase, Code2, FlaskConical, Rocket } from "lucide-react";

interface Props {
  progress: MotionValue<number>;
}

// Each chapter occupies a window of scroll progress.
const chapters = [
  { start: 0.00, end: 0.12 }, // 1 Hero intro
  { start: 0.15, end: 0.28 }, // 2 Identity
  { start: 0.31, end: 0.45 }, // 3 Education
  { start: 0.48, end: 0.62 }, // 4 Experience
  { start: 0.63, end: 0.76 }, // 5 Skills
  { start: 0.77, end: 0.90 }, // 6 Research
  { start: 0.91, end: 1.00 }, // 7 CTA
];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const useChapterOpacity = (progress: MotionValue<number>, idx: number) => {
  const { start, end } = chapters[idx];
  const fade = 0.04;
  const a = clamp01(start - fade);
  const b = clamp01(start + fade);
  const c = clamp01(end - fade);
  const d = clamp01(end + fade);
  // Ensure strictly monotonic non-decreasing
  const b2 = Math.max(b, a);
  const c2 = Math.max(c, b2);
  const d2 = Math.max(d, c2);
  return useTransform(progress, [a, b2, c2, d2], [0, 1, 1, 0]);
};

const useChapterY = (progress: MotionValue<number>, idx: number) => {
  const { start, end } = chapters[idx];
  return useTransform(progress, [start, end], [40, -40]);
};

export const ScrollyOverlay = ({ progress }: Props) => {
  // Pre-compute all motion values (hooks order)
  const o0 = useChapterOpacity(progress, 0);
  const o1 = useChapterOpacity(progress, 1);
  const o2 = useChapterOpacity(progress, 2);
  const o3 = useChapterOpacity(progress, 3);
  const o4 = useChapterOpacity(progress, 4);
  const o5 = useChapterOpacity(progress, 5);
  const o6 = useChapterOpacity(progress, 6);

  const y0 = useChapterY(progress, 0);
  const y1 = useChapterY(progress, 1);
  const y2 = useChapterY(progress, 2);
  const y3 = useChapterY(progress, 3);
  const y4 = useChapterY(progress, 4);
  const y5 = useChapterY(progress, 5);
  const y6 = useChapterY(progress, 6);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {/* 1. HERO INTRO */}
      <motion.div
        style={{ opacity: o0, y: y0 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
          A Scrollytelling Portfolio
        </div>
        <h1 className="font-display text-5xl md:text-8xl font-black leading-[0.95] mb-4">
          Lalit <span className="text-gradient">Verma</span>
        </h1>
        <p className="text-base md:text-lg text-foreground/80 max-w-xl">
          Assistant Professor · AI &amp; ML Researcher
        </p>
        <p className="text-xs md:text-sm font-mono text-muted-foreground mt-2">
          Lovely Professional University
        </p>
        <div className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>

      {/* 2. IDENTITY */}
      <motion.div
        style={{ opacity: o1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <Sparkles className="w-8 h-8 text-primary mb-6 animate-pulse" />
        <h2 className="font-display text-4xl md:text-7xl font-bold leading-tight max-w-4xl">
          Shaping <span className="text-gradient">Future Engineers</span>
          <br /> with AI &amp; Innovation
        </h2>
      </motion.div>

      {/* 3. EDUCATION TIMELINE */}
      <motion.div
        style={{ opacity: o2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="w-5 h-5 text-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Academic Journey
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 max-w-5xl w-full">
          {[
            { t: "B.Tech", s: "Computer Science" },
            { t: "M.Tech", s: "Amity University" },
            { t: "PhD", s: "Ongoing Research" },
          ].map((it, i) => (
            <div key={it.t} className="flex items-center gap-4 md:flex-1">
              <div className="glass-card px-6 py-5 text-center w-full md:w-auto md:flex-1">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {it.t}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                  {it.s}
                </div>
              </div>
              {i < 2 && (
                <div className="hidden md:block h-[1px] w-10 bg-gradient-to-r from-primary to-accent" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 4. EXPERIENCE */}
      <motion.div
        style={{ opacity: o3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Industry × Academia
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl w-full">
          {[
            { r: "Assistant Professor", o: "Lovely Professional University" },
            { r: "Network Administrator", o: "Opstree Solutions" },
            { r: "AWS Engineer", o: "Umbrella Infocare" },
            { r: "Cloud / NOC", o: "Progressive Infotech" },
          ].map((x) => (
            <div key={x.r} className="glass-card p-4">
              <div className="font-display font-bold">{x.r}</div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {x.o}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. SKILLS */}
      <motion.div
        style={{ opacity: o4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Technical Stack
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl">
          {["React", "PHP", "Laravel", "Django", "Python", "AI / ML", "AWS", "GCP", "Docker", "Kubernetes"].map(
            (s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full glass font-mono text-sm hover:glow-primary"
              >
                {s}
              </motion.span>
            )
          )}
        </div>
      </motion.div>

      {/* 6. RESEARCH */}
      <motion.div
        style={{ opacity: o5, y: y5 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <FlaskConical className="w-8 h-8 text-primary mb-4 animate-pulse" />
        <div className="font-display text-7xl md:text-9xl font-black text-gradient leading-none">
          11+
        </div>
        <div className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mt-2 mb-6">
          Research Publications
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
          {["AI E-learning", "Bitcoin Prediction", "Skin Cancer Detection", "Fight Detection", "Flood Prediction"].map(
            (t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            )
          )}
        </div>
      </motion.div>

      {/* 7. CTA */}
      <motion.div
        style={{ opacity: o6, y: y6 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <Rocket className="w-8 h-8 text-primary mb-4" />
        <h2 className="font-display text-4xl md:text-7xl font-bold leading-tight max-w-3xl mb-6">
          Let&apos;s build the <span className="text-gradient">future</span> together.
        </h2>
        <a
          href="#contact"
          className="pointer-events-auto inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};
