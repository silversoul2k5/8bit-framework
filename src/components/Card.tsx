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
      className={`relative rounded-xl backdrop-blur-md border border-cyan-400/20 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hoverEffect === "scale" || hoverEffect === "both"
          ? {
              scale: 1.02,
              boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)",
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
