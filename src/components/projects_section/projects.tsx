"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconArrowRight, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';
import Link from 'next/link';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'fullstack'];

  const projects = [
    {
      title: "Pradha",
      description: `Developed Pradha, a client-focused website using Next.js, MongoDB, Tailwind, Shadcn, and JavaScript for modern UI.
      Implemented Redux for efficient state management and Redis for high-performance caching and data access.
      Collaborated with the team to ensure seamless functionality, scalability, and a smooth user experience.`,
      image: "/PradhaFrontend.png",
      tags: ["MongoDB", "Next.js", "Shadcn","Tailwind","Redux","Redis","Javascript","Cloudinary"],
      category: "web",
      github: "https://github.com/suthakaranburaj/project_1_main",
      live: "https://pradha-frontend.vercel.app/"
    },
    {
      title: "Pradha Dashboard",
      description: `Created an admin dashboard for Pradha to enable real-time management of products, users, and content.
      Built with Next.js, Tailwind, and Shadcn, ensuring a clean, responsive, and intuitive interface.
      Focused on delivering a smooth admin experience with efficient workflows and easy content control.`,
      image: "/pradhaDashboard.png",
      tags: ["Next.js", "Node.js","MongoDB","Tailwind","Shadcn","Javascript","Cloudinary"],
      category: "web",
      github: "https://github.com/suthakaranburaj/pradha_dashboard",
      live: "https://pradha-dashboard.vercel.app"
    },
    {
      title: "ClipVerse",
      description: `Developed a YouTube-inspired platform using React, Node.js, Express, MongoDB, and Zustand with secure JWT authentication.
      Implemented video upload, edit, delete, likes, comments, subscriptions, playlists, and tweet-like interactions.
      Integrated Cloudinary for efficient video and thumbnail storage to enhance media management.`,
      image: "/clipVerse.png",
      tags: ["React", "Node.js", "MongoDB", "Zustand", "Cloudinary","Express","JWT","SCSS"],
      category: "web",
      github: "https://github.com/suthakaranburaj/ClipVerse",
      live: "https://clip-verse.suthakaranburaj.com"
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              whileHover={{ scale: 1.05, y: -2 }}
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
              className="group"
            >
              <motion.div 
                className="relative rounded-lg overflow-hidden bg-green-400/5 hover:bg-green-400/10 transition-colors"
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
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <IconBrandGithub size={24} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <IconExternalLink size={24} />
                    </motion.a>
                  </div>
                  <Link href="/coming-soon">
                    <motion.p
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='mt-4 text-green-400 cursor-pointer inline-flex items-center gap-1'
                    >
                      Read More <IconArrowRight size={16} />
                    </motion.p>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 