"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandYoutube } from "@tabler/icons-react";
import GridBackground from "../ui/grid-background";
import { useTheme } from "@/context/ThemeContext";

const YouTube = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward
  const itemsPerPage = 3;

  const videos = [
    {
      title: "How to Make Your GitHub Profile Beautiful (README Guide)",
      thumbnail: "/video_4.png",
      duration: "7:40",
      link: "https://www.youtube.com/watch?v=2AAHBmydsCs",
    },
    {
      title:
        "GitHub for Beginners: 5 Things Every Fresher Developer Should Know (2025)",
      thumbnail: "/video_1.png",
      duration: "7:40",
      link: "https://youtu.be/FD6YHSIcZIo?si=m5asZBqbf-d-J2a1",
    },
    {
      title: "How to Set Up a Next.js Project in 2025 (Beginner Friendly)",
      thumbnail: "/video_2.png",
      duration: "3:40",
      link: "https://youtu.be/0omo_DigYSU?si=KfQMC-S2FuiG12uI",
    },
    {
      title:
        "How to Host HTML CSS Website on Vercel for FREE (Beginner Friendly)",
      thumbnail: "/video_3.png",
      duration: "5:22",
      link: "https://youtu.be/9SnzgEssFiE?si=_AfbV5fNht0o3ij7",
    },
  ];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVideos = videos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  // Handle page change with direction
  const handlePageChange = (newPage: number) => {
    if (newPage > currentPage) setDirection(1);
    else if (newPage < currentPage) setDirection(-1);
    setCurrentPage(newPage);
  };

  // Animation variants
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

  return (
    <section
      id="youtube"
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
            Latest <span className="text-green-400">Videos</span>
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
            {currentVideos.map((video) => (
              <motion.div
                key={video.title}
                custom={direction}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="bg-green-400/5 rounded-lg overflow-hidden hover:bg-green-400/10 transition-colors">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={video.thumbnail}
                        alt={video.title}
                        className="object-cover w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center"
                        >
                          <IconBrandYoutube size={32} className="text-black" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="px-2 py-1 bg-black/80 text-white rounded text-sm">
                          {video.duration}
                        </span>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
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
            href="https://youtube.com/@suthakaranburaj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
          >
            <IconBrandYoutube size={24} />
            Subscribe to My Channel
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTube;
