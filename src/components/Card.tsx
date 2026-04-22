import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: "scale" | "glow" | "both";
  delay?: number;
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = "",
  hoverEffect = "scale",
  delay = 0,
  onClick,
}: CardProps, ref) => {
  return (
    <motion.div
      ref={ref}
      className={`relative rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_20px_80px_rgba(10,9,9,0.06)] backdrop-blur-md ${className}`}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hoverEffect === "scale" || hoverEffect === "both"
          ? {
              y: -6,
              boxShadow: "0 26px 90px rgba(10, 9, 9, 0.1)",
            }
          : {}
      }
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;
