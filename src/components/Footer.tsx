'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-accent-background border-t border-primary-details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-primary-headings font-light mb-2">
                Nuñez Artistry
              </h3>
              <p className="text-sm text-primary-paragraphs uppercase tracking-widest font-light">
                Photography for Culture + Community
              </p>
            </div>
            
            <p className="text-primary-paragraphs leading-relaxed">
              San Francisco-based photographer celebrating culture, community, and 
              authentic storytelling through the lens.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-button-background" />
                <a 
                  href="mailto:cinthya@nunezartistry.com" 
                  className="text-primary-paragraphs hover:text-button-background transition-colors"
                >
                  cinthya@nunezartistry.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-button-background" />
                <a 
                  href="tel:+1234567890" 
                  className="text-primary-paragraphs hover:text-button-background transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-button-background" />
                <span className="text-primary-paragraphs">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/nunezartistry" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-button-background hover:text-button-hover transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-primary-headings font-light">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link 
                href="/about"
                className="text-primary-paragraphs hover:text-button-background transition-colors font-light"
              >
                About
              </Link>
              <Link 
                href="/portfolio"
                className="text-primary-paragraphs hover:text-button-background transition-colors font-light"
              >
                Portfolio
              </Link>
              <Link 
                href="/services"
                className="text-primary-paragraphs hover:text-button-background transition-colors font-light"
              >
                Services
              </Link>
              <Link 
                href="/contact"
                className="text-primary-paragraphs hover:text-button-background transition-colors font-light"
              >
                Contact
              </Link>
              <Link 
                href="/blog"
                className="text-primary-paragraphs hover:text-button-background transition-colors font-light"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-details mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-paragraphs text-sm font-light">
              © 2024 Nuñez Artistry. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy"
                className="text-primary-paragraphs hover:text-button-background transition-colors font-light"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-primary-paragraphs hover:text-button-background transition-colors font-light"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 