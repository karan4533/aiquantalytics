import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { target: 11500, label: 'Working Hours', suffix: '+' },
    { target: 203, label: 'Projects Completed', suffix: '+' },
    { target: 75, label: 'Happy Clients', suffix: '+' },
    { target: 15, label: 'Awards Received', suffix: '+' },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const increment = stat.target / 100
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            current = stat.target
            clearInterval(timer)
          }
          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(current)
            return newCounts
          })
        }, 20)
      })
    }
  }, [inView])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
