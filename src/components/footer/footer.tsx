"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconMail } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <IconBrandGithub size={24} />,
      name: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      icon: <IconBrandLinkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername"
    },
    {
      icon: <IconBrandTwitter size={24} />,
      name: "Twitter",
      url: "https://twitter.com/yourusername"
    },
    {
      icon: <IconBrandYoutube size={24} />,
      name: "YouTube",
      url: "https://youtube.com/@yourchannel"
    },
    {
      icon: <IconMail size={24} />,
      name: "Email",
      url: "mailto:your.email@example.com"
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
    <footer className="bg-gradient-to-b from-gray-900 to-black relative">
      <GridBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">About Me</h3>
            <p className="text-gray-300 mb-4">
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
                  className="text-gray-400 hover:text-green-400 transition-colors"
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
                    className="text-gray-300 hover:text-green-400 transition-colors"
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
            <ul className="space-y-2 text-gray-300">
              <li>Email: your.email@example.com</li>
              <li>Location: San Francisco, CA</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to my newsletter for the latest updates and articles.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-lg focus:outline-none focus:border-green-400 text-gray-300"
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
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
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