"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconBrandGithub, IconExternalLink, IconArrowLeft, IconFilter } from '@tabler/icons-react';
import Link from 'next/link';
import GridBackground from '@/components/ui/grid-background';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'fullstack', 'ai', 'blockchain'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      longDescription: `A comprehensive e-commerce solution that handles everything from product management to order fulfillment. 
      
Key Features:
• User authentication and authorization
• Product catalog with search and filtering
• Shopping cart and wishlist functionality
• Secure payment processing with Stripe
• Order management and tracking
• Admin dashboard for store management
• Real-time inventory updates
• Customer reviews and ratings
• Responsive design for all devices`,
      image: "/projects/ecommerce.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      technologies: [
        "Next.js 14 with App Router",
        "Node.js and Express",
        "MongoDB with Mongoose",
        "Stripe Payment Integration",
        "Tailwind CSS for styling",
        "JWT Authentication",
        "Redux for state management",
        "AWS S3 for image storage"
      ],
      challenges: [
        "Implementing real-time inventory updates",
        "Optimizing database queries for large product catalogs",
        "Ensuring secure payment processing",
        "Managing concurrent user sessions"
      ],
      solutions: [
        "Used WebSocket for real-time updates",
        "Implemented database indexing and caching",
        "Followed PCI compliance guidelines",
        "Implemented robust session management"
      ]
    },
    {
      title: "AI-Powered Task Manager",
      description: "An intelligent task management application that uses AI to prioritize and organize tasks based on user behavior and deadlines.",
      longDescription: `An advanced task management system that leverages artificial intelligence to help users manage their tasks more effectively.

Key Features:
• AI-powered task prioritization
• Smart deadline suggestions
• Natural language task input
• Team collaboration tools
• Progress tracking and analytics
• Customizable workflows
• Integration with calendar apps
• Mobile-first design`,
      image: "/projects/ai-task.jpg",
      tags: ["React", "Python", "TensorFlow", "Firebase"],
      category: "ai",
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      technologies: [
        "React with TypeScript",
        "Python for AI backend",
        "TensorFlow for ML models",
        "Firebase for real-time updates",
        "Material-UI components",
        "Redux Toolkit",
        "Jest for testing",
        "Docker for containerization"
      ],
      challenges: [
        "Training accurate AI models",
        "Real-time data synchronization",
        "Optimizing mobile performance",
        "Handling offline functionality"
      ],
      solutions: [
        "Used transfer learning for faster training",
        "Implemented WebSocket connections",
        "Optimized bundle size and lazy loading",
        "Implemented service workers for offline support"
      ]
    },
    // Add more projects here...
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              My <span className="text-green-400">Projects</span>
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
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
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Challenges</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Solutions</h4>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-green-400/10 text-green-400 rounded-lg hover:bg-green-400/20 transition-colors"
                    >
                      <IconBrandGithub size={20} />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-colors"
                    >
                      <IconExternalLink size={20} />
                      Live Demo
                    </motion.a>
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

export default ProjectsPage; 