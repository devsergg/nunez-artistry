'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend API
    // TODO: Replace with actual API call - DO NOT log sensitive data
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      service: '',
      date: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent opacity-40 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-secondary-100 to-transparent dark:from-secondary-900/20 dark:to-transparent opacity-40 rounded-tr-full" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a question or ready to book a session? Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="classic-booth">Classic Photo Booth</option>
                    <option value="360-booth">Interactive 360° Booth</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="event">Event Coverage</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Event Date (if applicable)
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              
              <button type="submit" className="w-full btn btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Photography Ave<br />
                      Studio City, CA 90210
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+15551234567" className="hover:text-primary-500 transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:info@nunezartistry.com" className="hover:text-primary-500 transition-colors">
                        info@nunezartistry.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary-500" />
                Business Hours
              </h3>
              
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Monday - Friday</span>
                  <span className="text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Saturday</span>
                  <span className="text-gray-600 dark:text-gray-400">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Sunday</span>
                  <span className="text-gray-600 dark:text-gray-400">Closed</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                  Appointment Only
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Studio sessions are by appointment only. Please book in advance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 