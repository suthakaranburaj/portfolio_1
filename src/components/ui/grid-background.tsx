"use client";

import { useTheme } from '@/context/ThemeContext';

const GridBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`absolute inset-0 transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]'
        : 'bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:14px_24px]'
    }`}></div>
  );
};

export default GridBackground; 