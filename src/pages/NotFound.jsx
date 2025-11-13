import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Phone, Mail } from 'lucide-react'

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Artificial Grass', path: '/artificial-grass', icon: Search },
    { name: 'Bird Spikes', path: '/bird-spikes', icon: Search },
    { name: 'About Us', path: '/about', icon: Search },
    { name: 'Contact Us', path: '/contact', icon: Phone }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[200px] font-bold text-green-600 opacity-20 select-none">
              404
            </h1>
            <div className="-mt-20 md:-mt-32">
              <div className="inline-block animate-bounce">
                <svg 
                  className="h-24 w-24 md:h-32 md:w-32 text-green-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have grown away like grass in the wind. 
            Don't worry, we'll help you get back on track!
          </p>

          {/* Search Suggestions */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Perhaps you were looking for:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center justify-center gap-3 bg-gray-50 hover:bg-green-50 border-2 border-gray-200 hover:border-green-500 rounded-xl p-4 transition-all duration-200 cursor-pointer group"
                >
                  <link.icon className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
                  <span className="font-medium text-gray-700 group-hover:text-green-600">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Still Need Help?
          </h3>
          <p className="text-green-100 mb-6">
            Our team is here to assist you with any questions about artificial grass or bird spike solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919441655656"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 cursor-pointer"
            >
              <Phone className="mr-2 h-5 w-5" />
              +91 9441 655 656
            </a>
            
            <a
              href="mailto:shanmukhartificialgrass@gmail.com"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 cursor-pointer"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            💡 Fun Fact: While you're here, did you know our artificial grass requires 99% less maintenance than natural grass?
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
