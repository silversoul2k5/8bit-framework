"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Startup launch page system",
      category: "Business website",
      description:
        "A conversion-first homepage structure for new brands: hero, offer, proof, pricing, and contact sections.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      metric: "1 week launch sprint",
    },
    {
      id: 2,
      title: "Animated portfolio framework",
      category: "Personal brand",
      description:
        "A responsive portfolio layout with editorial typography, scroll reveals, project cards, and social contact paths.",
      technologies: ["React", "Motion", "Responsive UI", "SEO"],
      metric: "Built for creators",
    },
    {
      id: 3,
      title: "Founder dashboard concept",
      category: "Product interface",
      description:
        "A crisp web app surface for tracking leads, tasks, and launch metrics without overwhelming the user.",
      technologies: ["Dashboard UI", "Charts", "Components", "UX"],
      metric: "Clean data views",
    },
    {
      id: 4,
      title: "Creator contact hub",
      category: "Social profile",
      description:
        "A lightweight profile site that collects LinkedIn, GitHub, Instagram, XDA, and QR contact points in one place.",
      technologies: ["Next Image", "Social links", "Mobile first", "Analytics-ready"],
      metric: "Easy sharing",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="projects" className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper)] py-20 md:py-28">
      <div className="section-shell relative z-10">
        <SectionTitle
          title="Selected"
          highlight="projects"
          subtitle="A practical showcase of the kind of frontend work 8bit-framework creates for founders, creators, and new business teams."
          align="left"
        />

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <Card delay={idx * 0.08} className="h-full overflow-hidden p-0">
                <div className="flex h-full flex-col">
                  <div className="border-b border-[var(--line)] bg-[var(--paper-soft)] p-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-sm font-semibold text-[var(--accent-deep)]">{project.category}</p>
                        <h3 className="mt-3 text-3xl font-semibold leading-tight">{project.title}</h3>
                      </div>
                      <ExternalLink size={22} className="mt-1 shrink-0 text-[var(--muted)]" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="leading-7 text-[var(--muted)]">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-[var(--line)] bg-white/70 px-3 py-2 text-xs font-semibold text-[var(--ink)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-8">
                      <p className="font-semibold text-[var(--accent-deep)]">{project.metric}</p>
                      <div className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--line)]">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--ink)] bg-[var(--ink)] px-6 py-4 font-semibold text-[var(--paper)] hover:bg-[var(--accent-deep)]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss your project
            <ArrowUpRight size={18} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
