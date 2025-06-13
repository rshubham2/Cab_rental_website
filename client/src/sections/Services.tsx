import { Link } from "wouter";
import { Route, MapPin, Plane, CalendarClock, Check, Car, ArrowRight, Phone, Hotel } from "lucide-react";

const servicesData = [
  {
    icon: <Route className="text-primary text-xl" />,
    title: "Outstation Trips",
    description: "Explore destinations beyond your city with our chauffeur-driven cab services for outstation trips.",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Multi-day packages available",
      "Experienced drivers who know the best routes",
      "Wide range of vehicle options",
    ],
    destinations: [
      "Trimbakeshwar", "Nashik", "Panchvati", "Vani", "Shirdi", 
      "Ajanta Caves", "Shanishingnapur", "Bhimashankar"
    ]
  },
  {
    icon: <MapPin className="text-primary text-xl" />,
    title: "Local Travel",
    description: "Enjoy hassle-free local rides with our expert drivers for full-day or half-day bookings.",
    image: "https://www.trawell.in/images/pics/maharashtra_best_main.jpg",
    features: [
      "4, 8, and 12-hour packages",
      "Perfect for shopping, city tours, and meetings",
      "Flexible pickup and drop-off points",
    ],
    destinations: [
      "Siddhivinayak Temple", "Mahalaxmi Temple", "Gateway of India",
      "Marine Drive", "Elephanta Caves", "Crawford Market"
    ]
  },
  {
    icon: <Plane className="text-primary text-xl" />,
    title: "Airport Transfers",
    description: "Travel to and from airports with ease using our reliable airport pickup and drop-off services.",
    image: "https://media1.thrillophilia.com/filestore/g56zolh2s5kv8faqsl5qzfra94cr_dl.beatsnoop.com-3000-G9l8Kv2Mq3.jpg?w=576&h=650",
    features: [
      "Flight monitoring for timely pickups",
      "Meet & greet service at the airport",
      "Spacious vehicles for your luggage",
    ],
  },
  {
    icon: <Hotel className="text-primary text-xl" />,
    title: "Complete Trip Planning",
    description: "We don't just provide transportation - we plan your entire trip including hotel bookings and itinerary planning.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Hotel booking assistance",
      "Complete itinerary planning",
      "Local guide arrangements",
    ],
  },
];

const tourPackages = [
  {
    name: "Lonavala Package",
    image: "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1586616431_5_3.jpg.webp",
    highlights: ["Hill Station", "Waterfalls", "Scenic Views"]
  },
  {
    name: "Mahabaleshwar Package", 
    image: "https://i.cdn.newsbytesapp.com/images/l4120211229212844.jpeg",
    highlights: ["Strawberry Farms", "Valley Views", "Pleasant Weather"]
  },
  {
    name: "Goa Package",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    highlights: ["Beaches", "Nightlife", "Portuguese Culture"]
  },
  {
    name: "North India Tour",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    highlights: ["Historical Sites", "Cultural Heritage", "Adventure"]
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
                  <ul className="text-gray-700 space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                        <Check className="text-success h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.destinations && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-800 mb-2">Popular Destinations:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.destinations.slice(0, 3).map((dest, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {dest}
                          </span>
                        ))}
                        {service.destinations.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{service.destinations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
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
        </div>
      </section>
      
      {/* Tour Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover amazing destinations with our carefully curated tour packages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link href="/booking">
                    <span className="block w-full text-center py-2 bg-primary text-white rounded hover:bg-primary/90 transition cursor-pointer">
                      Book Package
                    </span>
                  </Link>
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