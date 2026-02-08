import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Quote, Sparkles, Zap, Target, Lightbulb } from "lucide-react";
import niharikaImage from "figma:asset/daf10a17dc0c9c4d05d5dc26c4e84cb81f7b3566.png";

interface FoundersProps {
  onBack: () => void;
}

interface Founder {
  name: string;
  title: string;
  initials: string;
  color: string;
  icon: any;
  image?: string;
  message: string[];
}

export function Founders({ onBack }: FoundersProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const founders: Founder[] = [
    {
      name: "Niharika Verma",
      title: "Managing Director",
      initials: "NV",
      color: "from-primary to-emerald-600",
      icon: Target,
      image: niharikaImage,
      message: [
        "At C-Life Pharmaceuticals, we see more than medicines - we see lives. This belief is the foundation of everything we do and the driving force behind our commitment to healthcare excellence.",
        "Guided by care, science, and integrity, we are dedicated to improving health and enhancing quality of life through reliable and effective healthcare solutions. Our focus remains on delivering high-quality medicines that meet global standards while addressing the evolving needs of patients and healthcare professionals.",
        "With a clear vision of \"A Vision for Healthier Lives,\" C-Life Pharmaceuticals continuously strives for innovation, ethical practices, and sustainable growth. We believe that trust, transparency, and responsibility are essential in building long-lasting relationships with doctors, partners, and communities.",
        "As we move forward, our mission remains unchanged, to serve humanity with compassion, uphold excellence in every endeavor, and contribute meaningfully to a healthier society."
      ],
    },
    {
      name: "Simren Kaur",
      title: "Promoter Director",
      initials: "SK",
      color: "from-accent to-orange-600",
      icon: Sparkles,
      message: [
        "The pharmaceutical industry today is moving beyond short-term objectives toward purpose-driven growth. We are expanding strongly across the country, with a clear vision to become self-manufacturers of high-quality medicines that place patient's health, well-being, and trust at the heart of everything we do.",
        "What truly sets us apart is our unwavering commitment to every patient we serve, understanding their needs, supporting their health journey, and ensuring they can rely on us for safe and effective therapies. As part of this journey, we are developing state-of-the-art, sustainable manufacturing facilities that allow us to deliver medicines responsibly and reliably. Above all, our work is guided by the people we serve helping every patient live healthier, fuller lives is what drives us every day."
      ],
    },
    {
      name: "Surinder Karan Singh",
      title: "Strategic Advisor",
      initials: "SKS",
      color: "from-blue-600 to-indigo-600",
      icon: Lightbulb,
      message: [
        "At C-Life Pharmaceuticals, we believe that healthcare is not just about medicines—it is about improving lives and building trust through science, integrity, and responsibility.",
        "As Strategic Advisor, my role is to support the leadership team in shaping long-term vision, strengthening governance, and ensuring that every strategic decision aligns with our core purpose: delivering safe, effective, and affordable healthcare solutions.",
        "In an ever-evolving healthcare landscape, C-Life Pharmaceuticals is committed to continuous innovation, ethical practices, and patient-centricity. The company's focus on quality, compliance, and sustainable growth positions it strongly to meet the needs of healthcare professionals and patients alike.",
        "I am confident that with its dedicated team, strong values, and clear vision, C-Life Pharmaceuticals will continue to grow as a trusted name in the pharmaceutical industry and contribute meaningfully to healthier communities."
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30 py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Back to Home</span>
        </motion.button>

        {/* Header */}
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
            Leadership Insights
          </motion.div>
          <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            <span className="text-primary">Meet Our </span>
            Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leaders driving innovation and excellence in pharmaceutical
            healthcare
          </p>
        </motion.div>

        {/* Founders Messages */}
        <div className="space-y-16">
          {founders.map((founder, index) => {
            const IconComponent = founder.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
                    backgroundSize: '20px 20px',
                  }} />
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Avatar/Photo Section */}
                  {founder.image ? (
                    // Real Photo Section for Niharika Verma
                    <div className="relative min-h-[500px] lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      {/* Professional Photo */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                        className="h-full flex items-center justify-center"
                      >
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center' }}
                        />
                      </motion.div>
                      
                      {/* Overlay with Name and Title */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                          className="text-center"
                        >
                          <h3 className="text-2xl md:text-3xl text-white mb-1 md:mb-2">{founder.name}</h3>
                          <p className="text-lg md:text-xl text-white/90 mb-1">{founder.title}</p>
                          <p className="text-xs md:text-sm text-white/70">C Life Pharmaceuticals</p>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    // Tech Avatar Section for other founders
                    <div className="relative min-h-[500px] lg:h-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                      {/* Animated Gradient Orbs */}
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
                        className={`absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br ${founder.color} rounded-full blur-3xl opacity-30`}
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
                        className={`absolute bottom-1/4 right-1/4 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br ${founder.color} rounded-full blur-3xl opacity-20`}
                      />

                      {/* Hexagonal Pattern */}
                      <div className="absolute inset-0 opacity-10 hidden md:block">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="absolute border border-white/20"
                            style={{
                              width: `${100 + i * 50}px`,
                              height: `${100 + i * 50}px`,
                              top: `calc(50% - ${50 + i * 25}px)`,
                              left: `calc(50% - ${50 + i * 25}px)`,
                              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            }}
                          />
                        ))}
                      </div>

                      {/* Center Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-12 z-10">
                        {/* Animated Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                          className="mb-4 md:mb-8"
                        >
                          <div className={`relative w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br ${founder.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl`}>
                            <IconComponent className="w-10 h-10 md:w-16 md:h-16 text-white" />
                            {/* Pulse Effect */}
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              className={`absolute inset-0 bg-gradient-to-br ${founder.color} rounded-xl md:rounded-2xl`}
                            />
                          </div>
                        </motion.div>

                        {/* Initials Display */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                          className="text-center mb-4 md:mb-6"
                        >
                          <div className={`text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${founder.color} bg-clip-text text-transparent mb-2 md:mb-4`}>
                            {founder.initials}
                          </div>
                          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-2 md:mb-4" />
                        </motion.div>

                        {/* Name and Title */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                          className="text-center px-4"
                        >
                          <h3 className="text-2xl md:text-3xl text-white mb-1 md:mb-2">{founder.name}</h3>
                          <p className="text-lg md:text-xl text-white/80 mb-1">{founder.title}</p>
                          <p className="text-xs md:text-sm text-white/60">C Life Pharmaceuticals</p>
                        </motion.div>

                        {/* Animated Lines */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                          <motion.div
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className={`h-full w-1/3 bg-gradient-to-r ${founder.color}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message Section */}
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center relative bg-gray-50">
                    {/* Message Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                      className="space-y-6 md:space-y-8"
                    >
                      {founder.message
                        .map((paragraph, pIndex) => (
                        <motion.div
                          key={pIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + pIndex * 0.1 }}
                          className="relative"
                        >
                          <div className="border-l-4 border-primary pl-4 md:pl-6 py-1">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                              {paragraph.trim()}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Signature */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      className="mt-12 md:mt-16 text-right"
                    >
                      <p className="text-primary italic text-lg md:text-xl mb-2">
                        — {founder.name}
                      </p>
                      {/* Animated Underline */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isVisible ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                        className="h-0.5 w-32 md:w-40 ml-auto bg-primary origin-right"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">Join Our Mission</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Be part of a team that's dedicated to making a difference in
            healthcare. Explore career opportunities at C Life Pharmaceuticals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="px-6 py-3 md:px-8 md:py-4 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg text-sm md:text-lg"
          >
            Explore Opportunities
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
