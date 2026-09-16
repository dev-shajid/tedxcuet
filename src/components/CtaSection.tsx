'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CtaSection = () => {
  const isTicketSaleOpen = new Date('2025-06-19T20:00:00') > new Date() ? false : true; // TODO: Change this to true when the ticket sale is open
  const googleFormUrl = "https://forms.gle/i8NvYJYtZjFfuiaY8";

  // Simple fade in animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Staggered list items animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  // Registration benefits
  const benefits = [
    "Full day access to inspiring TEDx talks",
    "Networking opportunities",
    "Morning Refreshments",
    "Premium TEDxCUET T-shirt",
    "Delicious Lunch",
    "Notebook & Pen",
    "Exciting Goodies & More!"
  ];

  return (
    <section id="register" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-red-600/10 to-transparent opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-red-600/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isTicketSaleOpen ? 'Secure Your Spot Today' : 'Coming Soon'}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Join us for an inspiring day of ideas worth spreading at TEDxCUET.
            {isTicketSaleOpen && ' Limited seats available!'}
          </p>
        </motion.div>

        {isTicketSaleOpen ? (
          <motion.div
            className="text-center mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center shadow-lg transition-colors duration-300 text-lg"
            >
              <CheckCircle className="h-6 w-6 mr-2" />
              Register Now
            </a>
          </motion.div>
        ) : null}

        <motion.div
          className="mt-12 max-w-2xl mx-auto bg-zinc-900 p-8 rounded-xl text-center border border-zinc-800 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {isTicketSaleOpen ? (
            <p className="mb-6 text-lg">
              <span className="text-red-600 font-bold">Limited seats available!</span> Registration includes:
            </p>
          ) : (
            <>
              <p className="text-2xl font-bold text-red-500 mb-4">Ticket Sales Opening Soon!</p>
              <p className="text-white/80 mb-6">
                We&apos;re preparing something special for you. Stay tuned for ticket release announcements.
              </p>
            </>
          )}
          <div className="mt-8 flex flex-col items-center space-y-6">
            <p className="text-white/80">
              What to expect:
            </p>
            <motion.ul
              className="space-y-4 text-left mx-auto max-w-md"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.li key={index} className="flex items-center" variants={item}>
                  <span className="bg-red-600/30 rounded-full p-1 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-white/70">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center text-white/60 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p>For any queries, please contact us at <a href="mailto:tedxcuet2025@gmail.com" className="text-red-600 hover:text-red-500 hover:underline transition-colors">tedxcuet2025@gmail.com</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;