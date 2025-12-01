import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Products from '../components/Products'
import CTA from '../components/CTA'
import Team from '../components/Team'
import Advisory from '../components/Advisory'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Products />
      <CTA />
      <Team />
      <Advisory />
      <Clients />
      <Contact />
      <FAQ />
    </div>
  )
}

export default HomePage

