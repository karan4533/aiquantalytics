import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const leadership = [
    {
      name: 'Mrs. G Handini',
      role: 'Chief Executive Officer',
      subtitle: 'Founder',
      image: '/images/handini.png',
      email: 'hr@aiquantalytics.in',
      linkedin: null
    },
    {
      name: 'Mr. Shreyanth S',
      role: 'Chief Technology Officer',
      subtitle: 'Co-Founder',
      image: '/images/shreyanth.png',
      email: 'cto@aiquantalytics.in',
      linkedin: 'https://www.linkedin.com/in/shreyanth07/'
    },
    {
      name: 'Mr. Nishanth J',
      role: 'Chief Operations Officer',
      subtitle: 'Co-Founder',
      image: '/images/nishanth.png',
      email: 'coo@aiquantalytics.in',
      linkedin: 'https://www.linkedin.com/in/nishanth-jayaram-23a04011a/'
    },
    {
      name: 'Mr. Shyam Sundar G',
      role: 'Chief Strategist Officer',
      subtitle: 'Co-Founder',
      image: '/images/shyam.png',
      email: 'cso@aiquantalytics.in',
      linkedin: 'https://www.linkedin.com/in/shyam-sundhar-771a6220a/'
    },
  ]

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Leadership Team
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-4 sm:mb-6 leading-tight px-4">
            Meet our Visionaries
          </h2>
          
          <p className="text-base sm:text-lg text-dark-600 leading-relaxed px-4">
            Experienced leaders driving innovation and excellence
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {leadership.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square bg-gray-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110"
                      title="Email"
                    >
                      <HiMail className="text-xl" />
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#1f4037] hover:to-[#99f2c8] hover:text-white transition-all transform hover:scale-110"
                        title="LinkedIn"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center bg-white">
                <h3 className="text-base sm:text-lg font-bold text-dark-900 mb-1.5 sm:mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#1f4037] to-[#99f2c8] bg-clip-text text-transparent mb-1 sm:mb-1.5 leading-snug">
                  {member.role}
                </p>
                <p className="text-[10px] sm:text-xs text-dark-500 uppercase tracking-widest font-medium">
                  {member.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
