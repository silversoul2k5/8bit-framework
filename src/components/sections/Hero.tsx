"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTime, useTransform } from "framer-motion";
import InteractiveWordmark from "../InteractiveWordmark";
import HeroPortrait from "../HeroPortrait";
import { ArrowRight, ArrowUpRight, Code2, ContactRound, Cpu, MessageCircle } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/silversoul2k5", icon: Code2 },
  { label: "Instagram", href: "https://www.instagram.com/silversoul2k5/", icon: MessageCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-c-518455335/", icon: ContactRound },
  { label: "XDA Forums", href: "#contact", icon: Cpu },
];



const Hero = () => {
  const panelRef = useRef<HTMLElement | null>(null);
  const time = useTime();
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const orbit = useTransform(time, (latest) => Math.sin(latest / 950) * 14);
  const pitch = useTransform(time, (latest) => Math.cos(latest / 1200) * 6);

  const heroMeta = useMemo(
    () => [
      "Frontend Studio",
      "Startup Websites",
      "Motion-led UI",
      "Launch Ready",
    ],
    []
  );

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={panelRef}
      className="section-anchor relative px-2 pb-4 pt-36 md:px-3 md:pt-40 lg:px-4 lg:pt-44"
    >
      <div className="section-shell">
        <section className="panel-shell relative overflow-hidden px-3 py-5 md:px-7 md:py-7 lg:px-10 lg:py-9">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.96))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/90" />

          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 lg:mb-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <span className="h-3 w-3 rounded-full bg-[var(--success)]" />
                <span className="text-sm font-medium">Available for new project</span>
              </div>
              <p className="text-sm font-medium text-[var(--muted)]">
                8bit-framework / startup frontend studio
              </p>
            </div>

            <div className="relative z-[1]">
              <InteractiveWordmark />
            </div>

            <div className="relative mt-4 grid min-h-[520px] items-end gap-8 md:min-h-[610px] lg:-mt-10 lg:grid-cols-[0.54fr_0.8fr_0.38fr] lg:gap-7">
              <motion.div
                className="order-2 max-w-[360px] lg:order-1 lg:translate-y-8 lg:pb-8"
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
                  I&apos;m Arjun, founder of 8bit-framework. I build static and animated websites, modern frontend systems, and interactive user experiences.
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  I also develop hardware projects using Arduino, ESP32, and microcontrollers combining software and real-world systems.
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  Focused on clean design, motion, and performance-driven development.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  {heroMeta.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--line)] bg-white/76 px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>

              </motion.div>

              <motion.div
                className="order-1 lg:order-2 lg:-translate-y-2"
                style={{ y: portraitY, x: orbit, rotate: pitch }}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
              >
                <HeroPortrait />
              </motion.div>

              <motion.div
                className="order-3 flex flex-col gap-4 self-center lg:self-end lg:pb-8 lg:items-end"
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

            <div className="soft-divider mt-3" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
