"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import { Mail, Code, Heart, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thanks for reaching out! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    }, 1000);
  };

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
    <section id="contact" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle
          title="Let's Build"
          highlight="Something Amazing"
          subtitle="I'm always open to discussing new projects and creative ideas"
        />

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

            {/* Email */}
            <motion.a
              href="mailto:arjun@example.com"
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-cyan-400/10 transition-colors group"
              whileHover={{ x: 10 }}
            >
              <div className="p-3 rounded-lg bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-colors">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>
                <p className="text-lg font-semibold text-cyan-400 group-hover:text-purple-500 transition-colors">
                  arjun@8bit-framework.dev
                </p>
              </div>
            </motion.a>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Follow Me</p>
              <div className="flex gap-4">
                {[
                  { icon: Code, label: "GitHub", href: "https://github.com/silver-soul7" },
                  { icon: Heart, label: "Instagram", href: "https://instagram.com/silver.soul7" },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="p-6 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-400/10 border border-purple-600/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex gap-3 items-start">
                <Sparkles className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">Ready to collaborate?</p>
                  <p className="text-sm text-gray-400">
                    Whether you have a specific project in mind or just want to explore possibilities, let's talk!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                  whileFocus={{ boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="john@example.com"
                  whileFocus={{ boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" }}
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" }}
                />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>

              {/* Success Message */}
              {submitMessage && (
                <motion.div
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
