"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Velora",
    subtitle: "Dating Website",
    studio: "Velora",
    description:
      "A premium dating brand experience with a polished login flow, modern visuals, and soft neon accents.",
    preview: "velora",
    href: "https://velora-fawn-pi.vercel.app/",
  },
  {
    title: "Demo Dental Care",
    subtitle: "Frontend Clinic",
    studio: "Dental Studio",
    description:
      "A refined healthcare landing page concept with warm typography, clear service cards, and appointment focus.",
    preview: "dental",
    href: "https://demo-dental-care.vercel.app/",
  },
  {
    title: "BitCharts Pro",
    subtitle: "Crypto Market Terminal",
    studio: "Trading Interface",
    description:
      "A dark trading dashboard concept with multi-chart layouts, chart controls, and premium terminal styling.",
    preview: "crypto",
    href: "https://bitcharts-pro.vercel.app/",
  },
  {
    title: "Picker Wheel",
    subtitle: "Decision Spinner",
    studio: "Interactive Tool",
    description:
      "A playful interactive wheel interface designed for quick decisions with fresh color segments and control panels.",
    preview: "wheel",
    href: "https://picker-wheel-beta.vercel.app/",
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

  if (preview === "velora") {
    return (
      <div className="relative h-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#2d0f26] via-[#3b163d] to-[#0f0c12] p-5 text-white">
        <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/60">
          <span>Velora</span>
          <span>Dating</span>
        </div>
        <div className="mt-14 space-y-4">
          <div className="h-12 rounded-[18px] bg-white/10 p-4 text-sm font-semibold uppercase tracking-[0.18em] text-pink-200">
            Authenticate
          </div>
          <div className="grid gap-3 rounded-[28px] bg-white/10 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
            <div className="h-10 rounded-[16px] bg-white/10" />
            <div className="h-10 rounded-[16px] bg-white/10" />
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 h-24 rounded-[28px] bg-white/5 p-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Premium connections</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold">Velora</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-pink-200">
              Live
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "dental") {
    return (
      <div className="h-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#f6eddf] via-[#e9dfc5] to-[#d1b47f] p-5 text-slate-900">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-700/70">
          <span>Demo Dental Care</span>
          <span>Clinic</span>
        </div>
        <div className="mt-8 grid gap-3">
          <div className="h-32 rounded-[28px] bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.08)]" />
          <div className="rounded-[28px] bg-white/90 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
            <div className="h-3 w-24 rounded-full bg-slate-300" />
            <div className="mt-4 space-y-2">
              <div className="h-3 rounded-full bg-slate-300/80" />
              <div className="h-3 w-3/4 rounded-full bg-slate-300/80" />
              <div className="h-3 w-2/3 rounded-full bg-slate-300/80" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "crypto") {
    return (
      <div className="h-full overflow-hidden rounded-[24px] bg-[#040b16] p-5 text-white">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/50">
          <span>BitCharts Pro</span>
          <span>Market</span>
        </div>
        <div className="mt-6 grid gap-3">
          <div className="rounded-[28px] bg-white/5 p-4">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400">
              <span>BTCUSDT</span>
              <span>15m</span>
            </div>
            <div className="mt-4 h-28 rounded-[22px] bg-gradient-to-b from-[#0b1524] to-[#111820] shadow-[inset_0_0_48px_rgba(0,0,0,0.3)]" />
          </div>
          <div className="grid gap-3 rounded-[28px] bg-white/5 p-4">
            <div className="h-3 w-2/3 rounded-full bg-emerald-400/50" />
            <div className="h-3 rounded-full bg-slate-500/70" />
            <div className="h-3 w-1/2 rounded-full bg-slate-500/70" />
          </div>
        </div>
      </div>
    );
  }

  if (preview === "wheel") {
    return (
      <div className="relative h-full overflow-hidden rounded-[24px] bg-[#d9e3c7] p-5 text-slate-900">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-700/70">
          <span>Picker Wheel</span>
          <span>Interactive</span>
        </div>
        <div className="mt-6 grid place-items-center">
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#f8f4e3] shadow-[0_18px_40px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_55%)]" />
            <div className="grid h-32 w-32 place-items-center rounded-full bg-[#586b30] text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.15)]">
              Spin
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-2 rounded-[28px] bg-white/80 p-4 text-xs uppercase tracking-[0.18em] text-slate-600">
          <span className="font-semibold text-slate-900">Decision wheel</span>
          <span>Editable options, live spin control, and a playful interface.</span>
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
                  /Previous Works
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                  A preview of recent website work and live product concepts for modern brands.
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

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white"
                    >
                      Visit site
                    </a>
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
