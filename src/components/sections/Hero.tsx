"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import HeroBackdrop from "../HeroBackdrop";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[86svh] items-center overflow-hidden border-b border-[var(--line)] px-4 pt-24"
    >
      <HeroBackdrop />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(253,253,253,0.94)_0%,rgba(253,253,253,0.7)_54%,rgba(253,253,253,0.2)_100%)]" />

      <motion.div
        className="section-shell relative z-10 py-12 md:py-20"
        variants={containerVariants}
        initial={false}
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-lg border border-[var(--ink)] bg-[var(--ink)] px-3 py-2 text-sm font-semibold text-[var(--paper)]">
            Frontend studio
          </span>
          <span className="rounded-lg border border-[var(--line)] bg-white/72 px-3 py-2 text-sm font-medium text-[var(--muted)]">
            Built by Arjun C
          </span>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_320px] lg:items-end">
          <div>
            <motion.h1
              variants={itemVariants}
              className="max-w-[10ch] text-5xl font-semibold leading-[0.9] text-[var(--ink)] [overflow-wrap:anywhere] sm:max-w-none sm:text-6xl md:text-8xl lg:max-w-5xl lg:text-9xl"
            >
              8bit-framework
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-xl leading-8 text-[var(--muted)] md:text-2xl md:leading-9"
            >
              We design and build launch-ready frontends for new businesses: sharp websites, animated interfaces,
              and product pages that make a young brand feel established from day one.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                icon={<ArrowRight size={18} aria-hidden="true" />}
              >
                View work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                icon={<Mail size={18} aria-hidden="true" />}
              >
                Start a build
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hidden border-l border-[var(--line)] pl-8 lg:block"
          >
            <p className="text-sm font-semibold text-[var(--accent-deep)]">Now taking</p>
            <p className="mt-4 text-3xl font-semibold leading-tight">
              startup landing pages, portfolio systems, dashboards, and animated web apps.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-14 flex items-center gap-3 text-sm font-semibold text-[var(--muted)]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          <ChevronDown size={18} aria-hidden="true" />
          <span>Scroll for studio, services, work, and contact</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
