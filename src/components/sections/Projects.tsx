"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Velora",
    subtitle: "Dating Website",
    studio: "Velora",
    description:
      "A premium dating brand experience with a polished login flow, modern visuals, and soft neon accents.",
    previewSrc: "https://s.wordpress.com/mshots/v1/https://velora-fawn-pi.vercel.app?width=760",
    href: "https://velora-fawn-pi.vercel.app/",
  },
  {
    title: "Demo Dental Care",
    subtitle: "Frontend Clinic",
    studio: "Dental Studio",
    description:
      "A refined healthcare landing page concept with warm typography, clear service cards, and appointment focus.",
    previewSrc: "https://s.wordpress.com/mshots/v1/https://demo-dental-care.vercel.app?width=760",
    href: "https://demo-dental-care.vercel.app/",
  },
  {
    title: "BitCharts Pro",
    subtitle: "Crypto Market Terminal",
    studio: "Trading Interface",
    description:
      "A dark trading dashboard concept with multi-chart layouts, chart controls, and premium terminal styling.",
    previewSrc: "https://s.wordpress.com/mshots/v1/https://bitcharts-pro.vercel.app?width=760",
    href: "https://bitcharts-pro.vercel.app/",
  },
  {
    title: "Picker Wheel",
    subtitle: "Decision Spinner",
    studio: "Interactive Tool",
    description:
      "A playful interactive wheel interface designed for quick decisions with fresh color segments and control panels.",
    previewSrc: "https://s.wordpress.com/mshots/v1/https://picker-wheel-beta.vercel.app?width=760",
    href: "https://picker-wheel-beta.vercel.app/",
  },
];

const renderPreview = (previewSrc: string, title: string) => {
  return (
    <div className="relative h-full overflow-hidden bg-[var(--paper)]">
      <Image
        src={previewSrc}
        alt={`${title} preview`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-anchor px-4 py-3 md:py-4">
      <div className="section-shell">
        <section className="panel-shell relative overflow-hidden px-5 py-8 md:px-8 md:py-10 lg:px-10">
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
                  /Projects
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                  A preview of recent website work and live product concepts for modern brands.
                </p>
              </div>

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
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group overflow-hidden border border-[var(--line)] bg-white/92 shadow-[0_14px_44px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(0,0,0,0.12)]"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  aria-label={`Open ${project.title} website`}
                >
                  <div className="h-[325px] border-b border-[var(--line)] p-4 md:h-[390px]">
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
                    </div>

                    <p className="leading-7 text-[var(--muted)]">{project.description}</p>
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
