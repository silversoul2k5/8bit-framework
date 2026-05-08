"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type MouseEvent, useState } from "react";

const portraitPosition = "object-[center_12%]";

export default function HeroPortrait() {
  const [pointer, setPointer] = useState({ x: 50, y: 38, active: false });

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
    <div className="group relative mx-auto w-full max-w-[360px] sm:max-w-[410px] xl:max-w-[450px]">
      <div className="absolute inset-x-[12%] bottom-2 h-12 rounded-full bg-black/18 blur-2xl" />

      <div
        className="relative aspect-[0.78] overflow-hidden rounded-[30px] border border-white/70 bg-white/72 shadow-[0_20px_70px_rgba(0,0,0,0.1)]"
        onMouseMove={updatePointer}
        onMouseEnter={() => setPointer((current) => ({ ...current, active: true }))}
        onMouseLeave={() => setPointer((current) => ({ ...current, active: false }))}
      >
        <Image
          src="/images/arjun-portrait.jpg"
          alt="Portrait of Arjun C"
          fill
          priority
          loading="eager"
          className={`h-full w-full object-cover ${portraitPosition} scale-[1.015] grayscale contrast-125 brightness-105 transition-transform duration-500 group-hover:scale-[1.04]`}
          sizes="(max-width: 768px) 82vw, (max-width: 1280px) 34vw, 450px"
        />

        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            clipPath: pointer.active
              ? `circle(128px at ${pointer.x}% ${pointer.y}%)`
              : "circle(0px at 50% 50%)",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
        >
          <Image
            src="/images/arjun-portrait.jpg"
            alt=""
            aria-hidden="true"
            fill
            className={`h-full w-full object-cover ${portraitPosition} scale-[1.015] transition-transform duration-500 group-hover:scale-[1.04]`}
            sizes="(max-width: 768px) 82vw, (max-width: 1280px) 34vw, 450px"
          />
        </motion.div>

        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/18 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </div>
  );
}
