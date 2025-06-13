import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useMobile } from "@/hooks/use-mobile";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fleetDropdownOpen, setFleetDropdownOpen] = useState(false);
  const fleetDropdownRef = useRef<HTMLDivElement>(null);
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

  // Close fleet dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fleetDropdownRef.current && !fleetDropdownRef.current.contains(event.target as Node)) {
        setFleetDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [fleetDropdownRef]);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { 
      label: "Tour Packages", 
      hasDropdown: true,
      dropdownItems: [
        { href: "/packages/lonavala", label: "Lonavala Package" },
        { href: "/packages/mahabaleshwar", label: "Mahabaleshwar Package" },
        { href: "/packages/pratapgad", label: "Pratapgad Package" },
        { href: "/packages/goa", label: "Goa Package" },
        { href: "/packages/north-india", label: "North India Tour" },
        { href: "/packages/omkareshwar", label: "Omkareshwar Package" },
        { href: "/packages/somnath", label: "Somnath Package" },
      ] 
    },
    { href: "/fleet", label: "Our Fleet" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold font-sans text-primary">
              Gautham<span className="text-secondary"> Tours and Travels</span>
            </span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={fleetDropdownRef}>
                  <button 
                    className="flex items-center text-foreground hover:text-primary font-medium transition"
                    onClick={() => setFleetDropdownOpen(!fleetDropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${fleetDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {fleetDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-64">
                      <div className="py-2">
                        {link.dropdownItems?.map((item) => (
                          <Link key={item.label} href={item.href}>
                            <span className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition cursor-pointer">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div key={link.label}>
                  <Link href={link.href || "/"}>
                    <span className={`text-foreground hover:text-primary font-medium transition cursor-pointer ${location === link.href ? 'text-primary' : ''}`}>
                      {link.label}
                    </span>
                  </Link>
                </div>
              )
            ))}
          </div>
        )}
        
        {/* Phone Numbers */}
        {!isMobile && (
          <div className="flex flex-col text-secondary font-medium text-sm">
            <a href="tel:9833401900" className="hover:text-primary transition">
              <Phone className="h-3 w-3 mr-1 inline" />
              9833401900
            </a>
            <a href="tel:8850919298" className="hover:text-primary transition">
              <Phone className="h-3 w-3 mr-1 inline" />
              8850919298
            </a>
          </div>
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
              link.hasDropdown ? (
                <div key={link.label} className="py-2">
                  <div 
                    className="flex items-center justify-between text-foreground font-medium"
                    onClick={() => setFleetDropdownOpen(!fleetDropdownOpen)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${fleetDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {fleetDropdownOpen && (
                    <div className="pl-4 mt-2 border-l-2 border-gray-200 space-y-2">
                      {link.dropdownItems?.map((item) => (
                        <div key={item.label}>
                          <Link href={item.href}>
                            <span 
                              className="block text-sm text-foreground hover:text-primary transition py-1 cursor-pointer" 
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={link.label}>
                  <Link href={link.href || "/"}>
                    <span 
                      className={`block text-foreground hover:text-primary font-medium transition py-2 cursor-pointer ${location === link.href ? 'text-primary' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                </div>
              )
            ))}
            <div className="pt-2 border-t">
              <a href="tel:9833401900" className="flex items-center text-secondary font-medium py-1">
                <Phone className="h-4 w-4 mr-2" />
                <span>9833401900</span>
              </a>
              <a href="tel:8850919298" className="flex items-center text-secondary font-medium py-1">
                <Phone className="h-4 w-4 mr-2" />
                <span>8850919298</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;