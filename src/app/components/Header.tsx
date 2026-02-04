import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/app/components/Logo";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({
  activeSection,
  onNavigate,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    {
      id: "products",
      label: "Products",
      hasDropdown: true,
      dropdownItems: [
        "Cardiovascular",
        "Diabetes Care",
        "Neutraceuticals",
        "Gastroenterology",
        "Nephrology",
        "Oncology",
        "Neurology",
        "Ophthalmology",
        "Orthopedics",
        "Pediatrics",
      ],
    },
    { id: "research", label: "Research & Innovation" },
    { id: "sustainability", label: "Sustainability" },
    { id: "news", label: "News" },
    { id: "founders", label: "Founders" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-1"
          : "bg-white/95 backdrop-blur-sm py-2"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between max-w-full">
        {/* Logo - Left Side */}
        <div
          onClick={() => onNavigate("home")}
          className="flex items-center cursor-pointer"
        >
          <Logo />
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("products");
                    }}
                    className={`flex items-center gap-1 transition-colors ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </a>

                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100"
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <a
                          key={dropItem}
                          href="#products"
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate("products");
                            setIsProductsOpen(false);
                          }}
                          className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onNavigate("contact");
            }}
            type="button"
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Careers
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-primary"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate("contact");
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-center"
            >
              Careers
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}