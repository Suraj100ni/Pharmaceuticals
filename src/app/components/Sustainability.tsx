import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

export function Sustainability() {
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
    <section
      ref={ref}
      id="sustainability"
      className="py-24 bg-gradient-to-b from-white to-secondary/30"
    >
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
            className="inline-block px-6 py-2 bg-white text-primary rounded-full border border-primary/20 mb-4"
          >
            Vision & Infrastructure
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Building a State-of-the-Art{" "}
            <span className="text-primary">
              Manufacturing Facility
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            C Life Pharmaceuticals plans to establish a
            state-of-the-art manufacturing facility focused on
            quality, compliance, and operational excellence.
            This future facility is envisioned to align with
            WHO-GMP standards, advanced automation, and
            sustainable manufacturing practices.
          </p>
        </motion.div>

        {/* Hero Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1759548845813-12a8cfc96b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eSUyMGdyZWVuJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2OTgzNTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="State-of-the-art pharmaceutical manufacturing facility"
            className="w-full h-64 md:h-80 lg:h-[500px] object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent flex items-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
              <div className="max-w-xl lg:max-w-2xl text-white py-4">
                <h3 className="text-xl md:text-2xl lg:text-4xl mb-2 md:mb-3 lg:mb-4 font-semibold">
                  Environmental Commitment
                </h3>
                <p className="text-sm md:text-base lg:text-lg mb-3 md:mb-4 lg:mb-6 text-white/90 leading-snug">
                  At C Life Pharmaceuticals, sustainability is
                  an integral part of our long-term vision. We
                  promote environmentally responsible practices
                  across our value chain through collaboration
                  with compliant partners. Looking ahead, we
                  plan to establish a state-of-the-art
                  manufacturing facility designed around
                  sustainability, energy efficiency, and
                  regulatory compliance. Our goal is to support
                  responsible growth while minimizing
                  environmental impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Responsibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-4 md:mb-6">
                Social Responsibility
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                At C Life Pharmaceuticals, we believe
                responsible growth goes hand in hand with social
                impact. Our focus is on improving healthcare
                access, supporting community well-being and
                fostering ethical business practices through
                meaningful collaborations and initiatives.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Healthcare Access",
                    value: "2M+ Patients",
                  },
                  {
                    title: "Community Programs",
                    value: "150+ Initiatives",
                  },
                  {
                    title: "Educational Support",
                    value: "50K+ Students",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isVisible ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-secondary rounded-xl"
                  >
                    <span className="text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-primary">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-lg text-sm md:text-base"
              >
                Learn More About CSR
              </motion.button>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  icon: "🌍",
                  title: "Community Impact",
                  value: "Promoting responsible healthcare practices and long-term social value.",
                },
                {
                  icon: "❤️",
                  title: "Patient-Centric Approach",
                  value: "Focused on safety, quality and reliability across our product portfolio.",
                },
                {
                  icon: "🎓",
                  title: "Education & Awareness",
                  value: "Supporting health education and awareness initiatives in collaboration with partners.",
                },
                {
                  icon: "🤝",
                  title: "Collaborations",
                  value: "Working with healthcare stakeholders and organizations to amplify social impact.",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isVisible ? { opacity: 1, scale: 1 } : {}
                  }
                  transition={{
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary to-primary/80 text-white p-4 md:p-6 rounded-2xl text-center shadow-lg"
                >
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-xs md:text-sm mb-1 md:mb-2 opacity-90 font-semibold">
                    {stat.title}
                  </div>
                  <div className="text-[10px] md:text-xs leading-tight">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
