/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brandi Toole inspired color palette
        primary: {
          background: '#FFFFFF',
          headings: '#74605A',
          paragraphs: '#6C6C6C',
          details: '#E9E2DF',
        },
        accent: {
          background: '#F6F5F1',
          headings: '#74605A',
          paragraphs: '#6C6C6C',
          details: '#D7D7D3',
        },
        button: {
          background: '#B09E99',
          text: '#FFFFFF',
          hover: '#967F78',
        },
        // Keep some original brand colors for cultural elements
        brand: {
          warm: '#74605A',
          cream: '#F6F5F1',
          dusty: '#B09E99',
          sage: '#D7D7D3',
        },
        neutral: {
          'dark-brown': '#74605A',
          'medium-gray': '#6C6C6C',
          'light-gray': '#E9E2DF',
          'cream': '#F6F5F1',
        }
      },
      fontFamily: {
        'sans': ['var(--font-lato)', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'script': ['var(--font-dancing-script)', 'cursive'],
        'serif': ['var(--font-spectral)', 'Playfair Display', 'serif'],
        'display': ['MADE Mirage', 'serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1' }],
        'section': ['2.5rem', { lineHeight: '1.2' }],
        'display': ['3rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
} 