import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  Shield,
  ArrowRight
} from 'lucide-react'
import Logo from '../assets/Logo-w.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Artificial Grass', link: '/artificial-grass' },
    { name: 'Bird Spikes', link: '/bird-spikes' },
  ]

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Our Services', link: '/artificial-grass' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Get Quote', link: '/contact' }
  ]

  const serviceAreas = [
    'Hyderabad', 'Secunderabad', 'Cyberabad', 'Gachibowli', 
    'Hitec City', 'Kondapur', 'Madhapur', 'Kukatpally'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <img src={Logo} alt="" className='w-[200px]' />
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Transform your outdoor spaces with premium artificial grass and effective bird control solutions. 
                Professional installation with years of warranty and exceptional customer service.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-200 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-200 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-200 cursor-pointer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.link}
                      className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm cursor-pointer"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.link}
                      className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <a 
                      href="tel:+919441655656"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm cursor-pointer"
                    >
                      +91 9441 655 656
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <a 
                      href="mailto:shanmukhartificialgrass@gmail.com"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-200 text-sm cursor-pointer"
                    >
                      shanmukhartificialgrass@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    Sapthagiri Colony, BV Nagar, Mini Bypass, Nellore-4
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      {/* <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area, index) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-green-600 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Shanmukh Artificial Grass. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              <Link to="/privacy-policy" className="hover:text-green-500 transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link to="/terms-conditions" className="hover:text-green-500 transition-colors cursor-pointer">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Bar */}
      {/* <div className="bg-red-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-white font-semibold text-sm">
              Emergency Bird Control Service Available 24/7 - 
            </span>
            <a 
              href="tel:+919876543210"
              className="text-white underline hover:text-red-100 transition-colors ml-2 font-semibold cursor-pointer"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer