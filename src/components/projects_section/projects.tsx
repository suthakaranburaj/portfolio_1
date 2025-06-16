"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'fullstack'];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/path-to-project-image-1.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team features, and progress tracking. Built with React and Firebase.",
      image: "/path-to-project-image-2.jpg",
      tags: ["React", "Firebase", "Material-UI"],
      category: "web",
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, nutrition, and progress. Features include custom workout plans, progress charts, and social sharing.",
      image: "/path-to-project-image-3.jpg",
      tags: ["React Native", "Redux", "Node.js"],
      category: "mobile",
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg capitalize ${
                activeFilter === filter
                  ? 'bg-green-400 text-black'
                  : 'bg-green-400/10 text-gray-300 hover:bg-green-400/20'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden bg-green-400/5 hover:bg-green-400/10 transition-colors">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <IconBrandGithub size={24} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <IconExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 