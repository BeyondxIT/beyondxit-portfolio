import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-sticky' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold font-display text-secondary hover:text-primary transition-colors"
                data-testid="logo-link"
              >
                BeyondxIT
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-about"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-products"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="nav-faq"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl md:hidden z-50 ${
          isOpen ? 'open' : ''
        }`}>
          <div className="p-6">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6"
              onClick={() => setIsOpen(false)}
              data-testid="button-close-mobile-menu"
            >
              <X className="h-6 w-6" />
            </Button>
            <nav className="mt-12 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
                data-testid="mobile-nav-about"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
                data-testid="mobile-nav-products"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
                data-testid="mobile-nav-faq"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                data-testid="mobile-button-get-started"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
    </>
  );
}
