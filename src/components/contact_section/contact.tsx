"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import GridBackground from '../ui/grid-background';
import { useTheme } from '@/context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <IconMail size={24} />,
      title: "Email",
      content: "suthakaranburaj03@gmail.com",
      link: "mailto:suthakaranburaj03@gmail.com"
    },
    {
      icon: <IconPhone size={24} />,
      title: "Phone",
      content: "+91 9321607843",
      link: "tel:+919321607843"
    },
    {
      icon: <IconMapPin size={24} />,
      title: "Location",
      content: "Mumbai, Maharashtra, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: <IconBrandGithub size={24} />,
      name: "GitHub",
      url: "https://github.com/suthakaranburaj"
    },
    {
      icon: <IconBrandLinkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suthakar-anburaj-7bb816290/"
    },
    {
      icon: <IconBrandTwitter size={24} />,
      name: "Twitter",
      url: "https://twitter.com"
    }
  ];

  return (
    <section id="contact" className={`py-20 relative transition-colors duration-300 ${
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
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-400/5 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 bg-green-400/10 border border-green-400/20 rounded-lg focus:outline-none focus:border-green-400 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  } placeholder-gray-500`}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 bg-green-400/10 border border-green-400/20 rounded-lg focus:outline-none focus:border-green-400 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  } placeholder-gray-500`}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-4 py-3 bg-green-400/10 border border-green-400/20 rounded-lg focus:outline-none focus:border-green-400 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  } placeholder-gray-500`}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-4 py-3 bg-green-400/10 border border-green-400/20 rounded-lg focus:outline-none focus:border-green-400 resize-none ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  } placeholder-gray-500`}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors cursor-pointer"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-green-400/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Contact Info</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`flex items-center gap-4 hover:text-green-400 transition-colors cursor-pointer ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <div className="text-green-400">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p>{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-green-400/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`hover:text-green-400 transition-colors cursor-pointer ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 