"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Launch page for early brands",
    subtitle: "Landing Page",
    studio: "8bit-framework",
    description:
      "Clear offers, trust-building sections, and smooth motion for first impressions that actually convert.",
    preview: "neon",
  },
  {
    title: "Editorial product story",
    subtitle: "Real Project",
    studio: "Frontend Study",
    description:
      "A luxury-style product layout with large imagery, modular cards, and a strong reading rhythm.",
    preview: "editorial",
  },
  {
    title: "Founder dashboard concept",
    subtitle: "Exploration",
    studio: "UI System",
    description:
      "Dark data surfaces, component cards, and fast scan patterns for teams managing launches and growth.",
    preview: "dashboard",
  },
  {
    title: "Creator contact hub",
    subtitle: "Personal Site",
    studio: "Profile Build",
    description:
      "A compact web presence for links, project highlights, and direct contact across social platforms.",
    preview: "mobile",
  },
];

const renderPreview = (preview: string) => {
  if (preview === "neon") {
    return (
      <div className="relative h-full overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_center,#f53b8a_0%,#1a0a18_32%,#0f0f12_72%)] p-5 text-white">
        <div className="absolute inset-x-0 top-1/2 h-px bg-pink-300/70 shadow-[0_0_28px_rgba(255,56,164,0.9)]" />
        <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/60">
          <span>8bit-framework</span>
          <span>launch</span>
        </div>
        <div className="absolute bottom-4 left-1/2 h-[72%] w-[34%] -translate-x-1/2 rounded-[28px] border border-white/20 bg-black/55 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <div className="h-full rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#111114,#1f1f28)] p-3">
            <div className="h-2 w-16 rounded-full bg-pink-300/80" />
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-white/25" />
              <div className="h-2 w-4/5 rounded-full bg-white/15" />
              <div className="h-2 w-3/5 rounded-full bg-white/15" />
            </div>
            <div className="mt-6 h-24 rounded-[18px] border border-white/10 bg-pink-400/15" />
          </div>
        </div>
      </div>
    );
  }

  if (preview === "editorial") {
    return (
      <div className="grid h-full grid-cols-[1.35fr_0.8fr] gap-3 rounded-[24px] bg-[#f6f4ef] p-4">
        <div className="rounded-[18px] bg-[linear-gradient(180deg,#1d2225,#0f1011)] p-4 text-white">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
            Premium
          </span>
          <div className="mt-6 h-28 rounded-[16px] bg-[linear-gradient(180deg,#49565c,#15191c)]" />
          <div className="mt-4 space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-white/35" />
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[18px] border border-black/8 bg-white p-3">
            <div className="h-2 w-16 rounded-full bg-black/10" />
            <div className="mt-3 space-y-2">
              <div className="h-2 rounded-full bg-black/8" />
              <div className="h-2 rounded-full bg-black/6" />
              <div className="h-2 w-4/5 rounded-full bg-black/6" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[18px] bg-[#d4cdc3]" />
            <div className="rounded-[18px] bg-[#b1b8bb]" />
          </div>
        </div>
      </div>
    );
  }

  if (preview === "dashboard") {
    return (
      <div className="rounded-[24px] bg-[linear-gradient(180deg,#101113,#17191d)] p-4 text-white">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-violet-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="h-3 w-3 rounded-full bg-white/50" />
        </div>
        <div className="mt-4 grid gap-3">
          <div className="grid grid-cols-[1.1fr_0.8fr_0.8fr] gap-3">
            <div className="rounded-[16px] bg-white/6 p-3">
              <div className="h-2 w-14 rounded-full bg-white/30" />
              <div className="mt-5 h-16 rounded-[12px] bg-[radial-gradient(circle_at_20%_30%,rgba(123,92,255,0.6),transparent_30%),rgba(255,255,255,0.04)]" />
            </div>
            <div className="rounded-[16px] bg-white/6" />
            <div className="rounded-[16px] bg-white/6" />
          </div>
          <div className="grid grid-cols-[1fr_0.8fr] gap-3">
            <div className="rounded-[16px] bg-white/6 p-3">
              <div className="flex h-full items-end gap-2">
                <div className="h-10 w-5 rounded-t-full bg-emerald-400/60" />
                <div className="h-16 w-5 rounded-t-full bg-cyan-300/55" />
                <div className="h-8 w-5 rounded-t-full bg-violet-400/55" />
                <div className="h-20 w-5 rounded-t-full bg-white/30" />
              </div>
            </div>
            <div className="rounded-[16px] bg-white/6 p-3">
              <div className="space-y-3">
                <div className="h-2 rounded-full bg-white/20" />
                <div className="h-2 w-5/6 rounded-full bg-white/12" />
                <div className="h-2 w-2/3 rounded-full bg-white/12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-end justify-center gap-4 rounded-[24px] bg-[linear-gradient(180deg,#f8f8f6,#ecebe7)] p-4">
      {[0, 1, 2].map((item) => (
        <div
          key={item}
          className={`w-[26%] rounded-[26px] border border-black/8 bg-[linear-gradient(180deg,#0f1011,#1f2226)] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.12)] ${
            item === 0 ? "mb-3 rotate-[-8deg]" : item === 2 ? "mb-4 rotate-[8deg]" : "translate-y-2"
          }`}
        >
          <div className="h-[180px] rounded-[18px] bg-[linear-gradient(180deg,#111,#23262a)] p-3">
            <div className="h-2 w-14 rounded-full bg-white/25" />
            <div className="mt-4 h-16 rounded-[14px] bg-white/8" />
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-white/14" />
              <div className="h-2 w-4/5 rounded-full bg-white/12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-anchor px-4 py-3 md:py-4">
      <div className="section-shell">
        <section className="panel-shell relative overflow-hidden rounded-[32px] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          <div className="absolute left-10 top-3 ghost-title hidden md:block">Portfolio</div>

          <motion.div
            className="relative z-10"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-3xl font-semibold uppercase leading-none md:text-5xl">
                  /Selected Work
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                  Projects across launch pages, experimental interfaces, dashboards, and personal brand sites.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 text-sm font-semibold text-[var(--ink)] shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
              >
                <span>View all work</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium text-[var(--muted)]">
              {["All", "Real Project", "Exploration", "Motion UI"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[var(--line)] bg-white/80 px-4 py-2"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/92 shadow-[0_14px_44px_rgba(0,0,0,0.05)]"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                >
                  <div className="h-[260px] border-b border-[var(--line)] p-4 md:h-[310px]">
                    {renderPreview(project.preview)}
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                          {project.subtitle}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-[1.85rem]">
                          {project.title}
                        </h3>
                      </div>

                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[var(--paper)]">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </div>
                    </div>

                    <p className="leading-7 text-[var(--muted)]">{project.description}</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-4 py-2 text-sm font-medium">
                        {project.subtitle}
                      </span>
                      <span className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-4 py-2 text-sm font-medium">
                        {project.studio}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
