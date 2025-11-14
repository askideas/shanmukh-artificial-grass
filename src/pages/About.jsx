import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuoteModal from '../components/QuoteModal'
import { Users, Target, Award, Heart, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react'

const About = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every project uses premium materials and expert craftsmanship to ensure lasting results.'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We work closely with clients to understand their needs and exceed expectations.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and deliver projects on schedule without compromising on quality or attention to detail.'
    },
    {
      icon: Shield,
      title: 'Reliability & Trust',
      description: 'With years of experience, we have built a reputation for reliability, professionalism, and trustworthy service.'
    }
  ]

  const team = [
    {
      name: 'Shanmukh',
      role: 'Founder & Lead Installer',
      experience: '5+ years',
      specialty: 'Artificial Grass Installation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Technical Team',
      role: 'Installation Specialists',
      experience: '3+ years average',
      specialty: 'Bird Spike Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Successful Installations' },
    { number: '50+', label: 'Satisfied Clients' },
    { number: '5+', label: 'Years in Business' },
    { number: '100%', label: 'Customer Satisfaction' }
  ]

  const services = [
    'Residential Artificial Grass Installation',
    'Commercial Landscaping Solutions',
    'Sports Field Artificial Turf',
    'Rooftop Garden Installation',
    'Bird Spike Installation & Maintenance',
    'Anti-Bird Netting Solutions',
    'Balcony & Terrace Beautification',
    'Custom Landscape Design'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Shanmukh Artificial Grass</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transforming outdoor spaces with premium artificial grass solutions and effective bird control systems since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2019 by Shanmukh, our company began with a simple mission: to provide 
                  high-quality artificial grass solutions that transform ordinary spaces into 
                  extraordinary outdoor experiences.
                </p>
                <p>
                  What started as a passion for creating beautiful, low-maintenance landscapes has 
                  grown into a trusted business serving residential and commercial clients across 
                  Hyderabad and surrounding areas.
                </p>
                <p>
                  Over the years, we expanded our services to include bird spike solutions, 
                  recognizing the need for effective, humane bird control systems that protect 
                  properties while maintaining aesthetic appeal.
                </p>
                <p>
                  Today, we take pride in our track record of over 500 successful installations 
                  and a growing family of satisfied customers who trust us with their outdoor spaces.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://ik.imagekit.io/wlo5q0w8i/Images/AG%20About.jpg?updatedAt=1763089139765"
                alt="Artificial grass installation"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To transform outdoor spaces with innovative, sustainable, and beautiful artificial 
                grass solutions while providing effective bird control systems. We strive to 
                deliver exceptional quality and service that exceeds our clients' expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading provider of artificial grass and bird control solutions 
                in the region, known for our commitment to quality, innovation, and customer 
                satisfaction. We envision creating greener, more beautiful communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">Experience: {member.experience}</p>
                  <p className="text-gray-600">Specialty: {member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-green-100">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-green-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer a complete range of artificial grass and bird control solutions 
                tailored to meet your specific needs and requirements.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://ik.imagekit.io/wlo5q0w8i/Images/AG%20About2.jpg?updatedAt=1763089263930"
                alt="Our services"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help transform your outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <Link
              to="/artificial-grass"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}

export default About