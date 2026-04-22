"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { Layout, Sparkles, Zap, Smartphone, Rocket, PaintbrushIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Custom Website Development",
      description: "Bespoke websites tailored to your unique brand and business goals with cutting-edge technology",
    },
    {
      icon: PaintbrushIcon,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces designed for maximum engagement and conversion",
    },
    {
      icon: Sparkles,
      title: "Interactive Animations",
      description: "Smooth, meaningful animations that enhance user experience and bring interfaces to life",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and smooth interactions for superior user experience",
    },
    {
      icon: Smartphone,
      title: "Mobile App UI (Flutter)",
      description: "Beautiful, responsive mobile app interfaces built with Flutter for iOS and Android",
    },
    {
      icon: Rocket,
      title: "Web App Solutions",
      description: "Full-featured web applications with real-time capabilities and seamless integrations",
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
    <section id="services" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle
          title="Services"
          highlight="Offered"
          subtitle="Comprehensive solutions for your digital needs"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card delay={idx * 0.1}>
                  <div className="h-full flex flex-col gap-4">
                    <motion.div
                      className="p-3 w-fit rounded-lg bg-cyan-400/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="text-cyan-400" size={28} />
                    </motion.div>

                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-400 flex-grow">{service.description}</p>

                    <motion.div
                      className="text-cyan-400 font-semibold flex items-center gap-2 pt-4"
                      whileHover={{ x: 5 }}
                    >
                      Learn more →
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
