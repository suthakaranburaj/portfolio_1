"use client";

import React from 'react';
import { motion } from 'motion/react';
import { IconBrandYoutube, IconEye, IconCalendar } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';

const YouTube = () => {
  const videos = [
    {
      title:
        "GitHub for Beginners: 5 Things Every Fresher Developer Should Know (2025)",
      thumbnail: "/video_1.png",
      // views: "244",
      // date: "2 weeks ago",
      duration: "7:40",
      link: "https://youtu.be/FD6YHSIcZIo?si=m5asZBqbf-d-J2a1",
    },
    {
      title: "How to Set Up a Next.js Project in 2025 (Beginner Friendly)",
      thumbnail: "/video_2.png",
      // views: "100",
      // date: "1 month ago",
      duration: "3:40",
      link: "https://youtu.be/0omo_DigYSU?si=KfQMC-S2FuiG12uI",
    },
    {
      title:
        "How to Host HTML CSS Website on Vercel for FREE (Beginner Friendly)",
      thumbnail: "/video_3.png",
      // views: "71",
      // date: "2 months ago",
      duration: "5:22",
      link: "https://youtu.be/9SnzgEssFiE?si=_AfbV5fNht0o3ij7",
    },
  ];

  return (
    <section id="youtube" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-green-400">Videos</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-green-400/5 rounded-lg overflow-hidden hover:bg-green-400/10 transition-colors">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={video.thumbnail}
                      alt={video.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center"
                      >
                        <IconBrandYoutube size={32} className="text-black" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2 py-1 bg-black/80 text-white rounded text-sm">
                        {video.duration}
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      {/* <div className="flex items-center gap-1">
                        <IconEye size={16} />
                        <span>{video.views} views</span>
                      </div> */}
                      {/* <div className="flex items-center gap-1">
                        <IconCalendar size={16} />
                        <span>{video.date}</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.a>
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
            href="https://youtube.com/@suthakaranburaj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
          >
            <IconBrandYoutube size={24} />
            Subscribe to My Channel
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTube; 