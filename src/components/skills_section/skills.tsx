"use client";

import React from "react";
import { motion } from "framer-motion";
import GridBackground from "../ui/grid-background";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandPython,
  IconBrandAws,
  IconBrandDocker,
  IconBrandGit,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandVue,
  IconBrandRedux,
  IconBrandFirebase,
  IconBrandVercel,
  IconBrandPrisma,
  IconBrandMysql,
  IconBrandVscode,
} from "@tabler/icons-react";

const Skills = () => {
  // Skill icon mapping
  const skillIcons:any = {
    JavaScript: IconBrandJavascript,
    React: IconBrandReact,
    "Vue.js": IconBrandVue,
    TypeScript: IconBrandTypescript,
    "Next.js": IconBrandNextjs,
    "Tailwind CSS": IconBrandTailwind,
    "Node.js": IconBrandNodejs,
    Prisma: IconBrandPrisma,
    Redis: IconBrandRedux,
    MySQL: IconBrandMysql,
    MongoDB: IconBrandMongodb,
    Python: IconBrandPython,
    AWS: IconBrandAws,
    Git: IconBrandGit,
    Figma: IconBrandFigma,
    Redux: IconBrandRedux,
    Firebase: IconBrandFirebase,
    Vercel: IconBrandVercel,
    "Shadcn UI": IconBrandReact, 
    "REST APIs": IconBrandNodejs,
    "Express.js": IconBrandNodejs,
    "VS Code": IconBrandVscode,
    Cursor: IconBrandVscode,
    Linux: IconBrandDocker,
    Notion: IconBrandFigma,
    Asana: IconBrandFigma,
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "JavaScript",
        "React",
        "Vue.js",
        "Shadcn UI",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "REST APIs",
        "Prisma",
        "Redis",
        "MySQL",
        "MongoDB",
        "Express.js",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "VS Code",
        "Git",
        "AWS",
        "Vercel",
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
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill] || null;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="flex flex-col items-center justify-center"
                    >
                      {Icon && (
                        <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-green-400" />
                        </div>
                      )}
                      <span className="text-xs sm:text-sm text-center text-gray-300">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
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
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile Methodologies",
              "Problem Solving",
              "Team Collaboration",
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
              "Decision Making",
              "Innovation & Creativity",
              "Client Communication",
              "Business Acumen",
              "Market Research",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-xs sm:text-sm"
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
