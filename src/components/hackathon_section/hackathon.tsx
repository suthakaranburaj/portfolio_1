"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconTrophy, IconUsers, IconCalendar, IconAward, IconArrowRight } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';
import Link from 'next/link';

const Hackathon = () => {
  
  const hackathons = [
    {
      title: "Err404 6.0",
      position: "Participated",
      date: "15-16 February 2025", // Update with correct date if needed
      team: "Team InsightEd",
      description:
        "Built a predictive system to forecast college admissions and optimize resource planning. Integrated features for faculty recruitment, budget planning, and marketing impact analysis using AI/ML.",
      achievements: [
        "Developed admissions prediction model",
        "Created resource allocation tools",
        "Selected as a finalist in our first hackathon"
      ],
      image: "/err_6_0.png"
    },
    {
      title: "Recursion 6.0",
      position: "Top 15 Team",
      date: "21-22 March 2025", // Update with correct date if needed
      team: "Team BudgetGuard",
      description:
        "Created a personal finance assistant that detects anomalies, forecasts expenses, and sends smart alerts. Included ML-based transaction categorization, secure banking API integration, and real-time dashboards.",
      achievements: [
        "ML-based anomaly detection in transactions",
        "Smart alerts and budget forecasting",
        "Top 15 finalist out of competitive entries"
      ],
      image: "/recursion_6_0.png"
    },
    {
      title: "Code Crafters 2.0",
      position: "Top 7 Team",
      date: "15-16 March 2025",
      team: "Team InvestoMate",
      description:
        "Developed an investment portal to manage stocks, bonds, and insurance using the MVC pattern. Users can get investment suggestions, estimate profits, buy/sell assets, and manage account balances.",
      achievements: [
        "Implemented complete asset management system",
        "Followed MVC architecture throughout",
        "Ranked in Top 7 among 100+ teams"
      ],
      image: "/code_crafters2_0.png"
    },
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