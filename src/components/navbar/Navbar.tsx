"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Hackathon", href: "#hackathon" },
    { name: "Blog", href: "#blog" },
    { name: "YouTube", href: "#youtube" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-green-400 cursor-pointer"
            >
              Suthakar Anburaj
            </motion.a>
            
            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors cursor-pointer ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-green-400' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors cursor-pointer ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-green-400' 
                : 'text-gray-700 hover:text-green-600'
            }`}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden backdrop-blur-md ${
              theme === 'dark' 
                ? 'bg-black/95 border-t border-gray-800' 
                : 'bg-white/95 border-t border-gray-200'
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors cursor-pointer ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-green-400' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

