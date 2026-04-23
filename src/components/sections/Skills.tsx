"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Skills = () => {
  const experiences = [
    {
      company: "8bit-framework",
      role: "Founder / Frontend Developer",
      period: "2026 - Now",
      summary:
        "Building launch pages, portfolio sites, and startup-facing frontend systems with motion, responsive layouts, and clear visual hierarchy.",
    },
    {
      company: "Independent web builds",
      role: "Design + Development",
      period: "2024 - Now",
      summary:
        "Personal projects and freelance-style experiments focused on modern website structure, component systems, and polished interaction details.",
    },
    {
      company: "Community & side experiments",
      role: "UI Explorer / Builder",
      period: "Ongoing",
      summary:
        "Testing ideas across Android communities, interface studies, and product concepts to sharpen both frontend craft and shipping speed.",
    },
  ];

  return (
    <section id="experience" className="section-anchor px-4 py-3 md:py-4">
      <div className="section-shell">
        <motion.section
          className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[#151515] px-5 py-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] md:px-8 md:py-10"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <div className="absolute left-7 top-3 text-[clamp(3.2rem,10vw,8rem)] font-black uppercase leading-none text-white/[0.04]">
            Experience
          </div>

          <div className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <p className="text-3xl font-semibold uppercase leading-none md:text-5xl">/Experience</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
                  A growing frontend path shaped by startup work, side builds, and design-heavy implementation.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/12 bg-white/6 p-5">
                <Sparkles size={22} aria-hidden="true" />
                <p className="mt-5 text-3xl font-semibold">Active now</p>
                <p className="mt-3 max-w-[240px] text-sm leading-6 text-white/62">
                  Shipping responsive frontends, animated sections, and polished portfolio-style experiences.
                </p>
              </div>
            </div>

            <div className="mt-8 divide-y divide-white/10 rounded-[28px] border border-white/10 bg-white/[0.03]">
              {experiences.map((item, index) => (
                <motion.article
                  key={item.company}
                  className="grid gap-6 px-5 py-6 md:px-7 lg:grid-cols-[1fr_auto]"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, delay: index * 0.08 }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold">{item.company}</h3>
                    <p className="mt-2 text-lg text-white/74">{item.role}</p>
                    <p className="mt-4 max-w-3xl leading-7 text-white/58">{item.summary}</p>
                  </div>

                  <div className="flex items-start gap-4 lg:flex-col lg:items-end">
                    <span className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-medium text-white/70">
                      {item.period}
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/7 text-white/72">
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Skills;
