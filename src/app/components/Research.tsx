import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Microscope, Beaker, Users, TrendingUp } from "lucide-react";

export function Research() {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0); // Not used for Pan-India
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

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const frames = 60;
      const increment1 = 70 / frames;
      const increment2 = 10 / frames;
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        setCount1(Math.min(Math.floor(increment1 * frame), 70));
        setCount2(Math.min(Math.floor(increment2 * frame), 10));

        if (frame >= frames) {
          clearInterval(counter);
        }
      }, duration / frames);

      return () => clearInterval(counter);
    }
  }, [isVisible]);

  const innovations = [
    {
      icon: Microscope,
      title: "Research",
      description:
        "Data-driven evaluation of therapeutic needs, market demand, and formulation feasibility to identify high-impact pharmaceutical products.",
    },
    {
      icon: Beaker,
      title: "Formulation & Development",
      description:
        "Strategic development of pharmaceutical formulations in collaboration with GMP-certified manufacturing partners, from concept to market-ready products.",
    },
    {
      icon: Users,
      title: "Quality & Regulatory Excellence",
      description:
        "Robust quality assurance and regulatory oversight ensuring all products comply with applicable CDSCO and WHO-GMP standards.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Partnerships",
      description:
        "Collaborative relationships with experienced manufacturers, suppliers and healthcare stakeholders to deliver reliable and scalable pharmaceutical solutions.",
    },
  ];

  return (
    <section ref={ref} id="research" className="py-24 bg-white">
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
            Research-Driven
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Pioneering the{" "}
            <span className="text-primary">
              Future of Medicine
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            C Life Pharmaceuticals combines market insight,
            regulatory expertise, and strong manufacturing
            partnerships to deliver dependable pharmaceutical
            solutions that meet today's healthcare needs.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 md:p-10 rounded-3xl shadow-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
            >
              {count1}+
            </motion.div>
            <div className="text-base md:text-lg lg:text-xl">
              Products Across Key Therapies
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-accent to-accent/80 text-white p-8 md:p-10 rounded-3xl shadow-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
              className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
            >
              {count2}+
            </motion.div>
            <div className="text-base md:text-lg lg:text-xl">
              Certified Manufacturing Partners
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 text-white p-8 md:p-10 rounded-3xl shadow-2xl text-center sm:col-span-2 md:col-span-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring" }}
              className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
            >
              Pan-India
            </motion.div>
            <div className="text-base md:text-lg lg:text-xl">Distribution Network</div>
          </motion.div>
        </motion.div>

        {/* Innovation Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1738778151585-36b19054059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHJlc2VhcmNoJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjY1NzA1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pharmaceutical research laboratory conducting innovative experiments"
                className="w-full h-[600px] object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={
                isVisible ? { opacity: 1, rotate: 0 } : {}
              }
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="absolute top-8 right-8 bg-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-primary text-3xl mb-2">
                🏆
              </div>
              <div className="text-gray-900">
                Innovation Award
              </div>
              <div className="text-sm text-gray-600">2024</div>
            </motion.div>
          </motion.div>

          {/* Innovation Cards */}
          <div className="grid gap-6">
            {innovations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
                whileHover={{
                  x: 10,
                  boxShadow:
                    "0 20px 40px rgba(45, 142, 60, 0.1)",
                }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
