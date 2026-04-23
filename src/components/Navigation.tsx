"use client";

import { useEffect, useState } from "react";
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
    { label: "Work", count: "04", href: "#projects" },
    { label: "Service", count: "04", href: "#services" },
    { label: "Experience", count: "03", href: "#experience" },
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
      className="fixed left-0 right-0 top-4 z-50 transition-all duration-300"
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-shell">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-[28px] border border-white/75 bg-[rgba(248,248,245,0.88)] px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all md:px-6 ${
            isScrolled ? "translate-y-0" : "translate-y-0"
          }`}
        >
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex items-center gap-3 text-sm font-semibold text-[var(--ink)]"
            aria-label="Go to 8bit-framework home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--ink)] text-[var(--paper)]">
              8
            </span>
            <span className="hidden sm:block">8bit-framework</span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.href);
                }}
                className="inline-flex items-center gap-2 text-base font-medium text-[var(--ink)]"
              >
                <span>{item.label}</span>
                {"count" in item && item.count && (
                  <span className="text-sm text-[var(--muted)]">[{item.count}]</span>
                )}
              </a>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-[var(--ink)] px-5 text-base font-semibold text-[var(--paper)] shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:inline-flex"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <motion.button
            className="rounded-full border border-[var(--line)] bg-white/80 p-2 text-[var(--ink)] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </motion.button>
        </div>
      </div>

      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="section-shell mt-3 flex max-w-[calc(100%-32px)] flex-col gap-2 rounded-[24px] border border-white/70 bg-[rgba(248,248,245,0.94)] p-3 shadow-[0_18px_60px_rgba(10,9,9,0.12)] backdrop-blur-xl">
          {navItems.map((item, idx) => (
            <motion.li
              key={item.label}
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
                className="flex items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-[var(--ink)] hover:bg-white"
              >
                <span>{item.label}</span>
                {"count" in item && item.count && (
                  <span className="text-sm text-[var(--muted)]">[{item.count}]</span>
                )}
              </a>
            </motion.li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("#contact");
              }}
              className="flex items-center justify-between rounded-2xl bg-[var(--ink)] px-3 py-3 font-semibold text-[var(--paper)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
