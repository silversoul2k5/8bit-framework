"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
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
      href: "",
      icon: Cpu,
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
    <section id="contact" className="relative overflow-hidden bg-[var(--paper)] py-20 md:py-28">
      <div className="section-shell relative z-10">
        <SectionTitle
          title="Contact"
          highlight="Arjun"
          subtitle="Have a business idea, a rough landing page, or a product UI that needs polish? Send the shape of it and I will help turn it into a frontend people can trust."
          align="left"
        />

        <motion.div
          className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--paper-soft)] p-6">
              <div className="flex items-center gap-3">
                <ScanLine size={22} className="text-[var(--accent)]" aria-hidden="true" />
                <h3 className="text-2xl font-semibold">Scan or message</h3>
              </div>
              <a
                href="https://www.instagram.com/silversoul2k5/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block overflow-hidden rounded-lg border border-[var(--line)] bg-white"
                aria-label="Open silversoul2k5 on Instagram"
              >
                <Image
                  src="/images/silversoul2k5-qr.png"
                  alt="Instagram QR code for silversoul2k5"
                  width={470}
                  height={540}
                  className="h-auto w-full"
                  priority={false}
                />
              </a>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                QR opens the Instagram profile you shared. For project inquiries, LinkedIn or GitHub are the cleanest
                places to start the conversation.
              </p>
            </div>

            <div className="grid gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const content = (
                  <>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-white">
                      <Icon size={20} className="text-[var(--accent)]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--muted)]">{link.label}</p>
                      <p className="font-semibold">{link.value}</p>
                    </div>
                    {link.href && <ArrowUpRight size={18} className="ml-auto" aria-hidden="true" />}
                  </>
                );

                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-[var(--line)] bg-white/70 p-4 hover:border-[var(--ink)]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={link.label}
                    className="flex items-center gap-4 rounded-lg border border-[var(--line)] bg-white/70 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="rounded-lg border border-[var(--line)] bg-white/76 p-6 shadow-[0_20px_80px_rgba(10,9,9,0.07)] md:p-8">
              <div className="mb-8 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold">Send a project brief</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">
                    This opens your mail app with a ready-to-send inquiry.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <label htmlFor="name" className="block text-sm font-semibold">
                  Your Name
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--ink)] focus:outline-none"
                    placeholder="Arjun C"
                    whileFocus={{ y: -1 }}
                  />
                </label>

                <label htmlFor="email" className="block text-sm font-semibold">
                  Your Email
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--ink)] focus:outline-none"
                    placeholder="you@example.com"
                    whileFocus={{ y: -1 }}
                  />
                </label>

                <label htmlFor="message" className="block text-sm font-semibold">
                  Message
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-2 w-full resize-none rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--ink)] focus:outline-none"
                    placeholder="Tell me what the business does, what page you need, and what should happen after someone visits."
                    whileFocus={{ y: -1 }}
                  />
                </label>
              </div>

              <motion.div className="mt-8" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={<Send size={18} aria-hidden="true" />}
                >
                  {isSubmitting ? "Opening mail..." : "Open email draft"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
