import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Advisory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const advisors = [
    {
      name: 'Mr. Rajesh PK',
      role: 'Head - COE (Data)',
      company: 'HP Enterprise, Bangalore',
      image: '/images/rajesh.png'
    },
    {
      name: 'Dr. Mohanraj V',
      role: 'Senior Manager - AIML',
      company: 'Standard Chartered GBS, Chennai',
      image: '/images/mohan.jpeg'
    },
    {
      name: 'Mr. Sarveshwaran R',
      role: 'Manager - Data Science & GenAI',
      company: 'LTIMindtree, Chennai',
      image: '/images/sarveshwaran.jpg'
    },
    {
      name: 'Dr. Partha Pratim Roy',
      role: 'Associate Professor - CSE Dept',
      company: 'IIT, Roorkee',
      image: '/images/partha.png'
    },
    {
      name: 'Dr. Meenalosini V Cruz',
      role: 'Assistant Professor Sr',
      company: 'Georgia Southern University, USA',
      image: '/images/meenalosini.jpeg'
    },
    {
      name: 'Dr. Sumathi A C',
      role: 'Project Manager',
      company: 'Aditya Birla Capital, Chennai',
      image: '/images/sumathi.png'
    },
  ]

  const teamMembers = [
    { name: 'Mr. S Nandhagopal', role: 'Business Manager - India', image: '/images/nandhagopal.png' },
    { name: 'Ms. Ashwini R', role: 'Marketing Executive - Global', image: '/images/ashwini.jpeg' },
    { name: 'Mr. R Sai Sharath', role: 'Business Executive - Global', image: '/images/sai.png' },
    { name: 'Dr. Rathinaraja Jeyaraj', role: 'AI & Big Data Analytics Expert', image: '/images/rathinaraja.png' },
    { name: 'Dr. Sibi Chakkravarthy', role: 'Cybersecurity & Hacking Expert', image: '/images/sibi.png' },
    { name: 'Mr. Rajesh Kumar G', role: 'Data Structures & Algo Expert', image: '/images/rajeshk.jpeg' },
    { name: 'Dr. Kothai G', role: 'AIML & Deep Learning Expert', image: '/images/kothai.png' },
    { name: 'Mr. Raja Ravi', role: 'Full Stack Engineering Expert', image: '/images/raja.jpg' },
    { name: 'Dr. Arunkumar Gopu', role: 'Cloud Computing Expert', image: '/images/arun.jpeg' },
    { name: 'Mr. Pandiyarajan G', role: 'Python Expert', image: '/images/pandiyarajan.png' },
    { name: 'Mr. Ranil Mukesh', role: 'GenAI Expert', image: '/images/ranil.jpg' },
    { name: 'Mr. Prabhu G', role: 'Core AIML Expert', image: '/images/prabhu.jpg' },
  ]

  const CarouselCard = ({ member }) => (
    <div className="glow-card bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#99f2c8] transition-all h-full">
      <div className="flex flex-col md:flex-row items-center p-6 gap-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-[#99f2c8]/30"
        />
        <div className="text-center md:text-left flex-1">
          <h3 className="text-lg font-bold text-dark-900">{member.name}</h3>
          <p className="text-sm bg-gradient-to-r from-[#1f4037] to-[#99f2c8] bg-clip-text text-transparent font-medium mt-1">{member.role}</p>
          {member.company && <p className="text-xs text-dark-600 mt-1">{member.company}</p>}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Advisory Committee */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-sm font-semibold rounded-full mb-6">
            Advisory Board
          </div>
            
            <h2 className="text-display font-display text-dark-900 mb-6">
              Meet Our Advisory Committee
            </h2>
            
            <p className="text-lg text-dark-600">
              Esteemed advisors bringing unparalleled expertise and insights
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {advisors.map((advisor, index) => (
              <SwiperSlide key={index}>
                <CarouselCard member={advisor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-white text-sm font-semibold rounded-full mb-6">
            Our Experts
          </div>
            
            <h2 className="text-display font-display text-dark-900 mb-6">
              Meet Our Team
            </h2>
            
            <p className="text-lg text-dark-600">
              Industry experts driving innovative solutions
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <CarouselCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Advisory
