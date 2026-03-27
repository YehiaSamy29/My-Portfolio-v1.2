import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import iconImage from "@/assets/icon.jpeg";

const sectionIds = ["hero", "about", "ideal", "services", "projects", "process", "cta"];

const navLinks = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Get in Touch", href: "/contact", sectionId: "cta", isRoute: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    
    const handleScroll = () => {
      const sections = sectionIds.map(id => ({
        id,
        element: document.getElementById(id)
      })).filter(s => s.element);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (link.isRoute) return false;
    return activeSection === link.sectionId;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      style={{
        boxShadow: scrolled ? '0 8px 32px hsl(191 100% 50% / 0.15), 0 4px 16px hsl(191 100% 50% / 0.1)' : 'none'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src="/favicon.svg" alt="Y" className="w-10 h-10" />
            <motion.span 
              className="text-3xl font-bold text-[hsl(191,100%,50%)]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '-0.5px'
              }}
              animate={{
                textShadow: [
                  '0 0 10px hsl(191 100% 50% / 0.3), 0 0 20px hsl(191 100% 50% / 0.2)',
                  '0 0 20px hsl(191 100% 50% / 0.6), 0 0 40px hsl(191 100% 50% / 0.4)',
                  '0 0 10px hsl(191 100% 50% / 0.3), 0 0 20px hsl(191 100% 50% / 0.2)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Yehia
            </motion.span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-base transition-colors pb-1 ${
                    isActive(link)
                      ? "text-[hsl(191,100%,50%)] border-b-2 border-[hsl(191,100%,50%)]"
                      : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                  }`}
                  style={
                    isActive(link)
                      ? {
                          textShadow: '0 0 25px hsl(191 100% 50% / 0.8), 0 0 50px hsl(191 100% 50% / 0.5), 0 0 75px hsl(191 100% 50% / 0.3)',
                        }
                      : {}
                  }
                >
                  {link.label}
                </button>
              )
            )}
            <a
              href="https://calendly.com/yehia-samy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg text-base font-medium inline-flex items-center gap-2 bg-transparent border border-[hsl(191,100%,50%)] text-[hsl(191,100%,50%)] hover:bg-[hsl(191,100%,50%,0.08)] transition-colors"
            >
              <Calendar size={16} />
              Discovery Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border mx-4 rounded-b-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center text-base text-muted-foreground hover:text-foreground transition-colors py-2 relative group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[hsl(191,100%,50%)] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-center text-base transition-colors py-2 relative group ${
                      isActive(link) ? "text-[hsl(191,100%,50%)]" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="relative">
                      {link.label}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[hsl(191,100%,50%)] transition-all duration-300 ${
                        isActive(link) ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </span>
                  </button>
                )
              )}
              <a
                href="https://calendly.com/yehia-samy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 rounded-lg text-base font-medium text-center mt-4 bg-transparent border border-[hsl(191,100%,50%)] text-[hsl(191,100%,50%)] hover:bg-[hsl(191,100%,50%,0.08)] transition-colors"
              >
                Discovery Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
