import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';

export function News() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-secondary text-primary rounded-full mb-4"
          >
            Latest News & Updates
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Stay Informed With <span className="text-primary">Our Latest News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep up with the latest developments, breakthroughs, and achievements from 
            C Life Pharmaceuticals.
          </p>
        </motion.div>

        {/* Press Releases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-secondary to-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl text-gray-900">Press Releases</h3>
              </div>
              <p className="text-base md:text-lg text-gray-600">
                Access our complete archive of press releases, financial reports, and 
                corporate announcements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-lg text-sm md:text-base whitespace-nowrap"
              >
                View All Press Releases
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 md:px-8 md:py-4 bg-white text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all shadow-lg text-sm md:text-base whitespace-nowrap"
              >
                Subscribe to Updates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
