"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { ArrowUpRight, Code2, Palette, ShieldCheck, UserRound } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: "Frontend systems",
      description: "React, Next.js, TypeScript, Tailwind, animation, and component-driven builds.",
    },
    {
      icon: Palette,
      title: "Visual direction",
      description: "Clean layouts, confident typography, responsive flows, and brand-aware details.",
    },
    {
      icon: ShieldCheck,
      title: "Launch mindset",
      description: "Simple handoff, maintainable code, fast pages, and copy that explains the offer.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper)] py-20 md:py-28">
      <div className="section-shell relative z-10">
        <SectionTitle
          title="About"
          highlight="Arjun"
          subtitle="8bit-framework is a startup studio for founders who need the frontend to look clear, move smoothly, and convert early attention into trust."
          align="left"
        />

        <motion.div
          className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-start gap-4 border-b border-[var(--line)] pb-8">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[var(--paper-soft)]">
                <UserRound size={26} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--accent-deep)]">Founder / frontend developer</p>
                <h3 className="mt-2 text-3xl font-semibold">Arjun C</h3>
              </div>
            </div>

            <p className="text-2xl font-semibold leading-tight md:text-4xl">
              I build the first version of a brand web presence with the care usually saved for a mature product team.
            </p>

            <p className="text-lg leading-8 text-[var(--muted)]">
              My work sits between design and engineering: structure the message, shape the interface, add motion where
              it helps, then keep the frontend easy to extend as the business grows.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/silversoul2k5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-4 py-3 font-semibold hover:border-[var(--ink)]"
              >
                GitHub
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/silversoul2k5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-4 py-3 font-semibold hover:border-[var(--ink)]"
              >
                Instagram
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-4"
          >
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-5 rounded-lg border border-[var(--line)] bg-white/70 p-6"
                >
                  <Icon className="mt-1 shrink-0 text-[var(--accent)]" size={24} aria-hidden="true" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{highlight.title}</h3>
                    <p className="leading-7 text-[var(--muted)]">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
