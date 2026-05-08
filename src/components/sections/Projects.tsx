"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Velora",
    subtitle: "Dating Website",
    studio: "Launch-ready brand site",
    domain: "velora-fawn-pi.vercel.app",
    description:
      "A polished dating product concept with soft gradients, clean signup flows, and a more lifestyle-led tone.",
    previewSrc: "/previews/velora.png",
    href: "https://velora-fawn-pi.vercel.app/",
  },
  {
    title: "Demo Dental Care",
    subtitle: "Frontend Dental Clinic",
    studio: "Healthcare landing page",
    domain: "demo-dental-care.vercel.app",
    description:
      "A service-focused clinic interface built around readability, trust signals, and an easy appointment path.",
    previewSrc: "/previews/dental-care.png",
    href: "https://demo-dental-care.vercel.app/",
  },
  {
    title: "BitCharts Pro",
    subtitle: "Crypto Charts",
    studio: "Market dashboard",
    domain: "bitcharts-pro.vercel.app",
    description:
      "A trading-style dashboard with chart-heavy layout, terminal mood, and dense information that stays scannable.",
    previewSrc: "/previews/bitcharts-pro.png",
    href: "https://bitcharts-pro.vercel.app/",
  },
  {
    title: "Picker Wheel",
    subtitle: "Spin The Wheel",
    studio: "Interactive micro-tool",
    domain: "picker-wheel-beta.vercel.app",
    description:
      "A playful decision tool with bold color, quick interaction loops, and a simple single-purpose experience.",
    previewSrc: "/previews/picker-wheel.png",
    href: "https://picker-wheel-beta.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-anchor px-4 py-3 md:py-4">
      <div className="section-shell">
        <section className="panel-shell relative overflow-hidden px-5 py-8 md:px-8 md:py-10 lg:px-10">
          <div className="absolute left-10 top-3 ghost-title hidden md:block">Work</div>

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
                  Four live projects across dating, healthcare, trading, and interactive product experiences.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--muted)]">
                <span>Live websites</span>
                <span className="text-[var(--ink)]">[04]</span>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/92 shadow-[0_14px_44px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(0,0,0,0.12)]"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  aria-label={`Open ${project.title} website`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]">
                    <Image
                      src={project.previewSrc}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">
                      {project.subtitle}
                    </div>
                    <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                      <span>Live site</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="space-y-5 p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                          {project.studio}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-[1.85rem]">
                          {project.title}
                        </h3>
                      </div>
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[var(--paper-soft)]">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </div>
                    </div>

                    <p className="leading-7 text-[var(--muted)]">{project.description}</p>
                    <p className="text-sm font-medium text-[var(--ink)]/72">{project.domain}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
