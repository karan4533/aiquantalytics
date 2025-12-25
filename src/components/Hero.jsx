import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiLightningBolt, HiUsers, HiClock, HiChartBar, HiDatabase, HiCheckCircle, HiSparkles } from 'react-icons/hi'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  // Auto-advance slides every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 4 ? 1 : prev + 1))
    }, 20000)
    return () => clearInterval(timer)
  }, [])

  // Client logos for trust signals
  const clientLogos = [
     '/images/Dex.jpeg',
    '/images/vit.png',
    '/images/srm.png',
    '/images/mosaique.jpg',
    '/images/sathyabama.jpeg',
    '/images/intellibi.png',
    '/images/fusionapps.png',
    '/images/vitap.png',
    '/images/easwari.png',
    '/images/gsu.png',
    '/images/kec.jpeg',
    '/images/kite.png',
    '/images/kle.png',
    '/images/kpriet.jpg',
    '/images/mgr.png',
    '/images/mukham.jpeg',
    '/images/ramakrishna.png',
    '/images/rec.png',
    '/images/rmkcet.png',
    '/images/sns.webp',
    '/images/cit.png',
  ]

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">
      {/* Radio Inputs for Slider Control */}
      <input 
        type="radio" 
        name="hero-slider" 
        id="slide1" 
        className="hidden" 
        checked={currentSlide === 1}
        onChange={() => setCurrentSlide(1)}
      />
      <input 
        type="radio" 
        name="hero-slider" 
        id="slide2" 
        className="hidden"
        checked={currentSlide === 2}
        onChange={() => setCurrentSlide(2)}
      />
      <input 
        type="radio" 
        name="hero-slider" 
        id="slide3" 
        className="hidden"
        checked={currentSlide === 3}
        onChange={() => setCurrentSlide(3)}
      />

      {/* Slides Container */}
      <div className="slider-container w-full h-full absolute inset-0 min-h-screen">
        {/* Slide 1 - Innovate, Automate & Transform */}
        <div className={`frame frame_1 absolute inset-0 w-full h-full min-h-screen transition-opacity duration-700 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f4037] via-[#2d5a4a] to-[#99f2c8]"></div>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#99f2c8] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24 pb-16 sm:pb-20 lg:py-24">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  {/* Badge - More Prominent */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-white/25 backdrop-blur-md border border-white/40 text-white rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg"
                  >
                    <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-white text-[#1f4037] rounded-full text-xs font-bold">
                      <HiSparkles className="text-yellow-500 text-xs sm:text-sm" />
                      New
                    </span>
                    <span className="whitespace-nowrap">🚀 Innovation Partner</span>
                  </motion.div>

                  {/* Main Heading with varied font weights */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.15] tracking-tight drop-shadow-lg break-words"
                  >
                    <span className="font-light">Innovate,</span>{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-extrabold">Automate</span>
                      <span className="absolute bottom-0.5 sm:bottom-1 md:bottom-2 left-0 w-full h-2 sm:h-3 md:h-4 bg-[#99f2c8]/70 -z-0 rounded"></span>
                    </span>
                    <br className="hidden sm:block" />
                    <span className="font-semibold">& Transform</span>
                  </motion.h1>

                  {/* Shortened Subheading with better line spacing */}
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-wide drop-shadow px-2 sm:px-0"
                  >
                    Your Partner in <span className="font-semibold">AI/ML</span>, <span className="font-semibold">Gen AI</span>, <span className="font-semibold">Cloud Solutions</span> & <span className="font-semibold">Data Science</span>
                  </motion.p>

                  {/* CTA Buttons - Larger and more prominent */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const element = document.querySelector('#contact')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-[#1f4037] text-sm sm:text-base lg:text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-2xl cursor-pointer w-full sm:w-auto"
                    >
                      Contact Now
                      <HiArrowRight className="text-base sm:text-lg lg:text-xl group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const element = document.querySelector('#products')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white text-sm sm:text-base lg:text-lg font-semibold rounded-full hover:border-white transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    >
                      View Our Work
                    </motion.button>
                  </motion.div>

                  {/* Stats with Icons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <HiLightningBolt className="text-lg sm:text-xl md:text-2xl text-yellow-300" />
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white block">203+</span>
                        <span className="text-white/80 text-xs sm:text-sm font-medium">Projects</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <HiUsers className="text-lg sm:text-xl md:text-2xl text-green-300" />
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white block">90+</span>
                        <span className="text-white/80 text-xs sm:text-sm font-medium">Happy Clients</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <HiClock className="text-lg sm:text-xl md:text-2xl text-blue-300" />
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white block">4+</span>
                        <span className="text-white/80 text-xs sm:text-sm font-medium">Years</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Client Logos Trust Signal - Hidden on very small screens */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="hidden sm:block mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20"
                  >
                    <p className="text-white/80 text-xs sm:text-sm font-medium mb-2 sm:mb-3 lg:mb-4 text-center lg:text-left">Trusted by leading institutions</p>
                    <div className="relative overflow-hidden">
                      <style>
                        {`
                          @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                          }
                          .scroll-container {
                            animation: scroll 30s linear infinite;
                          }
                          .scroll-container:hover {
                            animation-play-state: paused;
                          }
                        `}
                      </style>
                      <div className="flex gap-6 scroll-container">
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
                          <div key={index} className="flex-shrink-0">
                            <img
                              src={logo}
                              alt={`Client ${(index % clientLogos.length) + 1}`}
                              className="h-10 sm:h-12 md:h-14 w-auto object-contain hover:scale-110 transition-all duration-300"
                              loading="lazy"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Visual Element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="hidden lg:flex items-center justify-center relative"
                >
                  {/* Decorative AI visualization */}
                  <div className="relative w-full max-w-lg">
                    {/* Main circle */}
                    <div className="w-80 h-80 mx-auto relative">
                      {/* Outer rotating ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-spin" style={{ animationDuration: '20s' }}></div>
                      
                      {/* Inner glow circle */}
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm border border-white/20"></div>
                      
                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl">
                          <HiChartBar className="text-6xl text-white" />
                        </div>
                      </div>

                      {/* Floating elements */}
                      <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                      >
                        <HiDatabase className="text-2xl text-white" />
                      </motion.div>

                      <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                      >
                        <HiSparkles className="text-2xl text-white" />
                      </motion.div>

                      <motion.div 
                        animate={{ x: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/2 -left-4 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                      >
                        <HiLightningBolt className="text-xl text-yellow-300" />
                      </motion.div>

                      <motion.div 
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute top-1/2 -right-4 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                      >
                        <HiCheckCircle className="text-xl text-green-300" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 - Data & Analytics */}
        <div className={`frame frame_2 absolute inset-0 w-full h-full min-h-screen transition-opacity duration-700 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 lg:py-24">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/25 backdrop-blur-md border border-white/40 text-white rounded-full text-sm font-semibold mb-8 shadow-lg"
                  >
                    <span className="flex items-center gap-2 px-3 py-1 bg-white text-indigo-600 rounded-full text-xs font-bold">
                      <HiDatabase className="text-blue-500" />
                      Data
                    </span>
                    <span>AI Quantalytics</span>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] tracking-tight drop-shadow-lg"
                  >
                    <span className="font-light">Transform Data</span>
                    <br className="hidden sm:block" />
                    <span className="font-semibold">Into </span>
                    <span className="relative inline-block">
                      <span className="relative z-10 font-extrabold">Intelligence</span>
                      <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-blue-400/70 -z-0 rounded"></span>
                    </span>
                  </motion.h1>

                  {/* Subheading */}
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-wide drop-shadow"
                  >
                    Advanced <span className="font-semibold">analytics</span>, <span className="font-semibold">machine learning</span> & <span className="font-semibold">BI solutions</span> that drive real results
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const element = document.querySelector('#services')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-indigo-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-2xl cursor-pointer"
                    >
                      Explore Solutions
                      <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const element = document.querySelector('#products')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white text-lg font-semibold rounded-full hover:border-white transition-all duration-300 cursor-pointer"
                    >
                      View Our Work
                    </motion.button>
                  </motion.div>

                  {/* Stats with Icons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center lg:justify-start gap-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <HiDatabase className="text-2xl text-blue-300" />
                      </div>
                      <div>
                        <span className="text-3xl font-bold text-white block">10TB+</span>
                        <span className="text-white/80 text-sm font-medium">Data Processed</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <HiChartBar className="text-2xl text-purple-300" />
                      </div>
                      <div>
                        <span className="text-3xl font-bold text-white block">70+</span>
                        <span className="text-white/80 text-sm font-medium">AI Models</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <HiCheckCircle className="text-2xl text-green-300" />
                      </div>
                      <div>
                        <span className="text-3xl font-bold text-white block">92.7%</span>
                        <span className="text-white/80 text-sm font-medium">Accuracy</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Visual Element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="hidden lg:flex items-center justify-center relative"
                >
                  <div className="relative w-full max-w-lg">
                    <div className="w-80 h-80 mx-auto relative">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-spin" style={{ animationDuration: '25s' }}></div>
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm border border-white/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl">
                          <HiDatabase className="text-6xl text-white" />
                        </div>
                      </div>
                      <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                      >
                        <HiChartBar className="text-2xl text-white" />
                      </motion.div>
                      <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                      >
                        <HiLightningBolt className="text-2xl text-yellow-300" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 - Internship Opportunities */}
        <div className={`frame frame_3 absolute inset-0 w-full h-full min-h-screen transition-opacity duration-700 ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto text-center"
              >
                {/* Badge - More Prominent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/25 backdrop-blur-md border border-white/40 text-white rounded-full text-sm font-semibold mb-8 shadow-lg"
                >
                  <span className="flex items-center gap-2 px-4 py-1.5 bg-white text-orange-600 rounded-full text-xs font-bold animate-pulse">
                    🚀 Hiring
                  </span>
                  <span className="hidden sm:inline font-medium">Internship Opportunities</span>
                  <span className="sm:hidden font-medium">Join Us</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] tracking-tight drop-shadow-lg"
                >
                  <span className="font-light">Looking for</span>
                  <br className="hidden sm:block" />
                  <span className="font-semibold">Industrial </span>
                  <span className="relative inline-block">
                    <span className="relative z-10 font-extrabold">Internships</span>
                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-yellow-400/70 -z-0 rounded"></span>
                  </span>
                  <span className="font-light">?</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide drop-shadow"
                >
                  Pick Your <span className="font-semibold">Course</span> and Shape Your <span className="font-semibold">Future</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#registration')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-orange-600 text-lg font-bold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-2xl cursor-pointer"
                  >
                    Apply Now
                    <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white text-lg font-semibold rounded-full hover:border-white transition-all duration-300 cursor-pointer"
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Internship Benefits with Icons */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto" 
                  data-nosnippet="true"
                >
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <span className="text-3xl font-bold text-white">1000+</span>
                    <span className="text-white/90 text-sm font-medium text-center">Problem Statements</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <HiUsers className="text-3xl text-white" />
                    <span className="text-white/90 text-sm font-medium text-center">Industry Mentorship</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <HiCheckCircle className="text-3xl text-white" />
                    <span className="text-white/90 text-sm font-medium text-center">Onsite Internship</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <HiSparkles className="text-3xl text-white" />
                    <span className="text-white/90 text-sm font-medium text-center">Certificate</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 col-span-2 sm:col-span-1">
                    <HiLightningBolt className="text-3xl text-yellow-300" />
                    <span className="text-white/90 text-sm font-medium text-center">Placement Assistance</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Navigation - Modern Progress Bars */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 px-4">
        <button 
          onClick={() => setCurrentSlide(1)}
          className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${
            currentSlide === 1 ? 'bg-white w-16 sm:w-20' : 'bg-white/40 w-8 sm:w-12 hover:bg-white/60'
          }`}
          aria-label="Go to slide 1"
        />
        <button 
          onClick={() => setCurrentSlide(2)}
          className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${
            currentSlide === 2 ? 'bg-white w-16 sm:w-20' : 'bg-white/40 w-8 sm:w-12 hover:bg-white/60'
          }`}
          aria-label="Go to slide 2"
        />
        <button 
          onClick={() => setCurrentSlide(3)}
          className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${
            currentSlide === 3 ? 'bg-white w-16 sm:w-20' : 'bg-white/40 w-8 sm:w-12 hover:bg-white/60'
          }`}
          aria-label="Go to slide 3"
        />
      </div>

      {/* Left/Right Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1)}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/15 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1)}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/15 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}

export default Hero
