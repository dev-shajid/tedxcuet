'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Phone } from 'lucide-react';
import BlurImage from './BlurImage';

const VenueSection = () => {
  // Simple fade animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Staggered content animation for list items
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="venue" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event Venue
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Join us at our carefully selected venue for an immersive TEDx experience.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Bus Route Section */}
            <BlurImage
              src="/bus.png"
              alt="Bus Route to CUET Campus"
              width={1000}
              height={1000}
              className="object-contain mx-auto rounded-md w-full"
            />
          </motion.div>

          {/* Venue Info Section */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-zinc-800 p-8 rounded-xl h-full border border-zinc-700 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                CUET Main Auditorium
              </h3>

              <motion.div
                className="space-y-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={item} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Location</h4>
                    <p className="text-white/70">
                      Chittagong University of Engineering & Technology,<br />
                      Chittagong-4349, Bangladesh
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Date & Time</h4>
                    <p className="text-white/70">
                      June 28, 2025<br />
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Contact</h4>
                    <p className="text-white/70">
                      +8801323465453<br />
                      tedxcuet2025@gmail.com
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;