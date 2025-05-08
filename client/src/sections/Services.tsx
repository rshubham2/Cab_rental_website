import { Link } from "wouter";
import { Route, MapPin, Plane, ArrowRight, Check } from "lucide-react";

const servicesData = [
  {
    icon: <Route className="text-primary text-xl" />,
    title: "Outstation Trips",
    description: "Seamless intercity travel with experienced drivers who know the best routes and stops.",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    features: [
      "Multi-day packages available",
      "Flexible itinerary",
      "Round trip options"
    ]
  },
  {
    icon: <MapPin className="text-primary text-xl" />,
    title: "Local Travel",
    description: "Convenient hourly packages for exploring cities with drivers who know every corner.",
    image: "https://pixabay.com/get/g4b0b83d7c3ccdad65d42a1cd6bf79f8d5496a2b609c34ecf16b45dd29052d6486ebd254f92d486dbf6e0b7b52d9ae92e9017656efded71a137b84eb6a2f6924c_1280.jpg",
    features: [
      "4, 8, and 12-hour packages",
      "Multiple stops allowed",
      "Waiting time included"
    ]
  },
  {
    icon: <Plane className="text-primary text-xl" />,
    title: "Airport Transfers",
    description: "Punctual and reliable airport pickups and drops with flight tracking.",
    image: "https://pixabay.com/get/gcc4d9666d82fbb5b6ffe1e7b947d69d52d96cd3f058aee821f1e5380f96d1db42d6ad7a635ac0da48aeb7798e310367ff8801770557a227ba122dd59f22a1d4d_1280.jpg",
    features: [
      "Flight monitoring",
      "Meet & greet service",
      "Free waiting time"
    ]
  },
  {
    icon: <ArrowRight className="text-primary text-xl" />,
    title: "One-Way Drops",
    description: "Cost-effective solution for traveling between cities without round-trip charges.",
    image: "https://pixabay.com/get/gf893b80d2358749b5c1668396607835eda98b376727e7b108970916d950249857770921231fdbdd18370bf0a14798855820f5a1c394925aa071fa8b2c24eeb50_1280.jpg",
    features: [
      "No return fare charges",
      "Pre-fixed transparent pricing",
      "Available for many routes"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive cab rental solutions tailored to your travel needs across India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card bg-gray-50 rounded-xl shadow-md overflow-hidden transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-sans font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-green-500 h-4 w-4 mt-1 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking">
                  <a className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                    Book {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
