"use client"
import { motion } from "framer-motion"
import BlurImage from "./BlurImage"

interface Speaker {
  id: number
  name: string
  image: string
  profile?: string
  bio?: string
}

const SpeakersSection = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Prof. Dr. Saleh Hasan Naqib",
      image: "/speakers/1.jpg",
      bio: "Vice-Chancellor of the University of Rajshahi, renowned physicist, and global scientific leader with 175+ publications and numerous international honors."
    },
    {
      id: 2,
      name: "Dr. Muhammad Imadur Rahman",
      image: "/speakers/2.jpg",
      bio: "CEO of Bangladesh Satellite Company Limited, former Ericsson 5G/6G research lead, and inventor with 350+ patent submissions in digital connectivity."
    },
    {
      id: 3,
      name: "Zubuyer Kaolin",
      image: "/speakers/3.png",
      bio: "Award-winning astrophotographer, filmmaker, and astronomy educator recognized by NASA, ESA, and Adobe for his visual storytelling and science advocacy."
    },
    {
      id: 4,
      name: "Muhammad Sajal",
      image: "/speakers/4.png",
      bio: "Bestselling author, clinical nutritionist, and public health advocate with global experience in nutrition, wellness, and preventive healthcare initiatives."
    },
    {
      id: 5,
      name: "Prof. Dr. Md. Jahangir Alam",
      image: "/speakers/5.png",
      bio: "Former Vice-Chancellor of CUET, RUET, and USTC, and a national expert in civil and earthquake engineering with a 40-year academic legacy."
    },
    {
      id: 6,
      name: "Jakaria Jalal",
      image: "/speakers/6.png",
      bio: "Head of Project at Bashundhara Chemical Industries and TEDx speaker, known for driving innovation in Bangladesh's energy sector and impactful talks."
    },
    {
      id: 7,
      name: "Tanvir Shahriar Rimon",
      image: "/speakers/7.png",
      bio: "Corporate leader, author, and sustainability advocate, CEO of Rancon FC Properties, pioneering green development and responsible business in Chattogram."
    },
    {
      id: 8,
      name: "Dr. Adnan Mannan",
      image: "/speakers/8.png",
      bio: "Professor and biomedical researcher at University of Chittagong, recognized for global work in genetics, diabetes, antibiotic resistance, and public health."
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="speakers" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Speakers
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-red-600 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-white/80 max-w-3xl mx-auto">
            Meet our distinguished speakers who will share their groundbreaking ideas and inspiring stories at TEDxCUET.
          </motion.p>
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {speakers.map((speaker) => (
            <motion.div key={speaker.id} variants={itemVariants} className="group cursor-pointer bg-zinc-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 border border-zinc-700 hover:border-red-500/30">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <BlurImage
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-[4/5] object-cover md:group-hover:scale-110 transition-transform duration-300 ease-out"
                  id={speaker.id}
                  width={400}
                  height={500}
                />
              </div>
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-base group-hover:text-[#FF0000] transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-gray-300 text-sm text-justify leading-relaxed mt-2">{speaker.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
      </div>
    </section>
  )
}

export default SpeakersSection
