"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconCalendar, IconClock, IconArrowRight } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';
import { useTheme } from '@/context/ThemeContext';

const Blog = () => {
  const { theme } = useTheme();
  
  const blogPosts = [
    {
      title: "Don't Miss Out in 2nd Year!",
      excerpt:
        "I entered my second year without joining any community... and I truly regret it. This post shares my turning point, lessons from seniors, and why community can define your college experience.",
      image: "blog_2.jpeg",
      date: "June 19, 2025",
      readTime: "4 min read",
      category: "College Life",
      link: "https://www.linkedin.com/posts/suthakar-anburaj-7bb816290_are-you-going-to-2nd-year-of-engineering-activity-7337485078324727808-_JNB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZnf8BbcVKmA9qLXMwwBkpcEEUt1ykRN4",
    },
    {
      title: "My First Open Source Project",
      excerpt:
        "From zero web dev knowledge to launching ClipVerse, a full-stack MERN video platform. Read about my journey, features, and the lessons I learned from building it alongside a great team.",
      image: "blog_1.png",
      date: "October, 2024",
      readTime: "3 min read",
      category: "Open Source Project",
      link: "https://www.linkedin.com/posts/suthakar-anburaj-7bb816290_mern-opensource-cloudinary-activity-7255489427093819393-tfgh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZnf8BbcVKmA9qLXMwwBkpcEEUt1ykRN4",
    },
    {
      title: "Why Your Online Presence Matters",
      excerpt:
        "In today's digital-first world, your portfolio and social presence aren't optional—they're essential. Here's why sharing your journey, no matter how small, builds your brand and helps others too.",
      image: "blog_3.webp",
      date: "June 22, 2025",
      readTime: "4 min read",
      category: "Personal Branding",
      link: "https://www.linkedin.com/posts/suthakar-anburaj-7bb816290_are-you-a-tech-enthusiast-developer-or-activity-7342425496158105600-zbJD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZnf8BbcVKmA9qLXMwwBkpcEEUt1ykRN4",
    },
  ];


  return (
    <section id="blog" className={`py-20 relative transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black to-gray-900' 
        : 'bg-gradient-to-b from-white to-gray-100'
    }`}>
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Latest <span className="text-green-400">Blog Posts</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
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
                  <div className={`flex items-center gap-4 text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
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
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
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
            </motion.article>
          ))}
        </div>

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