import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />

     

<div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
{/* Hero Section */}
<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
    </p>
  </div>
</div>

<div className="container mx-auto px-4 py-12">
  {/* Contact Information - Centered */}
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <p className="text-gray-600 text-lg">
        Have questions about our platform? Need help with your store? We're here to help!
      </p>
    </div>

    {/* Centered Contact Bars */}
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Mail className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
          <p className="text-gray-600">support@bizlister.com</p>
          <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="bg-yellow-100 p-3 rounded-lg">
          <Phone className="h-6 w-6 text-yellow-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-lg">
          <MapPin className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
          <p className="text-gray-600">123 Commerce Street</p>
          <p className="text-gray-600">Business District, NY 10001</p>
        </div>
      </div>

      <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="bg-yellow-100 p-3 rounded-lg">
          <Clock className="h-6 w-6 text-yellow-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Form */}
  

  {/* FAQ Section */}
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How do I list my store on BizLister?</h3>
            <p className="text-gray-600">Simply click on "Sell on BizLister" and follow our easy registration process. We'll guide you through setting up your store profile and listing your first products.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What are the fees for using BizLister?</h3>
            <p className="text-gray-600">We offer competitive pricing plans starting from free basic listings. Contact our sales team for detailed pricing information based on your business needs.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How do I contact customer support?</h3>
            <p className="text-gray-600">You can reach us through this contact form, email us at support@bizlister.com, or call us during business hours. We typically respond within 24 hours.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I integrate with my existing systems?</h3>
            <p className="text-gray-600">Yes! We offer API integrations and support for popular ecommerce platforms. Our technical team can help you set up seamless integration.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


      <Footer />
    </>
  );
};
