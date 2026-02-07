import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to the highest standards in pharmaceutical manufacturing and research.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Patient-Centric",
      description:
        "Putting patient needs at the forefront of everything we do.",
      color: "text-accent",
    },
    {
      icon: Globe,
      title: "National Reach",
      description:
        "Delivering quality healthcare solutions across multiple Indian states & UT’s.",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Research-Driven Care",
      description:
        "Strengthening healthcare with science-backed formulations and innovation.",
      color: "text-accent",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-white">
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
            About C Life Pharmaceuticals
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Transforming Lives Through{" "}
            <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by responsible innovation, ethical practices
            and strong partnerships, we are committed to
            advancing healthcare with integrity, upholding the
            highest standards of safety, quality and
            transparency in every step we take.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758573466989-bbf14f1db77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2NpZW5jZSUyMGlubm92YXRpb258ZW58MXx8fHwxNzY2NjM2NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical science innovation and pharmaceutical research"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
            >
              <div className="text-4xl text-primary mb-2">
                500K+
              </div>
              <div className="text-gray-600">
                Lives Served Annually
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-gray-900">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At C-Life Pharmaceuticals, we place human lives at
              the heart of everything we do. Our mission is to
              deliver reliable, high-quality and affordable
              pharmaceutical solutions that patients and
              healthcare professionals can trust to improve
              health outcomes and quality of life.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We pursue innovation with purpose, practice ethics
              without compromising and upholding the highest
              standards of safety and quality, because when it
              comes to human lives, nothing else matters.
            </p>

            <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-lg mt-4 text-sm md:text-base">
                Learn More About Us
              </button>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 md:w-16 md:h-16 ${value.color === "text-primary" ? "bg-secondary" : "bg-accent/10"} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}
              >
                <value.icon
                  className={`w-7 h-7 md:w-8 md:h-8 ${value.color}`}
                />
              </motion.div>
              <h4 className="text-lg md:text-xl text-gray-900 mb-2 md:mb-3">
                {value.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
