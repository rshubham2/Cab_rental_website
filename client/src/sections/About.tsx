import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">About RoadTrip India</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover why we're passionate about making road trips comfortable, flexible, and enjoyable across India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-sans font-semibold text-2xl mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              At RoadTrip India, we believe that journey matters as much as the destination. Our mission is to transform the way India travels by road, offering premium chauffeur-driven services that prioritize your comfort, safety, and experience.
            </p>
            
            <h3 className="font-sans font-semibold text-2xl mb-4">Why We Love Road Trips</h3>
            <p className="text-gray-700 mb-4">
              India's diverse landscapes, from misty mountain passes to coastal highways, deserve to be experienced up close. Road trips offer flexibility, authentic experiences, and the chance to discover hidden gems that most travelers miss.
            </p>
            
            <p className="text-gray-700">
              Our team of travel enthusiasts has curated services that eliminate the typical hassles of road travel while preserving the joy of discovery and freedom that makes road trips special.
            </p>
            
            <div className="mt-8">
              <Link href="/#services">
                <a className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg transition shadow-lg inline-flex items-center">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Road through mountains */}
            <img 
              src="https://pixabay.com/get/g2d91a13853e6b3cff42444bf8353b484c0ce48821e4fe18551a2d5eca174867cc07f78522e390cf1cdbe4fdd9080476f72e8acb034193302d677c38b457c2750_1280.jpg" 
              alt="Scenic mountain road in India" 
              className="rounded-xl shadow-md h-full object-cover"
            />
            
            {/* Luxury car */}
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=500" 
              alt="Luxury chauffeur-driven car" 
              className="rounded-xl shadow-md object-cover mb-4"
            />
            
            {/* Indian tourist destination */}
            <img 
              src="https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=500" 
              alt="Indian tourist destination" 
              className="rounded-xl shadow-md object-cover mt-4 col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
