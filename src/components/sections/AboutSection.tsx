'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
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
            About Cinthya
          </h2>
          <div className="w-24 h-px bg-button-background mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[600px]"
          >
            <Image
              src="/About me/camera.jpg"
              alt="Cinthya Nuñez - Professional Photographer"
              fill
              style={{ objectFit: 'cover' }}
              className="shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-primary-headings font-light italic">
                "The girl behind the camera"
              </h3>
              
              <div className="space-y-4 text-primary-paragraphs leading-relaxed">
                <p>
                  Born in Mexico City and raised in San Francisco, I bring a unique cultural perspective 
                  to every photograph. My work celebrates the vibrant traditions and authentic beauty 
                  of our communities.
                </p>
                <p>
                  I specialize in capturing cultural events and creating artistic portraits. From the 
                  colorful celebrations of Día de los Muertos and Carnaval to intimate portrait sessions, 
                  I document life's most meaningful moments with artistry and heart.
                </p>
                <p>
                  Every image tells a story. Let me help you tell yours.
                </p>
              </div>
            </div>



            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact"
                className="inline-block bg-button-background hover:bg-button-hover text-button-text px-8 py-3 font-medium tracking-wide transition-all duration-300"
              >
                Let's Create Together
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 