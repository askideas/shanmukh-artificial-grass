import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Award, CheckCircle, Leaf, Shield, Phone, ChevronLeft, ChevronRight, Droplets, Clock, Sun, Heart } from 'lucide-react'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      title: 'Premium Artificial Grass',
      subtitle: 'Transform Your Outdoor Space',
      description: 'Beautiful, low-maintenance artificial grass solutions for homes and businesses'
    },
    {
      image: 'https://images.unsplash.com/photo-1574090424863-0dda9e448184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      title: 'Professional Installation',
      subtitle: 'Expert Craftsmanship',
      description: 'Skilled installation team with years of experience and attention to detail'
    },
    {
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      title: 'Bird Control Solutions',
      subtitle: 'Protect Your Property',
      description: 'Effective and humane bird spike solutions for lasting protection'
    }
  ]

  const grassTypes = [
    {
      name: 'Premium Landscape',
      height: '35-40mm',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Ultra realistic', 'Soft texture', 'UV resistant']
    },
    {
      name: 'Sports Grade',
      height: '20-25mm',
      image: 'https://images.unsplash.com/photo-1574090424863-0dda9e448184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['High durability', 'Excellent drainage', 'Anti-slip backing']
    },
    {
      name: 'Economy Grade',
      height: '20-30mm',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      features: ['Cost-effective', 'Good appearance', 'Easy maintenance']
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
      location: 'Hyderabad',
      text: 'Excellent service! The artificial grass looks amazing and the installation was professional. Highly recommend Shanmukh Artificial Grass for quality work.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Priya Sharma',
      location: 'Secunderabad',
      text: 'Bird spikes installation was quick and effective. No more bird problems on our terrace. Great customer service and professional approach.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Amit Patel',
      location: 'Gachibowli',
      text: 'Transformed our backyard completely! The artificial grass looks so natural that guests can\'t tell the difference. Worth every penny.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
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
      <section className="relative h-[70vh] overflow-hidden">
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
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center cursor-pointer"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Types of Artificial Grass
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our premium selection of artificial grass options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {grassTypes.map((grass, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={grass.image} 
                  alt={grass.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{grass.name}</h3>
                  <div className="text-sm text-green-600 font-medium mb-3">Height: {grass.height}</div>
                  <div className="space-y-2">
                    {grass.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Best Features of Artificial Grass
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why artificial grass is the smart choice for modern landscaping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Shanmukh Artificial Grass */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Choose Shanmukh Artificial Grass?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional service and quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-center mb-6 italic text-lg leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].location}</div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
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

      {/* Ready to Transform Your Space */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote. 
            Let's bring your outdoor vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center cursor-pointer"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us Now
            </Link>
            <Link
              to="/artificial-grass"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
            >
              <Leaf className="mr-2 h-4 w-4" />
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home