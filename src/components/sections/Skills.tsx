"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      category: "Mobile",
      skills: [
        { name: "Flutter", level: 87 },
        { name: "Dart", level: 86 },
        { name: "React Native", level: 80 },
        { name: "Firebase", level: 84 },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Python", level: 80 },
        { name: "Git", level: 90 },
        { name: "MongoDB", level: 78 },
      ],
    },
    {
      category: "Design & Other",
      skills: [
        { name: "Figma", level: 88 },
        { name: "Video Editing", level: 85 },
        { name: "UI/UX Design", level: 89 },
        { name: "Arduino/ESP32", level: 76 },
      ],
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          title="Skills &"
          highlight="Experience"
          subtitle="Expertise across multiple technologies and platforms"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div key={catIdx} variants={categoryVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400">{category.category}</h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-cyan-400" />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-cyan-400/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years of Experience", value: "5+" },
            { label: "Happy Clients", value: "30+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="text-center p-6"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
