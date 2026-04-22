import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  isExternal?: boolean;
  type?: "button" | "submit" | "reset";
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
}: ButtonProps, ref) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variantStyles = {
    primary: "bg-cyan-400 text-black hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/50",
    secondary: "bg-purple-600 text-white hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50",
    outline:
      "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link href={href}>
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClass}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;
