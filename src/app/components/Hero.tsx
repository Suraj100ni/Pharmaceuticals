import { motion } from "motion/react";
import { ArrowRight, Microscope, Heart, Leaf } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/4 -right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl text-gray-900 leading-tight mb-4">
                A Vision For <br />
                <span className="text-primary">
                  Healthier Lives
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              C-Life Pharmaceuticals is committed to improving
              lives through high-quality, reliable and ethically
              driven healthcare solutions. Guided by science and
              care, we strive to deliver trusted medicines that
              support healthier communities and a better future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#products"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 30px rgba(45, 142, 60, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("products");
                }}
                className="px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg text-sm md:text-base"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>

              <motion.a
                href="#research"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("research");
                }}
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all shadow-lg text-sm md:text-base"
              >
                Our Research
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 md:gap-6 pt-8"
            >
              {[
                { value: "20+", label: "Indian States & UT's" },
                { value: "70+", label: "Quality Products" },
                { value: "500K+", label: "Lives Served" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    type: "spring",
                  }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl text-primary mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative px-4 md:px-0"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 max-w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1738778151585-36b19054059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHJlc2VhcmNoJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjY1NzA1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pharmaceutical research laboratory with advanced equipment"
                className="rounded-3xl shadow-2xl w-full h-auto max-w-full"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:block absolute -bottom-8 -left-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 z-20"
            >
              <div className="text-primary mb-2 text-sm md:text-base">
                ✓ ISO Certified
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                Quality Assured
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:block absolute -top-8 -right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 z-20"
            >
              <div className="text-accent mb-2 text-sm md:text-base">
                ♥ Patient First
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                Healthcare Focus
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
