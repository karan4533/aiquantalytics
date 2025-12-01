import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    '/images/intellibi.png',
    '/images/fusionapps.png',
    '/images/dex.jpeg',
    '/images/cit.png',
    '/images/easwari.png',
    '/images/gsu.png',
    '/images/kec.jpeg',
    '/images/kite.png',
    '/images/kle.png',
    '/images/kpriet.jpg',
    '/images/mgr.png',
    '/images/mosaique.jpg',
    '/images/mukham.jpeg',
    '/images/ramakrishna.png',
    '/images/rec.png',
    '/images/rmkcet.png',
    '/images/sathyabama.jpeg',
    '/images/sns.webp',
    '/images/srm.png',
    '/images/vit.png',
    '/images/vitap.png',
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-sm font-semibold rounded-full mb-6">
            Trusted By
          </div>
          
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
            Our Clients
          </h2>
          
          <p className="text-dark-600">
            We don't just build software, we build your business
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center py-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Clients
