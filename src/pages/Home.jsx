import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Award, CheckCircle, Leaf, Shield, Phone, ChevronLeft, ChevronRight, Droplets, Clock, Sun, Heart, Home as HomeIcon, Building, Sparkles, TreePine } from 'lucide-react'
import QuoteModal from '../components/QuoteModal'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const heroSlides = [
    {
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/AG1.jpeg?updatedAt=1763088504409',
      title: 'Premium Artificial Grass',
      subtitle: 'Transform Your Outdoor Space',
      description: 'Beautiful, low-maintenance artificial grass solutions for homes and businesses'
    },
    {
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/AG2.jpg?updatedAt=1763088550575',
      title: 'Professional Installation',
      subtitle: 'Expert Craftsmanship',
      description: 'Skilled installation team with years of experience and attention to detail'
    },
    {
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/BS1.jpg?updatedAt=1763088701893',
      title: 'Bird Control Solutions',
      subtitle: 'Protect Your Property',
      description: 'Effective and humane bird spike solutions for lasting protection'
    }
  ]

  const grassTypes = [
    {
      name: '25-35mm Grass',
      height: '25-35mm',
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/25mm%20AG.webp?updatedAt=1763088898293',
      features: ['3-tone color', 'Monofilament fiber', 'Single & double layer']
    },
    {
      name: '40mm Premium Grass',
      height: '40mm',
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/40mm%20AG.jpg?updatedAt=1763088974784',
      features: ['Double layer backing', 'High durability', 'Luxury installations']
    },
    {
      name: '50mm Luxury Grass',
      height: '50mm',
      image: 'https://ik.imagekit.io/wlo5q0w8i/Images/50mm%20AG.webp?updatedAt=1763088974918',
      features: ['Premium quality', 'FIFA-standard feel', 'Sports & landscapes']
    }
  ]

  const features = [
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Save thousands of liters annually with no watering needed'
    },
    {
      icon: Clock,
      title: 'Low Maintenance',
      description: 'No mowing, fertilizing, or pest control required'
    },
    {
      icon: Sun,
      title: 'All-Weather Durability',
      description: 'Withstands extreme weather and UV exposure'
    },
    {
      icon: Heart,
      title: 'Pet & Child Safe',
      description: 'Non-toxic, comfortable surface for family enjoyment'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Highest quality materials for lasting results'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with proven track record'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Work',
      description: 'Comprehensive warranty on all installations'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and support'
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Nellore',
      text: 'Excellent service! The artificial grass looks amazing and the installation was professional. Shanmukh team completed the work on time with great quality.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Priya Sharma',
      location: 'BV Nagar, Nellore',
      text: 'PROTECH bird spikes installation was quick and effective. No more bird problems on our terrace. Great customer service and professional approach.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Amit Patel',
      location: 'Mini Bypass, Nellore',
      text: 'Transformed our backyard completely! The artificial grass looks so natural and feels soft. The 50mm premium grass was worth every penny. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Lakshmi Reddy',
      location: 'Nellore',
      text: 'Best decision for our garden! No more watering or maintenance headaches. The grass stays green year-round. Professional installation and friendly service.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
  ]

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image Slider */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400 mb-3 md:mb-4">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center cursor-pointer text-sm md:text-base"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <Link
                to="/about"
                className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Types of Artificial Grass */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              Types of Artificial Grass
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our premium selection of artificial grass options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {grassTypes.map((grass, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={grass.image} 
                  alt={grass.name}
                  className="w-full h-36 md:h-40 object-cover"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{grass.name}</h3>
                  <div className="text-xs md:text-sm text-green-600 font-medium mb-2 md:mb-3">Height: {grass.height}</div>
                  <div className="space-y-1.5 md:space-y-2">
                    {grass.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Features of Artificial Grass */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              Best Features of Artificial Grass
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why artificial grass is the smart choice for modern landscaping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Shanmukh Artificial Grass */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              Why Choose Shanmukh Artificial Grass?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional service and quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center bg-gray-50 p-4 md:p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <reason.icon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              What Our Clients Say
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 mx-auto max-w-2xl">
              <div className="flex justify-center mb-3 md:mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-center mb-4 md:mb-6 italic text-sm md:text-lg leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600 text-xs md:text-sm">{testimonials[currentTestimonial].location}</div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-4 md:mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              Our Professional Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your artificial grass and bird control needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Artificial Grass Service */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-4 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-green-600 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <Leaf className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Artificial Grass</h3>
              </div>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Premium G GRASS artificial grass mats in various pile heights (25mm to 50mm). 
                Perfect for residential lawns, commercial landscapes, sports areas, and decorative installations.
              </p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">3-tone realistic color for natural look</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">UV-resistant & weather-proof</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">Drainage system to prevent waterlogging</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">Pet & child-friendly, chemical-free</span>
                </div>
              </div>
              <Link
                to="/artificial-grass"
                className="inline-flex items-center bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 cursor-pointer text-sm md:text-base"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>

            {/* Bird Spikes Service */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-4 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-blue-600 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Bird Spikes</h3>
              </div>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                PROTECH Shield bird spike systems for effective and humane bird control. 
                Available in polycarbonate (C1001) and stainless steel (C1002) variants for long-lasting protection.
              </p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">Humane & invisible protection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">Weather-resistant materials</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">Low maintenance & durable</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-xs md:text-sm">Easy installation methods</span>
                </div>
              </div>
              <Link
                to="/bird-spikes"
                className="inline-flex items-center bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer text-sm md:text-base"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
              Perfect for Every Application
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Versatile solutions for residential, commercial, and sports installations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              { icon: HomeIcon, title: 'Residential Lawns' },
              { icon: Building, title: 'Balconies & Terraces' },
              { icon: Users, title: 'Playgrounds' },
              { icon: Sparkles, title: 'Events' },
              { icon: Heart, title: 'Pet Areas' },
              { icon: TreePine, title: 'Landscapes' }
            ].map((app, index) => (
              <div key={index} className="bg-white p-3 md:p-4 rounded-xl text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <app.icon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-900">{app.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: '500+', label: 'Projects Completed', icon: Award },
              { number: '50+', label: 'Happy Clients', icon: Users },
              { number: '5+', label: 'Years Experience', icon: Clock },
              { number: '100%', label: 'Satisfaction Rate', icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 p-4 md:p-6 rounded-xl">
                <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-700 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Space */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
            Ready to Transform Your Space?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-green-100 mb-4 md:mb-6 max-w-2xl mx-auto px-2">
            Get in touch with us today for a free consultation and quote. 
            Let's bring your outdoor vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center cursor-pointer text-sm md:text-base"
            >
              <Phone className="mr-2 h-4 w-4" />
              Request Quote
            </button>
            <a
              href="tel:+919441655656"
              className="border-2 border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center cursor-pointer text-sm md:text-base"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call: +91 9441 655 656
            </a>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}

export default Home