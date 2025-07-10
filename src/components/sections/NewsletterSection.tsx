'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // TODO: Replace with actual API call - DO NOT log sensitive data
    setFormData({ firstName: '', email: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-accent-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary-headings font-light mb-4">
            Stay Connected
          </h2>
          <div className="w-24 h-px bg-button-background mx-auto mb-8"></div>
          <p className="text-lg text-primary-paragraphs mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our community for photography insights, cultural event highlights, 
            portrait sessions, and exclusive photography offers. Celebrating culture, 
            art, and authentic storytelling together.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto space-y-6"
        >
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-accent-details rounded-none focus:outline-none focus:border-button-background transition-colors text-primary-paragraphs bg-primary-background placeholder-primary-paragraphs/60"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-accent-details rounded-none focus:outline-none focus:border-button-background transition-colors text-primary-paragraphs bg-primary-background placeholder-primary-paragraphs/60"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-button-background text-button-text px-8 py-4 rounded-none font-medium tracking-wider hover:bg-button-hover transition-colors disabled:opacity-50 uppercase text-sm"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-primary-paragraphs/70 mt-6"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
} 