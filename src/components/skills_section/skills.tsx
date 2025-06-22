"use client";

import React from 'react';
import { motion } from 'motion/react';
import GridBackground from '../ui/grid-background';
// import {
//   IconBrandJavascript,
//   IconBrandReact,
//   IconBrandNextjs,
//   IconBrandNodejs,
//   IconBrandTypescript,
//   IconBrandMongodb,
//   IconBrandPython,
//   IconBrandAws,
//   IconBrandDocker,
//   IconBrandGit,
//   IconBrandTailwind,
//   IconBrandFigma
// } from '@tabler/icons-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 90 },
        { name: "Vue.js", level: 90 },
        { name: "Shadcn UI", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 85 },
        { name: "Prisma", level: 85 },
        { name: "Redis", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Cursor", level: 95 },
        { name: "Git", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Linux", level: 70 },
        { name: "Notion", level: 70 },
        { name: "Asana", level: 70 },
        { name: "Figma", level: 70 },
      ],
    },
  ];
  

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative"
    >
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-400/5 rounded-lg p-6 hover:bg-green-400/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-green-400"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-green-400 mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design",
              "Agile Methodologies",
              "Problem Solving",
              "Team Collaboration",
              "Technical Writing",
              "Performance Optimization",
              "Security Best Practices",
              "Entrepreneurship",
              "Product Thinking",
              "User-Centered Design",
              "Critical Thinking",
              "Rapid Prototyping",
              "Time Management",
              "Adaptability",
              "Growth Mindset",
              "Code Review & Mentorship",
              "Open Source Contribution",
              "Leadership & Initiative",
              "Project Management",
              "Communication Skills",
              "Decision Making Under Pressure",
              "Innovation & Creativity",
              "Client Communication",
              "Business Acumen",
              "Market Research Understanding",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 