import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-4">RoadTripIndia</h3>
            <p className="text-gray-300 mb-4">
              Premium chauffeur-driven cab services across 2000+ cities in India. Making road trips comfortable, flexible, and enjoyable.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-gray-300 hover:text-white transition">Home</a></Link></li>
              <li><Link href="/#about"><a className="text-gray-300 hover:text-white transition">About Us</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-300 hover:text-white transition">Services</a></Link></li>
              <li><Link href="/booking"><a className="text-gray-300 hover:text-white transition">Book Now</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-300 hover:text-white transition">Contact Us</a></Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/#services"><a className="text-gray-300 hover:text-white transition">Outstation Trips</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-300 hover:text-white transition">Local Travel</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-300 hover:text-white transition">Airport Transfers</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-300 hover:text-white transition">One-Way Drops</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-300 hover:text-white transition">Corporate Travel</a></Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-primary" />
                <span className="text-gray-300">123 Transport Tower, MG Road<br />New Delhi - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:9045450000" className="text-gray-300 hover:text-white transition">+91 9045450000</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@roadtripindia.com" className="text-gray-300 hover:text-white transition">info@roadtripindia.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} RoadTrip India. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Refund Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
