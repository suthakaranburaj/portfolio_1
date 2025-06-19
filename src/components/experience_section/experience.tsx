"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconArrowRight, IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';
import Link from 'next/link';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Enpointe.io",
      period: "2024 - Present",
      location: "Mumbai, India",
      description: [
        "Developed and maintained full-stack features using Vue.js, Node.js, Express, SQL, and Prisma.",
        "Built and optimized a scalable backend architecture for a movie platform serving 5k–10k daily users.",
        "Implemented key modules including contract management, invoicing, royalty reporting, and user roles.",
        "Integrated automated PDF/Excel generation and dynamic email notifications to streamline operations   ",
        "Improved contract creation workflow efficiency by 50% through backend logic and UI enhancements.",
        "Worked closely with cross-functional teams to ensure performance, data integrity, and feature delivery.",
      ],
    },
    {
      title: "Senior Technical Coordinator",
      company: "Arena SIESGST",
      period: "2024 - 2025",
      location: "Navi Mumbai, India",
      description: [
        "Redesigned and updated event pages to align with current-year activities.",
        "Improved event registration flows based on user feedback for better UX.",
        "Collaborated with tech and design teams to enhance digital outreach and engagement.",
      ],
    },
    // {
    //   title: "Frontend Developer",
    //   company: "Web Solutions",
    //   period: "2019 - 2020",
    //   location: "Boston, USA",
    //   description: [
    //     "Built responsive user interfaces using React and TypeScript",
    //     "Worked closely with backend team to integrate REST APIs",
    //     "Implemented state management using Redux",
    //     "Improved website accessibility and SEO",
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-green-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <motion.div 
                  className="absolute left-6 top-16 bottom-0 w-0.5 bg-green-400/20"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-green-400/10 border-2 border-green-400 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: ["0 0 0 0 rgba(74, 222, 128, 0.4)", "0 0 0 10px rgba(74, 222, 128, 0)"],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    <IconBriefcase className="text-green-400" size={24} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div 
                    className="bg-green-400/5 rounded-lg p-6 hover:bg-green-400/10 transition-colors"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <IconCalendar size={16} />
                        <span>{exp.period}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <IconMapPin size={16} />
                        <span>{exp.location}</span>
                      </motion.div>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{exp.company}</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.description.map((item, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    <Link href="/coming-soon">
                      <motion.p
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='mt-4 text-green-400 cursor-pointer inline-flex items-center gap-1'
                      >
                        Read More about my experience <IconArrowRight size={16} />
                      </motion.p>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 