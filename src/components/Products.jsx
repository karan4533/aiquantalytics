import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiFingerPrint, HiViewGrid, HiCube, HiChatAlt2 } from 'react-icons/hi'

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const products = [
    {
      icon: HiFingerPrint,
      title: 'Facial Biometric Attendance',
      description: 'Effortless, secure, and incredibly efficient attendance management solution.',
      color: 'from-[#1f4037] to-[#99f2c8]'
    },
    {
      icon: HiViewGrid,
      title: 'Ziffy Cloud',
      description: 'Project management software for agile teams that turns chaos into clarity.',
      color: 'from-[#99f2c8] to-[#1f4037]'
    },
    {
      icon: HiCube,
      title: 'Vendor & Asset Management',
      description: 'Track and optimize all your assets and vendor relationships in one platform.',
      color: 'from-[#1f4037] to-[#99f2c8]'
    },
    {
      icon: HiChatAlt2,
      title: 'ChatGenius AI',
      description: 'Experience intelligent, human-like conversations with our AI chatbot.',
      color: 'from-[#99f2c8] to-[#1f4037]'
    },
  ]

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Our Products
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-4 sm:mb-6 px-4">
            Game-changing products for your business
          </h2>
          
          <p className="text-base sm:text-lg text-dark-600 px-4">
            Innovative solutions designed to elevate your business to new heights
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card group relative bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-dark-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Link */}
                <div className="flex items-center bg-gradient-to-r from-[#1f4037] to-[#99f2c8] bg-clip-text text-transparent font-medium group-hover:opacity-100 transition-opacity">
                  <span>Explore product</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ stroke: '#1f4037' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
