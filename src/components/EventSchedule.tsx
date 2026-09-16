"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown, Clock, MapPin, User } from "lucide-react";

interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  speaker: string;
  description: string;
  location: string;
  type: 'talk' | 'break' | 'registration' | 'opening' | 'closing' | 'qa';
  isKeynote?: boolean;
}

const EventSchedule = () => {
  const isSchedulePublished = false; // Toggle this to true when ready to publish the schedule
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // Simple fade in animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  if (!isSchedulePublished) {
    return (
      <section id="schedule" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event Schedule
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our detailed event schedule will be announced soon
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-xl text-center border border-zinc-800 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-2xl font-bold text-red-500 mb-4">Coming Soon!</p>
            <p className="text-white/80 mb-6">
              We&apos;re finalizing an exciting lineup of talks and activities. Check back soon for the complete schedule.
            </p>
            <div className="flex items-center justify-center space-x-4 text-white/60">
              <Clock className="h-5 w-5" />
              <span>Schedule will be published shortly</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Rest of your existing code for when schedule is published
  const toggleItem = (id: number) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((itemId) => itemId !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const scheduleData: ScheduleItem[] = [
    {
      id: 1,
      time: "08:30 - 09:30",
      title: "Registration & Welcome Coffee",
      speaker: "Organizing Team",
      location: "CUET Auditorium",
      description: "Check-in, collect your badges and networking materials",
      type: "registration"
    },
    {
      id: 2,
      time: "09:30 - 10:00",
      title: "Opening Ceremony",
      speaker: "Host Committee",
      location: "CUET Auditorium",
      description: "Welcome address by the organizers and introduction to TEDxCUET",
      type: "opening"
    },
    {
      id: 3,
      time: "10:00 - 10:45",
      title: "The Future of Ethical AI",
      speaker: "Dr. Sarah Johnson",
      location: "CUET Auditorium",
      description: "Exploring the challenges and solutions for ethical AI development",
      type: "talk",
      isKeynote: true
    },
    {
      id: 4,
      time: "10:45 - 11:15",
      title: "Morning Tea Break",
      speaker: "",
      location: "CUET Auditorium",
      description: "Refresh yourself with beverages and light snacks",
      type: "break"
    },
    {
      id: 5,
      time: "11:15 - 12:00",
      title: "Climate Resilience in Bangladesh",
      speaker: "Ahmed Hassan",
      location: "CUET Auditorium",
      description: "Innovative approaches to building climate resilience in vulnerable areas",
      type: "talk"
    },
    {
      id: 6,
      time: "12:00 - 13:00",
      title: "Lunch Break",
      speaker: "",
      location: "CUET Auditorium",
      description: "Enjoy lunch and network with speakers and fellow attendees",
      type: "break"
    },
    {
      id: 7,
      time: "13:00 - 13:45",
      title: "Sustainable Development through Social Business",
      speaker: "Maya Patel",
      location: "CUET Auditorium",
      description: "How social enterprises are transforming rural communities",
      type: "talk",
      isKeynote: true
    },
    {
      id: 8,
      time: "14:00 - 14:45",
      title: "Quantum Computing: The Next Frontier",
      speaker: "Dr. James Wilson",
      location: "CUET Auditorium",
      description: "How quantum computing will revolutionize technology",
      type: "talk"
    },
    {
      id: 9,
      time: "15:00 - 15:45",
      title: "Q&A Panel Session",
      speaker: "All Speakers",
      location: "CUET Auditorium",
      description: "Interactive session with direct engagement with our speakers",
      type: "qa"
    },
    {
      id: 10,
      time: "16:00 - 16:30",
      title: "Closing Remarks",
      speaker: "Organizing Committee",
      location: "CUET Auditorium",
      description: "Wrap-up of the day's events and acknowledgments",
      type: "closing"
    }
  ];

  const getItemColor = (type: string, isKeynote?: boolean) => {
    if (isKeynote) return 'border-tedred';

    switch (type) {
      case 'talk': return 'border-tedred';
      case 'break': return 'border-green-500';
      case 'registration': return 'border-blue-400';
      case 'opening': return 'border-yellow-500';
      case 'closing': return 'border-purple-500';
      case 'qa': return 'border-orange-500';
      default: return 'border-gray-500';
    }
  };

  const getBgColor = (type: string, isKeynote?: boolean) => {
    if (isKeynote) return 'bg-tedred/10';

    switch (type) {
      case 'talk': return 'bg-black';
      case 'break': return 'bg-green-500/10';
      case 'registration': return 'bg-blue-400/10';
      case 'opening': return 'bg-yellow-500/10';
      case 'closing': return 'bg-purple-500/10';
      case 'qa': return 'bg-orange-500/10';
      default: return 'bg-black';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Plan your TEDxCUET experience with our comprehensive event schedule
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {scheduleData.map((item) => (
            <div
              key={item.id}
              className={cn(
                "mb-4 bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300",
                expandedItems.includes(item.id) ? "shadow-lg" : "shadow-md",
                getItemColor(item.type, item.isKeynote),
                "border-l-4"
              )}
            >
              <div
                className={cn(
                  "flex justify-between items-center p-4 cursor-pointer",
                  getBgColor(item.type, item.isKeynote)
                )}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center text-sm text-white/60 mb-1">
                    <Clock size={14} className="mr-1" />
                    {item.time}
                    {item.isKeynote && (
                      <span className="ml-2 px-2 py-0.5 bg-tedred text-white text-xs rounded-full">Keynote</span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  {item.speaker && (
                    <div className={cn(
                      "flex items-center text-sm mt-1",
                      item.type === 'talk' || item.isKeynote ? "text-tedred" : "text-white/70"
                    )}>
                      <User size={14} className="mr-1" />
                      {item.speaker}
                    </div>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="hidden md:flex items-center text-sm mr-4 text-white/70">
                    <MapPin size={14} className="mr-1" />
                    {item.location}
                  </div>
                  <ChevronDown
                    className={`transition-transform duration-300 text-white/70 ${expandedItems.includes(item.id) ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </div>

              {/* Expanded Content with AnimatePresence for smooth transitions */}
              <AnimatePresence>
                {expandedItems.includes(item.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-zinc-900/50">
                      <div className="md:hidden flex items-center text-sm mb-2 text-white/70">
                        <MapPin size={14} className="mr-1" />
                        {item.location}
                      </div>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-white/70">
            <span className="text-tedred font-medium">Note:</span> Schedule is subject to minor adjustments. Please check back on the event day for any updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSchedule;