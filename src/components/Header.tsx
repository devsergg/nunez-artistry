'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About Cinthya', href: '/about' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary-background shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Left Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.slice(0, 2).map((item) => (
              <Link 
                key={item.id} 
                href={item.href}
                className={`
                  text-sm font-medium tracking-wide transition-colors duration-200
                  ${isScrolled 
                    ? 'text-primary-headings hover:text-button-background' 
                    : 'text-white hover:text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                  }
                  ${activeTab === item.id ? 'border-b-2 border-current' : ''}
                `}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo Section */}
          <Link href="/" className="text-center">
            <h1 className={`font-serif text-2xl md:text-3xl font-light tracking-wide transition-colors duration-200 ${
              isScrolled 
                ? 'text-primary-headings' 
                : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
            }`}>
              Nuñez Artistry
            </h1>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.slice(2).map((item) => (
              <Link 
                key={item.id} 
                href={item.href}
                className={`
                  text-sm font-medium tracking-wide transition-colors duration-200
                  ${isScrolled 
                    ? 'text-primary-headings hover:text-button-background' 
                    : 'text-white hover:text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                  }
                  ${activeTab === item.id ? 'border-b-2 border-current' : ''}
                `}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className={`transition-colors duration-200 ${
                isScrolled ? 'text-primary-headings' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-details bg-primary-background">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href}
                  className={`
                    block px-4 py-2 text-sm font-medium tracking-wide
                    transition-colors duration-200
                    text-primary-headings hover:text-button-background
                    ${activeTab === item.id ? 'border-l-4 border-button-background' : ''}
                  `}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 