"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconTrophy,
  IconUsers,
  IconCalendar,
  IconAward,
} from "@tabler/icons-react";

import { useTheme } from "@/context/ThemeContext";

import GridBackground from "../ui/grid-background";

const Hackathon = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward
  const itemsPerPage = 3;

  const hackathons = [
    {
      title: "CodeCraftors 3.0",
      position: "1st Place",
      date: "2026",
      team: "Om Sai Mitra Mandal",
      description:
        "Built Flow Guardian, an offline-first cognitive observability platform that uses a local webcam ML pipeline, keyboard and mouse activity, and app usage context to detect focus, confusion, and fatigue in real time while preserving privacy.",
      achievements: [
        "Secured 1st place at CodeCraftors 3.0",
        "Built an offline-first, privacy-preserving cognitive load platform",
      ],
      image: "/hackathons/CodeCrafters3.0.jpeg",
    },
    {
      title: "Techsagar 2026 - National Level AI Hackathon",
      position: "3rd Place",
      date: "2026",
      team: "Gandhar Bagde, Umair Momin",
      description:
        "Built an AI-powered fraud detection solution that identified unique and meaningful fraud patterns from noisy real-world datasets using multi-pattern analysis.",
      achievements: [
        "Secured 3rd place at Techsagar 2026",
        "Solved fraud detection using multiple fraud-pattern signals",
      ],
      image: "/hackathons/Tasgavkar_2026.jpeg",
    },
    {
      title: "Cyberstrike Error 404 Hackathon",
      position: "Winner",
      date: "11 December 2025",
      team: "Team 404",
      description:
        "Built a multi-agent AI reasoning and evaluation system that orchestrates multiple planner-researcher pipelines to generate, validate, iterate, and score AI responses.",
      achievements: [
        "Winners of Cyberstrike Error 404 Hackathon",
        "Designed a multi-agent AI architecture",
        "Implemented iterative feedback loops for issue detection and response refinement",
      ],
      image: "/hackathons/error_404.jpeg",
    },
    {
      title: "IDEATION '25",
      position: "Winner",
      date: "19 September 2025",
      team: "ForceCode",
      description:
        "Explored the global crisis of rising urban air pollution and proposed innovative, tech-driven solutions focused on practical, research-backed impact.",
      achievements: [
        "Won IDEATION '25 at IETE SIESGST",
        "Built AI-based eco-routing and carbon tracking solutions",
        "Created real-time AQI dashboards and predictive analytics",
      ],
      image: "/hackathons/Ideation_2025.jpg",
    },
    {
      title: "Recursion 6.0",
      position: "Top 15 Team",
      date: "21-22 March 2025",
      team: "Team CoreX",
      description:
        "Created a personal finance assistant that detects anomalies, forecasts expenses, and sends smart alerts. Included ML-based transaction categorization, secure banking API integration, and real-time dashboards.",
      achievements: [
        "ML-based anomaly detection in transactions",
        "Smart alerts and budget forecasting",
        "Top 15 finalist out of competitive entries",
      ],
      image: "/hackathons/recursion_6_0.png",
    },
    {
      title: "Incuverse 1.0",
      position: "Top 10 Team",
      date: "27-28 September 2025",
      team: "NeuraWebCrafters",
      description:
        '"ASHA Sakhi" - Multilingual AI health-tech platform for ASHA workers and patients with chatbot, WhatsApp bot, symptom checker, and real-time dashboards.',
      achievements: [
        "Developed AI-powered voice chatbot for ASHA workers",
        "Top 10 finalist out of 500+ registered teams",
        "Integrated Google Maps API for nearest ASHA centers and personalized health tips",
      ],
      image: "/hackathons/incuverse_1_0.jpeg",
    },
    {
      title: "Err404 6.0",
      position: "Participated",
      date: "15-16 February 2025",
      team: "Team CoreX",
      description:
        "Built a predictive system to forecast college admissions and optimize resource planning. Integrated features for faculty recruitment, budget planning, and marketing impact analysis using AI/ML.",
      achievements: [
        "Developed admissions prediction model",
        "Created resource allocation tools",
        "Selected as a finalist in our first hackathon",
      ],
      image: "/hackathons/err_6_0.png",
    },
    {
      title: "Code Crafters 2.0",
      position: "Top 7 Team",
      date: "15-16 March 2025",
      team: "Team CoreX",
      description:
        "Developed an investment portal to manage stocks, bonds, and insurance using the MVC pattern. Users can get investment suggestions, estimate profits, buy or sell assets, and manage account balances.",
      achievements: [
        "Implemented complete asset management system",
        "Followed MVC architecture throughout",
        "Ranked in Top 7 among 100+ teams",
      ],
      image: "/hackathons/code_crafters2_0.png",
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHackathons = hackathons.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(hackathons.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > currentPage) setDirection(1);
    else if (newPage < currentPage) setDirection(-1);
    setCurrentPage(newPage);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    }),
  };

  const blogSectionRef = useRef<HTMLElement>(null);
  const initialLoad = useRef(true);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    if (blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  return (
    <section
      id="hackathon"
      ref={blogSectionRef}
      className={`py-20 relative transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-black to-gray-900"
          : "bg-gradient-to-b from-white to-gray-100"
      }`}
    >
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Hackathon <span className="text-green-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${currentPage}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentHackathons.map((hackathon) => (
              <motion.div
                key={hackathon.title}
                custom={direction}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="bg-green-400/5 rounded-lg overflow-hidden hover:bg-green-400/10 transition-colors"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-green-400 text-black font-bold rounded-full flex items-center gap-2"
                      >
                        <IconTrophy size={20} />
                        {hackathon.position}
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                      {hackathon.title}
                    </h3>

                    <div
                      className={`flex flex-wrap gap-4 text-sm mb-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <IconCalendar size={16} />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IconUsers size={16} />
                        <span>{hackathon.team}</span>
                      </div>
                    </div>

                    <p
                      className={`mb-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {hackathon.description}
                    </p>

                    <div className="space-y-2">
                      {hackathon.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className={`flex items-center gap-2 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <IconAward size={16} className="text-green-400" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : `${
                      theme === "dark"
                        ? "bg-green-400/10 hover:bg-green-400/20 text-white"
                        : "bg-green-400/10 hover:bg-green-400/20 text-gray-800"
                    }`
              }`}
            >
              Prev
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? "bg-green-400 text-black"
                    : `${
                        theme === "dark"
                          ? "bg-green-400/10 hover:bg-green-400/20 text-gray-300"
                          : "bg-green-400/10 hover:bg-green-400/20 text-gray-600"
                      }`
                }`}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : `${
                      theme === "dark"
                        ? "bg-green-400/10 hover:bg-green-400/20 text-white"
                        : "bg-green-400/10 hover:bg-green-400/20 text-gray-800"
                    }`
              }`}
            >
              Next
            </motion.button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors cursor-pointer"
          >
            Join My Next Hackathon
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathon;
