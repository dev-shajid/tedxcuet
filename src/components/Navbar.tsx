"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

// CSS transitions for hover effects (consistent timing)
const hoverTransition = {
  duration: 0.2,
  ease: "easeInOut"
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string>('home');
  const { scrollY } = useScroll();

  // Use Framer Motion's scroll handling for smoother animations
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  // Track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove the '#' from the id to match our navLinks
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // Reduced threshold to make it more sensitive
        rootMargin: '-50px 0px -50px 0px' // Adjusted margins
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Debug log to check sections being observed
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    console.log('Sections found:', Array.from(sections).map(s => s.id));
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Partners', href: '#partners' },
    { name: 'Venue', href: '#venue' },
  ];

  // Enhanced variants for navbar animations with spring physics
  const navbarVariants = {
    top: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      height: "5rem",
      boxShadow: "none",
      backdropFilter: "blur(0px)"
    },
    scrolled: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      height: "4rem",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(12px)"
    }
  };

  // Logo animation variants
  const logoVariants = {
    top: { scale: 1.1 },
    scrolled: { scale: 1 }
  };

  const logoTextVariants = {
    top: { fontSize: "1.25rem" },
    scrolled: { fontSize: "1.1rem" }
  };

  // Link hover animation
  const linkContainerVariants = {
    top: { y: 0 },
    scrolled: { y: 0 }
  };

  const linkVariants = {
    normal: { color: "rgba(255, 255, 255, 0.8)" },
    hover: { color: "#ffffff", scale: 1.05 }
  };

  // Underline animation for nav links
  const underlineVariants = {
    initial: { width: 0, left: "50%", right: "50%" },
    hover: { width: "100%", left: 0, right: 0 }
  };

  // Sidebar variants - slide in from right
  const sidebarVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  // Sidebar overlay variants
  const overlayVariants = {
    closed: {
      opacity: 0,
      backdropFilter: "blur(0px)"
    },
    open: {
      opacity: 1,
      backdropFilter: "blur(4px)"
    }
  };

  // Sidebar menu items variants
  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  // Hamburger icon variants
  const hamburgerTopVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  };

  const hamburgerMiddleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const hamburgerBottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  };

  return (
    <>
      <motion.nav
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={navbarVariants}
        transition={hoverTransition}
        className="fixed w-full top-0 z-50 flex items-center"
      >
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-white font-bold flex items-center"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            transition={hoverTransition}
          >
            <motion.span
              className="bg-red-600 rounded px-2 py-1 mr-1 inline-block"
              variants={logoTextVariants}
              transition={hoverTransition}
            >
              TEDx
            </motion.span>
            <motion.span
              variants={logoTextVariants}
              transition={hoverTransition}
            >
              CUET
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 md:space-x-3 lg:space-x-5">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={linkContainerVariants}
                className="relative overflow-hidden py-2"
                onHoverStart={() => setActiveLink(link.name)}
                onHoverEnd={() => setActiveLink(null)}
              >
                <motion.a
                  href={link.href}
                  className={`text-white/80 font-medium px-2 py-1 inline-block ${currentSection === link.href.substring(1) ? 'text-white' : ''
                    }`}
                  variants={linkVariants}
                  animate={activeLink === link.name || currentSection === link.href.substring(1) ? "hover" : "normal"}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {link.name}
                </motion.a>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-red-600"
                  initial="initial"
                  animate={activeLink === link.name || currentSection === link.href.substring(1) ? "hover" : "initial"}
                  variants={underlineVariants}
                  transition={hoverTransition}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button with animated hamburger */}
          <motion.button
            className="lg:hidden text-white p-2 relative z-20 h-12 w-12 flex flex-col justify-center items-center"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white block mb-1.5"
              variants={hamburgerTopVariants}
              animate={isSidebarOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block mb-1.5"
              variants={hamburgerMiddleVariants}
              animate={isSidebarOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              variants={hamburgerBottomVariants}
              animate={isSidebarOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar with overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay that closes the sidebar when clicked */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsSidebarOpen(false)}
              transition={{ duration: 0.3 }}
            />

            {/* Sidebar */}
            <motion.div
              className="lg:hidden fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg z-50 shadow-xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
            >
              {/* Sidebar header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <div className="text-white font-bold">Menu</div>
                {/* Close button */}
                <motion.button
                  className="text-white p-2 rounded-full hover:bg-white/10"
                  onClick={() => setIsSidebarOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </div>

              {/* Sidebar menu items */}
              <div className="flex flex-col py-4">
                {/* Mobile Menu Links */}
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`block py-3 px-6 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-colors duration-200 ${currentSection === link.href.substring(1) ? 'text-red-500' : ''
                      }`}
                    variants={menuItemVariants}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;