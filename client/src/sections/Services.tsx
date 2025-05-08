import { Link } from "wouter";
import { Route, MapPin, Plane, CalendarClock, Check, Car, ArrowRight } from "lucide-react";

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
                  <div>
                    <Link href="/booking">
                      <span className="text-primary font-medium hover:text-primary/80 inline-flex items-center cursor-pointer">
                        Book {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Car Fleet Section */}
      <section id="fleet" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Our Rental Fleet</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our wide selection of well-maintained vehicles to match your specific travel needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {carTypes.map((carType, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={carType.image} 
                    alt={carType.category} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Car className="text-primary mr-3 h-5 w-5" />
                    <h3 className="font-sans font-semibold text-xl">{carType.category}</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-700 font-medium mb-2">Available Models:</p>
                    <div className="flex flex-wrap gap-2">
                      {carType.models.map((model, i) => (
                        <span key={i} className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Link href="/booking">
                      <span className="text-primary font-medium hover:text-primary/80 inline-flex items-center cursor-pointer">
                        Book a {carType.category.slice(0, -1)} <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
