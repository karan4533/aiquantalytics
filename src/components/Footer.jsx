import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/#about' },
      { name: 'Services', path: '/#services' },
      { name: 'Team', path: '/#team' },
    ],
    resources: [
      { name: 'Products', path: '/#products' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/#contact' },
      { name: 'FAQ', path: '/#faq' },
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
              <a
                href="https://www.instagram.com/aiquantalytics?igsh=eWNiZnY4OHpmZDc2"
                target="_blank"
                rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 hover:bg-gradient-to-r hover:from-[#1f4037] hover:to-[#99f2c8] rounded-full flex items-center justify-center transition-all"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#99f2c8] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#99f2c8] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-dark-800 grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="font-semibold text-sm text-white mb-2">Tamil Nadu Office</h5>
            <p className="text-sm text-gray-400">
              Anna Nagar, Neelambur<br />
              Coimbatore, TN - 641062, India
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-sm text-white mb-2">Karnataka Office</h5>
            <p className="text-sm text-gray-400">
              No.10 A, 7th Cross, Aswath Nagar<br />
              RMV II stage, Bangalore - 560094, India
            </p>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>Phone: <a href="tel:+919791306877" className="hover:text-[#99f2c8] transition-colors">+91-9791306877</a></p>
          <p>Email: <a href="mailto:hr@aiquantalytics.in" className="hover:text-[#99f2c8] transition-colors">hr@aiquantalytics.in</a></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 AIQuantalytics. All rights reserved.</p>
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
