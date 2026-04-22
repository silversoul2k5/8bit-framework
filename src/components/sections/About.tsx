"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
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

  const highlights = [
    {
      icon: Code2,
      title: "Frontend Developer",
      description: "Expert in React, Next.js, TypeScript, and modern web technologies",
    },
    {
      icon: Palette,
      title: "UI/UX Designer",
      description: "Creating beautiful, intuitive interfaces with a focus on user experience",
    },
    {
      icon: Zap,
      title: "Performance Enthusiast",
      description: "Optimizing for speed, responsiveness, and smooth interactions",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title="About Me" subtitle="Frontend Developer & Creative Technologist" />

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Arjun, a passionate frontend developer and creative technologist based in India. With a deep love for
              building interactive digital experiences, I combine technical expertise with creative design thinking.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in creating high-performance web applications with stunning animations and smooth user
              interactions. My focus is on turning complex ideas into elegant, beautiful solutions that users love.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's crafting pixel-perfect interfaces, optimizing performance, or implementing smooth animations,
              I'm committed to delivering excellence in every project.
            </p>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://github.com/silver-soul7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-purple-500 transition-colors font-semibold"
              >
                GitHub →
              </a>
              <a
                href="https://instagram.com/silver.soul7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-purple-500 transition-colors font-semibold"
              >
                Instagram →
              </a>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 items-start p-6 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-600/10 border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
                >
                  <Icon className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
