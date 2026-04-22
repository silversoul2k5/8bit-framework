"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { ArrowUpRight, Gauge, Layers3, MonitorSmartphone, PenLine, Rocket, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Launch websites",
      description: "Business-ready websites with clear offers, focused pages, contact paths, and room to grow.",
    },
    {
      icon: PenLine,
      title: "Interface design",
      description: "Landing pages, dashboards, and product UI shaped with strong hierarchy and clean interaction.",
    },
    {
      icon: Sparkles,
      title: "Motion systems",
      description: "Framer Motion and GSAP details that make a frontend feel polished without slowing it down.",
    },
    {
      icon: Gauge,
      title: "Performance passes",
      description: "Responsive layout, asset cleanup, speed tuning, and smoother experiences across devices.",
    },
    {
      icon: MonitorSmartphone,
      title: "Responsive rebuilds",
      description: "Modernizing older sites so they work naturally on mobile, tablet, and desktop.",
    },
    {
      icon: Layers3,
      title: "Component kits",
      description: "Reusable buttons, cards, sections, and design tokens that keep future updates consistent.",
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper-soft)] py-20 md:py-28">
      <div className="section-shell relative z-10">
        <SectionTitle
          title="Frontend"
          highlight="services"
          subtitle="Everything a new business needs to look credible online: a clear website, polished UI, responsive implementation, and the small details that make people trust the screen."
          align="left"
        />

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card delay={idx * 0.06} className="h-full">
                  <div className="flex h-full flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-lg border border-[var(--line)] bg-[var(--paper-soft)]">
                        <Icon className="text-[var(--accent)]" size={24} aria-hidden="true" />
                      </div>
                      <ArrowUpRight size={18} className="text-[var(--muted)]" aria-hidden="true" />
                    </div>

                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="flex-grow leading-7 text-[var(--muted)]">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
