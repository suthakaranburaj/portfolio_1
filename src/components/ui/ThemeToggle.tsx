"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-0.5 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 dark:from-green-400/10 dark:to-blue-500/10" />
        
        {/* Icons */}
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : 180,
            scale: theme === 'dark' ? 1 : 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="relative z-10"
        >
          {theme === 'dark' ? (
            <IconMoon 
              size={20} 
              className="text-gray-700 dark:text-yellow-300 transition-colors duration-300" 
            />
          ) : (
            <IconSun 
              size={20} 
              className="text-yellow-500 dark:text-gray-300 transition-colors duration-300" 
            />
          )}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'dark' ? 0.3 : 0.6,
            scale: theme === 'dark' ? 0.8 : 1.2,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 dark:from-blue-400/20 dark:to-purple-500/20 blur-sm"
        />

        {/* Ripple effect on click */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full bg-white/20"
        />
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded-md whitespace-nowrap pointer-events-none"
      >
        {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 