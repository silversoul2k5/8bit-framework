"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useMemo, type MouseEvent } from "react";

const wordmarkRows = [
  { text: "8BIT", variant: "outline" as const },
  { text: "FRAMEWORK", variant: "solid" as const },
];

function AnimatedLetter({
  letter,
  index,
  rowIndex,
  totalInRow,
  pointerX,
  pointerY,
}: {
  letter: string;
  index: number;
  rowIndex: number;
  totalInRow: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const centeredIndex = index - (totalInRow - 1) / 2;
  const centeredRow = rowIndex - (wordmarkRows.length - 1) / 2;

  const x = useTransform(pointerX, [-0.5, 0.5], [centeredIndex * -10, centeredIndex * 10]);
  const y = useTransform(pointerY, [-0.5, 0.5], [centeredRow * -18, centeredRow * 18]);
  const rotate = useTransform(pointerX, [-0.5, 0.5], [centeredIndex * -2.2, centeredIndex * 2.2]);

  return (
    <motion.span
      className="relative inline-block will-change-transform"
      style={{ x, y, rotateZ: rotate }}
    >
      {letter}
    </motion.span>
  );
}

export default function InteractiveWordmark() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), {
    stiffness: 140,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 140,
    damping: 22,
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const handleLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const glowX = useTransform(pointerX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ["30%", "70%"]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.76), rgba(255,255,255,0.08) 32%, transparent 58%)`;
  const mappedRows = useMemo(() => wordmarkRows, []);

  return (
    <div
      className="relative mx-auto w-full max-w-[1380px] cursor-default px-1 pt-4 md:pt-6"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1600 }}
      aria-label="8bit framework"
    >
      <motion.div
        className="absolute inset-[10%_3%_12%_3%] opacity-80 blur-3xl"
        style={{ background: spotlight }}
      />

      <motion.div
        className="relative"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="space-y-[-0.12em] text-center uppercase leading-[0.88]">
          {mappedRows.map((row, rowIndex) => (
            <div
              key={row.text}
              className={`flex items-center justify-center gap-x-[0.035em] text-[clamp(2rem,8.3vw,7.6rem)] font-black tracking-[-0.04em] md:text-[clamp(3.25rem,7.5vw,9.4rem)] ${
                row.variant === "outline" ? "outline-title" : "text-[var(--ink)]"
              }`}
            >
              {row.text.split("").map((letter, index) => (
                <AnimatedLetter
                  key={`${row.text}-${letter}-${index}`}
                  letter={letter}
                  index={index}
                  rowIndex={rowIndex}
                  totalInRow={row.text.length}
                  pointerX={pointerX}
                  pointerY={pointerY}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
