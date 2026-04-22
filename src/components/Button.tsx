import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  isExternal?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  isExternal = false,
  type = "button",
  icon,
}: ButtonProps, ref) => {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border font-semibold transition-all duration-300";

  const variantStyles = {
    primary: "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent-deep)]",
    secondary: "border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[var(--ink)] hover:border-[var(--ink)]",
    outline:
      "border-[var(--ink)] bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]",
    ghost: "border-transparent bg-transparent text-[var(--ink)] hover:border-[var(--line)] hover:bg-white/70",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  };

  const disabledStyles = disabled ? "pointer-events-none opacity-50" : "";
  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={combinedClass}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;
