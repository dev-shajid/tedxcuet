"use client"

import { motion } from "framer-motion"

const EventHighlights = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="highlights" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Highlights</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Experience the energy and inspiration of TEDxCUET through our highlight video.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-800 relative">
            <iframe
              src="https://drive.google.com/file/d/1CtA_P2Cn55hM8rESYgJdp3n-uFSJjyT6/preview"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventHighlights