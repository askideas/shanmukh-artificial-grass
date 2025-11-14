import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuoteModal from '../components/QuoteModal'
import { 
  Leaf, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail,
  MapPin,
  Droplets,
  Sun,
  Heart,
  Award,
  Shield,
  Sparkles,
  Home,
  Building,
  Users,
  TreePine
} from 'lucide-react'

const ArtificialGrass = () => {
  const [selectedPile, setSelectedPile] = useState('all')
  const [selectedBacking, setSelectedBacking] = useState('all')
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const grassVariants = [
    {
      name: '25 MM GRASS — Single Layer',
      pileHeight: '25 mm',
      color: '3-tone',
      fiberType: 'Monofilament',
      backing: 'Single layer black latex',
      backingType: 'single',
      sizes: ['2 ft × 25 m', '4 ft × 25 m', '1 m × 25 m', '2 m × 25 m'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/25mm%20AG.webp?updatedAt=1763088898293',
      recommended: 'Decorative & light-use areas'
    },
    {
      name: '25 MM GRASS — Double Layer',
      pileHeight: '25 mm',
      color: '3-tone',
      fiberType: 'Monofilament',
      backing: 'Double layer black latex',
      backingType: 'double',
      sizes: ['2 ft × 25 m', '4 ft × 25 m', '1 m × 25 m', '2 m × 25 m'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/25mm%20AG.webp?updatedAt=1763088898293',
      recommended: 'Residential lawns & gardens',
      popular: true
    },
    {
      name: '35 MM GRASS — Single Layer',
      pileHeight: '35 mm',
      color: '3-tone',
      fiberType: 'Monofilament',
      backing: 'Single layer black latex',
      backingType: 'single',
      sizes: ['2 ft × 25 m', '4 ft × 25 m', '1 m × 25 m', '2 m × 25 m'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/25mm%20AG.webp?updatedAt=1763088898293',
      recommended: 'Balconies & terraces'
    },
    {
      name: '35 MM GRASS — Double Layer',
      pileHeight: '35 mm',
      color: '3-tone',
      fiberType: 'Monofilament',
      backing: 'Double layer black latex',
      backingType: 'double',
      sizes: ['2 ft × 25 m', '4 ft × 25 m', '1 m × 25 m', '2 m × 25 m'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/40mm%20AG.jpg?updatedAt=1763088974784',
      recommended: 'High-traffic residential areas',
      popular: true
    },
    {
      name: '40 MM GRASS — Double Layer',
      pileHeight: '40 mm',
      color: '3-tone',
      fiberType: 'Monofilament',
      backing: 'Double layer black latex',
      backingType: 'double',
      sizes: ['2 ft × 25 m', '4 ft × 25 m', '1 m × 25 m', '2 m × 25 m'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/40mm%20AG.jpg?updatedAt=1763088974784',
      recommended: 'Commercial & luxury installations'
    },
    {
      name: '50 MM GRASS — Double Layer',
      pileHeight: '50 mm',
      color: '3-tone',
      fiberType: 'Monofilament',
      backing: 'Double layer black latex',
      backingType: 'double',
      sizes: ['2 ft × 25 m', '4 ft × 25 m', '1 m × 25 m', '2 m × 25 m'],
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/50mm%20AG.webp?updatedAt=1763088974918',
      recommended: 'Premium sports & luxury landscapes',
      premium: true
    }
  ]

  const features = [
    {
      icon: Sparkles,
      title: 'Realistic 3-Tone Color',
      description: 'Natural appearance with multi-tone blending'
    },
    {
      icon: Heart,
      title: 'High-Quality Monofilament',
      description: 'Soft, natural feel with premium yarn'
    },
    {
      icon: Shield,
      title: 'Durable Backing',
      description: 'Double-layer option for added stability'
    },
    {
      icon: Droplets,
      title: 'Drainage System',
      description: 'Each sqm includes drainage hole to avoid water logging'
    },
    {
      icon: Sun,
      title: 'UV-Resistant',
      description: 'Protects against sun fading for long life'
    },
    {
      icon: CheckCircle,
      title: 'Safe & Chemical-Free',
      description: 'Pet and child-friendly manufacturing'
    }
  ]

  const benefits = [
    'Lush beauty of natural grass without maintenance hassles',
    'Soft texture and vibrant greenery year-round',
    'Eco-friendly and pet-safe — no harmful chemicals',
    'Lab-tested for durability (3-day water test)',
    'Imported quality materials for superior finish',
    'FIFA-standard feel for sports turf applications',
    'Crafted for elegance, durability, and sustainability',
    'Designed to mimic nature flawlessly'
  ]

  const applications = [
    { icon: Home, title: 'Residential Lawns & Gardens', description: 'Perfect for home landscaping' },
    { icon: Building, title: 'Balconies & Terraces', description: 'Transform outdoor spaces' },
    { icon: Users, title: 'Playgrounds & Sports Areas', description: 'Safe and durable play surfaces' },
    { icon: Building, title: 'Commercial Landscapes', description: 'Showrooms and office spaces' },
    { icon: Sparkles, title: 'Events & Exhibitions', description: 'Temporary installations' },
    { icon: Heart, title: 'Pet & Indoor Areas', description: 'Pet-friendly decorative lawns' }
  ]

  const filteredGrass = grassVariants.filter(variant => {
    if (selectedPile !== 'all' && variant.pileHeight !== selectedPile) return false
    if (selectedBacking !== 'all' && variant.backingType !== selectedBacking) return false
    return true
  })

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="h-10 w-10 text-green-600 mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Shanmukh — Premium Artificial Grass Mat
              </h1>
            </div>
            <p className="text-2xl text-gray-700 mb-8 font-medium">
              Luxury landscaping with minimal maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#catalog"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                View Catalog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Redefining Luxury Landscapes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We redefine luxury landscapes with our premium artificial grass. Crafted for elegance, durability, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.slice(0, 8).map((benefit, index) => (
              <div key={index} className="flex items-start bg-green-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Product Features & Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Product Catalog — Pile Variants & Sizes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Choose from our range of premium artificial grass options
            </p>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <label className="text-gray-700 font-medium">Pile Height:</label>
                <select 
                  value={selectedPile}
                  onChange={(e) => setSelectedPile(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent cursor-pointer"
                >
                  <option value="all">All Heights</option>
                  <option value="25 mm">25 mm</option>
                  <option value="35 mm">35 mm</option>
                  <option value="40 mm">40 mm</option>
                  <option value="50 mm">50 mm</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-gray-700 font-medium">Backing:</label>
                <select 
                  value={selectedBacking}
                  onChange={(e) => setSelectedBacking(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent cursor-pointer"
                >
                  <option value="all">All Types</option>
                  <option value="single">Single Layer</option>
                  <option value="double">Double Layer</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGrass.map((variant, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-500 hover:shadow-lg transition-all duration-300 relative">
                {variant.popular && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    Popular
                  </div>
                )}
                {variant.premium && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    Premium
                  </div>
                )}
                
                <div className="relative h-48">
                  <img 
                    src={variant.image} 
                    alt={variant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{variant.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Pile Height:</span>
                      <span className="font-semibold text-green-600">{variant.pileHeight}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Color:</span>
                      <span className="font-semibold text-gray-900">{variant.color}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Fiber Type:</span>
                      <span className="font-semibold text-gray-900">{variant.fiberType}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-600 text-sm">Backing:</span>
                      <span className="font-semibold text-gray-900 text-right text-sm">{variant.backing}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {variant.sizes.map((size, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold">Recommended for:</span> {variant.recommended}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="block w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-center cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredGrass.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products match your selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Perfect for Every Application
            </h2>
            <p className="text-lg text-gray-600">
              From residential to commercial, our grass fits all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <app.icon className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes & Ordering Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Available Roll Sizes
              </h2>
              <p className="text-lg text-gray-600">
                All variants available in standard roll sizes for easy installation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['2 ft × 25 m', '4 ft × 25 m', '1 m × 25 m', '2 m × 25 m'].map((size, index) => (
                <div key={index} className="bg-green-50 border-2 border-green-200 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">{size}</div>
                  <div className="text-gray-600 text-sm">Standard Roll</div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Need a Custom Size?</h3>
              <p className="text-gray-700 mb-4">
                We can cut grass to your exact specifications. Contact us with your measurements for a personalized quote.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
              >
                Contact for Custom Sizing
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
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
            <p className="text-lg text-gray-600">
              Get in touch for quotes, samples, and installation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                1st Street, Sapthagiri Colony,<br />
                BV Nagar, Mini bypass,<br />
                Nellore-4
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+919441655656" className="hover:text-green-600 cursor-pointer block">+91 9441 655 656</a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:shanmukhartificialgrass@gmail.com" className="hover:text-green-600 cursor-pointer block text-sm">shanmukhartificialgrass@gmail.com</a>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
            >
              Schedule Installation
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TreePine className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Transform Your Space with Shanmukh Artificial Grass
          </h2>
          <p className="text-lg text-green-100 mb-6">
            Experience the perfect blend of luxury, durability, and low maintenance. 
            Contact us today for samples and expert consultation.
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center cursor-pointer"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}

export default ArtificialGrass