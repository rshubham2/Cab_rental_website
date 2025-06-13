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
            <h3 className="font-sans font-semibold text-xl mb-4">
              Gautham Tours and Travels
            </h3>
            <p className="text-gray-300 mb-4">
              Premium chauffeur-driven cab services across Maharashtra and India. 
              Making road trips comfortable, flexible, and enjoyable with complete trip planning.
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
            <h3 className="font-sans font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-white transition cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-white transition cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/fleet">
                  <span className="text-gray-300 hover:text-white transition cursor-pointer">
                    Our Fleet
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <span className="text-gray-300 hover:text-white transition cursor-pointer">
                    Book Now
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Outstation Trips</span>
              </li>
              <li>
                <span className="text-gray-300">Local Travel</span>
              </li>
              <li>
                <span className="text-gray-300">Airport Transfers</span>
              </li>
              <li>
                <span className="text-gray-300">Hotel Booking</span>
              </li>
              <li>
                <span className="text-gray-300">Trip Planning</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-xl mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-primary" />
                <span className="text-gray-300">
                  004, 4/B, Matoshree, Maharashtra nagar
                  <br />
                  Mumbai - 400088
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <div className="flex flex-col">
                  <a
                    href="tel:9833401900"
                    className="text-gray-300 hover:text-white transition"
                  >
                    +91 9833401900
                  </a>
                  <a
                    href="tel:8850919298"
                    className="text-gray-300 hover:text-white transition"
                  >
                    +91 8850919298
                  </a>
                  <a
                    href="tel:9619455668"
                    className="text-gray-300 hover:text-white transition"
                  >
                    +91 9619455668
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="mailto:gauthamnadar123@gmail.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  gauthamnadar123@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Gautham Tours and Travels. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;