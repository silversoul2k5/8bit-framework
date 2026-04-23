"use client";

import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="section-anchor px-4 py-3 md:py-4">
      <div className="section-shell">
        <motion.section
          className="relative overflow-hidden rounded-[32px] px-5 py-8 md:px-8 md:py-10"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0.1))]" />
          <div className="relative z-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-3xl font-semibold uppercase leading-none md:text-5xl">/Service</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
                  Design and frontend support focused on launch-ready interfaces, clean structure, and animation that
                  still feels usable.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={service.title}
                    layout
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`overflow-hidden rounded-[28px] border transition-all duration-500 ${
                      isActive
                        ? "border-black/5 bg-[#171717] text-white shadow-[0_24px_50px_rgba(0,0,0,0.18)]"
                        : "border-transparent bg-transparent"
                    }`}
                  >
                    <div
                      className={`grid gap-6 px-4 py-5 md:px-6 md:py-6 ${
                        isActive ? "lg:grid-cols-[1fr_250px]" : "lg:grid-cols-[1fr_auto]"
                      }`}
                    >
                      <div className={`${!isActive ? "border-b border-[var(--line)] pb-5 lg:border-b-0 lg:pb-0" : ""}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div
                              className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border ${
                                isActive ? "border-white/12 bg-white/8" : "border-[var(--line)] bg-white/70"
                              }`}
                            >
                              <Icon size={20} aria-hidden="true" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-semibold uppercase leading-tight md:text-[2rem]">
                                {service.title}
                              </h3>
                              {isActive && (
                                <>
                                  <p className="mt-4 max-w-xl text-base leading-7 text-white/78">
                                    {service.description}
                                  </p>
                                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/54">
                                    {service.detail}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>

                          <div
                            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
                              isActive ? "border-white/16 bg-white/6" : "border-[var(--line)] bg-white/70"
                            }`}
                          >
                            <ArrowUpRight size={18} aria-hidden="true" />
                          </div>
                        </div>
                      </div>

                      {isActive && (
                        <motion.div
                          layout
                          className="flex min-h-[150px] items-center justify-center gap-3"
                          initial={{ opacity: 0, x: 28 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.45 }}
                        >
                          {[0, 1, 2].map((item) => (
                            <div
                              key={item}
                              className={`w-[74px] rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#f7f7f6,#dedfdb)] p-2 text-black shadow-[0_18px_30px_rgba(0,0,0,0.2)] ${
                                item === 0 ? "rotate-[-10deg]" : item === 2 ? "rotate-[10deg]" : "-translate-y-4"
                              }`}
                            >
                              <div className="h-[124px] rounded-[16px] bg-[linear-gradient(180deg,#f9fafb,#edf0f1)] p-2">
                                <div className="h-2 w-9 rounded-full bg-black/10" />
                                <div className="mt-4 h-10 rounded-[12px] bg-black/8" />
                                <div className="mt-4 space-y-2">
                                  <div className="h-2 rounded-full bg-black/8" />
                                  <div className="h-2 w-3/4 rounded-full bg-black/6" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
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
