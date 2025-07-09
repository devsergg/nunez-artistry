'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredImages = [
    {
      src: '/top/Dia_De_los_muertos-3343.jpg',
      title: 'Día de los Muertos',
      description: 'Honoring tradition and celebrating life through vibrant cultural photography'
    },
    {
      src: '/top/Dia_De_los_muertos--2.jpg',
      title: 'Día de los Muertos Celebration',
      description: 'Capturing the essence of Mexican cultural traditions'
    },
    {
      src: '/top/Carnaval_-2632.jpg',
      title: 'Carnaval Energy',
      description: 'The vibrant spirit of San Francisco\'s street festival'
    },
    {
      src: '/top/Carnaval_-2501.jpg',
      title: 'Carnaval Colors',
      description: 'Explosive colors and joyful celebrations'
    },
    {
      src: '/top/Carnaval_-2402.jpg',
      title: 'Carnaval Community',
      description: 'Bringing people together through cultural celebration'
    },
    {
      src: '/top/H&AF-07205.jpg',
      title: 'Artistic Portraits',
      description: 'Intimate storytelling through expressive portraiture'
    },
    {
      src: '/top/HWF-07604.jpg',
      title: 'Cultural Heritage',
      description: 'Preserving the beauty of cultural traditions'
    },
    {
      src: '/top/OTL--2.jpg',
      title: 'Community Stories',
      description: 'Documenting the authentic moments of cultural connection'
    }
  ];

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      
      if (scrollPosition <= window.innerHeight) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        heroRef.current.style.opacity = `${1 - scrollPosition / (window.innerHeight / 1.2)}`;
      }
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [featuredImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {featuredImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Counter */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-light z-20">
        {String(currentSlide + 1).padStart(2, '0')} / {String(featuredImages.length).padStart(2, '0')}
      </div>

      {/* Content Overlay */}
      <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="font-serif text-6xl md:text-8xl text-white font-light tracking-wide">
              Photography
            </h1>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-light italic">
              is Poetry
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white font-light tracking-wide max-w-2xl mx-auto"
          >
            Capturing the vibrant spirit of culture and community through the lens of artistry
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link 
              href="/portfolio"
              className="inline-block bg-button-background hover:bg-button-hover text-button-text px-8 py-3 text-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10" onClick={scrollToNext}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
} 