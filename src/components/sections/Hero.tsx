"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroPortrait from "../HeroPortrait";
import { ArrowRight, ArrowUpRight, Code2, ContactRound, Cpu, MessageCircle } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/silversoul2k5", icon: Code2 },
  { label: "Instagram", href: "https://www.instagram.com/silversoul2k5/", icon: MessageCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-c-518455335/", icon: ContactRound },
  { label: "XDA Forums", href: "#contact", icon: Cpu },
];

const marqueeItems = [
  "Frontend for new businesses",
  "Animated launch pages",
  "Responsive product UI",
  "Fast handoff and clean code",
];

const Hero = () => {
  const panelRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={panelRef}
      className="section-anchor relative px-4 pb-8 pt-28 md:pt-36"
    >
      <div className="section-shell">
        <section className="panel-shell relative overflow-hidden rounded-[34px] px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.96))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/90" />
          <div className="absolute left-[-8%] top-[8%] h-52 w-52 rounded-full bg-white/50 blur-3xl" />
          <div className="absolute bottom-[10%] right-[-6%] h-64 w-64 rounded-full bg-black/6 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <span className="h-3 w-3 rounded-full bg-[var(--success)]" />
                <span className="text-sm font-medium">Available for new project</span>
              </div>
              <p className="text-sm font-medium text-[var(--muted)]">
                8bit-framework / startup frontend studio
              </p>
            </div>

            <motion.div
              className="pointer-events-none absolute inset-x-4 top-24 z-0 md:inset-x-8 md:top-28 lg:inset-x-18 lg:top-32"
              style={{ y: titleY }}
            >
              <div className="space-y-2 md:space-y-0">
                <h2 className="outline-title text-[3.2rem] font-black uppercase leading-[0.84] sm:text-[5.5rem] md:text-[7rem] lg:pl-18 lg:text-[8.2rem]">
                  8bit
                </h2>
                <h2 className="text-right text-[3.1rem] font-black uppercase leading-[0.84] text-[var(--ink)] sm:text-[5.2rem] md:text-[6.7rem] lg:pr-8 lg:text-[7.4rem]">
                  framework
                </h2>
              </div>
            </motion.div>

            <div className="relative grid min-h-[620px] items-end gap-8 pt-24 md:min-h-[720px] md:pt-32 lg:grid-cols-[0.66fr_0.9fr_0.44fr] lg:gap-10 lg:pt-44">
              <motion.div
                className="order-2 max-w-[360px] lg:order-1 lg:translate-y-12 lg:pb-10"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Arjun C / frontend developer
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-[3.25rem]">
                  Building clean, animated frontends for new businesses.
                </h1>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)] md:text-[1.22rem]">
                  I&apos;m Arjun, founder of 8bit-framework. I design and build portfolio sites, launch pages,
                  product surfaces, and polished UI details that help young brands feel sharp from day one.
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  My projects usually live at the intersection of clean layout, motion, and practical frontend
                  delivery.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 text-base font-semibold text-[var(--paper)] shadow-[0_12px_36px_rgba(0,0,0,0.18)]"
                  >
                    <span>Let&apos;s collaborate</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={scrollToProjects}
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/90 px-6 text-base font-semibold text-[var(--ink)]"
                  >
                    <span>Selected work</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2 lg:translate-y-4"
                style={{ y: portraitY }}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
              >
                <HeroPortrait />
              </motion.div>

              <motion.div
                className="order-3 flex flex-col gap-4 self-center lg:self-end lg:pb-10 lg:items-end"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.1 }}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex min-h-12 items-center justify-between gap-3 rounded-full border border-[var(--line)] bg-white/92 px-5 text-base font-medium text-[var(--ink)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-[var(--line-strong)] lg:min-w-[208px]"
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon size={16} aria-hidden="true" />
                        <span>{social.label}</span>
                      </span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            <div className="soft-divider mt-4" />

            <div className="mt-5 overflow-hidden">
              <div className="animate-marquee-slower flex min-w-max gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)] sm:text-sm">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
                    <span>{item}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
