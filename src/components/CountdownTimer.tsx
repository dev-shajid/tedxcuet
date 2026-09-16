'use client';

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Event date - replace with your actual event date
  const eventDate = new Date('June 28, 2025 09:00:00').getTime();
  
  // Initial time remaining state
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Update countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    // Initial update
    updateTimer();
    
    // Set up interval
    const interval = setInterval(updateTimer, 1000);
    
    // Clean up interval
    return () => clearInterval(interval);
  }, [eventDate]);
  
  // Countdown display items
  const countdownItems = [
    { label: 'Days', value: timeRemaining.days },
    { label: 'Hours', value: timeRemaining.hours },
    { label: 'Minutes', value: timeRemaining.minutes },
    { label: 'Seconds', value: timeRemaining.seconds }
  ];

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-6">
      {countdownItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-gray-900 border border-gray-800 rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center shadow-lg">
            <span className="text-2xl md:text-3xl font-bold text-white">
              {item.value < 10 ? `0${item.value}` : item.value}
            </span>
          </div>
          <span className="text-xs md:text-sm mt-2 text-white/70">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;