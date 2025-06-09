import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { Car, Users, Fuel, Shield, ArrowRight, Check } from 'lucide-react';

const FleetPage = () => {
  const fleetCategories = [
    {
      category: "Swift Dzire Car Rental",
      description: "Perfect for city travel and short trips",
      image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      capacity: "4 Passengers",
      luggage: "2 Large Bags",
      fuelType: "Petrol/Diesel",
      features: [
        "Air Conditioning",
        "Power Steering",
        "Music System",
        "Comfortable Seating"
      ],
      pricing: "₹9-10/km",
      idealFor: "City travel, Airport transfers, Short trips"
    },
    {
      category: "Innova Crysta Car Rental",
      description: "Premium SUV for comfortable family travel",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      capacity: "7 Passengers",
      luggage: "4 Large Bags",
      fuelType: "Diesel",
      features: [
        "Premium Interior",
        "Captain Seats",
        "Ample Legroom",
        "Advanced Safety Features"
      ],
      pricing: "₹13-15/km",
      idealFor: "Family trips, Outstation travel, Group tours",
      popular: true
    },
    {
      category: "Innova Car Rental",
      description: "Reliable and spacious for group travel",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/innova-exterior-right-front-three-quarter-148156.jpeg?isig=0&q=80",
      capacity: "7 Passengers",
      luggage: "3 Large Bags",
      fuelType: "Diesel",
      features: [
        "Spacious Interior",
        "Reliable Performance",
        "Good Ground Clearance",
        "Fuel Efficient"
      ],
      pricing: "₹12-14/km",
      idealFor: "Long distance travel, Family vacations"
    },
    {
      category: "Ertiga Car Rental",
      description: "Compact MPV for small groups",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      capacity: "7 Passengers",
      luggage: "2 Large Bags",
      fuelType: "Petrol/Diesel",
      features: [
        "Compact Design",
        "Easy Maneuverability",
        "Good Fuel Economy",
        "Modern Features"
      ],
      pricing: "₹11-13/km",
      idealFor: "City tours, Small group travel"
    },
    {
      category: "Tavera Car Rental",
      description: "Sturdy SUV for rough terrains",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/tavera-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      capacity: "9 Passengers",
      luggage: "4 Large Bags",
      fuelType: "Diesel",
      features: [
        "High Ground Clearance",
        "Robust Build",
        "Spacious Cabin",
        "Reliable Engine"
      ],
      pricing: "₹12-14/km",
      idealFor: "Hill stations, Rough roads, Large groups"
    },
    {
      category: "Tata Winger Rental",
      description: "Large capacity for big groups",
      image: "https://5.imimg.com/data5/CE/AC/MY-15973426/force-traveller-26-mini-bus-500x500.jpg",
      capacity: "12 Passengers",
      luggage: "6 Large Bags",
      fuelType: "Diesel",
      features: [
        "High Seating Capacity",
        "Comfortable Seats",
        "Large Luggage Space",
        "Powerful Engine"
      ],
      pricing: "₹18-22/km",
      idealFor: "Corporate groups, Wedding parties, Large families"
    },
    {
      category: "Bus & Tempo Travellers Rental",
      description: "Maximum capacity for large groups",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/8/334588867/YF/YN/YJ/102004658/tempo-traveller-on-rent-500x500.jpg",
      capacity: "12-26 Passengers",
      luggage: "8+ Large Bags",
      fuelType: "Diesel",
      features: [
        "Maximum Capacity",
        "Reclining Seats",
        "Entertainment System",
        "Professional Driver"
      ],
      pricing: "₹25-35/km",
      idealFor: "Large groups, Corporate events, Pilgrimages"
    }
  ];

  const fleetFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety First",
      description: "All vehicles undergo regular safety inspections and maintenance"
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Well Maintained",
      description: "Regular servicing and cleaning to ensure optimal performance"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Professional Drivers",
      description: "Experienced and courteous chauffeurs for all vehicle types"
    },
    {
      icon: <Fuel className="h-8 w-8 text-primary" />,
      title: "Fuel Efficient",
      description: "Modern vehicles with excellent fuel economy for cost-effective travel"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Fleet - Gautham Tours and Travels</title>
        <meta name="description" content="Explore our diverse fleet of well-maintained vehicles including Swift Dzire, Innova Crysta, Ertiga, Tavera, and Tempo Travellers for all your travel needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Fleet</h1>
            <p className="text-xl mb-8 text-white/90">
              Choose from our diverse collection of well-maintained vehicles, perfect for every travel need and budget.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Vehicles</div>
              </div>
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm text-white/80">Vehicle Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">AC Vehicles</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {fleetCategories.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                {vehicle.popular && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Most Popular
                  </div>
                )}
                
                <div className="h-64 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.category} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.category}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{vehicle.capacity}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <Car className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{vehicle.luggage}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <Fuel className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{vehicle.fuelType}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <Check className="h-3 w-3 text-success mr-1" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Pricing:</span>
                      <span className="text-xl font-bold text-primary">{vehicle.pricing}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Ideal for:</strong> {vehicle.idealFor}
                    </div>
                  </div>
                  
                  <Link href="/booking">
                    <span className="block w-full text-center py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition cursor-pointer">
                      Book {vehicle.category.split(' ')[0]} Now
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Fleet?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every vehicle in our fleet is carefully selected and maintained to ensure your comfort and safety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Book Your Vehicle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to get your preferred vehicle for your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Vehicle</h3>
              <p className="text-gray-600 text-sm">Select the perfect vehicle for your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600 text-sm">Fill in your travel details and preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Confirmation</h3>
              <p className="text-gray-600 text-sm">Receive booking confirmation and driver details</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Enjoy Journey</h3>
              <p className="text-gray-600 text-sm">Relax and enjoy your comfortable ride</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Perfect Vehicle?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Choose from our premium fleet and experience the comfort of professional transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <span className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition cursor-pointer">
                Get Custom Quote
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FleetPage;