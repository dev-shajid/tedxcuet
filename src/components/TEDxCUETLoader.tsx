import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TEDxCUETLoader = ({ onLoadingComplete }: { onLoadingComplete: () => (() => void) | undefined}) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  
  // Control the progress animation
  useEffect(() => {
    // Start progress animation
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 1500);
    
    return () => clearTimeout(progressTimer);
  }, []);
  
  // Control loader visibility after animation completes
  useEffect(() => {
    if (progress === 100) {
      // Add delay after progress reaches 100% before hiding loader
      const completeTimer = setTimeout(() => {
        setShowLoader(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 800); // Extra time to appreciate the completed state
      
      return () => clearTimeout(completeTimer);
    }
  }, [progress, onLoadingComplete]);
  
  // Variants for animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  const letterVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };
  
  const tedxLetters = ["T", "E", "D", "x"];
  const cuetLetters = ["C", "U", "E", "T"];
  
  // Exit animation for the entire loader
  const exitAnimation = {
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };
  
  if (!showLoader) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center px-4"
      variants={exitAnimation}
      exit="exit"
      initial={{ opacity: 1 }}
    >
      <motion.div 
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* TEDx CUET Logo */}
        <motion.div variants={childVariants} className="mb-8">
          <div className="flex items-center">
            {/* TEDx part */}
            <div className="flex">
              {tedxLetters.map((letter, i) => (
                <motion.div
                  key={`tedx-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className={`text-4xl font-bold ${letter === 'x' ? 'text-red-600' : 'text-white'}`}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
            
            {/* Space */}
            <div className="w-3"></div>
            
            {/* CUET part */}
            <div className="flex">
              {cuetLetters.map((letter, i) => (
                <motion.div
                  key={`cuet-${i}`}
                  custom={i + 5} // offset delay
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="text-4xl font-bold text-white"
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Tagline */}
        <motion.div 
          variants={childVariants}
          className="text-white/80 text-sm mb-10 text-center"
        >
          Ideas worth spreading
        </motion.div>
        
        {/* Loading spinner - animated dots */}
        <motion.div 
          variants={childVariants}
          className="flex space-x-2 mb-8"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="h-3 w-3 bg-red-600 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />
          ))}
        </motion.div>
        
        {/* Progress bar */}
        <motion.div 
          variants={childVariants}
          className="w-64 h-1 bg-white/20 rounded-full overflow-hidden"
        >
          <motion.div 
            className="h-full bg-red-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Loading text */}
        <motion.div 
          variants={childVariants}
          className="mt-4 text-white/70 text-sm font-medium"
        >
          Preparing your experience...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TEDxCUETLoader;