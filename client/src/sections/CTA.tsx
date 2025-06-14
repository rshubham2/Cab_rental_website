import { Link } from "wouter";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-white">Ready to Start Your Journey?</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Experience the comfort and flexibility of premium cab services across India. Book your ride today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/booking">
            <span className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-lg transition shadow-lg inline-block cursor-pointer">
              Book Your Cab Now
            </span>
          </Link>
          <a 
            href="tel:9833401900" 
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg transition shadow-lg flex items-center justify-center"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call 9833401900
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;