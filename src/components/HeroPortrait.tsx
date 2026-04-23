"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type MouseEvent, useState } from "react";

const portraitPosition = "object-[center_14%]";

export default function HeroPortrait() {
  const [pointer, setPointer] = useState({ x: 50, y: 36, active: false });

  const updatePointer = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setPointer({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      active: true,
    });
  };

  return (
    <div className="group relative mx-auto w-full max-w-[480px] xl:max-w-[520px]">
      <div className="absolute inset-x-[10%] bottom-2 h-14 rounded-full bg-black/20 blur-2xl" />

      <div
        className="relative aspect-[0.8] overflow-hidden rounded-[32px] border border-white/70 bg-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.12)]"
        onMouseMove={updatePointer}
        onMouseEnter={() => setPointer((current) => ({ ...current, active: true }))}
        onMouseLeave={() => setPointer((current) => ({ ...current, active: false }))}
      >
        <Image
          src="/images/arjun-portrait.jpg"
          alt="Portrait of Arjun C"
          fill
          priority
          className={`h-full w-full object-cover ${portraitPosition} scale-[1.02] grayscale contrast-125 brightness-105 transition-transform duration-500 group-hover:scale-[1.05]`}
          sizes="(max-width: 768px) 70vw, 420px"
        />

        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            clipPath: pointer.active
              ? `circle(140px at ${pointer.x}% ${pointer.y}%)`
              : "circle(0px at 50% 50%)",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
        >
          <Image
            src="/images/arjun-portrait.jpg"
            alt=""
            aria-hidden="true"
            fill
            className={`h-full w-full object-cover ${portraitPosition} scale-[1.02] transition-transform duration-500 group-hover:scale-[1.05]`}
            sizes="(max-width: 768px) 70vw, 420px"
          />
        </motion.div>

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/12 to-transparent" />
      </div>
    </div>
  );
}
