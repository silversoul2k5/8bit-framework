"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M6 9.5v6" />
    <path d="M6 8.5h.01" />
    <path d="M9.5 15.5v-4a1.5 1.5 0 0 1 1.5-1.5h0" />
    <path d="M9.5 15.5h3.5" />
    <path d="M9.5 11h3.5" />
  </svg>
);

type FormData = {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  mobile: string;
  message: string;
};

const initialFormData: FormData = {
  salutation: "",
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  mobile: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(" ").trim();
    const subjectName = fullName || "Website Inquiry";
    const subject = encodeURIComponent(`New message from ${subjectName}`);
    const body = encodeURIComponent(
      [
        `Salutation: ${formData.salutation || "-"}`,
        `First Name: ${formData.firstName || "-"}`,
        `Last Name: ${formData.lastName || "-"}`,
        `Email: ${formData.email || "-"}`,
        `Company: ${formData.company || "-"}`,
        `Mobile: ${formData.mobile || "-"}`,
        "",
        "Message:",
        formData.message || "-",
      ].join("\n")
    );

    window.location.href = `mailto:8bitframework@gmail.com?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="section-anchor px-4 py-14 md:py-20">
      <div className="section-shell">
        <motion.div
          className="mx-auto flex max-w-[560px] flex-col items-center"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              /Contact Me
            </p>
            <p className="mt-4 max-w-[460px] text-base leading-7 text-[var(--muted)] md:text-lg">
              Tell me about your project, timeline, or the kind of frontend experience you want to build.
            </p>
          </div>

          <div className="flex w-full max-w-[420px] flex-col gap-3 rounded-[26px] border border-[var(--line-strong)] bg-[rgba(248,248,245,0.82)] px-5 py-4 shadow-[0_10px_36px_rgba(0,0,0,0.05)] backdrop-blur md:max-w-none md:flex-row md:items-center md:justify-center md:gap-6">
            <a
              href="mailto:8bitframework@gmail.com"
              className="inline-flex items-center gap-3 text-base font-medium text-[var(--ink)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)]">
                <Mail size={17} aria-hidden="true" />
              </span>
              <span>8bitframework@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-c-518455335/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-base font-medium text-[var(--ink)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)]">
                <LinkedInIcon />
              </span>
              <span>LinkedIn</span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 w-full rounded-[8px] border border-[var(--line-strong)] bg-[rgba(248,248,245,0.82)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur md:p-6"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label htmlFor="salutation" className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                Salutation
                <select
                  id="salutation"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleInputChange}
                  className="mt-2 min-h-12 w-full rounded-[8px] border border-[var(--line-strong)] bg-white/78 px-4 text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                >
                  <option value="">--None--</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </label>

              <label htmlFor="firstName" className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                First Name
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="mt-2 min-h-12 w-full rounded-[8px] border border-[var(--line-strong)] bg-white/78 px-4 text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                />
              </label>

              <label htmlFor="lastName" className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                Last Name
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-2 min-h-12 w-full rounded-[8px] border border-[var(--line-strong)] bg-white/78 px-4 text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                />
              </label>

              <label htmlFor="email" className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 min-h-12 w-full rounded-[8px] border border-[var(--line-strong)] bg-white/78 px-4 text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                />
              </label>

              <label htmlFor="company" className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                Company
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-2 min-h-12 w-full rounded-[8px] border border-[var(--line-strong)] bg-white/78 px-4 text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                />
              </label>

              <label htmlFor="mobile" className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                Mobile
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="mt-2 min-h-12 w-full rounded-[8px] border border-[var(--line-strong)] bg-white/78 px-4 text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none"
                />
              </label>
            </div>

            <label htmlFor="message" className="mt-5 block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
              Message
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-[8px] border border-[var(--line-strong)] bg-white/78 px-4 py-4 text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--ink)] focus:outline-none"
                placeholder="Tell me about your project, timeline, or how I can help."
              />
            </label>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[var(--muted)]">
                Send button opens an email draft to <span className="font-semibold text-[var(--ink)]">8bitframework@gmail.com</span>.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 text-sm font-semibold text-[var(--paper)] shadow-[0_12px_30px_rgba(0,0,0,0.12)] disabled:opacity-70"
              >
                <span>{isSubmitting ? "Opening..." : "Send Message"}</span>
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
