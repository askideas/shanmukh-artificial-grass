import React, { useState } from 'react'
import { X, Phone, User, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const templateParams = {
        to_email: 'shanmukhartificialgrass@gmail.com',
        from_name: formData.name,
        customer_name: formData.name,
        customer_mobile: formData.mobile,
        message: `New quote request from ${formData.name}\nMobile: ${formData.mobile}`
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)

      setSubmitStatus('success')
      setFormData({ name: '', mobile: '' })
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 2000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Request a Quote</h2>
              <p className="text-green-100 text-sm">We'll get back to you shortly</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Mobile Field */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
              Mobile Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="10-digit mobile number"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Please enter a valid 10-digit mobile number</p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              ✓ Quote request sent successfully! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              ✗ Failed to send request. Please try again or call us directly.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 hover:shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Submit Request'
            )}
          </button>

          {/* Contact Info */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Or call us directly at:</p>
            <a
              href="tel:+919441655656"
              className="text-green-600 font-semibold text-lg hover:text-green-700 transition-colors"
            >
              +91 9441 655 656
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuoteModal
