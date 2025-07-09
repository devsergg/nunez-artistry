'use client';

import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: "Cultural Events",
      subtitle: "Festivals, celebrations, and community gatherings that honor tradition and culture",
      icon: Heart,
      href: "/services/events"
    },
    {
      title: "Artistic Portraits",
      subtitle: "Personal storytelling through intimate and expressive portrait photography",
      icon: Camera,
      href: "/services/portraits"
    }
  ];

  return (
    <section className="py-24 bg-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary-headings font-light mb-4">
            Services
          </h2>
          <div className="w-24 h-px bg-button-background mx-auto mb-6"></div>
          <p className="text-primary-paragraphs max-w-2xl mx-auto leading-relaxed">
            From cultural celebrations to intimate portraits, I offer specialized photography 
            services to capture life's most beautiful moments.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Link href={service.href} className="block">
                  <div className="bg-accent-background p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-primary-background">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-button-background group-hover:bg-button-hover rounded-full flex items-center justify-center transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-2xl text-primary-headings font-light mb-4 group-hover:text-button-background transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary-paragraphs leading-relaxed mb-6">
                      {service.subtitle}
                    </p>

                    {/* Call to Action */}
                    <div className="inline-flex items-center text-button-background group-hover:text-button-hover font-medium tracking-wide">
                      <span>Learn More</span>
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
} 