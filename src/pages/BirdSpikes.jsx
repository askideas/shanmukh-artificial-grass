import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuoteModal from '../components/QuoteModal'
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail,
  MapPin,
  Download,
  Star,
  Clock,
  Heart,
  Award,
  Zap,
  Home,
  Building,
  Factory,
  ChevronRight
} from 'lucide-react'

const BirdSpikes = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const productTypes = [
    {
      model: 'C1001',
      name: 'Polycarbonate Bird Spikes',
      material: 'UV-stabilized virgin polycarbonate',
      appearance: 'Transparent / virtually invisible on surfaces',
      durability: 'Weather resistant, UV stabilized and maintenance free',
      design: 'Flexible base with glue channels for strong adhesion on uneven surfaces',
      installation: 'Glue, screws, nails or cable ties — quick and neat',
      use: 'Ideal for windowsills, parapets, signboards, beams and ledges where aesthetics matter',
      benefits: ['Humane', 'Unobtrusive', 'Long lasting', 'Non-corroding'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/BS3.jpg?updatedAt=1763089726770',
      color: 'blue'
    },
    {
      model: 'C1002',
      name: 'Stainless Steel Bird Spikes',
      material: 'Stainless steel (robust and corrosion resistant)',
      appearance: 'Metallic profile — strong deterrent for larger birds',
      durability: 'Built for heavy duty, exposed, industrial environments',
      design: 'Industrial-grade construction for maximum effectiveness',
      installation: 'Screws or adhesive as appropriate (suitable for industrial & commercial use)',
      use: 'Rooftops, warehouses, chimneys, pipelines, and heavy-use outdoor structures',
      benefits: ['Robust', 'Vandal-resistant', 'Heavy-duty', 'Industrial grade'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/BS2.webp?updatedAt=1763089628087',
      color: 'green'
    }
  ]

  const specifications = [
    { label: 'Spike Diameter', value: '1.5 mm' },
    { label: 'Spike Length', value: '32.5 cm' },
    { label: 'Base Type', value: 'Flexible with glue channels' },
    { label: 'Coverage', value: 'Modular strips for long ledges' }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Humane Bird Deterrent',
      description: 'Prevents landing — does not injure birds'
    },
    {
      icon: Clock,
      title: 'Low Maintenance',
      description: 'Long service life with minimal upkeep required'
    },
    {
      icon: Shield,
      title: 'Weather Resistant',
      description: 'UV and weather resistant (polycarbonate variety)'
    },
    {
      icon: Award,
      title: 'Corrosion Resistant',
      description: 'Tough and corrosion resistant (stainless steel variety)'
    },
    {
      icon: Zap,
      title: 'Improves Hygiene',
      description: 'Reduces cleaning/repair costs from bird droppings'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Installation',
      description: 'Easy installation on curved and uneven surfaces'
    }
  ]

  const applications = [
    'Windowsills & ledges',
    'Parapets, rooftops, eaves & tiles',
    'Signboards & billboards',
    'Pipes, chimneys & ducts',
    'Balconies, awnings & beams',
    'Warehouses, showrooms & factories'
  ]

  const installationMethods = [
    {
      title: 'Adhesive/Glue',
      description: 'Use silicone or structural adhesive into the glue channel on the base.',
      icon: '🔗'
    },
    {
      title: 'Mechanical Fixings',
      description: 'Screws or nails for permanent installations (recommended on hard surfaces).',
      icon: '🔩'
    },
    {
      title: 'Cable Ties',
      description: 'For round pipes or railings where fastening through base is needed.',
      icon: '🔒'
    }
  ]

  const relatedProducts = [
    { name: 'Artificial Grass', icon: Home },
    { name: 'Bird Spikes', icon: Shield },
  ]

  const faqs = [
    {
      question: 'Will these spikes hurt birds?',
      answer: 'No — Shanmukh spikes deter birds from landing but are designed not to injure.'
    },
    {
      question: 'Which type is best for my building?',
      answer: 'Use polycarbonate for near-visible residential/commercial locations (it\'s transparent). Use stainless steel for industrial, high-exposure or vandal-prone areas.'
    },
    {
      question: 'How long do they last?',
      answer: 'Polycarbonate is UV stabilized for long-term outdoor use; stainless steel is corrosion resistant. Lifespan depends on exposure and installation quality.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-10 w-10 text-blue-600 mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Shanmukh – Bird Spikes
              </h1>
            </div>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
              One-stop solution for Bird Proofing
            </p>
            <div className="flex items-center justify-center gap-4 text-lg text-blue-600 font-semibold mb-8">
              <span className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Durable
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Humane
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Maintenance-Free
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                <Download className="mr-2 h-5 w-5" />
                Product Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-8 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-white font-medium">
            100% Polycarbonate & Stainless Steel Bird Spikes — invisible protection that keeps birds away without harm.
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Product Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Shanmukh Bird Spikes are engineered bird-deterrent systems designed to prevent birds from perching and nesting on ledges, sills, beams, signboards and other vulnerable surfaces. Available in polycarbonate and stainless steel variants, our spikes are effective, long-lasting and easy to install.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Choose Your Bird Spike Solution
            </h2>
            <p className="text-lg text-gray-600">
              Two premium options designed for different applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productTypes.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-[450px]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 bg-${product.color}-600 text-white px-4 py-2 rounded-full font-semibold text-sm`}>
                    Model {product.model}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="font-semibold text-gray-700">Material:</span>
                      <p className="text-gray-600">{product.material}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Appearance:</span>
                      <p className="text-gray-600">{product.appearance}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Durability:</span>
                      <p className="text-gray-600">{product.durability}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Installation:</span>
                      <p className="text-gray-600">{product.installation}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Best Use:</span>
                      <p className="text-gray-600">{product.use}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, idx) => (
                        <span key={idx} className={`bg-${product.color}-100 text-${product.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Features & Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 transition-colors duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{spec.value}</div>
                <div className="text-gray-700 font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Choose Shanmukh Bird Spikes?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Typical Application Areas
              </h2>
              <div className="space-y-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://ik.imagekit.io/wlo5q0w8i/Images/BS3.jpg?updatedAt=1763089726770"
                alt="Building applications"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Methods */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Installation Methods
            </h2>
            <p className="text-lg text-gray-600">
              Multiple installation options for different surfaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {installationMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">💡 Installation Tip:</span> Our flexible base allows a snug fit around curved edges. Use continuous strips to fully cover the ledge and prevent gaps.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose PROTECH */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Why Choose Shanmukh Bird Spikes?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Proven materials (UV stabilized polycarbonate and stainless steel)',
              'Invisible protection option for aesthetic sites',
              'Wide applicability — residential to industrial',
              'Manufactured for weather durability and long life'
            ].map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
                <div className="flex items-start">
                  <Star className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-sm">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Related Products & Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <product.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="font-semibold text-gray-900">{product.name}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Factory & Warehouse</h3>
              <p className="text-gray-600 text-sm">
                1st Street, Sapthagiri Colony,<br />
                BV Nagar, Mini Bypass<br />
                Nellore – 4
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+917798320616" className="hover:text-blue-600 cursor-pointer">+91 9441 655 656</a><br />
                {/* <a href="tel:+919773320616" className="hover:text-blue-600 cursor-pointer">+91 97733 20616</a> */}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:info@ebmpindia.com" className="hover:text-blue-600 cursor-pointer">shanmukhartificialgrass@gmail.com</a><br />
                {/* <a href="mailto:ebmpindia@gmail.com" className="hover:text-blue-600 cursor-pointer">ebmpindia@gmail.com</a> */}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Website: <a href="https://www.ebmpindia.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer">www.ebmpindia.com</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
              >
                Book an Installation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <span className="text-blue-600 mr-2">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 pl-6">
                  <span className="text-blue-600 font-semibold mr-2">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}

export default BirdSpikes