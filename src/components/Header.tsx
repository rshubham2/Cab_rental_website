"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: 'Outstation Trips', href: '#outstation' },
    { name: 'Local Trips', href: '#local' },
    { name: 'Airport Pickup/Drop', href: '#airport' },
    { name: 'Hourly Car Rental', href: '#hourly' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-600">Gautham</span>
              <span className="text-orange-500"> Tours</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-sm">
              <div className="flex items-center text-gray-600">
                <Phone className="h-3 w-3 mr-1" />
                <a href="tel:9833401900" className="hover:text-blue-600">9833401900</a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-3 w-3 mr-1" />
                <a href="tel:8850919298" className="hover:text-blue-600">8850919298</a>
              </div>
            </div>
            <Button asChild>
              <Link href="#booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => {
                          setIsServicesOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2">
                  <a href="tel:9833401900" className="flex items-center text-gray-600 hover:text-blue-600">
                    <Phone className="h-4 w-4 mr-2" />
                    9833401900
                  </a>
                  <a href="tel:8850919298" className="flex items-center text-gray-600 hover:text-blue-600">
                    <Phone className="h-4 w-4 mr-2" />
                    8850919298
                  </a>
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="#booking">Book Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}