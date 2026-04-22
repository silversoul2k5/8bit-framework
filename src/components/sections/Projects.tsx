"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { ExternalLink, Database } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Gaming Optimization Tool",
      category: "Web Application",
      description: "A comprehensive tool for optimizing gaming performance with real-time monitoring and diagnostics",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-cyan-400 to-blue-600",
      stats: { users: "5K+", improvement: "40%" },
    },
    {
      id: 2,
      title: "TechnoTweaks Content System",
      category: "CMS Platform",
      description: "YouTube content management system with scheduling, analytics, and automation features",
      technologies: ["Next.js", "Node.js", "MongoDB", "Firebase"],
      color: "from-purple-500 to-pink-500",
      stats: { videos: "500+", engagement: "85%" },
    },
    {
      id: 3,
      title: "Flutter Fitness App",
      category: "Mobile App",
      description: "Solo Leveling themed fitness tracking app with animated transitions and gamification",
      technologies: ["Flutter", "Dart", "Firebase", "Flutter Animation"],
      color: "from-orange-400 to-red-500",
      stats: { downloads: "10K+", rating: "4.8★" },
    },
    {
      id: 4,
      title: "AI Assistant with ESP32",
      category: "IoT Project",
      description: "Smart home integration with voice control and AI-powered automation using ESP32",
      technologies: ["ESP32", "Python", "TensorFlow", "Firebase"],
      color: "from-green-400 to-emerald-600",
      stats: { devices: "20+", automation: "95%" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle
          title="Featured"
          highlight="Projects"
          subtitle="Showcasing our best work and creative solutions"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
              className="cursor-pointer"
            >
              <Card delay={idx * 0.1}>
                <motion.div
                  className={`h-48 rounded-lg bg-gradient-to-br ${project.color} p-6 flex flex-col justify-end mb-6 relative overflow-hidden group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"
                  />
                  <div className="relative z-10 flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <ExternalLink className="text-white" size={24} />
                    </motion.div>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-cyan-400 font-semibold mb-1">{project.category}</p>
                    <p className="text-gray-400">{project.description}</p>
                  </div>

                  {/* Stats */}
                  <motion.div
                    className="grid grid-cols-2 gap-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedProject === idx ? 1 : 0.5 }}
                  >
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-cyan-400 font-bold text-lg">{value}</p>
                        <p className="text-xs text-gray-500 capitalize">{key}</p>
                      </div>
                    ))}
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    className="flex flex-wrap gap-2 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: selectedProject === idx ? 1 : 0.6,
                      y: selectedProject === idx ? 0 : 5,
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
