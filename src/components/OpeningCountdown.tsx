"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = ["03", "02", "01", "GO"];

export default function OpeningCountdown() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"open" | "closing" | "closed">("open");

  useEffect(() => {
    const stepTimers = steps.map((_, stepIndex) =>
      window.setTimeout(() => {
        setIndex(stepIndex);
      }, stepIndex * 620)
    );

    const closeTimer = window.setTimeout(() => setPhase("closing"), 620 * steps.length + 180);
    const removeTimer = window.setTimeout(() => setPhase("closed"), 620 * steps.length + 760);

    return () => {
      stepTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "closed") {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(236,236,234,0.96)] backdrop-blur-xl"
      animate={{
        opacity: phase === "closing" ? 0 : 1,
        pointerEvents: phase === "closing" ? "none" : "auto",
      }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <div className="flex w-full max-w-[1400px] items-end justify-between gap-8 px-6 md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
            Opening sequence
          </p>
          <p className="mt-4 text-2xl font-semibold uppercase md:text-4xl">
            8bit-framework
          </p>
        </div>

        <div className="text-right">
          <motion.p
            key={steps[index]}
            className="text-[clamp(5rem,18vw,14rem)] font-black leading-none text-[var(--ink)]"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            {steps[index]}
          </motion.p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
            Studio launch
          </p>
        </div>
      </div>
    </motion.div>
  );
}
