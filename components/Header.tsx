'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { 
      label: 'Tour Packages', 
      hasDropdown: true,
      dropdownItems: [
        { href: '#pilgrimage', label: 'Pilgrimage Tours' },
        { href: '#hill-stations', label: 'Hill Stations' },
        { href: '#beaches', label: 'Beach Destinations' },
        { href: '#mumbai-local', label: 'Mumbai Local Tours' },
        { href: '#heritage', label: 'Heritage Sites' },
        { href: '#adventure', label: 'Adventure Tours' },
      ] 
    },
    { href: '#fleet', label: 'Our Fleet' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">
            Gautham<span className="text-secondary"> Tours and Travels</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link, index) => (
            link.hasDropdown ? (
              <div key={link.label} className="relative group">
                <button 
                  className="flex items-center text-foreground hover:text-primary font-medium transition"
                  onClick={() => setTourDropdownOpen(!tourDropdownOpen)}
                >
                  {link.label}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {link.dropdownItems?.map((item) => (
                      <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100 hover:text-primary transition">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href || '/'} className="text-foreground hover:text-primary font-medium transition">
                {link.label}
              </Link>
            )
          ))}
        </div>
        
        {/* Phone Numbers */}
        <div className="hidden md:flex flex-col text-secondary font-medium text-sm">
          <a href="tel:9833401900" className="hover:text-primary transition flex items-center">
            <Phone className="h-3 w-3 mr-1" />
            9833401900
          </a>
          <a href="tel:8850919298" className="hover:text-primary transition flex items-center">
            <Phone className="h-3 w-3 mr-1" />
            8850919298
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3">
          <div className="flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.label} className="py-2">
                  <div 
                    className="flex items-center justify-between text-foreground font-medium"
                    onClick={() => setTourDropdownOpen(!tourDropdownOpen)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${tourDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {tourDropdownOpen && (
                    <div className="pl-4 mt-2 border-l-2 border-gray-200 space-y-2">
                      {link.dropdownItems?.map((item) => (
                        <a 
                          key={item.label} 
                          href={item.href}
                          className="block text-sm text-foreground hover:text-primary transition py-1" 
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={link.label} 
                  href={link.href || '/'} 
                  className="block text-foreground hover:text-primary font-medium transition py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
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
  )
}

export default Header