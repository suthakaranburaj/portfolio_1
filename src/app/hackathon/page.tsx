"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconArrowLeft, IconTrophy, IconUsers, IconCalendar, IconFilter } from '@tabler/icons-react';
import Link from 'next/link';
import GridBackground from '@/components/ui/grid-background';

const HackathonPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web3', 'ai', 'mobile', 'social'];

  const hackathons = [
    {
      title: "Web3 Innovation Challenge",
      position: "1st Place",
      date: "March 2023",
      team: "BlockChain Pioneers",
      description: "Developed a decentralized voting system using blockchain technology.",
      longDescription: `Our team developed a revolutionary decentralized voting system that ensures transparency and security in the voting process.

Project Details:
• Built on Ethereum blockchain
• Smart contracts for vote management
• Zero-knowledge proofs for voter privacy
• Real-time vote counting and verification
• Mobile-first user interface
• Integration with existing voting systems

Technical Implementation:
• Solidity for smart contracts
• React for frontend development
• Web3.js for blockchain interaction
• IPFS for decentralized storage
• Metamask integration for wallet connection

Impact:
• Successfully demonstrated at 3 major conferences
• Potential to revolutionize voting systems
• Received funding for further development
• Patented the core technology`,
      image: "/hackathons/web3.jpg",
      category: "web3",
      achievements: [
        "Won 1st place and $10,000 prize",
        "Received offers from 3 VCs for funding",
        "Featured in TechCrunch and CoinDesk",
        "Invited to present at ETHGlobal"
      ],
      technologies: [
        "Ethereum", "Solidity", "React", "Web3.js",
        "IPFS", "Node.js", "TypeScript", "Tailwind CSS"
      ]
    },
    {
      title: "AI for Social Good",
      position: "2nd Place",
      date: "January 2023",
      team: "AI Innovators",
      description: "Created an AI-powered platform for early detection of mental health issues.",
      longDescription: `Our team developed an innovative AI platform that helps in early detection and prevention of mental health issues through natural language processing and behavioral analysis.

Project Details:
• Real-time emotion analysis
• Natural language processing for text analysis
• Behavioral pattern recognition
• Personalized intervention suggestions
• Privacy-focused data handling
• Integration with healthcare providers

Technical Implementation:
• Python for AI/ML models
• TensorFlow for deep learning
• React Native for mobile app
• Firebase for backend
• AWS for cloud infrastructure
• HIPAA-compliant data storage

Impact:
• Successfully piloted in 2 universities
• 85% accuracy in early detection
• Reduced response time by 60%
• Received recognition from mental health organizations`,
      image: "/hackathons/ai.jpg",
      category: "ai",
      achievements: [
        "Won 2nd place and $5,000 prize",
        "Featured in MIT Technology Review",
        "Partnership with 2 mental health organizations",
        "Selected for accelerator program"
      ],
      technologies: [
        "Python", "TensorFlow", "React Native", "Firebase",
        "AWS", "NLP", "Machine Learning", "HIPAA Compliance"
      ]
    },
    // Add more hackathons here...
  ];

  const filteredHackathons = activeFilter === 'all' 
    ? hackathons 
    : hackathons.filter(hackathon => hackathon.category === activeFilter);

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
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors cursor-pointer"
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
              Hackathon <span className="text-green-400">Achievements</span>
            </h1>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </motion.div>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg capitalize flex items-center gap-2 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-green-400 text-black'
                  : 'bg-green-400/10 text-gray-300 hover:bg-green-400/20'
              }`}
            >
              <IconFilter size={16} />
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Hackathon Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredHackathons.map((hackathon, index) => (
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
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <IconTrophy className="text-yellow-400" size={24} />
                    <span className="text-white font-bold">{hackathon.position}</span>
                  </div>
                </div>

                {/* Hackathon Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    {hackathon.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <IconUsers size={20} />
                      <span>{hackathon.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <IconCalendar size={20} />
                      <span>{hackathon.date}</span>
                    </div>
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">
                      {hackathon.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.technologies.map((tech, idx) => (
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
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Achievements</h4>
                      <ul className="space-y-2">
                        {hackathon.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HackathonPage; 