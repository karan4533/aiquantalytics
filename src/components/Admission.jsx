import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiArrowRight, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Admission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const courses = [
    'Python for Beginners',
    'Artificial Intelligence',
    'AI & Machine Learning',
    'Generative AI and LLM',
    'Agentic AI',
    'Google Cloud (GCP)',
    'AWS Cloud',
    'Microsoft Azure Cloud',
    'Data Analytics',
    'Digital Marketing',
    'Data Engineering',
    'DevOps/MLOps',
    'Full Stack Development',
    'Mobile App Development',
    'C/C++ Java Programming',
  ]

  const contactInfo = {
    phone: '7010737331',
    emails: ['hr@aiquantalytics.in', 'aiquantalytics@gmail.com'],
    location: 'Hopes, Coimbatore',
  }

  // Google Form URL for course registration
  const googleFormUrl = 'https://forms.gle/SHw6nhoP8AFoUWeWA'

  return (
    <section id="admission" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            🎓 Launching New Courses
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-4 sm:mb-6 px-4">
            AIQuantalytics Learning
          </h2>
          
          <p className="text-base sm:text-lg text-dark-600 px-4">
            Join our world-class training programs and kickstart your career in technology. Expert-led courses designed to transform your skills!
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">Available Industry Internship & Courses</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="glow-card group bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#99f2c8] flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#1f4037] to-[#99f2c8] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-all">
                  <HiAcademicCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-dark-900 font-medium text-sm">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-dark-900 mb-6 text-center">Point of Contact</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1f4037] to-[#99f2c8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-900 mb-1">Phone</div>
                  <a href={`tel:+91${contactInfo.phone}`} className="text-dark-600 hover:text-[#1f4037] transition-colors text-sm">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1f4037] to-[#99f2c8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-900 mb-1">Email</div>
                  <div className="space-y-1">
                    {contactInfo.emails.map((email, idx) => (
                      <a 
                        key={idx}
                        href={`mailto:${email}`} 
                        className="block text-dark-600 hover:text-[#1f4037] transition-colors text-xs sm:text-sm"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1f4037] to-[#99f2c8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark-900 mb-1">Location</div>
                  <div className="text-dark-600 text-sm">{contactInfo.location}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto bg-gradient-to-br from-[#1f4037] to-[#99f2c8] rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h3>
          
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Register now for our expert-led courses and take the first step towards a successful career in technology!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-white text-dark-900 text-base sm:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl"
            >
              Register Now
              <HiArrowRight className="text-lg sm:text-2xl" />
            </motion.a>

            <motion.a
              href={`tel:+91${contactInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-base font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              <HiPhone className="text-lg" />
              Call: {contactInfo.phone}
            </motion.a>
          </div>

          <p className="text-xs sm:text-sm text-white/80 mt-6">
            ⭐ Limited seats available. Register early to secure your spot!
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
        >
          {[
            { number: '15+', label: 'Courses Available' },
            { number: '22+', label: 'University Partners' },
            { number: '1000+', label: 'Students Trained' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#1f4037] to-[#99f2c8] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-dark-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Admission

