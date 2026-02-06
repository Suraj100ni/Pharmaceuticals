import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const recipient = 'hr@clifepharmaceuticals.com';
    const subject = encodeURIComponent(`Contact Form: ${formData.subject || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Show success message (optional)
    alert('Opening your email client to send the message to hr@clifepharmaceuticals.com');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    
    {
      icon: Mail,
      title: 'Email',
      details: ['info@clifepharma.com', 'support@clifepharma.com'],
      color: 'text-accent'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['123 Pharma Plaza', 'Medical District, HC 12345'],
      color: 'text-primary'
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-24 bg-gradient-to-b from-white to-secondary/30">
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
            Get In Touch
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            We'd Love to <span className="text-primary">Hear From You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or services? Reach out to our team and 
            we'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
         <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 ${info.color === 'text-primary' ? 'bg-secondary' : 'bg-accent/10'} rounded-2xl flex items-center justify-center mb-6`}
              >
                <info.icon className={`w-8 h-8 ${info.color}`} />
              </motion.div>
              <h4 className="text-xl text-gray-900 mb-4">{info.title}</h4>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 mb-1">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-900 mb-2">
                  Full Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  Email Address *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-900 mb-2">
                  Phone Number
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-900 mb-2">
                  Subject *
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="products">Product Information</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="support">Customer Support</option>
                </motion.select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-900 mb-2">
                Message *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-input-background rounded-xl border border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center gap-3"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>

        {/* Map or Additional Info - Commented Out
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-primary p-12 rounded-3xl shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl mb-6">Global Presence</h3>
              <p className="text-lg mb-8 text-white/90">
                With offices and manufacturing facilities across 6 continents, we're committed 
                to delivering quality pharmaceutical products worldwide.
              </p>
              <div className="space-y-4">
                {[
                  { region: 'North America', offices: '12 Offices' },
                  { region: 'Europe', offices: '18 Offices' },
                  { region: 'Asia Pacific', offices: '25 Offices' },
                  { region: 'Latin America', offices: '8 Offices' },
                ].map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                  >
                    <span>{region.region}</span>
                    <span className="text-accent">{region.offices}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🌍', value: '50+', label: 'Countries' },
                { icon: '🏭', value: '15', label: 'Manufacturing Plants' },
                { icon: '👥', value: '10K+', label: 'Employees' },
                { icon: '📦', value: '1000+', label: 'Products' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl text-center shadow-lg"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        End of Commented Section */}
      </div>
    </section>
  );
}
