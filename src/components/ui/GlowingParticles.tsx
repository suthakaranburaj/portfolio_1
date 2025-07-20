import React from 'react';
import { motion } from 'framer-motion';

const balls = [
  { size: 40, color: 'from-green-400 to-emerald-400', top: '10%', left: '15%', anim: 'particle-1', x: [0, 100, -50, 0], y: [0, 40, -30, 0], duration: 18 },
  { size: 32, color: 'from-green-300 to-green-500', top: '60%', left: '10%', anim: 'particle-2', x: [0, 120, 60, 0], y: [0, -30, 20, 0], duration: 22 },
  { size: 48, color: 'from-emerald-400 to-green-300', top: '30%', left: '50%', anim: 'particle-3', x: [0, -80, 40, 0], y: [0, 60, -40, 0], duration: 20 },
  { size: 36, color: 'from-green-400 to-green-200', top: '75%', left: '70%', anim: 'particle-4', x: [0, -60, 30, 0], y: [0, -40, 20, 0], duration: 16 },
  { size: 24, color: 'from-green-300 to-emerald-300', top: '50%', left: '50%', anim: 'particle-5', x: [0, 40, -20, 0], y: [0, 30, -10, 0], duration: 14 },

  // New balls
  { size: 40, color: 'from-emerald-300 to-green-400', top: '20%', left: '80%', anim: 'particle-6', x: [0, -50, 20, 0], y: [0, 25, -15, 0], duration: 17 },
  { size: 52, color: 'from-green-200 to-emerald-200', top: '5%', left: '5%', anim: 'particle-7', x: [0, 70, -30, 0], y: [0, 20, -10, 0], duration: 19 },
  { size: 64, color: 'from-emerald-500 to-green-300', top: '85%', left: '20%', anim: 'particle-8', x: [0, 80, 20, 0], y: [0, -40, 25, 0], duration: 21 },
  { size: 34, color: 'from-green-500 to-emerald-400', top: '40%', left: '85%', anim: 'particle-9', x: [0, -40, 30, 0], y: [0, 30, -20, 0], duration: 15 },
  { size: 50, color: 'from-green-200 to-green-400', top: '90%', left: '90%', anim: 'particle-10', x: [0, -70, 40, 0], y: [0, -30, 10, 0], duration: 18 },
  { size: 28, color: 'from-emerald-400 to-green-500', top: '35%', left: '25%', anim: 'particle-11', x: [0, 60, -30, 0], y: [0, 15, -5, 0], duration: 12 },
  { size: 70, color: 'from-green-300 to-emerald-200', top: '12%', left: '60%', anim: 'particle-12', x: [0, -90, 60, 0], y: [0, 35, -25, 0], duration: 20 },
  { size: 38, color: 'from-green-400 to-green-300', top: '45%', left: '10%', anim: 'particle-13', x: [0, 30, -10, 0], y: [0, 40, -20, 0], duration: 13 },
  { size: 46, color: 'from-emerald-500 to-green-400', top: '70%', left: '80%', anim: 'particle-14', x: [0, -60, 25, 0], y: [0, -35, 15, 0], duration: 19 },
  { size: 22, color: 'from-green-300 to-emerald-300', top: '65%', left: '45%', anim: 'particle-15', x: [0, 50, -25, 0], y: [0, 20, -10, 0], duration: 11 }
];


const GlowingParticles = () => (
  <div className="pointer-events-none fixed inset-0 z-0">
    {balls.map((ball, i) => (
      <motion.div
        key={i}
        className={`absolute bg-gradient-to-br ${ball.color} rounded-full blur-2xl opacity-60`}
        style={{
          width: ball.size,
          height: ball.size,
          top: ball.top,
          left: ball.left,
        }}
        animate={{ x: ball.x, y: ball.y }}
        transition={{ duration: ball.duration, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      />
    ))}
  </div>
);

export default GlowingParticles; 