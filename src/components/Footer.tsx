'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/tedxcuet",
      icon: <Facebook className="w-5 h-5" />
    },
    {
      name: "Twitter",
      url: "https://twitter.com/tedxcuet",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "Instagram",
      url: "https://instagram.com/tedxcuet",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/tedxcuet",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "YouTube",
      url: "https://youtube.com/tedxcuet",
      icon: <Youtube className="w-5 h-5" />
    }
  ];

  const footerLinks: Array<{ title: string; items: FooterLink[] }> = [
    {
      title: "Event Info",
      items: [
        { name: "About TEDx", href: "#about" },
        { name: "Speakers", href: "#speakers" },
        { name: "Schedule", href: "#schedule" },
        { name: "Venue", href: "#venue" },
      ]
    },
    {
      title: "Contact Us",
      items: [
        { name: "tedxcuet2025@gmail.com", href: "mailto:tedxcuet2025@gmail.com" },
        { name: "+8801323465453", href: "tel:+8801323465453" },
        { name: "CUET, Chittagong", href: "#venue" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "TED", href: "https://www.ted.com/", external: true },
        { name: "TEDx Program", href: "https://www.ted.com/tedx/events/61356", external: true },
        { name: "CUET", href: "https://www.cuet.ac.bd/", external: true },
      ]
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "#E62B1E",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"></div>

      <motion.div
        className="container mx-auto px-4 pt-16 pb-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <motion.div
            className="md:col-span-2"
            variants={childVariants}
          >
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-white font-bold text-xl mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-red-600 px-2 py-1 rounded">TEDx</span>
              <span>CUET</span>
            </motion.a>

            <motion.p
              className="text-white/70 mb-8 max-w-md"
              variants={childVariants}
            >
              TEDxCUET brings together the brightest minds to share ideas worth spreading. Join us for a day of inspiration, innovation, and meaningful connections.
            </motion.p>

            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 hover:bg-red-600 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                  custom={index}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8"
            variants={childVariants}
          >
            {footerLinks.map((column, index) => (
              <motion.div
                key={column.title}
                variants={childVariants}
                custom={index + 1}
              >
                <h3 className="font-semibold text-white mb-5 text-lg relative inline-block">
                  {column.title}
                  <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600"></span>
                </h3>
                <ul className="space-y-3">
                  {column.items.map((link, idx) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-1 group"
                      >
                        {link.name}
                        {link.external && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center"
          variants={fadeIn}
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TEDxCUET. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;