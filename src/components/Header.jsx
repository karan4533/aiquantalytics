import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showCyberTech, setShowCyberTech] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowCyberTech(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Services', path: '/', hash: '#services' },
    { name: 'Products', path: '/', hash: '#products' },
    { name: 'Team', path: '/', hash: '#team' },
    { name: 'Careers', path: '/careers', hash: '' },
    { name: 'Contact', path: '/', hash: '#contact' },
    { name: 'FAQ', path: '/', hash: '#faq' },
  ]

  const cyberTechServices = [
    { name: 'About', path: '#' },
    { name: 'Security Assessment Service', path: '#' },
    { name: 'Compliance And Consulting Service', path: '#' },
    { name: 'Specialized Services', path: '#' },
    { name: 'Incident Response', path: '#' },
    { name: 'Security Operations', path: '#' },
    { name: 'Security Solutions', path: '#' },
  ]

  const handleNavClick = (hash) => {
    if (hash && location.pathname === '/') {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2">
            <img 
              src="/images/logo.png" 
              alt="AIQuantalytics" 
              className="h-14 sm:h-16 md:h-20 w-auto"
              style={{ 
                maxWidth: '200px',
                filter: 'brightness(0.6) contrast(1.4) saturate(1.2)'
              }}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <ul className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.name}>
                {link.path === '/careers' ? (
                  <Link
                    to={link.path}
                    className="text-[15px] text-gray-700 hover:text-[#1f4037] transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    to={link.path + link.hash}
                    onClick={() => handleNavClick(link.hash)}
                    className="text-[15px] text-gray-700 hover:text-[#1f4037] transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            
            {/* CyberTech Services Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setShowCyberTech(true)}
              onMouseLeave={() => setShowCyberTech(false)}
            >
              <button className="text-[15px] text-gray-700 hover:text-[#1f4037] transition-colors flex items-center gap-1">
                CyberTech Services
                <HiChevronDown className="text-sm" />
              </button>
              
              <AnimatePresence>
                {showCyberTech && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {cyberTechServices.map((service, index) => (
                      <a
                        key={index}
                        href={service.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#1f4037]/10 hover:to-[#99f2c8]/10 hover:text-[#1f4037] transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.slice(3).map((link) => (
              <li key={link.name}>
                {link.path === '/careers' ? (
                  <Link
                    to={link.path}
                    className="text-[15px] text-gray-700 hover:text-[#1f4037] transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    to={link.path + link.hash}
                    onClick={() => handleNavClick(link.hash)}
                    className="text-[15px] text-gray-700 hover:text-[#1f4037] transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-dark-900 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
            >
              <div className="py-6 space-y-4">
                {navLinks.slice(0, 3).map((link) => (
                  <div key={link.name}>
                    {link.path === '/careers' ? (
                      <Link
                        to={link.path}
                        className="block text-[15px] text-gray-700 hover:text-dark-900 transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        to={link.path + link.hash}
                        onClick={() => handleNavClick(link.hash)}
                        className="block text-[15px] text-gray-700 hover:text-dark-900 transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CyberTech Services */}
                <div>
                  <button
                    onClick={() => setShowCyberTech(!showCyberTech)}
                    className="flex items-center justify-between w-full text-[15px] text-gray-700 hover:text-dark-900 transition-colors py-2"
                  >
                    CyberTech Services
                    <HiChevronDown className={`text-sm transition-transform ${showCyberTech ? 'rotate-180' : ''}`} />
                  </button>
                  {showCyberTech && (
                    <div className="pl-4 mt-2 space-y-2 bg-gray-50 py-2 rounded-lg">
                      {cyberTechServices.map((service, index) => (
                        <a
                          key={index}
                          href={service.path}
                          className="block text-sm text-gray-600 hover:text-dark-900 py-1"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.slice(3).map((link) => (
                  <div key={link.name}>
                    {link.path === '/careers' ? (
                      <Link
                        to={link.path}
                        className="block text-[15px] text-gray-700 hover:text-dark-900 transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        to={link.path + link.hash}
                        onClick={() => handleNavClick(link.hash)}
                        className="block text-[15px] text-gray-700 hover:text-dark-900 transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
