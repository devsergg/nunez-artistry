'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Cultural Authenticity",
      description: "Celebrating the genuine beauty and traditions of diverse communities with respect and understanding."
    },
    {
      icon: Camera,
      title: "Artistic Vision",
      description: "Combining technical expertise with creative storytelling to capture moments that speak to the soul."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Building meaningful relationships with clients and subjects to create images that truly represent their stories."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Committed to delivering exceptional quality and service in every project and interaction."
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/top/CNV...-2441.jpg"
            alt="Cinthya Nuñez Photography"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-light mb-4"
          >
            About Cinthya
          </motion.h1>

        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-primary-headings font-light mb-6">
                  My Story
                </h2>
                <div className="w-24 h-px bg-button-background mb-8"></div>
              </div>
              
              <div className="space-y-6 text-primary-paragraphs leading-relaxed">
                <p>
                  Born in Mexico City and raised in San Francisco, my journey with photography began 
                  as a way to bridge two worlds - the vibrant traditions of my Mexican heritage and 
                  the diverse cultural landscape of the Bay Area.
                </p>
                <p>
                  What started as documenting family celebrations evolved into a deep passion for 
                  capturing the authentic stories of communities. I believe that every photograph 
                  should honor the subject's truth, celebrating their culture, identity, and unique 
                  beauty.
                </p>
                <p>
                  Through my lens, I seek to preserve moments that might otherwise be forgotten - 
                  the laughter during Día de los Muertos celebrations, the pride in a quinceañera's 
                  eyes, the joy of Carnaval in the streets of San Francisco.
                </p>
              </div>

              <blockquote className="font-serif text-2xl text-primary-headings font-light italic border-l-4 border-button-background pl-6">
                "Photography is poetry with light - each image tells a story that words alone cannot capture."
              </blockquote>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden shadow-lg">
                <Image
                  src="/top/H&AF-07205.jpg"
                  alt="Cinthya at work"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-accent-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-primary-headings font-light mb-4">
              My Values
            </h2>
            <div className="w-24 h-px bg-button-background mx-auto mb-6"></div>
            <p className="text-primary-paragraphs max-w-2xl mx-auto leading-relaxed">
              The principles that guide my work and relationships with every client
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-button-background rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl text-primary-headings font-light">
                      {value.title}
                    </h3>
                    <p className="text-primary-paragraphs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative overflow-hidden shadow-lg">
                <Image
                  src="/top/HWF-06185.jpg"
                  alt="Cultural event photography"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-primary-headings font-light mb-6">
                  Experience & Expertise
                </h2>
                <div className="w-24 h-px bg-button-background mb-8"></div>
              </div>
              
              <div className="space-y-6 text-primary-paragraphs leading-relaxed">
                <p>
                  With over 7 years of experience in cultural and portrait photography, I've had 
                  the privilege of documenting hundreds of celebrations, from intimate family 
                  gatherings to large community festivals throughout the Bay Area.
                </p>
                <p>
                  My specialization in cultural events stems from my deep understanding of 
                  traditions and customs. I know when to capture the ceremonial moments and 
                  when to step back and observe, always respecting the sacred nature of 
                  cultural celebrations.
                </p>
                <p>
                  Whether it's a quinceañera, wedding, Día de los Muertos celebration, or 
                  professional portrait session, I bring the same level of care, creativity, 
                  and cultural sensitivity to every project.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-primary-details">
                <div className="text-center">
                  <div className="text-3xl font-serif text-button-background font-light">500+</div>
                  <div className="text-sm text-primary-paragraphs uppercase tracking-wide">Events Captured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-button-background font-light">7+</div>
                  <div className="text-sm text-primary-paragraphs uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-primary-headings font-light">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-primary-paragraphs text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you're planning a cultural celebration, need professional portraits, 
              or want to document a special moment, I'd love to help tell your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-button-background hover:bg-button-hover text-button-text px-8 py-3 font-medium tracking-wide transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                href="/portfolio"
                className="inline-block border border-button-background text-button-background hover:bg-button-background hover:text-button-text px-8 py-3 font-medium tracking-wide transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 