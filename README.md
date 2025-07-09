# Nunez Artistry Photography Website

A modern, visually appealing photography business website built with Next.js and Tailwind CSS. The website features a clean, professional aesthetic with a light and dark mode toggle, and uses a color scheme primarily based on purple and pink gradients.

## Features

- Responsive design for all device sizes
- Light and dark mode toggle
- Custom animations and interactive elements
- Parallax scrolling effects
- Custom mouse follower on desktop
- Animated background with particles
- Scroll progress indicator
- Back to top button
- Portfolio gallery with filtering
- Contact form

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd capture-studio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `src/app` - Next.js app directory with routes
- `src/components` - React components
  - `ThemeProvider.tsx` - Theme context provider
  - `Header.tsx` - Navigation header
  - `Footer.tsx` - Site footer
  - `MouseFollower.tsx` - Custom cursor effect
  - `ScrollProgress.tsx` - Scroll progress indicator
  - `BackToTop.tsx` - Back to top button
  - `AnimatedBackground.tsx` - Animated particles background
  - `sections/` - Page section components
    - `HeroSection.tsx` - Hero section with parallax
    - `ServicesSection.tsx` - Services with cards
    - `PortfolioSection.tsx` - Portfolio with filtering
    - `ContactSection.tsx` - Contact form and info
- `src/styles` - Global styles

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to change the primary and secondary color palettes.

### Adding Portfolio Items

Update the `portfolioItems` array in `src/components/sections/PortfolioSection.tsx` with your own portfolio items.

### Modifying Services

Edit the `services` array in `src/components/sections/ServicesSection.tsx` to update your service offerings.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Fonts: Inter (sans-serif) and Playfair Display (serif) from Google Fonts
- Icons from Lucide React 