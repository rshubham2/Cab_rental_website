import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useMobile } from "@/hooks/use-mobile";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check scroll position to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold font-sans text-primary">
              RoadTrip<span className="text-secondary">India</span>
            </span>
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <a className={`text-foreground hover:text-primary font-medium transition ${location === link.href ? 'text-primary' : ''}`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        )}
        
        {/* Phone Number */}
        {!isMobile && (
          <a href="tel:9045450000" className="flex items-center text-secondary font-medium">
            <Phone className="h-4 w-4 mr-2" />
            <span>9045450000</span>
          </a>
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="md:hidden text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        )}
      </nav>
      
      {/* Mobile Navigation */}
      {isMobile && isMobileMenuOpen && (
        <div className="bg-white px-4 py-3 shadow-inner">
          <div className="flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <a 
                  className={`text-foreground hover:text-primary font-medium transition py-2 ${location === link.href ? 'text-primary' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <a href="tel:9045450000" className="flex items-center text-secondary font-medium py-2">
              <Phone className="h-4 w-4 mr-2" />
              <span>9045450000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
