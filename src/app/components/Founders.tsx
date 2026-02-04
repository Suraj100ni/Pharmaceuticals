import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Quote } from "lucide-react";

interface FoundersProps {
  onBack: () => void;
}

export function Founders({ onBack }: FoundersProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const founders = [
    {
      name: "Nehrika Sharma",
      title: "Managing Director",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5OTU2OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      message:
        '"At C-Life Pharmaceuticals, we see more than medicines - we see lives. This belief is the foundation of everything we do and the driving force behind our commitment to healthcare excellence.\n\nGuided by care, science, and integrity, we are dedicated to improving health and enhancing quality of life through reliable and effective healthcare solutions. Our focus remains on delivering high-quality medicines that meet global standards while addressing the evolving needs of patients and healthcare professionals.\n\nWith a clear vision of "A Vision for Healthier Lives," C-Life Pharmaceuticals continuously strives for innovation, ethical practices, and sustainable growth. We believe that trust, transparency, and responsibility are essential in building long-lasting relationships with doctors, partners, and communities.\n\nAs we move forward, our mission remains unchanged, to serve humanity with compassion, uphold excellence in every endeavor, and contribute meaningfully to a healthier society."',
    },
    {
      name: "Simren Kaur",
      title: "Director of Promotions",
      image: "https://images.unsplash.com/photo-1767362828069-3a8c5324be53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwZGlyZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk5NTY5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      message:
        '"The pharmaceutical industry today is moving beyond short-term objectives toward purpose-driven growth. We are expanding strongly across the country, with a clear vision to become self-manufacturers of high-quality medicines that place patient\'s health, well-being, and trust at the heart of everything we do.\n\nWhat truly sets us apart is our unwavering commitment to every patient we serve, understanding their needs, supporting their health journey, and ensuring they can rely on us for safe and effective therapies. As part of this journey, we are developing state-of-the-art, sustainable manufacturing facilities that allow us to deliver medicines responsibly and reliably. Above all, our work is guided by the people we serve helping every patient live healthier, fuller lives is what drives us every day."',
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
            Founders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leaders driving innovation and excellence in pharmaceutical
            healthcare
          </p>
        </motion.div>

        {/* Founders Messages */}
        <div className="space-y-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative h-96 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-8">
                    <h3 className="text-3xl text-white mb-2">{founder.name}</h3>
                    <p className="text-xl text-white/90">{founder.title}</p>
                    <p className="text-sm text-white/80 mt-1">
                      C Life Pharmaceuticals
                    </p>
                  </div>
                </div>

                {/* Message Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-primary/30" />
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {founder.message.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-right italic text-gray-600">
                      — {founder.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-white shadow-2xl"
        >
          <h2 className="text-3xl lg:text-4xl mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Be part of a team that's dedicated to making a difference in
            healthcare. Explore career opportunities at C Life Pharmaceuticals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="px-8 py-4 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg text-lg"
          >
            Explore Opportunities
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}