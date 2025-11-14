import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
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
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const templateParams = {
        to_email: 'shanmukhartificialgrass@gmail.com',
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_address: formData.address,
        service_type: formData.service,
        message: `Contact Form Submission\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nService: ${formData.service}`
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)

      setIsSubmitted(true)
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        address: '',
        service: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '1st Street, Sapthagiri Colony, BV Nagar, Mini bypass, Nellore-4',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 9441 655 656',
      link: 'tel:+919441655656'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'shanmukhartificialgrass@gmail.com',
      link: 'mailto:shanmukhartificialgrass@gmail.com'
    }
  ]

  const services = [
    'Artificial Grass',
    'Bird Spikes'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your outdoor space? Contact us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <info.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 cursor-pointer"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors duration-200"
                      placeholder="+91 9441 655 656"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Enter your complete address"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Required Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors duration-200 cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      ✗ Failed to send message. Please try calling us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 cursor-pointer'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Submit
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Side Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    'Free site visit and consultation',
                    'Transparent pricing with no hidden costs',
                    'Professional installation team',
                    'High-quality materials with warranty',
                    '24/7 customer support',
                    'Post-installation maintenance'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Service */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Service</h3>
                <p className="text-gray-700 mb-4">
                  Need immediate assistance? We offer emergency services for urgent requirements.
                </p>
                <a 
                  href="tel:+919441655656"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 9441 655 656
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does installation take?',
                answer: 'Installation time varies by project size. Typically, residential installations take 1-2 days, while commercial projects may take longer.'
              },
              {
                question: 'Do you provide warranty?',
                answer: 'Yes, we provide comprehensive warranty on both materials and installation. Artificial grass comes with up to 10 years warranty.'
              },
              {
                question: 'Is artificial grass safe for pets and children?',
                answer: 'Absolutely! Our artificial grass is non-toxic, safe for children and pets, and easy to clean and maintain.'
              },
              {
                question: 'How do I maintain artificial grass?',
                answer: 'Artificial grass requires minimal maintenance - occasional brushing, rinsing, and removing debris. We provide detailed care instructions.'
              },
              {
                question: 'Do you offer free estimates?',
                answer: 'Yes, we provide free site visits and detailed estimates for all our services. No obligation to proceed.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact