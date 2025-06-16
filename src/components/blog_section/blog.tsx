"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconCalendar, IconClock, IconArrowRight } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with Next.js 14",
      excerpt: "Learn about the latest features and improvements in Next.js 14, including the new App Router and Server Components.",
      image: "/blog/nextjs14.jpg",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      link: "#"
    },
    {
      title: "Mastering TypeScript for React",
      excerpt: "A comprehensive guide to using TypeScript with React, covering type definitions, interfaces, and best practices.",
      image: "/blog/typescript-react.jpg",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "TypeScript",
      link: "#"
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to design and implement scalable REST APIs using Node.js, Express, and MongoDB.",
      image: "/blog/nodejs-api.jpg",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Backend",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
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
                  <p className="text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                  <motion.a
                    href={post.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
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
            href="/blog"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
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