"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Velora",
    subtitle: "Dating Website",
    studio: "Velora",
    description:
      "A premium dating brand experience with a polished login flow, modern visuals, and soft neon accents.",
    previewSrc: "/images/velora-preview.png",
    href: "https://velora-fawn-pi.vercel.app/",
  },
  {
    title: "Demo Dental Care",
    subtitle: "Frontend Clinic",
    studio: "Dental Studio",
    description:
      "A refined healthcare landing page concept with warm typography, clear service cards, and appointment focus.",
    previewSrc: "/images/demo-dental-care-preview.png",
    href: "https://demo-dental-care.vercel.app/",
  },
  {
    title: "BitCharts Pro",
    subtitle: "Crypto Market Terminal",
    studio: "Trading Interface",
    description:
      "A dark trading dashboard concept with multi-chart layouts, chart controls, and premium terminal styling.",
    previewSrc: "/images/bitcharts-pro-preview.png",
    href: "https://bitcharts-pro.vercel.app/",
  },
  {
    title: "Picker Wheel",
    subtitle: "Decision Spinner",
    studio: "Interactive Tool",
    description:
      "A playful interactive wheel interface designed for quick decisions with fresh color segments and control panels.",
    previewSrc: "/images/picker-wheel-preview.png",
    href: "https://picker-wheel-beta.vercel.app/",
  },
];

const renderPreview = (previewSrc: string, title: string) => {
  return (
    <div className="relative h-full overflow-hidden rounded-[24px] bg-[var(--paper)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
      <Image
        src={previewSrc}
        alt={`${title} preview`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
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
                    {renderPreview(project.previewSrc, project.title)}
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
