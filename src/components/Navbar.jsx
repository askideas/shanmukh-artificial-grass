import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf, Shield } from 'lucide-react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '#',
      submenu: [
        { name: 'Artificial Grass', href: '/artificial-grass', icon: Leaf },
        { name: 'Bird Spikes', href: '/bird-spikes', icon: Shield }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 h-[90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100%]">
        <div className="flex justify-between h-[100%]">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={Logo} alt="" className='w-[200px]' />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                      {item.name}
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer"
                        >
                          <subitem.icon className="h-4 w-4 mr-3" />
                          {subitem.name}
                        </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      isActive(item.href)
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200 cursor-pointer"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide-in Drawer */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Slide-in Menu */}
          <div 
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transition-transform duration-300 ease-in-out"
            style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Leaf className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-bold text-lg text-gray-900">Menu</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-green-600 focus:outline-none cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="overflow-y-auto h-[calc(100%-80px)] p-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="mb-2">
                        <div className="text-gray-700 px-3 py-3 text-base font-semibold border-b border-gray-100">
                          {item.name}
                        </div>
                        <div className="pl-4 mt-2 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              className="flex items-center text-gray-600 px-3 py-3 text-sm hover:text-green-600 hover:bg-green-50 rounded-md cursor-pointer transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              <subitem.icon className="h-5 w-5 mr-3" />
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-3 py-3 text-base font-medium rounded-md cursor-pointer transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'text-green-600 bg-green-50'
                            : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Get Quote Button */}
                <Link
                  to="/contact"
                  className="block bg-green-600 text-white px-4 py-3 rounded-lg text-base font-semibold hover:bg-green-700 mt-6 cursor-pointer transition-colors duration-200 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar