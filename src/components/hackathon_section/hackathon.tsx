"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconTrophy, IconUsers, IconCalendar, IconAward } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';

const Hackathon = () => {
  const hackathons = [
    {
      title: "AI Innovation Challenge",
      position: "1st Place",
      date: "March 2024",
      team: "Team Innovators",
      description: "Developed an AI-powered solution for real-time language translation with 95% accuracy. Implemented using Python, TensorFlow, and React Native.",
      achievements: [
        "Best Technical Implementation",
        "Most Innovative Solution",
        "People's Choice Award"
      ],
      image: "/hackathon/ai-challenge.jpg"
    },
    {
      title: "Web3 Development Hackathon",
      position: "2nd Place",
      date: "January 2024",
      team: "Blockchain Pioneers",
      description: "Created a decentralized voting system using Solidity and React. Implemented smart contracts for secure and transparent voting process.",
      achievements: [
        "Best Smart Contract Implementation",
        "Most Scalable Solution"
      ],
      image: "/hackathon/web3-hack.jpg"
    },
    {
      title: "Sustainability Tech Challenge",
      position: "3rd Place",
      date: "November 2023",
      team: "Green Tech Warriors",
      description: "Built a carbon footprint tracking application using Next.js and MongoDB. Integrated with IoT devices for real-time environmental data collection.",
      achievements: [
        "Best Environmental Impact",
        "Most User-Friendly Solution"
      ],
      image: "/hackathon/sustainability.jpg"
    }
  ];

  return (
    <section id="hackathon" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hackathon <span className="text-green-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
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
                {/* Hackathon Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-green-400 text-black font-bold rounded-full flex items-center gap-2"
                    >
                      <IconTrophy size={20} />
                      {hackathon.position}
                    </motion.div>
                  </div>
                </div>

                {/* Hackathon Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                    {hackathon.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <IconCalendar size={16} />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IconUsers size={16} />
                      <span>{hackathon.team}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">
                    {hackathon.description}
                  </p>

                  <div className="space-y-2">
                    {hackathon.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <IconAward size={16} className="text-green-400" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
          >
            Join My Next Hackathon
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathon; 