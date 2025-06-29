"use client";

import React from 'react';
import { motion } from 'motion/react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconBrandYoutube,
} from "@tabler/icons-react";
import GridBackground from '../ui/grid-background';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <IconBrandGithub size={24} />,
      name: "GitHub",
      url: "https://github.com/suthakaranburaj"
    },
    {
      icon: <IconBrandLinkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suthakar-anburaj-7bb816290/"
    },
    {
      icon: <IconBrandTwitter size={24} />,
      name: "Twitter",
      url: "https://twitter.com"
    },
    {
      icon: <IconBrandYoutube size={24} />,
      name: "YouTube",
      url: "https://youtube.com/@SuthakarAnburaj"
    },
    {
      icon: <IconMail size={24} />,
      name: "Email",
      url: "mailto:suthakaranburaj03@gmail.com"
    }
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Skills", url: "#skills" },
    { name: "Blog", url: "#blog" },
    { name: "YouTube", url: "#youtube" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <footer className={`relative transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 to-black' 
        : 'bg-gradient-to-b from-gray-100 to-gray-200'
    }`}>
      <GridBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">About Me</h3>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A passionate full-stack developer focused on creating beautiful and functional web applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`hover:text-green-400 transition-colors cursor-pointer ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.url}
                    className={`hover:text-green-400 transition-colors cursor-pointer ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Contact Info</h3>
            <ul className={`space-y-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <li>Email: suthakaranburaj03@gmail.com</li>
              <li>Location: Mumbai, Maharashtra, India</li>
              <li>Phone: +91 9321607843</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Newsletter</h3>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Subscribe to my newsletter for the latest updates and articles.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-lg focus:outline-none focus:border-green-400 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                } placeholder-gray-500`}
              />
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-center md:text-left ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              © {currentYear} Suthakar Anburaj. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className={`hover:text-green-400 transition-colors ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Privacy Policy
              </a>
              <a href="#" className={`hover:text-green-400 transition-colors ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 