'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  // Track if component has mounted
  const [isMounted, setIsMounted] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
    controls.start('visible');

    // Spotlight effect
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      spotlight.style.setProperty('--x', `${clientX}px`);
      spotlight.style.setProperty('--y', `${clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #000000, #0E0E0E, #111111)',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Interactive Spotlight */}
      {isMounted && <div ref={spotlightRef} className="spotlight"></div>}

      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="text-red-600 text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
          variants={titleVariants}
        >
          TEDx<span className="text-white">CUET</span> 2025
        </motion.h1>

        <motion.p
          className="text-white/80 text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          variants={fadeInVariants}
        >
          Ideas worth spreading at Chittagong University of Engineering & Technology
        </motion.p>

        <motion.div
          variants={fadeInVariants}
          className="mb-10"
        >
          {/* {isMounted && <CountdownTimer />} */}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          variants={buttonsVariants}
        >
          {/* <a
            href="#register"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/20"
          >
            Register Now
          </a> */}
          <a
            href="#about"
            className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 border border-white/30 rounded-lg transition-all duration-300 hover:border-white transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          className="absolute -bottom-24 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.7, y: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <a href="#about" className="text-white hover:text-red-500 transition-colors duration-300" aria-label="Scroll down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;