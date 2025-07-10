import '../styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { ScrollProgress } from '@/components/ScrollProgress';
import { BackToTop } from '@/components/BackToTop';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Lato, Spectral, Dancing_Script } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-spectral',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

export const metadata = {
  title: 'Nuñez Artistry | Be Fierce, Be Confident, Be You',
  description: 'San Francisco-based photographer and makeup artist specializing in cultural events, artistic portraits, and authentic storytelling. Celebrating heritage through vibrant imagery.',
  keywords: 'photography, cultural events, portraits, makeup artistry, San Francisco, Mexican heritage, Día de los Muertos, Carnaval',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async src="//www.instagram.com/embed.js"></script>
      </head>
      <body className={`${lato.variable} ${spectral.variable} ${dancingScript.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <AnimatedBackground />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
} 