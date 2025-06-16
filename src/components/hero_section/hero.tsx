"use client";

import React from 'react';
import Image from 'next/image';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import Typewriter from 'typewriter-effect';
import { motion } from 'motion/react';

function Hero() {
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "UI/UX Enthusiast"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Beams Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Image
                src="/your-photo.jpg" // Replace with your photo path
                alt="Your Name"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="text-green-400">Your Name</span>
            </h1>
            
            <div className="h-12 text-2xl md:text-3xl text-gray-300">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </div>

            <p className="text-gray-400 text-lg max-w-2xl">
              I build exceptional digital experiences that make an impact. 
              Specializing in creating beautiful, functional, and user-centered websites and applications.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <IconBrandGithub size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <IconBrandLinkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <IconBrandTwitter size={24} />
              </motion.a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
