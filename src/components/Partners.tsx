'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Partner {
  id: number;
  name: string;
  logo: string;
  type: 'platinum' | 'gold' | 'silver' | 'media';
  website?: string;
}

const Partners = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: "Ispahani Mirzapore Tea",
      logo: "/partners/1.png",
      type: "gold",
      website: "https://www.ispahanitea.com/"
    },
    {
      id: 2,
      name: "Diamond Cement",
      logo: "/partners/2.png",
      type: "silver",
      website: "https://www.diamondcementbd.com/"
    },
    {
      id: 3,
      name: "Shomoi TV",
      logo: "/partners/3.png",
      type: "media",
      website: "https://www.somoynews.tv/"
    },
    {
      id: 4,
      name: "Channel 24",
      logo: "/partners/4.webp",
      type: "media",
      website: "https://www.channel24bd.tv/"
    },
    {
      id: 5,
      name: "Ekattor TV",
      logo: "/partners/5.png",
      type: "media",
      website: "https://ekattor.tv/"
    },
    {
      id: 6,
      name: "Infogram",
      logo: "/partners/6.svg",
      type: "media",
      website: "https://www.facebook.com/share/19cYieb3CY/?mibextid=wwXIfr"
    },
    {
      id: 7,
      name: "The Daily Campus",
      logo: "/partners/7.svg",
      type: "media",
      website: "https://thedailycampus.com/"
    },
    {
      id: 8,
      name: "BSRM",
      logo: "/partners/8.png",
      type: "silver",
      website: "https://bsrm.com/"
    },
    {
      id: 9,
      name: "Beximco",
      logo: "/partners/9.png",
      type: "gold",
      website: "https://aeroness.com/"
    },
    
  ];

  // Filter partners by type
  const platinumPartners = partners.filter(partner => partner.type === 'platinum');
  const goldPartners = partners.filter(partner => partner.type === 'gold');
  const silverPartners = partners.filter(partner => partner.type === 'silver');
  const mediaPartners = partners.filter(partner => partner.type === 'media');

  // Animation variants - simple fade in only
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const renderPartnerSection = (partners: Partner[], title: string, size: string, delay: number = 0) => (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: delay * 0.2
          }
        }
      }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-white">{title}</h3>
        <div className="w-16 h-0.5 bg-red-600 mx-auto mt-2"></div>
      </div>

      <div className={`grid ${size} gap-6 md:gap-8`}>
        {partners.map((partner) => (
          <motion.a
            key={partner.id}
            variants={fadeIn}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border border-white/10 hover:border-red-600/30 rounded-lg p-6 w-full flex flex-col items-center justify-center transition-all duration-300 group h-40"
            aria-label={`Visit ${partner.name} website flex justify-center items-center`}
          >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={90}
                  className="max-w-full max-h-16 h-full object-contain group-hover:scale-110 transition-all duration-300"
                />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="partners" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            We&apos;re grateful to these amazing organizations for making TEDxCUET possible and helping us spread ideas worth sharing.
          </p>
        </motion.div>

        {/* Partner sections by category */}
        {platinumPartners.length > 0 && renderPartnerSection(
          platinumPartners,
          "Platinum Partners",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          0
        )}

        {goldPartners.length > 0 && renderPartnerSection(
          goldPartners,
          "Gold Partners",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          0.2
        )}

        {silverPartners.length > 0 && renderPartnerSection(
          silverPartners,
          "Silver Partners",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          0.4
        )}

        {mediaPartners.length > 0 && renderPartnerSection(
          mediaPartners,
          "Media Partners",
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
          0.6
        )}
      </div>
    </section>
  );
};

export default Partners;