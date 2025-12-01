import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiChevronDown } from 'react-icons/hi'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What sets AIQuantalytics apart from other service providers?',
      answer: 'AIQ stands out due to our holistic approach to technology solutions, our commitment to innovation, and our customer-centric philosophy. We blend deep industry knowledge with cutting-edge technology expertise, delivering solutions that are not only tailored to our clients\' needs but also future-proof.'
    },
    {
      question: 'How does AIQuantalytics foster innovation and stay ahead of industry trends?',
      answer: 'Innovation is at the core of our company culture. We invest heavily in research and development, constantly exploring new technologies and methodologies. Our team regularly participates in industry conferences, training, and certification programs to stay ahead of the curve.'
    },
    {
      question: 'What is AIQuantalytics\'s commitment to sustainability and social responsibility?',
      answer: 'We are deeply committed to sustainability and social responsibility. Our initiatives include reducing our carbon footprint through green IT practices, supporting local communities through various outreach programs, and promoting diversity and inclusion within our workforce.'
    },
    {
      question: 'How do AIQuantalytics ensure customer satisfaction and long-term partnerships?',
      answer: 'Customer satisfaction is our top priority, and we achieve it through a client-centric approach, transparent communication, and continuous improvement. We start by thoroughly understanding our clients\' needs and goals, followed by delivering customized solutions with measurable outcomes.'
    },
    {
      question: 'What opportunities do AIQuantalytics offer for career growth?',
      answer: 'AIQ offers a dynamic and supportive environment for career growth and professional development. Our employees have access to continuous learning opportunities, including training programs, certifications, and mentorship.'
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
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
            FAQ
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-4 sm:mb-6 px-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base sm:text-lg text-dark-600 px-4">
            Everything you need to know about our services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glow-card bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-dark-900 pr-4 sm:pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <HiChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-dark-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-dark-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
