import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLightningBolt, HiCode, HiCloud, HiShieldCheck, HiChip, HiAcademicCap } from 'react-icons/hi'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: HiLightningBolt,
      title: 'Technology Consulting & IT Services',
      description: 'Expert guidance and comprehensive IT services to harness the power of technology. From strategic planning to system integration and IT support.',
    },
    {
      icon: HiCode,
      title: 'Product & Software Development',
      description: 'Transform innovative ideas into cutting-edge products. From mobile apps to complex enterprise systems and digital products.',
    },
    {
      icon: HiCloud,
      title: 'Cloud Solutions & Services',
      description: 'Cloud architecture design, migration, deployment across AWS, Azure, and Google Cloud with seamless integration and optimized performance.',
    },
    {
      icon: HiShieldCheck,
      title: 'Cybersecurity & Digital Transformation',
      description: 'Safeguarding digital assets while revolutionizing business processes with advanced security protocols and threat mitigation.',
    },
    {
      icon: HiChip,
      title: 'AI & Business Intelligence',
      description: 'Custom chatbots, generative AI, LLMs, data science solutions, and intelligent automation systems for business optimization.',
    },
    {
      icon: HiAcademicCap,
      title: 'Corporate Training & Development',
      description: 'Top-notch corporate training across all technology domains. Over 50 programs completed with 22 university partnerships.',
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
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
            Our Services
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-4 sm:mb-6 px-4">
            Everything you need to succeed
          </h2>
          
          <p className="text-base sm:text-lg text-dark-600 px-4">
            From IT consulting and product development to AI-driven solutions and cloud innovations. Our expertise turns your tech dreams into reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#99f2c8]"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#1f4037] to-[#99f2c8] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-dark-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center bg-gradient-to-r from-[#1f4037] to-[#99f2c8] bg-clip-text text-transparent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Learn more</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ stroke: '#1f4037' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
