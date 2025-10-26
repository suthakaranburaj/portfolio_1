"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  // IconBrandTwitter,
  // IconCode,
  IconRocket,
  // IconDeviceLaptop,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandYoutube,
  IconBrandX,
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandPython,
  IconBrandAws,
  IconBrandDocker,
  IconFileCv,
  IconBrandLeetcode,
} from "@tabler/icons-react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import ProfilePic from "../../../assets/profile_pic.jpeg";
// import MyResume from   '../../../public/Suthakar_Anburaj_15_06_25.pdf'
import { SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { useTheme } from "@/context/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Entrepreneur",
  ];

  const leftSideIcons = [
    {
      icon: <IconBrandJavascript size={40} />,
      position: "top-1/8 left-1/4",
      color: "text-yellow-400",
    },
    {
      icon: <IconBrandNodejs size={40} />,
      position: "top-1/9 left-1/3",
      color: "text-green-400",
    },
    {
      icon: <IconBrandReact size={40} />,
      position: "bottom-1/8 left-1/4",
      color: "text-blue-400",
    },
    {
      icon: <IconBrandNextjs size={40} />,
      position: "top-1/2 left-1/16",
      color: "text-white",
    },
    {
      icon: <IconBrandTypescript size={40} />,
      position: "bottom-1/10 left-1/3",
      color: "text-blue-500",
    },
    {
      icon: <IconBrandMongodb size={40} />,
      position: "top-1/10 left-1/10",
      color: "text-green-500",
    },
    {
      icon: <IconBrandPython size={40} />,
      position: "bottom-1/8 right-1/2",
      color: "text-blue-600",
    },
    {
      icon: <IconBrandAws size={40} />,
      position: "top-1/3 right-1/2",
      color: "text-orange-400",
    },
    {
      icon: <IconBrandDocker size={40} />,
      position: "bottom-1/8 left-1/12",
      color: "text-blue-500",
    },
  ];

  const rightSideIcons = [
    {
      icon: <IconBrandYoutube size={40} />,
      position: "top-1/4 right-1/4",
      color: "text-red-400",
    },
    {
      icon: <IconBrandX size={40} />,
      position: "bottom-1/4 right-1/4",
      color: "text-white",
    },
  ];

  return (
    <div
      id="home"
      className={`pt-10 min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-black to-gray-900 text-white"
          : "bg-gradient-to-b from-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Grid Background */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
            : "bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:14px_24px]"
        }`}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Left Side Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leftSideIcons.map((item, index) => (
          <motion.div
            key={`left-${index}`}
            animate={{
              y: [0, Math.random() > 0.5 ? -20 : 20, 0],
              rotate: [0, Math.random() > 0.5 ? 5 : -5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`absolute ${item.position} ${item.color} opacity-20`}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Right Side Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {rightSideIcons.map((item, index) => (
          <motion.div
            key={`right-${index}`}
            animate={{
              y: [0, Math.random() > 0.5 ? -20 : 20, 0],
              rotate: [0, Math.random() > 0.5 ? 5 : -5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`absolute ${item.position} ${item.color} opacity-20`}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-green-400 group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Image
                src={ProfilePic}
                alt="Suthakar Anburaj"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-green-400"></div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-green-400 font-mono"
              >
                Welcome to my portfolio
              </motion.div>
              <h1 className="text-3xl md:text-6xl font-bold">
                Hi, I&apos;m{" "}
                <span className="text-green-400">Suthakar Anburaj</span>
              </h1>
            </div>

            <div
              className={`h-12 text-2xl md:text-3xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
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

            <div className="space-y-4">
              <p
                className={`md:text-lg max-w-2xl leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I&apos;m always the first to take on complex and unique
                problems. I believe every challenge teaches us something
                valuable. I specialize in developing highly complex backend and
                frontend functionalities, with a passion for turning tough
                problems into simple, beautiful, and intuitive solutions.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-400/10 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-green-400">1+</div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-400/10 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-green-400">16+</div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-400/10 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-green-400">5+</div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Technologies
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-400/10 p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Client Satisfaction
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold rounded-xl shadow-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300"
                >
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-2"
                  >
                    <IconRocket size={20} />
                    Get In Touch
                  </Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 border-2 border-green-400 font-bold rounded-xl transition-all duration-300 ${
                    theme === "dark"
                      ? "text-white hover:bg-green-400 hover:text-black"
                      : "text-gray-900 hover:bg-green-400 hover:text-black"
                  }`}
                >
                  <Link
                    href="/Suthakar Anburaj_new (3).pdf"
                    className="flex items-center justify-center gap-2"
                  >
                    <IconFileCv size={20} />
                    Download CV
                  </Link>
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <motion.a
                  href="https://github.com/suthakaranburaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-colors dx xuration-300 ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <IconBrandGithub size={24} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/suthakar-anburaj-7bb816290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                >
                  <IconBrandLinkedin size={24} />
                </motion.a>

                <motion.a
                  href="https://leetcode.com/suthakaranburaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white transition-colors duration-300"
                >
                  <IconBrandLeetcode size={24} />
                </motion.a>

                <motion.a
                  href="https://www.geeksforgeeks.org/user/suthakaranburaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
                >
                  <SiGeeksforgeeks size={24} />
                </motion.a>

                <motion.a
                  href="https://www.codechef.com/users/suthakar_09"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300"
                >
                  <SiCodechef size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
