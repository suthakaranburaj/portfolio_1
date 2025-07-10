"use client"
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { TEAL, PURPLE, YELLOW, BLUE } from "@/components/colors";

const PlatformLogo = () => {
  const platforms = [
    {
      name: "LeetCode",
      icon: <SiLeetcode size={18} />,
      url: "https://leetcode.com/u/suthakaranburaj/",
      color: TEAL,
    },
    {
      name: "GeeksForGeeks",
      icon: <SiGeeksforgeeks size={18} />,
      url: "https://www.geeksforgeeks.org/user/suthakaranburaj/",
      color: PURPLE,
    },
    {
      name: "CodeChef",
      icon: <SiCodechef size={18} />,
      url: "https://www.codechef.com/users/suthakaranbu",
      color: YELLOW,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      url: "https://www.linkedin.com/in/suthakar-anburaj-7bb816290/",
      color: BLUE,
    },
    // {
    //   name: "Twitter",
    //   icon: <FaTwitter size={18} />,
    //   url: "https://twitter.com/yourusername",
    //   color: "#1DA1F2",
    // },
    // {
    //   name: "Instagram",
    //   icon: <FaInstagram size={18} />,
    //   url: "https://instagram.com/yourusername",
    //   color: "#E1306C", // Instagram brand color
    // },
    {
      name: "GitHub",
      icon: <FaGithub size={18} />,
      url: "https://github.com/suthakaranburaj",
      color: "#FFFFFF",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-1 p-4">
      {platforms.map((platform) => (
        <CustomTooltip key={platform.name} content={platform.name}>
          <Link href={platform.url} target="_blank" rel="noopener noreferrer">
            <motion.div
              // whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center justify-center p-3 rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: `${platform.color}20`,
                color: platform.color,
                border: `1px solid ${platform.color}`,
              }}
            >
              {platform.icon}
            </motion.div>
          </Link>
        </CustomTooltip>
      ))}
    </div>
  );
};

// Custom Tooltip Component
interface CustomTooltipProps {
  content: string;
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium bg-[#7a7a7b] text-white rounded-lg shadow-lg"
          style={{ zIndex: 50 }}
        >
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#7a7a7b] rotate-45 -mt-1"></div>
        </motion.div>
      )}
    </div>
  );
};

export default PlatformLogo;
