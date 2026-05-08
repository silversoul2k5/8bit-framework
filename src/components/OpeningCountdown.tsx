"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = ["03", "02", "01", "GO"];
const STORAGE_KEY = "8bit-framework-opening-seen";

export default function OpeningCountdown() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"open" | "closing" | "closed">("open");

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "true") {
      const skipTimer = window.setTimeout(() => {
        setPhase("closed");
      }, 0);

      return () => {
        window.clearTimeout(skipTimer);
      };
    }

    window.sessionStorage.setItem(STORAGE_KEY, "true");

    const stepTimers = steps.map((_, stepIndex) =>
      window.setTimeout(() => {
        setIndex(stepIndex);
      }, stepIndex * 520)
    );

    const closeTimer = window.setTimeout(() => setPhase("closing"), 520 * steps.length + 120);
    const removeTimer = window.setTimeout(() => setPhase("closed"), 520 * steps.length + 680);

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
      <div className="flex w-full max-w-[1420px] flex-col gap-12 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
            Opening sequence
          </p>
          <p className="mt-4 text-2xl font-semibold uppercase md:text-4xl">
            8bit-framework
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Motion-led frontend builds for startups, launches, and polished web experiences.
          </p>
        </div>

        <div className="text-left md:text-right">
          <motion.p
            key={steps[index]}
            className="text-[clamp(4.5rem,18vw,13rem)] font-black leading-none text-[var(--ink)]"
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
