import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Heart, Activity, Wind, Shield, ArrowRight, Droplet, Sparkles, Eye, Bone, Baby } from "lucide-react";

export function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const therapyAreas = [
    {
      icon: Heart,
      title: "Cardiovascular",
      description:
        "Comprehensive solutions for heart health and cardiovascular diseases.",
      color: "bg-red-50",
      iconColor: "text-red-500",
      borderColor: "border-red-200",
    },
    {
      icon: Activity,
      title: "Diabetes Care",
      description:
        "Advanced medications for effective diabetes management and control.",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200",
    },
    {
      icon: Wind,
      title: "Neutraceuticals",
      description:
        "Science-backed nutritional solutions designed to support overall health, wellness and preventive care.",
      color: "bg-cyan-50",
      iconColor: "text-cyan-500",
      borderColor: "border-cyan-200",
    },
    {
      icon: Shield,
      title: "Gastroenterology",
      description:
        "Effective therapies for digestive health, supporting the management of gastrointestinal and liver-related conditions.",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
      borderColor: "border-purple-200",
    },
    {
      icon: ArrowRight,
      title: "Nephrology",
      description:
        "Reliable treatments focused on kidney health and the management of renal and metabolic disorders.",
      color: "bg-green-50",
      iconColor: "text-green-500",
      borderColor: "border-green-200",
    },
    {
      icon: Droplet,
      title: "Oncology",
      description:
        "Advanced treatments for cancer, providing hope and support to patients and their families.",
      color: "bg-pink-50",
      iconColor: "text-pink-500",
      borderColor: "border-pink-200",
    },
    {
      icon: Sparkles,
      title: "Neurology",
      description:
        "Innovative solutions for neurological disorders, improving the quality of life for patients.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-500",
      borderColor: "border-yellow-200",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description:
        "Specialized treatments for eye health, ensuring clear vision and overall ocular well-being.",
      color: "bg-gray-50",
      iconColor: "text-gray-500",
      borderColor: "border-gray-200",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description:
        "Effective therapies for bone and joint health, supporting the management of musculoskeletal conditions.",
      color: "bg-orange-50",
      iconColor: "text-orange-500",
      borderColor: "border-orange-200",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description:
        "Specialized care for children, addressing their unique healthcare needs with precision and compassion.",
      color: "bg-teal-50",
      iconColor: "text-teal-500",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <section
      ref={ref}
      id="products"
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
            Our Therapy Areas
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            <span className="text-primary">
              Focused Solutions for{" "}
            </span>
            Better Health
            {/* <span className="text-primary">for </span> */}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of high-quality pharmaceutical
            products developed to support effective disease
            management across multiple therapeutic segments,
            addressing key healthcare needs with safety, quality
            and care at the core.
          </p>
        </motion.div>

        {/* Interactive Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {therapyAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              onClick={() => setActiveTab(index)}
              className={`${area.color} p-8 rounded-3xl cursor-pointer transition-all border-2 flex flex-col h-full ${
                activeTab === index
                  ? area.borderColor
                  : "border-transparent"
              } ${activeTab === index ? "shadow-2xl" : "shadow-lg"}`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md`}
              >
                <area.icon
                  className={`w-8 h-8 ${area.iconColor}`}
                />
              </motion.div>

              <h3 className="text-2xl text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {area.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full py-3 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-colors shadow-md"
              >
                Explore Products
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Product Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNpbmUlMjBwaWxsc3xlbnwxfHx8fDE3NjY2MzY3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthcare medicine and pharmaceutical products"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center">
            <div className="container mx-auto px-4 md:px-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-2xl text-white"
              >
                <h3 className="text-4xl mb-4">
                  Quality You Can Trust
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  C Life Pharmaceuticals partners with certified
                  manufacturing facilities that comply with
                  WHO-GMP and applicable regulatory guidelines,
                  ensuring consistent quality, safety, and
                  efficacy across its product portfolio.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg"
                >
                  View Product Catalog
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quality Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            "WHO-GMP",
            "FDA Approved",
            "ISO 9001:2015",
            "EMA Certified",
          ].map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="text-2xl text-primary mb-2">
                ✓
              </div>
              <div className="text-gray-900">{cert}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}