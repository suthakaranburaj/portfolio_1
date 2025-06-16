"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconCode, IconRocket, IconDeviceLaptop } from '@tabler/icons-react';

const About = () => {
  const features = [
    {
      icon: <IconCode size={32} />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices and design patterns."
    },
    {
      icon: <IconRocket size={32} />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency to provide the best user experience."
    },
    {
      icon: <IconDeviceLaptop size={32} />,
      title: "Responsive Design",
      description: "Creating beautiful and functional interfaces that work seamlessly across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-green-400">
              <img
                src="/path-to-your-image.jpg"
                alt="About Me"
                className="object-cover w-full h-full"
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
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-400">
              Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless
              digital experiences that combine beautiful design with robust functionality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach to development focuses on writing clean, maintainable code while
              staying up-to-date with the latest technologies and best practices. I believe
              in creating solutions that are not only technically sound but also provide
              exceptional user experiences.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-green-400/10 rounded-lg hover:bg-green-400/20 transition-colors"
                >
                  <div className="text-green-400 mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 