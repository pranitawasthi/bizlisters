import React from 'react';
import { Store, Users, Target, Award, TrendingUp, Shield, Heart, Globe, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export const About = () => {
  const stats = [
    { number: '10K+', label: 'Active Stores', icon: Store },
    { number: '500K+', label: 'Happy Customers', icon: Users },
    { number: '1M+', label: 'Products Listed', icon: TrendingUp },
    { number: '50+', label: 'Cities Covered', icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower local businesses by connecting them with customers through our innovative digital marketplace platform.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To become the leading platform that bridges the gap between local businesses and their communities worldwide.'
    },
    {
      icon: Shield,
      title: 'Our Values',
      description: 'Trust, innovation, community support, and excellence in everything we do for our merchants and customers.'
    }
  ];

  const features = [
    'Easy store setup and management',
    'Secure payment processing',
    'Real-time inventory tracking',
    'Customer analytics and insights',
    'Mobile-responsive storefronts',
    '24/7 customer support'
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Former e-commerce executive with 15+ years of experience in digital marketplace development.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Tech visionary who led engineering teams at major tech companies, specializing in scalable platforms.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Marketing',
      description: 'Marketing strategist with expertise in helping small businesses grow their online presence.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About BizLister</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering local businesses to thrive in the digital marketplace through innovative technology and community-focused solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  BizLister was born from a simple observation: amazing local businesses were struggling to reach customers in an increasingly digital world. In 2020, our founders witnessed countless small businesses closing their doors, not because they lacked quality products or services, but because they couldn't effectively compete online.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We knew there had to be a better way. That's when we decided to create a platform that would level the playing field – giving local businesses the same powerful tools and reach that large corporations enjoy, but with the personal touch and community focus that makes local businesses special.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, BizLister proudly serves thousands of local businesses across the country, helping them connect with customers, grow their revenue, and strengthen their communities. Every success story of a business thriving on our platform reminds us why we started this journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What Drives Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-yellow-50 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose BizLister?</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We've built our platform with one goal in mind: making it easier for local businesses to succeed online. Here's what sets us apart:
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <Award className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Award-Winning Platform</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Recognized as "Best E-commerce Platform for Small Business" by TechReview Magazine and "Innovation in Local Commerce" by the Small Business Association.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Meet Our Team</h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Our diverse team of experts is passionate about helping local businesses succeed in the digital marketplace.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-yellow-50 border border-gray-100 hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're a business owner looking to expand online or a customer seeking great local products, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl">
                Start Selling Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Explore Stores
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};