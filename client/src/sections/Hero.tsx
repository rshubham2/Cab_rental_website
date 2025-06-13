import { Link } from "wouter";
import { Phone } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay and Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080" 
          alt="Scenic Indian highway" 
          className="w-full h-full object-cover scale-in" 
        />
        {/* Particle Background */}
        <ParticleBackground 
          className="opacity-30"
          particleCount={30}
          particleColor="#FF6B35"
          particleSize={3}
          speed={0.3}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Hero Content */}
          <div className="text-white fade-in">
            <div className="relative inline-flex mb-4">
              <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium">Maharashtra Service</span>
            </div>
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Your Journey, 
              <span className="block text-secondary">Our Responsibility</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Experience premium chauffeur-driven cab services across Maharashtra and beyond. Travel with comfort, flexibility, and peace of mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking">
                <span className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition shadow-lg inline-flex items-center cursor-pointer btn-hover-effect">
                  <span>Book Your Cab Now</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
              <a href="tel:9833401900" className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-lg transition shadow-lg flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>Call Now</span>
              </a>
            </div>
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2 mr-4">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/40.jpg" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Customer" />
              </div>
              <div>
                <p className="text-white font-medium">Trusted by 10,000+ customers</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-white">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Founder Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-0 scale-in relative p-8">
            <ParticleBackground 
              className="opacity-10 rounded-xl"
              particleCount={15}
              particleColor="#3B82F6"
              particleSize={2}
              speed={0.2}
            />
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                  alt="R.K Sevar Nadar - Founder" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/20 shadow-lg object-cover"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">R.K Sevar Nadar</h3>
                <p className="text-gray-600 font-medium">Founder & Managing Director</p>
              </div>
              
              <div className="text-left space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  "With over 15 years of experience in the travel industry, I founded Gautham Tours and Travels with a vision to make road travel comfortable, safe, and memorable for every passenger."
                </p>
                
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                  <p className="text-sm text-gray-600">
                    To provide exceptional chauffeur-driven services that exceed customer expectations while ensuring safety, comfort, and reliability on every journey.
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-gray-600">Vehicles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-xs text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;