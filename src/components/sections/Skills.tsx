"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { BadgeCheck, CheckCircle2, Cpu, TerminalSquare, WandSparkles, Workflow } from "lucide-react";

const Skills = () => {
  const stack = [
    {
      icon: TerminalSquare,
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      icon: WandSparkles,
      category: "Design",
      skills: ["Figma-friendly UI", "Typography", "Responsive layouts", "Micro-interactions"],
    },
    {
      icon: Workflow,
      category: "Delivery",
      skills: ["Git workflow", "Reusable components", "SEO metadata", "Clean handoff"],
    },
    {
      icon: Cpu,
      category: "Experiments",
      skills: ["Flutter UI", "Firebase", "ESP32", "Creator tools"],
    },
  ];

  const process = [
    "Clarify the offer and user path",
    "Design the page structure and visual rhythm",
    "Build responsive components",
    "Tune motion, speed, and handoff details",
  ];

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper-soft)] py-20 md:py-28">
      <div className="section-shell relative z-10">
        <SectionTitle
          title="Stack and"
          highlight="process"
          subtitle="The work is intentionally practical: pick a clear message, make the interface feel premium, and ship a codebase that can keep moving."
          align="left"
        />

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stack.map((category, catIdx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                className="rounded-lg border border-[var(--line)] bg-white/70 p-6"
              >
                <Icon className="mb-5 text-[var(--accent)]" size={26} aria-hidden="true" />
                <h3 className="text-2xl font-semibold">{category.category}</h3>

                <div className="mt-6 space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      className="flex items-start gap-2 text-sm font-medium text-[var(--muted)]"
                      initial={false}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.08 + skillIdx * 0.04 }}
                    >
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={categoryVariants} className="rounded-lg border border-[var(--line)] bg-[var(--ink)] p-7 text-[var(--paper)]">
            <BadgeCheck size={28} aria-hidden="true" />
            <p className="mt-8 text-4xl font-semibold leading-none">New business friendly</p>
            <p className="mt-5 leading-7 text-white/70">
              No bloated agency ritual. Just strategy, design, code, and clear communication around what your first
              customers need to understand.
            </p>
          </motion.div>

          <motion.div variants={categoryVariants} className="rounded-lg border border-[var(--line)] bg-white/70 p-7">
            <h3 className="text-2xl font-semibold">Build process</h3>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {process.map((item, idx) => (
                <div key={item} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[var(--paper-soft)] text-sm font-semibold">
                    0{idx + 1}
                  </span>
                  <p className="leading-7 text-[var(--muted)]">{item}</p>
                </div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
