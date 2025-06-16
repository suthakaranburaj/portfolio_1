"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconArrowLeft, IconCalendar, IconMapPin, IconBuilding } from '@tabler/icons-react';
import Link from 'next/link';
import GridBackground from '@/components/ui/grid-background';

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2022 - Present",
      location: "New York, USA",
      description: "Leading the development of enterprise-level applications and mentoring junior developers.",
      longDescription: `As a Senior Full Stack Developer at Tech Solutions Inc., I've been instrumental in transforming the company's digital infrastructure and development practices.

Key Responsibilities:
• Lead a team of 5 developers in building scalable web applications
• Architect and implement microservices using Node.js and React
• Optimize database performance and implement caching strategies
• Conduct code reviews and maintain coding standards
• Mentor junior developers and conduct technical interviews
• Collaborate with product managers to define technical requirements
• Implement CI/CD pipelines and automated testing

Major Achievements:
• Reduced application load time by 60% through optimization
• Implemented automated testing, increasing code coverage to 85%
• Successfully migrated legacy systems to modern architecture
• Developed and documented best practices for the team
• Mentored 3 junior developers who were promoted to mid-level positions`,
      technologies: [
        "React", "Node.js", "TypeScript", "MongoDB",
        "AWS", "Docker", "Kubernetes", "GraphQL"
      ],
      achievements: [
        "Led the development of a customer portal that increased user engagement by 40%",
        "Implemented automated testing that reduced bug reports by 30%",
        "Optimized database queries resulting in 50% faster response times",
        "Mentored junior developers who were promoted to mid-level positions"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "Mar 2020 - Dec 2021",
      location: "San Francisco, CA",
      description: "Developed and maintained web applications using modern JavaScript frameworks.",
      longDescription: `At Digital Innovations, I was responsible for developing and maintaining multiple web applications while contributing to the company's technical growth.

Key Responsibilities:
• Developed and maintained multiple client-facing web applications
• Implemented responsive designs and ensured cross-browser compatibility
• Integrated third-party APIs and services
• Participated in agile development processes
• Collaborated with UX designers to implement user interfaces
• Optimized application performance and loading times

Major Achievements:
• Developed a real-time collaboration tool that increased team productivity by 25%",
• Implemented automated deployment pipeline reducing deployment time by 70%",
• Created reusable component library used across multiple projects",
• Reduced server costs by 40% through optimization`,
      technologies: [
        "JavaScript", "React", "Node.js", "Express",
        "PostgreSQL", "Redis", "Docker", "AWS"
      ],
      achievements: [
        "Developed a real-time collaboration tool that increased team productivity by 25%",
        "Implemented automated deployment pipeline reducing deployment time by 70%",
        "Created reusable component library used across multiple projects",
        "Reduced server costs by 40% through optimization"
      ]
    },
    // Add more experiences here...
  ];

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
              Work <span className="text-green-400">Experience</span>
            </h1>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </motion.div>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400/20"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full"></div>

                {/* Content */}
                <div className={`ml-auto w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-[calc(50%+2rem)]' : 'ml-[calc(50%+2rem)]'}`}>
                  <motion.div 
                    className="bg-green-400/5 rounded-lg p-6 hover:bg-green-400/10 transition-colors"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <IconBuilding className="text-green-400" size={24} />
                      <div>
                        <h3 className="text-2xl font-bold text-green-400">
                          {experience.title}
                        </h3>
                        <p className="text-gray-300">{experience.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <IconCalendar size={20} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <IconMapPin size={20} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 mb-6">
                        {experience.longDescription}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage; 