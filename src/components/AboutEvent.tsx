'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Zap, MessageSquare } from 'lucide-react';
import BlurImage from './BlurImage';

const AboutEvent = () => {
  const features = [
    {
      id: 1,
      title: "Innovative Ideas",
      description: "Discover groundbreaking concepts and perspectives that challenge conventional thinking.",
      icon: <Lightbulb className="h-10 w-10 text-red-600" />
    },
    {
      id: 2,
      title: "Inspiring Speakers",
      description: "Engage with exceptional thinkers and doers from diverse fields and backgrounds.",
      icon: <Users className="h-10 w-10 text-red-600" />
    },
    {
      id: 3,
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals and forge valuable professional relationships.",
      icon: <Zap className="h-10 w-10 text-red-600" />
    },
    {
      id: 4,
      title: "Interactive Experience",
      description: "Engage in discussions, Q&A sessions, and experiential learning activities.",
      icon: <MessageSquare className="h-10 w-10 text-red-600" />
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.6, 0.05, 0.01, 0.99]
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black to-zinc-900 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About TEDxCUET
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            A day of engaging talks, innovative ideas, and meaningful connections at Chittagong University of Engineering & Technology.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={1}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <BlurImage
                src="/about.avif"
                alt="TEDx Event"
                width={600}
                height={400}
                className="w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={2}
          >
            <div className="p-8 rounded-xl border border-white/10 backdrop-blur-sm bg-black/40">
              <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
                What is TEDx?
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-red-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.span>
              </h3>

              <p className="text-white/80 mb-6 leading-relaxed">
                TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection.
              </p>

              <p className="text-white/80 mb-6 leading-relaxed">
                TEDxCUET is independently organized under a license from TED, bringing the spirit of TED&apos;s mission of &ldquo;ideas worth spreading&rdquo; to Chittagong University of Engineering &amp; Technology.
              </p>

              <p className="text-white/80 leading-relaxed">
                Our event features a combination of live speakers and TED Talk videos to spark deep conversation and connections. The TED Conference provides general guidance, but TEDxCUET is self-organized.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="p-6 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group bg-gray-900/50"
              variants={fadeIn}
              custom={index}
            >
              {/* Background accent */}
              <motion.div 
                className="absolute -right-10 -bottom-10 w-20 h-20 rounded-full bg-red-600/10"
                whileHover={{ scale: 1.5, opacity: 0.3 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              {/* Icon with animation */}
              <div className="mb-5 relative z-10 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-red-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/70 relative z-10 group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutEvent;