'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, RefreshCw } from 'lucide-react';
import { useContactPhotos } from '@/hooks/useGoogleDrivePhotos';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    services: [] as string[],
    message: ''
  });

  // Fetch photos from Google Drive
  const { photos, loading: photosLoading, error: photosError, refetch } = useContactPhotos(8);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="py-24 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-primary-headings font-light mb-6">
              Let's Connect
            </h1>
            <div className="w-24 h-px bg-button-background mx-auto mb-8"></div>
            <p className="text-xl text-primary-paragraphs max-w-2xl mx-auto">
              Ready to capture your special moments? I'd love to hear about your vision and bring it to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-accent-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <p className="text-primary-paragraphs text-lg italic">
              <em>Portrait session pricing starts at $600</em>
            </p>
            <p className="text-primary-paragraphs text-lg italic">
              <em>Wedding and event coverage - quoted on an individual basis</em>
            </p>
            <p className="text-primary-paragraphs text-lg italic">
              <em>Personal branding and family session packages available</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form with Photo Section */}
      <section className="py-24 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[2/3] relative overflow-hidden shadow-lg">
                <Image
                  src="/About me/camera.jpg"
                  alt="Cinthya Nuñez Photography"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-accent-background p-8 rounded-lg shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-headings mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-paragraphs focus:ring-2 focus:ring-button-background focus:border-button-background transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-headings mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-paragraphs focus:ring-2 focus:ring-button-background focus:border-button-background transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-headings mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-paragraphs focus:ring-2 focus:ring-button-background focus:border-button-background transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-primary-headings mb-2">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="@yourusername"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-paragraphs focus:ring-2 focus:ring-button-background focus:border-button-background transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-headings mb-4">
                    I'm interested in booking <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'Portrait Photography',
                      'Wedding Photography',
                      'Event Coverage',
                      'Family Sessions',
                      'Personal Branding'
                    ].map((service) => (
                      <div key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          id={service}
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-button-background bg-white border-gray-300 rounded focus:ring-button-background focus:ring-2"
                        />
                        <label htmlFor={service} className="ml-3 text-primary-paragraphs">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-headings mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-paragraphs focus:ring-2 focus:ring-button-background focus:border-button-background transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-button-background text-button-text py-3 px-6 rounded-lg font-medium hover:bg-button-hover transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-accent-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-button-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-primary-headings font-light mb-2">
                Email
              </h3>
              <p className="text-primary-paragraphs">
                <a href="mailto:info@cinthyanunez.com" className="hover:text-button-background transition-colors">
                  info@cinthyanunez.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-button-background rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-primary-headings font-light mb-2">
                Phone
              </h3>
              <p className="text-primary-paragraphs">
                <a href="tel:+15551234567" className="hover:text-button-background transition-colors">
                  (555) 123-4567
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-button-background rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl text-primary-headings font-light mb-2">
                Location
              </h3>
              <p className="text-primary-paragraphs">
                San Francisco Bay Area<br />
                California
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Section with Google Drive Photos */}
      <section className="py-16 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-primary-headings font-light mb-4">
              Follow My Work
            </h2>
            <div className="w-24 h-px bg-button-background mx-auto mb-6"></div>
            <p className="text-primary-paragraphs mb-8">
              See my latest work and behind-the-scenes moments
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/nunez_artistry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-button-background text-button-text px-6 py-3 rounded-lg font-medium hover:bg-button-hover transition-colors"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @nunez_artistry
              </a>
              <button
                onClick={() => refetch()}
                disabled={photosLoading}
                className="inline-flex items-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-5 h-5 mr-2 ${photosLoading ? 'animate-spin' : ''}`} />
                Refresh Photos
              </button>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photosLoading ? (
              // Loading skeleton
              Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-200 rounded-lg animate-pulse"
                />
              ))
            ) : photosError ? (
              // Error state - show fallback message
              <div className="col-span-full text-center py-12">
                <p className="text-primary-paragraphs mb-4">
                  Unable to load photos from Google Drive
                </p>
                <p className="text-primary-details text-sm">
                  {photosError}
                </p>
                <button
                  onClick={() => refetch()}
                  className="mt-4 inline-flex items-center bg-button-background text-button-text px-4 py-2 rounded-lg font-medium hover:bg-button-hover transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
              </div>
            ) : photos.length > 0 ? (
              // Display photos from Google Drive
              photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer shadow-lg"
                  onClick={() => window.open('https://www.instagram.com/nunez_artistry', '_blank')}
                >
                  <Image
                    src={photo.thumbnailUrl || photo.url}
                    alt={photo.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))
            ) : (
              // No photos found
              <div className="col-span-full text-center py-12">
                <p className="text-primary-paragraphs mb-4">
                  No photos found in Google Drive
                </p>
                <p className="text-primary-details text-sm">
                  Make sure to configure your Google Drive folder IDs in the environment variables
                </p>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-primary-details text-sm">
              {photos.length > 0 
                ? `Showing ${photos.length} photos from Google Drive • Click any image to visit Instagram`
                : 'Photos will appear here once Google Drive is configured'
              }
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 