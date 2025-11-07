import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Bird, 
  Home, 
  Building, 
  Clock,
  Zap,
  Heart,
  Award,
  Phone,
  AlertTriangle,
  Wind,
  Sun
} from 'lucide-react'

const BirdSpikes = () => {
  const problems = [
    {
      icon: Home,
      title: 'Property Damage',
      description: 'Bird droppings cause staining, corrosion, and structural damage to buildings and vehicles.'
    },
    {
      icon: AlertTriangle,
      title: 'Health Hazards',
      description: 'Bird droppings carry diseases and create unsanitary conditions around your property.'
    },
    {
      icon: Building,
      title: 'Nesting Issues',
      description: 'Birds build nests in gutters, vents, and roof areas causing blockages and damage.'
    },
    {
      icon: Wind,
      title: 'Noise Pollution',
      description: 'Large flocks create noise disturbances, especially during early morning hours.'
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Humane Solution',
      description: 'Effectively deters birds without causing harm - completely safe and ethical approach.'
    },
    {
      icon: Shield,
      title: '100% Effective',
      description: 'Proven track record of preventing bird landing and nesting on treated areas.'
    },
    {
      icon: Sun,
      title: 'Weather Resistant',
      description: 'UV stabilized materials that withstand extreme weather conditions for years.'
    },
    {
      icon: Clock,
      title: 'Long Lasting',
      description: 'Durable construction provides 10+ years of effective bird deterrent protection.'
    },
    {
      icon: Zap,
      title: 'Quick Installation',
      description: 'Professional installation completed in hours, not days, with minimal disruption.'
    },
    {
      icon: Award,
      title: 'Virtually Invisible',
      description: 'Discreet design maintains the aesthetic appeal of your property.'
    }
  ]

  const applications = [
    {
      category: 'Residential Properties',
      locations: [
        'Roof ridges and edges',
        'Window sills and ledges',
        'Balcony railings',
        'Air conditioning units',
        'Satellite dishes',
        'Garden structures'
      ],
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      category: 'Commercial Buildings',
      locations: [
        'Office building ledges',
        'Hotel and restaurant areas',
        'Shopping mall structures',
        'Hospital exteriors',
        'School buildings',
        'Warehouse roofing'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      category: 'Industrial Facilities',
      locations: [
        'Factory rooftops',
        'Electrical installations',
        'Solar panel arrays',
        'Communication towers',
        'Storage facilities',
        'Transportation hubs'
      ],
      image: 'https://images.unsplash.com/photo-1581092787765-e45d8b34bed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const spikeTypes = [
    {
      name: 'Stainless Steel Spikes',
      material: '304 Grade Stainless Steel',
      width: '32cm strips',
      features: ['Rust-proof construction', 'Maximum durability', 'Professional appearance', '15+ year lifespan'],
      bestFor: 'Premium installations, coastal areas',
      price: 'Premium'
    },
    {
      name: 'Polycarbonate Spikes',
      material: 'UV Stabilized Plastic',
      width: '33cm strips',
      features: ['Cost-effective solution', 'Weather resistant', 'Easy installation', '10+ year lifespan'],
      bestFor: 'Residential properties, budget projects',
      price: 'Standard'
    },
    {
      name: 'Narrow Spikes',
      material: 'Stainless Steel/Plastic',
      width: '10cm strips',
      features: ['Tight space installation', 'Discrete appearance', 'Flexible application', '8+ year lifespan'],
      bestFor: 'Window sills, narrow ledges',
      price: 'Economy'
    }
  ]

  const installationProcess = [
    {
      step: 1,
      title: 'Site Survey',
      description: 'Detailed assessment of bird problem areas and measurement of installation zones'
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Custom solution design based on bird species, building structure, and aesthetic requirements'
    },
    {
      step: 3,
      title: 'Surface Preparation',
      description: 'Cleaning and preparation of installation surfaces for optimal adhesion'
    },
    {
      step: 4,
      title: 'Spike Installation',
      description: 'Professional installation using weather-resistant adhesives and mechanical fixings'
    },
    {
      step: 5,
      title: 'Quality Check',
      description: 'Final inspection and testing to ensure complete coverage and secure installation'
    }
  ]

  const targetBirds = [
    'Pigeons', 'Crows', 'Seagulls', 'Sparrows', 'Mynas', 'Doves', 'Starlings', 'Parrots'
  ]

  const maintenance = [
    'Visual inspection every 6 months',
    'Remove debris and leaves occasionally',
    'Check adhesive bonds annually',
    'Clean spikes if accumulation occurs',
    'Professional maintenance available'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-blue-600 font-semibold">Bird Control Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Effective <span className="text-blue-600">Bird Spike</span> Installation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Protect your property from bird damage with our humane, professional bird spike solutions. 
                Long-lasting deterrent that keeps birds away while maintaining your building's appearance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="tel:+919876543210"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Service
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Bird spikes installation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Effective</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bird Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your property from costly damage and health risks caused by pest birds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Bird Spikes?
            </h2>
            <p className="text-xl text-gray-600">
              Humane, effective, and long-lasting bird deterrent solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Installation Applications
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive bird control for all types of properties
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={application.image} 
                  alt={application.category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{application.category}</h3>
                  <div className="space-y-3">
                    {application.locations.map((location, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spike Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Spike System
            </h2>
            <p className="text-xl text-gray-600">
              Different spike types for different applications and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {spikeTypes.map((spike, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{spike.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    spike.price === 'Premium' ? 'bg-gold-100 text-gold-800' :
                    spike.price === 'Standard' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {spike.price}
                  </span>
                </div>
                <div className="text-gray-600 mb-2">Material: {spike.material}</div>
                <div className="text-gray-600 mb-6">Width: {spike.width}</div>
                
                <div className="space-y-3 mb-6">
                  {spike.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-1">Best for:</div>
                  <div className="text-gray-700 text-sm">{spike.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Birds Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Effective Against All Pest Birds
            </h2>
            <p className="text-xl text-gray-600">
              Our bird spikes deter all common pest bird species
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {targetBirds.map((bird, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors duration-200">
                <Bird className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">{bird}</div>
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
              Expert installation ensuring maximum effectiveness and longevity
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {installationProcess.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < installationProcess.length - 1 && (
                  <div className="absolute left-6 mt-12 w-px h-12 bg-blue-200"></div>
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
                Minimal Maintenance Required
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Once installed, bird spikes require very little maintenance to remain effective
              </p>
              <div className="space-y-4">
                {maintenance.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Bird Control</h3>
              <p className="text-gray-600 mb-6">
                Dealing with an urgent bird problem? We offer same-day emergency services for critical situations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">24/7 Emergency Response</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Immediate Problem Assessment</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Rapid Installation Service</span>
                </div>
              </div>
              <a 
                href="tel:+919876543210"
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quality Guarantee & Warranty
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">10+ Years</div>
              <div className="text-blue-100">Product Lifespan</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">2 Years</div>
              <div className="text-blue-100">Installation Warranty</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Effectiveness Guarantee</div>
            </div>
          </div>

          <p className="text-xl text-blue-100 mb-8">
            If birds return to treated areas within warranty period, we'll reinstall at no cost
          </p>

          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Schedule Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BirdSpikes