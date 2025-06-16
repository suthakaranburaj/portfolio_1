"use client";

import React from 'react';
import { motion } from 'motion/react';
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
  IconBrandFigma
} from '@tabler/icons-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: <IconBrandJavascript size={32} />, level: 90 },
        { name: "React", icon: <IconBrandReact size={32} />, level: 85 },
        { name: "Next.js", icon: <IconBrandNextjs size={32} />, level: 80 },
        { name: "TypeScript", icon: <IconBrandTypescript size={32} />, level: 85 },
        { name: "Tailwind CSS", icon: <IconBrandTailwind size={32} />, level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <IconBrandNodejs size={32} />, level: 85 },
        { name: "Python", icon: <IconBrandPython size={32} />, level: 75 },
        { name: "MongoDB", icon: <IconBrandMongodb size={32} />, level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS", icon: <IconBrandAws size={32} />, level: 70 },
        { name: "Docker", icon: <IconBrandDocker size={32} />, level: 75 },
        { name: "Git", icon: <IconBrandGit size={32} />, level: 85 },
        { name: "Figma", icon: <IconBrandFigma size={32} />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-400/5 rounded-lg p-6 hover:bg-green-400/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-green-400">{skill.icon}</div>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-green-400/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-green-400 rounded-full"
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-green-400 mb-6">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "RESTful APIs",
              "GraphQL",
              "Redux",
              "Jest",
              "CI/CD",
              "Agile",
              "UI/UX Design",
              "Responsive Design",
              "Performance Optimization",
              "Security Best Practices"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-green-400/10 text-green-400 rounded-full hover:bg-green-400/20 transition-colors"
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