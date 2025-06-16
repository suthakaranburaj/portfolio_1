"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconArrowLeft, IconCalendar, IconClock, IconFilter, IconTag } from '@tabler/icons-react';
import Link from 'next/link';
import GridBackground from '@/components/ui/grid-background';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web-development', 'ai', 'blockchain', 'career'];

  const articles = [
    {
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Learn how to build high-performance web applications using Next.js and modern web technologies.",
      content: `In this comprehensive guide, we'll explore how to build scalable web applications using Next.js and modern web technologies.

Key Topics Covered:
• Next.js 14 App Router architecture
• Server-side rendering and static generation
• API routes and serverless functions
• Database integration and optimization
• Authentication and authorization
• Performance optimization techniques
• Deployment strategies
• Best practices and patterns

Technical Deep Dive:
• Understanding the Next.js file system
• Implementing dynamic routes
• Handling API requests and responses
• Managing state with React Context
• Implementing authentication with NextAuth.js
• Optimizing images and assets
• Setting up CI/CD pipelines

Real-world Examples:
• E-commerce platform architecture
• Blog system implementation
• Dashboard application structure
• Authentication flow examples
• API integration patterns

Performance Optimization:
• Code splitting and lazy loading
• Image optimization
• Caching strategies
• Database query optimization
• Bundle size reduction

Deployment and DevOps:
• Vercel deployment configuration
• Environment variable management
• Monitoring and analytics
• Error tracking and logging
• Backup and recovery strategies`,
      date: "March 15, 2024",
      readTime: "15 min read",
      category: "web-development",
      tags: ["Next.js", "React", "Web Development", "Performance"],
      image: "/blog/nextjs.jpg"
    },
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the software development landscape.",
      content: `Artificial intelligence is revolutionizing the way we develop software. Let's explore the current state and future possibilities of AI in software development.

Current State of AI in Development:
• Code generation and completion
• Bug detection and fixing
• Code review automation
• Documentation generation
• Test case generation
• Performance optimization

AI Tools and Technologies:
• GitHub Copilot
• ChatGPT for development
• Automated testing tools
• Code analysis platforms
• Documentation generators
• Performance analyzers

Impact on Development Workflow:
• Increased productivity
• Reduced development time
• Improved code quality
• Enhanced collaboration
• Automated routine tasks
• Better decision making

Future Possibilities:
• Fully automated development
• AI-driven architecture design
• Self-healing applications
• Predictive maintenance
• Natural language programming
• Automated deployment

Best Practices:
• When to use AI tools
• Maintaining code quality
• Security considerations
• Ethical implications
• Team collaboration
• Continuous learning

Case Studies:
• Real-world implementations
• Success stories
• Challenges faced
• Lessons learned
• Future improvements`,
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "ai",
      tags: ["AI", "Software Development", "Future Tech", "Automation"],
      image: "/blog/ai.jpg"
    },
    // Add more articles here...
  ];

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-white">
      <GridBackground />
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <IconArrowLeft size={20} />
              Back to Home
            </motion.button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-green-400">Blog</span>
            </h1>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </motion.div>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg capitalize flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-green-400 text-black'
                  : 'bg-green-400/10 text-gray-300 hover:bg-green-400/20'
              }`}
            >
              <IconFilter size={16} />
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
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
                {/* Article Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <IconCalendar size={20} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <IconClock size={20} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">
                      {article.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm flex items-center gap-1"
                        >
                          <IconTag size={14} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage; 