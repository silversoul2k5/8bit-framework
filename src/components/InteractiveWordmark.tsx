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

const letters = "8BIT FRAMEWORK".split("");

function AnimatedLetter({
  letter,
  index,
  pointerX,
  pointerY,
}: {
  letter: string;
  index: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const offset = ((index % 7) - 3) * 0.16;
  const lift = (Math.floor(index / 7) - 0.5) * 0.12;
  const x = useTransform(pointerX, [-0.5, 0.5], [-offset * 42, offset * 42]);
  const y = useTransform(pointerY, [-0.5, 0.5], [-lift * 42, lift * 42]);
  const rotate = useTransform(pointerX, [-0.5, 0.5], [-offset * 22, offset * 22]);

  if (letter === " ") {
    return <span className="w-[0.22em]" aria-hidden="true" />;
  }

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

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), {
    stiffness: 160,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 160,
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
  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.78), rgba(255,255,255,0.08) 28%, transparent 55%)`;
  const mappedLetters = useMemo(() => letters, []);

  return (
    <div
      className="relative mx-auto w-full max-w-[1620px] cursor-default px-1 md:px-0"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1800 }}
    >
      <motion.div
        className="absolute inset-[8%_3%_14%_3%] rounded-[42px] opacity-80 blur-3xl"
        style={{ background: spotlight }}
      />

      <motion.div
        className="relative"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-[0.06em] gap-y-0 uppercase leading-[0.82] text-[clamp(4.6rem,15vw,13rem)] font-black tracking-[-0.02em] text-[var(--ink)] lg:text-[clamp(7rem,14vw,14rem)]">
          {mappedLetters.map((letter, index) => (
            <AnimatedLetter
              key={`${letter}-${index}`}
              letter={letter}
              index={index}
              pointerX={pointerX}
              pointerY={pointerY}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
