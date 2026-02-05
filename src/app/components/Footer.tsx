import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import { Logo } from '@/app/components/Logo';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    'Company': ['About Us', 'Leadership', 'Careers', 'Investors', 'Newsroom'],
    'Products': ['Cardiovascular', 'Diabetes Care', 'Neutraceuticals', 'Gastroenterology', 'Nephrology', 'Oncology', 'Neurology', 'Ophthalmology', 'Orthopedics', 'Pediatrics'],
    'Resources': ['Research & Development', 'Clinical Trials', 'Quality Assurance', 'Publications', 'Downloads'],
    'Support': ['Contact Us', 'Customer Service', 'FAQs', 'Adverse Events', 'Product Support'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  // Get href for footer links
  const getHrefForLink = (linkText: string): string => {
    const linkMap: Record<string, string> = {
      'About Us': '#about',
      'Leadership': '#about',
      'Careers': '#contact',
      'Investors': '#about',
      'Newsroom': '#news',
      'Cardiovascular': '#products',
      'Diabetes Care': '#products',
      'Neutraceuticals': '#products',
      'Gastroenterology': '#products',
      'Nephrology': '#products',
      'Oncology': '#products',
      'Neurology': '#products',
      'Ophthalmology': '#products',
      'Orthopedics': '#products',
      'Pediatrics': '#products',
      'Research & Development': '#research',
      'Clinical Trials': '#research',
      'Quality Assurance': '#research',
      'Publications': '#research',
      'Downloads': '#research',
      'Contact Us': '#contact',
      'Customer Service': '#contact',
      'FAQs': '#contact',
      'Adverse Events': '#contact',
      'Product Support': '#contact',
    };
    return linkMap[linkText] || '#';
  };

  // Handle footer link clicks
  const handleLinkClick = (linkText: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!onNavigate) return;
    
    // Map footer links to sections
    const linkMap: Record<string, string> = {
      'About Us': 'about',
      'Leadership': 'about',
      'Careers': 'contact',
      'Investors': 'about',
      'Newsroom': 'news',
      'Cardiovascular': 'products',
      'Diabetes Care': 'products',
      'Neutraceuticals': 'products',
      'Gastroenterology': 'products',
      'Nephrology': 'products',
      'Oncology': 'products',
      'Neurology': 'products',
      'Ophthalmology': 'products',
      'Orthopedics': 'products',
      'Pediatrics': 'products',
      'Research & Development': 'research',
      'Clinical Trials': 'research',
      'Quality Assurance': 'research',
      'Publications': 'research',
      'Downloads': 'research',
      'Contact Us': 'contact',
      'Customer Service': 'contact',
      'FAQs': 'contact',
      'Adverse Events': 'contact',
      'Product Support': 'contact',
    };
    
    const section = linkMap[linkText];
    if (section) {
      onNavigate(section);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('home');
              }}
              whileHover={{ scale: 1.05 }}
              className="mb-6 block cursor-pointer"
            >
              <Logo variant="footer" />
            </motion.a>
            <p className="text-gray-400 mb-6">
              A Vision For Healthier Lives.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h4 className="text-lg mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={getHrefForLink(link)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-primary transition-colors"
                      onClick={(e) => handleLinkClick(link, e)}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a href="#" whileHover={{ color: '#2D8E3C' }} className="transition-colors">
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#2D8E3C' }} className="transition-colors">
              Terms of Use
            </motion.a>
            <motion.a href="#" whileHover={{ color: '#2D8E3C' }} className="transition-colors">
              Cookie Policy
            </motion.a>
          </div>
          <div>
            <p>© 2024 C Life Pharmaceuticals. All rights reserved.</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto">
            This website is for informational purposes only and does not constitute medical advice. 
            Always consult with a qualified healthcare provider regarding any medical condition or treatment. 
            Products and services may vary by region.
          </p>
        </div>
      </div>
    </footer>
  );
}
