import { Link } from "wouter";
import { Route, MapPin, Plane, CalendarClock, Check, Car, ArrowRight, Phone } from "lucide-react";

const servicesData = [
  {
    icon: <Route className="text-primary text-xl" />,
    title: "Outstation Trips",
    description: "Explore destinations beyond your city with our chauffeur-driven cab and taxi services for outstation trips.",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    features: [
      "Multi-day packages available",
      "Experienced drivers who know the best routes",
      "Wide range of vehicle options"
    ]
  },
  {
    icon: <MapPin className="text-primary text-xl" />,
    title: "Local Travel",
    description: "Enjoy hassle-free local rides with our expert drivers and pocket-friendly pricing for full-day (12hrs) or half-day (8hrs) bookings.",
    image: "https://pixabay.com/get/g4b0b83d7c3ccdad65d42a1cd6bf79f8d5496a2b609c34ecf16b45dd29052d6486ebd254f92d486dbf6e0b7b52d9ae92e9017656efded71a137b84eb6a2f6924c_1280.jpg",
    features: [
      "4, 8, and 12-hour packages",
      "Perfect for shopping, city tours, and meetings",
      "Flexible pickup and drop-off points"
    ]
  },
  {
    icon: <Plane className="text-primary text-xl" />,
    title: "Airport Transfers",
    description: "Travel to and from airports with ease using our reliable airport pickup and drop-off car rental services.",
    image: "https://pixabay.com/get/gcc4d9666d82fbb5b6ffe1e7b947d69d52d96cd3f058aee821f1e5380f96d1db42d6ad7a635ac0da48aeb7798e310367ff8801770557a227ba122dd59f22a1d4d_1280.jpg",
    features: [
      "Flight monitoring for timely pickups",
      "Meet & greet service at the airport",
      "Spacious vehicles for your luggage"
    ]
  },
  {
    icon: <CalendarClock className="text-primary text-xl" />,
    title: "Cars for Events",
    description: "Make your special occasions even more memorable with our comfortable and convenient car rental options for weddings, events, and business meetings.",
    image: "https://pixabay.com/get/gf893b80d2358749b5c1668396607835eda98b376727e7b108970916d950249857770921231fdbdd18370bf0a14798855820f5a1c394925aa071fa8b2c24eeb50_1280.jpg",
    features: [
      "Premium fleet for weddings and special occasions",
      "Corporate travel with professional chauffeurs",
      "Group transportation options available"
    ]
  }
];

const carTypes = [
  {
    category: "Midsize Cars",
    models: ["Swift Dzire", "Xcent", "Toyota Etios", "Honda City"],
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "SUV Cars",
    models: ["Toyota Innova", "Toyota Crysta", "Ertiga", "Tavera", "Xylo", "Kia Carens"],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "Luxury Cars",
    models: ["Fortuner", "Pajero", "Mercedes", "BMW"],
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
  },
  {
    category: "Large Vehicles",
    models: ["Winger", "Tempo Traveller", "Buses (12 to 49 seats)"],
    image: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
  }
];

const Services = () => {
  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Premium Services
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Travel Your Way
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive cab rental solutions tailored to your travel needs across India. Choose from our wide range of services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:z-10 group">
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-lg text-primary">
                    {service.icon}
                  </span>
                </div>
                <div className="h-56 overflow-hidden img-hover-zoom relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-10">
                    <h3 className="font-sans font-bold text-xl text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                        <Check className="text-success h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/booking">
                      <span className="text-primary font-medium hover:text-primary/80 inline-flex items-center cursor-pointer group-hover:translate-x-1 transition-transform duration-300">
                        Book {service.title} 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all duration-300" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/booking">
              <span className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition shadow-lg cursor-pointer btn-hover-effect">
                <span>View All Services</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Car Fleet Section */}
      <section id="fleet" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Premium Vehicles
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Our Exceptional Fleet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose from our wide selection of well-maintained vehicles to match your specific travel needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {carTypes.map((carType, index) => (
              <div key={index} className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
                <div className="h-64 overflow-hidden img-hover-zoom relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                  <img 
                    src={carType.image} 
                    alt={carType.category} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <div className="flex items-center">
                      <div className="bg-white/90 rounded-full p-2 mr-3 shadow-lg">
                        <Car className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-sans font-bold text-2xl text-white">{carType.category}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/5 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors">
                      <p className="text-gray-500 text-sm mb-1">Passenger Capacity</p>
                      <p className="text-xl font-semibold text-primary">
                        {carType.category.includes("SUV") || carType.category.includes("Large") ? "6-7 People" : 
                         carType.category.includes("Midsize") ? "4-5 People" : 
                         carType.category.includes("Luxury") ? "4 People" : "12+ People"}
                      </p>
                    </div>
                    <div className="bg-secondary/5 rounded-lg p-4 text-center hover:bg-secondary/10 transition-colors">
                      <p className="text-gray-500 text-sm mb-1">Best For</p>
                      <p className="text-xl font-semibold text-secondary">
                        {carType.category.includes("SUV") ? "Family Trips" : 
                         carType.category.includes("Midsize") ? "City Travel" : 
                         carType.category.includes("Luxury") ? "Business" : "Large Groups"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 font-medium mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Available Models:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {carType.models.map((model, i) => (
                        <span key={i} className="inline-block bg-white border border-gray-200 shadow-sm text-gray-800 rounded-full px-3 py-1 text-sm group-hover:translate-y-[-2px] transition-all duration-300">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/booking">
                    <span className="block w-full text-center py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md cursor-pointer btn-hover-effect">
                      Book a {carType.category.slice(0, -1)} Now
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Need a custom vehicle option?</h3>
              <p className="text-gray-600">Contact us for special requests or custom quotations</p>
            </div>
            <a href="tel:9045450000" className="inline-flex items-center bg-white hover:bg-gray-50 text-primary font-medium py-3 px-8 rounded-lg transition shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
