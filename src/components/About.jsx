import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckCircle } from 'react-icons/hi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    'Blending latest technology with visionary strategies',
    'Ensemble capable of doing anything and everything',
    'Technology meets creativity and innovation',
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1f4037] to-[#99f2c8] p-12">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">Our Mission</h3>
                  <p className="text-dark-600">Driving innovation through technology excellence</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white px-6 py-4 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm opacity-90">Academic Partners</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-sm font-semibold rounded-full mb-6">
              About Us
            </div>

            <h2 className="text-display font-display text-dark-900 mb-6">
              We're not just a tech company – we're your innovation partner since 2018!
            </h2>

            <p className="text-lg text-dark-600 mb-8 leading-relaxed">
              Specializing in blending latest technology with visionary strategies to drive your success, <span className="font-bold text-dark-900">all. the. time.</span>
            </p>

            <p className="text-dark-600 mb-8 leading-relaxed">
              With our skills put together, you get an ensemble capable of doing anything and everything you need. Join us on a journey where technology meets creativity and innovation fuels growth.
            </p>

            {/* Values List */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="text-[#99f2c8] text-2xl flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">{value}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.querySelector('#team')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white font-semibold rounded-full hover:shadow-xl transition-all shadow-lg cursor-pointer"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
