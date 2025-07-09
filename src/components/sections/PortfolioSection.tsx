'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Cultural Events', 'Portraits'];
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Día de los Muertos Celebration',
      category: 'Cultural Events',
      image: '/New%20Web%20Eventss/Dia_De_los_muertos-3343.jpg',
    },
    {
      id: 2,
      title: 'Festival Portrait',
      category: 'Portraits',
      image: '/New%20Web%20Eventss/CNV-5753.jpg',
    },
    {
      id: 3,
      title: 'Carnaval Festivities',
      category: 'Cultural Events',
      image: '/New%20Web%20Eventss/Carnaval_-3589.jpg',
    },
    {
      id: 4,
      title: 'Cultural Portrait',
      category: 'Portraits',
      image: '/New%20Web%20Eventss/CNV-5007.jpg',
    },
    {
      id: 5,
      title: 'Heritage Festival',
      category: 'Cultural Events',
      image: '/New%20Web%20Eventss/HWF-06185.jpg',
    },
    {
      id: 6,
      title: 'Community Portrait',
      category: 'Portraits',
      image: '/New%20Web%20Eventss/H&AF-07205.jpg',
    },
    {
      id: 7,
      title: 'Castro Fair',
      category: 'Cultural Events',
      image: '/New%20Web%20Eventss/Catro_Fair-2312.jpg',
    },
    {
      id: 8,
      title: 'Artistic Portrait',
      category: 'Portraits',
      image: '/New%20Web%20Eventss/CNV-5260.jpg',
    },
    {
      id: 9,
      title: 'Portola Festival',
      category: 'Cultural Events',
      image: '/New%20Web%20Eventss/Portola-08559.jpg',
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 bg-accent-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary-headings font-light mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-px bg-button-background mx-auto mb-6"></div>
          <p className="text-primary-paragraphs max-w-2xl mx-auto leading-relaxed">
            A collection of moments that celebrate culture, beauty, and the human spirit
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-button-background border-b-2 border-button-background'
                  : 'text-primary-paragraphs hover:text-button-background'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-serif text-lg font-light mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm font-light tracking-wide">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-block bg-button-background hover:bg-button-hover text-button-text px-8 py-3 font-medium tracking-wide transition-all duration-300 transform hover:scale-105"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 