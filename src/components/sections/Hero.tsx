"use client";

import { useMemo } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Cpu } from "lucide-react";
import InteractiveWordmark from "../InteractiveWordmark";
import HeroPortrait from "../HeroPortrait";

const GitHubLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-4.3 1.4-4.3-1.9-6-2.3" />
    <path d="M15 19c4.3 1.4 4.3-1.9 6-2.3" />
    <path d="M8 14.5c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2Z" />
    <path d="M16 14.5c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.2-2.2 2.2Z" />
    <path d="M5.5 7c1.2-.3 2.6-.4 4.5-.4s3.3.1 4.5.4" />
  </svg>
);

const InstagramLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

const LinkedinLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M8 11v7" />
    <path d="M8 8v1" />
    <path d="M12 18v-6a2 2 0 0 1 2-2h2" />
  </svg>
);

const socialLinks = [
  {
    label: "GitHub",
    detail: "silversoul2k5",
    href: "https://github.com/silversoul2k5",
    logo: <GitHubLogo />,
  },
  {
    label: "Instagram",
    detail: "@silversoul2k5",
    href: "https://www.instagram.com/silversoul2k5/",
    logo: <InstagramLogo />,
  },
  {
    label: "LinkedIn",
    detail: "Arjun C",
    href: "https://www.linkedin.com/in/arjun-c-518455335/",
    logo: <LinkedinLogo />,
  },
  {
    label: "XDA Forums",
    detail: "silver.soul7",
    href: "https://xdaforums.com/m/silver-soul7.12793521/",
    logo: <Cpu size={18} aria-hidden="true" />,
  },
];

const Hero = () => {
  const time = useTime();
  const orbit = useTransform(time, (latest) => Math.sin(latest / 1300) * 10);
  const pitch = useTransform(time, (latest) => Math.cos(latest / 1500) * 3.5);

  const heroMeta = useMemo(
    () => ["Launch pages", "Responsive UI", "Motion polish", "Next.js builds"],
    []
  );

  return (
    <section
      id="home"
      className="section-anchor relative px-2 pb-4 pt-32 md:px-3 md:pt-36 lg:px-4 lg:pt-40"
    >
      <div className="section-shell">
        <section className="panel-shell relative overflow-hidden px-4 py-5 md:px-7 md:py-7 lg:px-10 lg:py-8">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.95))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/90" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/90 px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                <span className="h-3 w-3 rounded-full bg-[var(--success)]" />
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
              <p className="text-sm font-medium text-[var(--muted)]">
                8bit-framework / startup frontend studio
              </p>
            </div>

            <div className="relative mt-7 md:mt-8">
              <InteractiveWordmark />
            </div>

            <div className="mt-8 grid gap-8 lg:mt-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)_minmax(230px,0.55fr)] lg:items-end">
              <motion.div
                className="order-1 max-w-[560px]"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Arjun C / frontend developer
                </p>
                <h1 className="mt-4 max-w-[11ch] text-[clamp(2.15rem,4.2vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
                  Building crisp frontend experiences for startups that need to look ready on day one.
                </h1>
                <p className="mt-5 max-w-[44ch] text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                  I design and build portfolio sites, launch pages, product surfaces, and motion-rich interfaces that
                  feel clean on both phone and laptop.
                </p>
                <p className="mt-4 max-w-[42ch] text-base leading-7 text-[var(--muted)]">
                  When the brief stretches beyond the browser, I also prototype hardware ideas with Arduino and ESP32.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--ink)] px-6 text-sm font-semibold text-[var(--paper)] shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
                  >
                    <span>View work</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/85 px-6 text-sm font-semibold text-[var(--ink)]"
                  >
                    <span>Start a project</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {heroMeta.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--line)] bg-white/76 px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="order-2 mx-auto w-full"
                style={{ x: orbit, rotate: pitch }}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <HeroPortrait />
              </motion.div>

              <motion.div
                className="order-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:justify-items-end lg:pb-2"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.05 }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[88px] w-full items-center justify-between gap-4 rounded-[24px] border border-[var(--line)] bg-white/95 px-5 py-4 text-[var(--ink)] shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:border-[var(--line-strong)] lg:min-w-[260px]"
                  >
                    <span className="inline-flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--paper-soft)] text-[var(--ink)]">
                        {social.logo}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-base font-semibold">{social.label}</span>
                        <span className="text-sm text-[var(--muted)]">{social.detail}</span>
                      </span>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ))}
              </motion.div>
            </div>

            <div className="soft-divider mt-7" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
