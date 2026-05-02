"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-3">
      <div className="section-shell rounded-[28px] border border-[var(--line)] bg-[var(--ink)] text-[var(--paper)] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        <div className="px-5 py-10 md:px-8 md:py-12">
          <div className="mb-10 grid gap-10 md:grid-cols-[1.2fr_0.7fr_0.7fr]">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-3xl font-semibold">
                8bit-framework
              </h3>
              <p className="max-w-md leading-7 text-white/64">
                Frontend design and development for new businesses that need to look credible, move fast, and explain
                their offer clearly.
              </p>
            </motion.div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="mb-4 font-semibold">Sections</h4>
              <ul className="space-y-2 text-white/64">
                {[
                  ["Services", "services"],
                  ["Work", "projects"],
                  ["Contact", "contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={`#${href}`}
                      className="hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="mb-4 font-semibold">Connect</h4>
              <div className="space-y-2 text-white/64">
                <a href="https://github.com/silversoul2k5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                  <span>GitHub</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/silversoul2k5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                  <span>Instagram</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/arjun-c-518455335/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>

        <div className="mb-8 h-px bg-white/16" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.p
            className="text-sm text-white/54"
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} 8bit-framework. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="rounded-lg border border-white/18 p-3 text-white hover:bg-white/10"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </motion.button>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
