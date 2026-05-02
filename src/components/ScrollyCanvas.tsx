import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollyOverlay } from "./ScrollyOverlay";

const FRAME_COUNT = 82;
const framePath = (i: number) =>
  `/sequence/frame_${i.toString().padStart(2, "0")}.webp`;

export const ScrollyCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all frames
  useEffect(() => {
    let cancelled = false;
    let count = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = img.onerror = () => {
        if (cancelled) return;
        count++;
        setLoaded(count);
        if (count === FRAME_COUNT) setReady(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
    };
  }, []);

  // Setup canvas size (HiDPI)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  const drawFrame = (frame: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[frame];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    // cover behavior
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // Bind scroll → frame with rAF
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const target = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(v * (FRAME_COUNT - 1)))
      );
      if (target === currentFrameRef.current) return;
      currentFrameRef.current = target;
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(target));
    });
    return () => {
      unsubscribe();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress]);

  // Draw the first frame as soon as it loads
  useEffect(() => {
    if (loaded > 0) drawFrame(0);
  }, [loaded]);

  // Cinematic vignette opacity tied to scroll
  const vignette = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.35, 0.65]);

  const pct = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "min(600vh, calc(100vh * 6))" }}
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />
        {/* Cinematic dark vignette + neural tint */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)",
            opacity: vignette,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, hsl(var(--primary)/0.25), transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent)/0.2), transparent 55%)",
          }}
        />

        {/* Loading overlay */}
        {!ready && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-background">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Initializing Neural Sequence
            </div>
            <div className="h-[2px] w-64 overflow-hidden rounded-full bg-primary/15">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-3 font-mono text-[10px] text-muted-foreground">
              {pct}% · {loaded}/{FRAME_COUNT} frames
            </div>
          </div>
        )}

        {/* Scroll-driven storytelling overlay */}
        <ScrollyOverlay progress={scrollYProgress} />

        {/* Scroll progress bar (top) */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-40 origin-left"
          style={{ scaleX: scrollYProgress, width: "100%" }}
        />
      </div>
    </div>
  );
};
