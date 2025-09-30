"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalendar, IconClock, IconArrowRight } from "@tabler/icons-react";
import GridBackground from "../ui/grid-background";
import { useTheme } from "@/context/ThemeContext";

const Blog = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward
  const itemsPerPage = 3;

  const blogPosts = [
    {
      title: "My Journey at Enpointe Global",
      excerpt:
        "7 months. Countless lessons. From debugging with Jitu Bhai to product thinking with Fatema, this internship shaped not just my tech skills but my mindset. Sharing key lessons every junior should read before starting their tech journey!",
      image: "blogs/blog_4.jpg",
      date: "July 8, 2025",
      readTime: "5 min read",
      category: "Internship Experience",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7348322085267460096/",
    },
    {
      title: "Don't Miss Out in 2nd Year!",
      excerpt:
        "I entered my second year without joining any community... and I truly regret it. This post shares my turning point, lessons from seniors, and why community can define your college experience.",
      image: "/blogs/blog_2.jpeg",
      date: "June 19, 2025",
      readTime: "4 min read",
      category: "College Life",
      link: "https://www.linkedin.com/posts/suthakar-anburaj-7bb816290_are-you-going-to-2nd-year-of-engineering-activity-7337485078324727808-_JNB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZnf8BbcVKmA9qLXMwwBkpcEEUt1ykRN4",
    },
    {
      title: "Enigma 4.0 – National Level Hackathon",
      excerpt:
        "Part of the organizing team for Enigma 4.0, a 12-hour national hackathon. Contributed as Tech Mentor, managing tech and ensuring smooth participation while learning event management and teamwork.",
      image: "/blogs/blog_6.jpg",
      date: "September 20, 2025",
      readTime: "3 min read",
      category: "Hackathon Organizing Experience",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7377636532234473472/",
    },
    {
      title: "Our First DSA & CP Workshop!",
      excerpt:
        "A 2-day hands-on workshop focused on helping juniors break the myth that CP requires mastering all of DSA first. From real hiring insights to solving with basics, this session was packed with problem-solving energy and community learning!",
      image: "/blogs/blog_5.jpg",
      date: "August 2, 2025",
      readTime: "3 min read",
      category: "Teaching Experience",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7357801199993077763",
    },
    {
      title: "My First Open Source Project",
      excerpt:
        "From zero web dev knowledge to launching ClipVerse, a full-stack MERN video platform. Read about my journey, features, and the lessons I learned from building it alongside a great team.",
      image: "/blogs/blog_1.png",
      date: "October, 2024",
      readTime: "3 min read",
      category: "Open Source Project",
      link: "https://www.linkedin.com/posts/suthakar-anburaj-7bb816290_mern-opensource-cloudinary-activity-7255489427093819393-tfgh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZnf8BbcVKmA9qLXMwwBkpcEEUt1ykRN4",
    },
    {
      title: "Why Your Online Presence Matters",
      excerpt:
        "In today's digital-first world, your portfolio and social presence aren't optional—they're essential. Here's why sharing your journey, no matter how small, builds your brand and helps others too.",
      image: "/blogs/blog_3.webp",
      date: "June 22, 2025",
      readTime: "4 min read",
      category: "Personal Branding",
      link: "https://www.linkedin.com/posts/suthakar-anburaj-7bb816290_are-you-a-tech-enthusiast-developer-or-activity-7342425496158105600-zbJD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZnf8BbcVKmA9qLXMwwBkpcEEUt1ykRN4",
    },
  ];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogPosts = blogPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

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
      id="blog"
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
            Latest <span className="text-green-400">Blog Posts</span>
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
            {currentBlogPosts.map((post) => (
              <motion.div
                key={post.title}
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
                  {/* Blog Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <div
                      className={`flex items-center gap-4 text-sm mb-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <IconCalendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IconClock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                      {post.title}
                    </h3>
                    <p
                      className={`mb-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {post.excerpt}
                    </p>

                    <motion.a
                      href={post.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors cursor-pointer"
                    >
                      Read More
                      <IconArrowRight size={20} />
                    </motion.a>
                  </div>
                </motion.div>
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
            href="https://www.linkedin.com/in/suthakar-anburaj-7bb816290/recent-activity/all/"
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors cursor-pointer"
          >
            View All Posts
            <IconArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
