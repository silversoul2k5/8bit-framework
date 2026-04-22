import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  highlight?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  highlight,
}: SectionTitleProps) => {
  const textAlign = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";
  const subtitleAlign = align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "";

  return (
    <motion.div
      className={textAlign}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-semibold leading-[0.98] md:text-6xl">
        {title}
        {highlight && (
          <span className="text-[var(--accent)]">
            {" "}
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg ${subtitleAlign}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
