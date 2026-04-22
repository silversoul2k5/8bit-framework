"use client";

import { useEffect, useRef } from "react";

const dotColor = "rgba(10, 9, 9, 0.18)";
const accentColor = "rgba(156, 100, 85, 0.42)";

export default function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0.72, y: 0.36 };
    let frame = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(bounds.width * pixelRatio);
      canvas.height = Math.floor(bounds.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width;
      pointer.y = (event.clientY - bounds.top) / bounds.height;
    };

    const draw = (time = 0) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const seconds = time * 0.001;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(253, 253, 253, 0.92)";
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalAlpha = 0.08;
      context.fillStyle = "#0a0909";
      context.font = `800 ${Math.min(width * 0.27, 260)}px Arial, Helvetica, sans-serif`;
      context.textBaseline = "middle";
      context.fillText("8BF", width * 0.06, height * 0.54);
      context.restore();

      const step = width < 720 ? 28 : 34;
      const radius = width < 720 ? 2.1 : 2.4;
      const pointerX = pointer.x * width;
      const pointerY = pointer.y * height;

      for (let y = step * 1.2; y < height; y += step) {
        for (let x = step * 0.8; x < width; x += step) {
          const distance = Math.hypot(x - pointerX, y - pointerY);
          const wave = Math.sin(seconds + x * 0.018 + y * 0.024) * 0.5 + 0.5;
          const influence = Math.max(0, 1 - distance / 220);
          const size = radius + influence * 4 + wave * 0.8;

          context.beginPath();
          context.fillStyle = influence > 0.15 ? accentColor : dotColor;
          context.arc(x, y, size, 0, Math.PI * 2);
          context.fill();
        }
      }

      context.strokeStyle = "rgba(10, 9, 9, 0.08)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(width * 0.58, 0);
      context.lineTo(width * 0.72, height);
      context.moveTo(width * 0.9, 0);
      context.lineTo(width * 0.76, height);
      context.stroke();

      if (!reducedMotion.matches) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
