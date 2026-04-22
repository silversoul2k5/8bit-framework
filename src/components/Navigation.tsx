"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Studio", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Stack", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-[var(--line)] bg-[var(--paper)]/82 backdrop-blur-xl" : "bg-transparent"
      }`}
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-shell flex items-center justify-between py-4">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("#home");
          }}
          className="group flex items-center gap-3 text-sm font-semibold text-[var(--ink)]"
          aria-label="Go to 8bit-framework home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]">
            8
          </span>
          <span className="hidden sm:block">8bit-framework</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <a
          href="https://www.linkedin.com/in/arjun-c-518455335/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-10 items-center gap-2 rounded-lg border border-[var(--line)] bg-white/70 px-4 text-sm font-semibold text-[var(--ink)] hover:border-[var(--ink)] lg:inline-flex"
        >
          <span>LinkedIn</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <motion.button
          className="rounded-lg border border-[var(--line)] bg-white/70 p-2 text-[var(--ink)] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </motion.button>
      </div>

      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="mx-4 mb-4 flex flex-col gap-2 rounded-lg border border-[var(--line)] bg-[var(--paper)]/96 p-3 shadow-[0_18px_60px_rgba(10,9,9,0.12)] backdrop-blur-xl">
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block rounded-lg px-3 py-3 font-medium text-[var(--muted)] hover:bg-[var(--paper-soft)] hover:text-[var(--ink)]"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/arjun-c-518455335/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-3 font-semibold text-[var(--accent-deep)] hover:bg-[var(--paper-soft)]"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
