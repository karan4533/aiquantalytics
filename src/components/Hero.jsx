import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1f4037] to-[#99f2c8]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <span className="px-1.5 sm:px-2 py-0.5 bg-white text-dark-900 rounded-full text-[10px] sm:text-xs font-bold">New</span>
            <span className="hidden sm:inline">Innovation Partner</span>
            <span className="sm:hidden">Innovation</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-lg">
            Innovate, <span className="relative inline-block">
              <span className="relative z-10">Automate</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 lg:h-4 bg-[#99f2c8]/60 -z-0"></span>
            </span> & Transform
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow">
            Your Partner in AI, Cybersecurity, IoT, Blockchain, RPA, AR/VR, DevOps, Big Data, And More. Contact Us Today!
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-white text-dark-900 text-base sm:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl cursor-pointer"
          >
            Contact Now
            <HiArrowRight className="text-lg sm:text-2xl" />
          </motion.button>

          {/* Stats - Subtle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 mt-12 sm:mt-20 text-xs sm:text-sm text-white/80 px-4"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl font-bold text-white">203+</span>
              <span>Projects</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl font-bold text-white">75+</span>
              <span>Clients</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl font-bold text-white">11.5K+</span>
              <span>Hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
