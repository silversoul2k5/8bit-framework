"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, LayoutTemplate, Sparkles, WandSparkles } from "lucide-react";

const services = [
  {
    title: "Startup landing pages",
    description:
      "Homepage systems for new businesses that need clear messaging, smooth sections, and a confident first impression.",
    detail: "Hero, offer, proof, pricing, and contact paths designed and built together.",
    icon: LayoutTemplate,
  },
  {
    title: "Web design & dev",
    description:
      "Responsive website implementation with clean component structure, motion, and performance-minded polish.",
    detail: "Best for founders, portfolios, launch products, and refresh projects.",
    icon: Code2,
  },
  {
    title: "UI systems",
    description:
      "Reusable cards, buttons, layouts, and content structure so the product stays consistent as it grows.",
    detail: "A practical design layer for teams that need less chaos and easier updates.",
    icon: WandSparkles,
  },
  {
    title: "Motion & interactions",
    description:
      "Scroll reveals, hover behavior, and small animation details that make a product feel alive without feeling heavy.",
    detail: "Framer Motion styling tuned to support readability and brand tone.",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-anchor px-4 py-3 md:py-4">
      <div className="section-shell overflow-hidden rounded-[30px] border border-black/8 bg-[#121212] text-white shadow-[0_20px_70px_rgba(0,0,0,0.14)]">
        <motion.section
          className="relative px-5 py-8 md:px-8 md:py-10 lg:px-10"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_34%)]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-3xl font-semibold uppercase leading-none md:text-5xl">/Services</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
                  Design and frontend support for early-stage brands that want sharper messaging, better interaction,
                  and cleaner delivery.
                </p>
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/46">
                Four ways I usually help
              </p>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden rounded-[26px] bg-white/10 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    className="group bg-[#121212] p-6 md:p-8"
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: index * 0.06 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/6 text-white/80">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/38">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold uppercase leading-tight md:text-[2rem]">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/72">{service.description}</p>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/46">{service.detail}</p>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/88">
                      <span>Explore service</span>
                      <ArrowUpRight size={16} aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Services;
