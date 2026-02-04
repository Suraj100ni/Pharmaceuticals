import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Products } from '@/app/components/Products';
import { Research } from '@/app/components/Research';
import { Sustainability } from '@/app/components/Sustainability';
import { News } from '@/app/components/News';
import { Contact } from '@/app/components/Contact';
import { Founders } from '@/app/components/Founders';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFoundersPage, setShowFoundersPage] = useState(false);

  useEffect(() => {
    // Track scroll position for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'products', 'research', 'sustainability', 'news', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add SEO meta tags
  useEffect(() => {
    // Set page title
    document.title = 'C Life Pharmaceuticals - A Vision For Healthier Lives';

    // Create meta tags
    const metaTags = [
      { name: 'description', content: 'C Life Pharmaceuticals is a leading pharmaceutical company committed to improving global health through innovative medicines, cutting-edge research, and sustainable practices. Serving 50+ countries worldwide.' },
      { name: 'keywords', content: 'pharmaceuticals, healthcare, medicine, drugs, research, innovation, cardiovascular, diabetes, respiratory, oncology, sustainable pharma, clinical trials' },
      { property: 'og:title', content: 'C Life Pharmaceuticals - A Vision For Healthier Lives' },
      { property: 'og:description', content: 'Leading pharmaceutical innovation with over 25 years of excellence in research, manufacturing, and healthcare solutions.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'C Life Pharmaceuticals - A Vision For Healthier Lives' },
      { name: 'twitter:description', content: 'Leading pharmaceutical innovation with over 25 years of excellence in research, manufacturing, and healthcare solutions.' },
      { name: 'author', content: 'C Life Pharmaceuticals' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(
        `meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`
      );
      
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "C Life Pharmaceuticals",
      "description": "A leading pharmaceutical company committed to improving global health",
      "url": "https://www.clifepharma.com",
      "logo": "https://www.clifepharma.com/logo.png",
      "foundingDate": "1999",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "Customer Service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://www.facebook.com/clifepharma",
        "https://www.twitter.com/clifepharma",
        "https://www.linkedin.com/company/clifepharma"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleNavigate = (section: string) => {
    if (section === 'founders') {
      setShowFoundersPage(true);
      return;
    }
    
    setActiveSection(section);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }
  };

  const handleBackFromFounders = () => {
    setShowFoundersPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Semantic HTML for SEO */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded">
        Skip to main content
      </a>

      {/* Conditionally render Founders page or Main site */}
      {showFoundersPage ? (
        <Founders onBack={handleBackFromFounders} />
      ) : (
        <>
          {/* Header */}
          <Header activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Main Content */}
          <main id="main-content">
            {/* Hero Section */}
            <section id="home" aria-label="Home">
              <Hero onNavigate={handleNavigate} />
            </section>

            {/* About Section */}
            <section id="about" aria-label="About Us">
              <About />
            </section>

            {/* Products Section */}
            <section id="products" aria-label="Products">
              <Products />
            </section>

            {/* Research Section */}
            <section id="research" aria-label="Research & Innovation">
              <Research />
            </section>

            {/* Sustainability Section */}
            <section id="sustainability" aria-label="Sustainability">
              <Sustainability />
            </section>

            {/* News Section */}
            <section id="news" aria-label="News & Updates">
              <News />
            </section>

            {/* Contact Section */}
            <section id="contact" aria-label="Contact Us">
              <Contact />
            </section>
          </main>

          {/* Footer */}
          <Footer onNavigate={handleNavigate} />
        </>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Loading Animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed inset-0 bg-white z-50 pointer-events-none flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1,
            repeat: 1,
          }}
          className="text-primary"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" />
            <path d="M50 20 L50 50 L70 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}