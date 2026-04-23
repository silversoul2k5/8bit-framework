"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ContactRound, Cpu, Mail, MessageCircle, ScanLine, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`New frontend inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject:\n${formData.message}`
    );

    window.location.href = `mailto:hello@8bit-framework.dev?subject=${subject}&body=${body}`;
    setTimeout(() => setIsSubmitting(false), 800);
  };

  const contactLinks = [
    {
      label: "LinkedIn",
      value: "Arjun C",
      href: "https://www.linkedin.com/in/arjun-c-518455335/",
      icon: ContactRound,
    },
    {
      label: "Instagram",
      value: "@silversoul2k5",
      href: "https://www.instagram.com/silversoul2k5/",
      icon: MessageCircle,
    },
    {
      label: "GitHub",
      value: "silversoul2k5",
      href: "https://github.com/silversoul2k5",
      icon: Code2,
    },
    {
      label: "XDA Forums",
      value: "silver.soul7",
      href: undefined,
      icon: Cpu,
    },
  ];

  return (
    <section id="contact" className="section-anchor px-4 py-3 md:py-4">
      <div className="section-shell">
        <motion.section
          className="panel-shell overflow-hidden rounded-[32px]"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="border-b border-[var(--line)] bg-[#171717] px-5 py-8 text-white lg:border-b-0 lg:border-r lg:border-white/10 md:px-8 md:py-10">
              <p className="text-3xl font-semibold uppercase leading-none md:text-5xl">/Contact Me</p>
              <p className="mt-5 max-w-md text-base leading-7 text-white/68 md:text-lg">
                If you want a sharper homepage, an animated portfolio, or a startup site that feels more premium,
                let&apos;s build it.
              </p>

              <div className="mt-8 rounded-[24px] border border-white/12 bg-white/6 p-5">
                <div className="flex items-center gap-3">
                  <ScanLine size={20} aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Scan or message</h3>
                </div>

                <a
                  href="https://www.instagram.com/silversoul2k5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block overflow-hidden rounded-[20px] border border-white/10 bg-white"
                  aria-label="Open silversoul2k5 on Instagram"
                >
                  <Image
                    src="/images/silversoul2k5-qr.png"
                    alt="Instagram QR code for silversoul2k5"
                    width={470}
                    height={540}
                    className="h-auto w-full"
                  />
                </a>

                <p className="mt-4 text-sm leading-6 text-white/56">
                  The QR goes to your Instagram profile. LinkedIn and GitHub are also listed below for easier follow-up.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  const content = (
                    <>
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/6">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/54">{link.label}</p>
                        <p className="font-semibold text-white">{link.value}</p>
                      </div>
                      {link.href && <ArrowUpRight size={18} className="ml-auto text-white/72" aria-hidden="true" />}
                    </>
                  );

                  return link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/6 p-4 transition hover:bg-white/10"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={link.label} className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/6 p-4">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="px-5 py-8 md:px-8 md:py-10">
              <div className="mb-8 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold">Start a project</h3>
                  <p className="mt-2 max-w-xl leading-7 text-[var(--muted)]">
                    Send the idea, current stage, and what kind of page or product frontend you want. I&apos;ll prepare
                    the email draft for you.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="rounded-[28px] border border-[var(--line)] bg-white/84 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] md:p-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <label htmlFor="name" className="block text-sm font-semibold">
                    Your Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[var(--paper)] px-4 text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--ink)] focus:outline-none"
                      placeholder="Arjun C"
                    />
                  </label>

                  <label htmlFor="email" className="block text-sm font-semibold">
                    Your Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-12 w-full rounded-[18px] border border-[var(--line)] bg-[var(--paper)] px-4 text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--ink)] focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label htmlFor="message" className="mt-5 block text-sm font-semibold">
                  Message
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={7}
                    className="mt-2 w-full resize-none rounded-[22px] border border-[var(--line)] bg-[var(--paper)] px-4 py-4 text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--ink)] focus:outline-none"
                    placeholder="Tell me what the business does, what page you want, and what feeling the website should give people."
                  />
                </label>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    Message opens a mail draft to <span className="font-semibold text-[var(--ink)]">hello@8bit-framework.dev</span>.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 text-sm font-semibold text-[var(--paper)] shadow-[0_12px_36px_rgba(0,0,0,0.14)] disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Opening mail..." : "Open email draft"}</span>
                    <Send size={17} aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Contact;
