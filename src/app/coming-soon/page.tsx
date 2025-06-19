"use client";

import GridBackground from '@/components/ui/grid-background';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandPython,
  IconBrandAws,
  IconBrandDocker,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";
import PlatformLogo from '@/components/hero_section/PlatformLogo';

const leftSideIcons = [
  { icon: <IconBrandJavascript size={40} />, position: "top-1/8 left-1/4", color: "text-yellow-400" },
  { icon: <IconBrandNodejs size={40} />, position: "top-1/9 left-1/3", color: "text-green-400" },
  { icon: <IconBrandReact size={40} />, position: "bottom-1/8 left-1/4", color: "text-cyan-400" },
  { icon: <IconBrandNextjs size={40} />, position: "top-1/2 left-1/16", color: "text-white" },
  { icon: <IconBrandTypescript size={40} />, position: "bottom-1/10 left-1/3", color: "text-blue-500" },
  { icon: <IconBrandMongodb size={40} />, position: "top-1/10 left-1/10", color: "text-green-500" },
  { icon: <IconBrandPython size={40} />, position: "bottom-1/8 right-1/2", color: "text-blue-600" },
  { icon: <IconBrandAws size={40} />, position: "top-1/3 right-1/2", color: "text-orange-400" },
  { icon: <IconBrandDocker size={40} />, position: "bottom-1/8 left-1/12", color: "text-blue-500" },
];

const rightSideIcons = [
  { icon: <IconBrandYoutube size={40} />, position: "top-1/4 right-1/4", color: "text-red-400" },
  { icon: <IconBrandX size={40} />, position: "bottom-1/4 right-1/4", color: "text-white" },
];

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden font-geist-sans">
      <GridBackground />

      {/* Glowing Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...leftSideIcons, ...rightSideIcons].map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, Math.random() > 0.5 ? -15 : 15, 0],
              rotate: [0, Math.random() > 0.5 ? 8 : -8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className={`absolute ${item.position} ${item.color} opacity-15`}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Card */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-8 py-12 md:px-14 md:py-16 bg-black/20 rounded-3xl shadow-[0_0_30px_rgba(34,197,94,0.25)] border border-green-400 max-w-xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-xl text-center tracking-tight animate-pulse"
        >
          Coming Soon!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-gray-300 text-center max-w-lg font-medium leading-relaxed"
        >
          This feature is currently in the works. <br />
          Stay tuned for something <span className="text-green-300 font-semibold">awesome</span>!
        </motion.p>
        
        <div className="w-full flex justify-center">
          <PlatformLogo />
        </div>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded-xl shadow-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300 text-lg mt-2"
          >
            Back to Home
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
