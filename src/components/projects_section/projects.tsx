"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'fullstack', 'fullstack + aiml'];

  const projects = [
    {
      title: "BudgetGuard - Recursion 6.0",
      description: `Built a smart budget assistant that categorizes transactions, detects anomalies, forecasts expenses, and alerts users before they exceed budgets and spending control.
Integrated ML models to enable personalized financial tracking, insightful trend analysis, and real-time decision-making support through a secure and user-friendly interface.`,
      image: "/project_1.png",
      tags: [
        "ML",
        "Django",
        "MUI",
        "Node.js",
        "Postgres",
        "Hackathon",
        "React.js",
        "Express.js",
        "Javascript",
      ],
      category: "fullstack + aiml",
      github: "https://github.com/suthakaranburaj/Recursion6.0_2025",
      live: "https://github.com/suthakaranburaj/Recursion6.0_2025",
    },
    {
      title: "InvestoMate - Code Crafters 2.0",
      description: `Created an investment portal to manage stocks, bonds, and insurance with features like investment suggestions, profit estimation, asset transactions, and balance tracking.
The project was built using the MVC architecture to ensure modular, scalable, and maintainable code throughout the application.`,
      image: "/project_2.png",
      tags: [
        "MUI",
        "Node.js",
        "Express",
        "Postgres",
        "JavaScript",
        "Finance",
        "Hackathon",
        "React.js",
        "Express.js",
      ],
      category: "fullstack + aiml",
      github: "https://github.com/suthakaranburaj/CodeCrafters2.0_2025",
      live: "https://github.com/suthakaranburaj/CodeCrafters2.0_2025",
    },
    {
      title: "Pradha",
      description: `Developed Pradha, a client-focused website using Next.js, MongoDB, Tailwind, Shadcn, and JavaScript for modern UI.
    Implemented Redux for efficient state management and Redis for high-performance caching and data access.
    Collaborated with the team to ensure seamless functionality, scalability, and a smooth user experience.`,
      image: "/PradhaFrontend.png",
      tags: [
        "MongoDB",
        "Next.js",
        "Shadcn",
        "Tailwind",
        "Redux",
        "Redis",
        "Javascript",
        "Cloudinary",
      ],
      category: "fullstack",
      github: "https://github.com/suthakaranburaj/project_1_main",
      live: "https://pradha-frontend-main.vercel.app/",
    },
    {
      title: "Pradha Dashboard",
      description: `Created an admin dashboard for Pradha to enable real-time management of products, users, and content.
    Built with Next.js, Tailwind, and Shadcn, ensuring a clean, responsive, and intuitive interface.
    Focused on delivering a smooth admin experience with efficient workflows and easy content control.`,
      image: "/pradhaDashboard.png",
      tags: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Shadcn",
        "Javascript",
        "Cloudinary",
      ],
      category: "fullstack",
      github: "https://github.com/suthakaranburaj/pradha_dashboard",
      live: "https://pradha-dashboard-main.vercel.app",
    },
    {
      title: "ClipVerse",
      description: `Developed a YouTube-inspired platform using React, Node.js, Express, MongoDB, and Zustand with secure JWT authentication.
    Implemented video upload, edit, delete, likes, comments, subscriptions, playlists, and tweet-like interactions.
    Integrated Cloudinary for efficient video and thumbnail storage to enhance media management.`,
      image: "/clipVerse.png",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Zustand",
        "Cloudinary",
        "Express",
        "JWT",
        "SCSS",
      ],
      category: "fullstack",
      github: "https://github.com/suthakaranburaj/ClipVerse",
      live: "https://clip-verse.suthakaranburaj.com",
    },
    {
      title: "InsightEd - Err404 6.0",
      description: `Worked on a data-driven solution for college admission prediction and resource planning using AI/ML techniques and statistical analysis.
Implemented predictive models and scenario-based simulations to help institutions allocate teaching staff, infrastructure, and financial resources more efficiently and plan ahead for upcoming academic sessions.`,
      image: "/project_3.png",
      tags: [
        "AI/ML",
        "Python",
        "Pandas",
        "React.js",
        "Hackathon",
        "Express.js",
        "MongoDB",
        "Flask",
        "Node.js",
        "JavaScript",
      ],
      category: "fullstack + aiml",
      github: "https://github.com/suthakaranburaj/CoreX_Err6.0",
      live: "https://github.com/suthakaranburaj/CoreX_Err6.0",
    },
  ];

const filteredProjects = activeFilter === 'all' 
? projects 
: projects.filter(project => project.category === activeFilter);

return (
    <section id="projects" className={`py-20 relative transition-colors duration-300 ${
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
                  : `bg-green-400/10 hover:bg-green-400/20 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`
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
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-400/10 hover:bg-green-400/20 text-green-400 rounded-lg transition-colors"
                    >
                      <IconBrandGithub size={16} />
                      Code
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black hover:bg-green-500 rounded-lg transition-colors"
                    >
                      <IconExternalLink size={16} />
                      Live
                    </Link>
                  </div>
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