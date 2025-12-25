import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e, scrollTo) => {
    e.preventDefault()
    if (scrollTo === 'home') {
      scrollToTop()
    } else {
      const element = document.querySelector(`#${scrollTo}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const footerLinks = {
    company: [
      { name: 'Home', path: '/', scrollTo: 'home' },
      { name: 'About', path: '/', scrollTo: 'about' },
      { name: 'Services', path: '/', scrollTo: 'services' },
      { name: 'Advisory Board', path: '/', scrollTo: 'advisory' },
    ],
    resources: [
      { name: 'Products', path: '/', scrollTo: 'products' },
      { name: 'Admission', path: '/', scrollTo: 'registration' },
      { name: 'Contact', path: '/', scrollTo: 'contact' },
      { name: 'FAQ', path: '/', scrollTo: 'faq' },
    ],
  }

  return (
    <footer className="bg-dark-900 text-white relative">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/images/logo.png" 
              alt="AIQuantalytics" 
              className="h-20 w-auto mb-6 brightness-0 invert"
              style={{ 
                maxWidth: '220px',
                filter: 'brightness(0) invert(1) contrast(1.2)',
                imageRendering: 'crisp-edges'
              }}
            />
            <p className="text-gray-400 mb-6 max-w-md">
              We're not just a tech company – we're your innovation partner. Specializing in blending latest technology with visionary strategies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/aiquantalytics/"
                target="_blank"
                rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 hover:bg-gradient-to-r hover:from-[#1f4037] hover:to-[#99f2c8] rounded-full flex items-center justify-center transition-all"
              >
                <FaLinkedin size={18} />
              </a>
        
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.scrollTo}`}
                    onClick={(e) => handleNavClick(e, link.scrollTo)}
                    className="text-gray-400 hover:text-[#99f2c8] transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.scrollTo}`}
                    onClick={(e) => handleNavClick(e, link.scrollTo)}
                    className="text-gray-400 hover:text-[#99f2c8] transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info + Video */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-dark-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Address Section */}
            <div className="space-y-4 sm:space-y-5">
              <h5 className="font-semibold text-base sm:text-lg text-white mb-4 sm:mb-5">Office Address</h5>
              <div className="space-y-4 sm:space-y-5">
                <a 
                  href="https://maps.app.goo.gl/q4bwzBpt3uskoTNU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-400 hover:text-[#99f2c8] transition-colors block leading-relaxed"
                >
                  AIQuantalytics<br />
                  78B Lakshmi Puram, 6th Street<br />
                  Masakalipalayam Road, Hopes College<br />
                  Peelamedu, 641004, Coimbatore, India
                </a>
                
                <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
                  <p className="text-sm sm:text-base text-gray-400">
                    Phone: <a href="tel:+917010737331" className="hover:text-[#99f2c8] transition-colors text-white">+91-7010737331</a>
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">
                    Email: <a href="mailto:hr@aiquantalytics.in" className="hover:text-[#99f2c8] transition-colors text-white break-all">hr@aiquantalytics.in</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Office Video Section */}
            <div className="space-y-4 sm:space-y-5">
              <h5 className="font-semibold text-base sm:text-lg text-white mb-4 sm:mb-5">Office Video</h5>
              <div className="aspect-video rounded-xl overflow-hidden border border-dark-800/60 bg-black shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/BYx63PKKPvg?si=9XpSHESwkrHCo7Sg"
                  title="Office video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
            <p>© 2025 AIQuantalytics. All rights reserved.</p>
              <p className="text-xs mt-1">
                Designed & Developed by <a href="https://github.com/karan4533" target="_blank" rel="noopener noreferrer" className="text-[#99f2c8] hover:text-white transition-colors">Karan</a>
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#99f2c8] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#99f2c8] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#1f4037] to-[#99f2c8] hover:shadow-xl text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <HiArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer
