import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { Route, MapPin, Plane, CalendarClock, Check, ArrowRight, Phone, Car, Users, Clock } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Route className="text-primary text-2xl" />,
      title: "Outstation Trips",
      description: "Explore destinations beyond your city with our chauffeur-driven cab services for outstation trips.",
      image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Multi-day packages available",
        "Experienced drivers who know the best routes",
        "Wide range of vehicle options",
        "Flexible itinerary planning"
      ],
      pricing: "Starting from ₹10/km",
      popular: true
    },
    {
      icon: <MapPin className="text-primary text-2xl" />,
      title: "Local Travel",
      description: "Enjoy hassle-free local rides with our expert drivers and pocket-friendly pricing.",
      image: "https://www.trawell.in/images/pics/maharashtra_best_main.jpg",
      features: [
        "4, 8, and 12-hour packages",
        "Perfect for shopping, city tours, and meetings",
        "Flexible pickup and drop-off points",
        "Local area expertise"
      ],
      pricing: "Starting from ₹8/km"
    },
    {
      icon: <Plane className="text-primary text-2xl" />,
      title: "Airport Transfers",
      description: "Travel to and from airports with ease using our reliable airport pickup and drop-off services.",
      image: "https://media1.thrillophilia.com/filestore/g56zolh2s5kv8faqsl5qzfra94cr_dl.beatsnoop.com-3000-G9l8Kv2Mq3.jpg?w=576&h=650",
      features: [
        "Flight monitoring for timely pickups",
        "Meet & greet service at the airport",
        "Spacious vehicles for your luggage",
        "24/7 availability"
      ],
      pricing: "Fixed rates available"
    },
    {
      icon: <CalendarClock className="text-primary text-2xl" />,
      title: "Corporate Travel",
      description: "Professional transportation solutions for your business needs and corporate events.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Dedicated account management",
        "Monthly billing options",
        "Professional chauffeurs",
        "Premium vehicle fleet"
      ],
      pricing: "Custom packages"
    },
    {
      icon: <Users className="text-primary text-2xl" />,
      title: "Wedding & Events",
      description: "Make your special occasions memorable with our premium car rental options.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Luxury and premium vehicles",
        "Decorated cars for special occasions",
        "Multiple vehicle coordination",
        "Experienced event drivers"
      ],
      pricing: "Event packages available"
    },
    {
      icon: <Clock className="text-primary text-2xl" />,
      title: "Hourly Rentals",
      description: "Flexible hourly car rentals for your convenience, perfect for multiple stops.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Minimum 4-hour booking",
        "Flexible timing",
        "Multiple stops allowed",
        "Wait time included"
      ],
      pricing: "₹500/hour onwards"
    }
  ];

  const additionalServices = [
    {
      title: "One-Way Drops",
      description: "No return charges for one-way trips",
      icon: "🎯"
    },
    {
      title: "Multi-City Tours",
      description: "Explore multiple destinations in one trip",
      icon: "🗺️"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency transportation",
      icon: "🚨"
    },
    {
      title: "Group Travel",
      description: "Large vehicles for group transportation",
      icon: "👥"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Gautham Tours and Travels</title>
        <meta name="description" content="Explore our comprehensive range of cab services including outstation trips, local travel, airport transfers, corporate travel, and special event transportation." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
            <p className="text-xl mb-8 text-white/90">
              Comprehensive transportation solutions tailored to meet all your travel needs across Maharashtra and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      {service.icon}
                      <span className="ml-2 font-semibold">{service.title}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-primary mb-2">{service.pricing}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="text-success h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking">
                    <span className="block w-full text-center py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition cursor-pointer">
                      Book {service.title}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer specialized services to cater to unique travel requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your travel experience is exceptional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Premium Fleet</h3>
              <p className="text-gray-600">Well-maintained vehicles with modern amenities and safety features.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Professional Drivers</h3>
              <p className="text-gray-600">Experienced, courteous, and well-trained chauffeurs for your safety.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your travel needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Choose from our wide range of services and experience the difference of premium transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <span className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <a href="tel:96194556608" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;