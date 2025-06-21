"use client";

import React from "react";
import { motion } from "motion/react";
import { IconCode, IconRocket, IconServer } from "@tabler/icons-react";
import GridBackground from "../ui/grid-background";
import ProfilePic from "../../../public/about_main.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const features = [
    {
      icon: <IconCode size={32} />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices and design patterns.",
    },
    {
      icon: <IconRocket size={32} />,
      title: "Fast Performance",
      description:
        "Optimizing applications for speed and efficiency to provide the best user experience.",
    },
    {
      icon: <IconServer size={32} />,
      title: "Robust Backend Systems",
      description:
        "Designing scalable, secure, and high-performance backend architectures to power modern web applications.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative"
    >
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-green-400">
              <Image
                src={ProfilePic}
                alt="About Me"
                fill
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-green-400"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-green-400"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-400">
              Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m always the first to take on complex and unique problems,
              driven by a mindset that thrives on challenge and innovation. I
              believe that every problem, no matter how tough, brings an
              opportunity to learn and grow. My focus lies in crafting scalable
              and efficient solutions that not only work but also make an
              impact.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I specialize in building and optimizing high-complexity backend
              and frontend functionalities for modern web applications. With a
              strong foundation in both design and development, I turn intricate
              problems into seamless, intuitive user experiences. Whether
              it&apos;s creating powerful APIs, solving performance issues, or
              architecting full-stack systems, I approach every task with
              precision and creativity.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-green-400/10 rounded-lg hover:bg-green-400/20 transition-colors"
                >
                  <motion.div
                    className="text-green-400 mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="https://www.linkedin.com/in/suthakar-anburaj-7bb816290/" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-6 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition-colors"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
