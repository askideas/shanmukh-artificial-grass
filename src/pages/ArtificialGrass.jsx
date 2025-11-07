import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Leaf, 
  CheckCircle, 
  ArrowRight, 
  Droplets, 
  Clock, 
  Heart, 
  Shield, 
  Scissors,
  Sun,
  Home,
  Building,
  Users,
  Phone
} from 'lucide-react'

const ArtificialGrass = () => {
  const benefits = [
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Save thousands of liters of water annually with no need for regular watering.'
    },
    {
      icon: Clock,
      title: 'Low Maintenance',
      description: 'No mowing, fertilizing, or pest control required. Just occasional cleaning.'
    },
    {
      icon: Sun,
      title: 'All-Weather Durability',
      description: 'Withstands extreme weather conditions and maintains color year-round.'
    },
    {
      icon: Heart,
      title: 'Pet & Child Friendly',
      description: 'Safe, non-toxic, and comfortable surface for children and pets to play on.'
    },
    {
      icon: Shield,
      title: 'Long Lasting',
      description: 'Premium quality grass with 8-10 years warranty and exceptional durability.'
    },
    {
      icon: Scissors,
      title: 'No Cutting Required',
      description: 'Maintains perfect height without any trimming or seasonal maintenance.'
    }
  ]

  const applications = [
    {
      icon: Home,
      title: 'Residential Lawns',
      description: 'Transform your home garden into a beautiful, green space',
      features: ['Front yard landscaping', 'Backyard play areas', 'Balcony & terrace decoration', 'Pool side areas']
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Professional landscaping for businesses and institutions',
      features: ['Office complexes', 'Hotels & resorts', 'Shopping malls', 'Hospitals & schools']
    },
    {
      icon: Users,
      title: 'Sports & Recreation',
      description: 'High-performance surfaces for sports and recreational activities',
      features: ['Football fields', 'Cricket pitches', 'Tennis courts', 'Playground areas']
    }
  ]

  const grassTypes = [
    {
      name: 'Premium Landscape Grass',
      height: '35-40mm',
      density: 'High density (16,800 stitches/m²)',
      features: ['Ultra-realistic appearance', 'Soft texture', 'Excellent drainage', 'UV resistant'],
      bestFor: 'Residential gardens, luxury properties',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Sports Grade Turf',
      height: '20-25mm',
      density: 'Medium-high density (14,000 stitches/m²)',
      features: ['High durability', 'Excellent ball roll', 'Anti-slip backing', 'Quick drainage'],
      bestFor: 'Sports fields, high-traffic areas',
      image: 'https://images.unsplash.com/photo-1574090424863-0dda9e448184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Economy Grass',
      height: '20-30mm',
      density: 'Standard density (10,500 stitches/m²)',
      features: ['Cost-effective', 'Good appearance', 'Durable construction', 'Easy maintenance'],
      bestFor: 'Budget projects, temporary installations',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const installationProcess = [
    {
      step: 1,
      title: 'Site Assessment',
      description: 'Free consultation and detailed site measurement'
    },
    {
      step: 2,
      title: 'Ground Preparation',
      description: 'Excavation, leveling, and base preparation'
    },
    {
      step: 3,
      title: 'Base Installation',
      description: 'Installing drainage system and compacted base'
    },
    {
      step: 4,
      title: 'Grass Installation',
      description: 'Professional laying and securing of artificial grass'
    },
    {
      step: 5,
      title: 'Finishing Touches',
      description: 'Infill application, brushing, and final inspection'
    }
  ]

  const maintenance = [
    'Regular brushing to maintain fiber direction',
    'Occasional rinsing to remove dust and debris',
    'Remove leaves and organic matter promptly',
    'Clean pet waste and rinse the area',
    'Check drainage systems periodically',
    'Professional deep cleaning annually'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-green-600 mr-3" />
                <span className="text-green-600 font-semibold">Artificial Grass Installation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Premium Quality <span className="text-green-600">Artificial Grass</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your outdoor spaces with our high-quality artificial grass that looks natural, 
                feels comfortable, and requires minimal maintenance for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful artificial grass lawn"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-600">10 Years</div>
                <div className="text-sm text-gray-600">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Artificial Grass?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the numerous advantages of artificial grass over natural lawn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Application
            </h2>
            <p className="text-xl text-gray-600">
              Versatile solutions for residential, commercial, and recreational spaces
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <application.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{application.title}</h3>
                <p className="text-gray-600 mb-6">{application.description}</p>
                <div className="space-y-3">
                  {application.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grass Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Grass Type
            </h2>
            <p className="text-xl text-gray-600">
              Different grass options for different needs and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {grassTypes.map((grass, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={grass.image} 
                  alt={grass.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{grass.name}</h3>
                  <div className="text-sm text-gray-600 mb-4">
                    <div className="mb-1">Height: {grass.height}</div>
                    <div className="mb-3">Density: {grass.density}</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {grass.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-900 mb-1">Best for:</div>
                    <div className="text-sm text-gray-700">{grass.bestFor}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Our systematic approach ensures perfect results every time
            </p>
          </div>

          <div className="relative">
            {installationProcess.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < installationProcess.length - 1 && (
                  <div className="absolute left-6 mt-12 w-px h-12 bg-green-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simple Maintenance Guide
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Keep your artificial grass looking perfect with minimal effort
              </p>
              <div className="space-y-4">
                {maintenance.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Maintenance Available</h3>
                <p className="text-gray-700 text-sm">
                  We offer annual deep cleaning and maintenance services to keep your artificial grass in perfect condition.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574090424863-0dda9e448184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Artificial grass maintenance"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Guarantee Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Warranty & Guarantee
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">10 Years</div>
              <div className="text-green-100">Material Warranty</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">2 Years</div>
              <div className="text-green-100">Installation Guarantee</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Satisfaction Promise</div>
            </div>
          </div>

          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Get Your Free Quote Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ArtificialGrass