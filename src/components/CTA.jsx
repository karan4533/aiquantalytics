import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#1f4037] to-[#99f2c8] relative overflow-hidden">

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4 drop-shadow-lg">
            Let's Bring Your Vision to Life!
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 drop-shadow">
            Ready to transform your ideas into reality? Reach out and let's make it happen.
          </p>

          <div className="flex justify-center px-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-dark-900 font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 shadow-xl cursor-pointer text-sm sm:text-base"
            >
              Contact Now
              <HiArrowRight className="text-lg sm:text-xl" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
