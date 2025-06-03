import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { MapPin, ArrowRight, Car } from "lucide-react";

// Data for Mumbai one-way routes within Maharashtra
const oneWayRoutes = [
  {
    from: "Mumbai",
    to: "Pune",
    distance: "150 km",
    duration: "3 hours",
    sedanFare: "₹2,534",
    suvFare: "₹3,029",
    image:
      "https://mittalbuilders.com/wp-content/uploads/2020/12/Reasons-to-settle-down-in-Pune-1024x683.png",
  },
  {
    from: "Mumbai",
    to: "Lonavala",
    distance: "83 km",
    duration: "1.5 hours",
    sedanFare: "₹2,473",
    suvFare: "₹3,184",
    image:
      "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1586616431_5_3.jpg.webp",
  },
  {
    from: "Mumbai",
    to: "Mahabaleshwar",
    distance: "270 km",
    duration: "5.5 hours",
    sedanFare: "₹4,440",
    suvFare: "₹5,810",
    image: "https://i.cdn.newsbytesapp.com/images/l4120211229212844.jpeg",
  },
  {
    from: "Mumbai",
    to: "Imagica",
    distance: "90 km",
    duration: "2 hours",
    sedanFare: "₹2,111",
    suvFare: "₹2,969",
    image:
      "https://www.mapsofindia.com/ci-moi-images/my-india/2015/09/adlabs-imagica.jpg",
  },
  {
    from: "Mumbai",
    to: "Alibaug",
    distance: "95 km",
    duration: "2.5 hours",
    sedanFare: "₹2,850",
    suvFare: "₹3,450",
    image:
      "https://i.ytimg.com/vi/qvhCWQGGXF4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQdu4ND6mb-LrXDS3aP3xR6m_Ecw",
  },
  {
    from: "Mumbai",
    to: "Nashik",
    distance: "167 km",
    duration: "3.5 hours",
    sedanFare: "₹3,380",
    suvFare: "₹4,250",
    image:
      "https://www.shirdi.wetnjoy.in/wp-content/uploads/2023/06/Places-to-visit-in-Nashik-Wnj-Shirdi.png",
  },
];

const OneWayFares = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>One-Way Cab Fares from Mumbai Across Maharashtra | Gautham Tours and Travels</title>
        <meta name="description" content="Check out our competitive one-way cab fares from Mumbai to popular destinations across Maharashtra including Pune, Lonavala, Mahabaleshwar, Nashik, and Alibaug. Choose between sedan and SUV options." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">One-Way Cab Fares Across Maharashtra</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Affordable and fixed prices for one-way trips to popular destinations throughout Maharashtra. 
            No hidden charges, no return fare.
          </p>
          <div className="inline-flex items-center bg-black/20 rounded-full px-6 py-3 text-white">
            <MapPin className="mr-2" />
            <span className="font-medium">Starting City: Mumbai</span>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold">Explore Popular One-Way Routes</h2>
              <p className="text-gray-600">Fixed fares, no hidden charges, comfortable journey</p>
            </div>
            <Link href="/booking">
              <span className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition cursor-pointer inline-flex items-center">
                Book a Custom Trip <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneWayRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={route.image} 
                    alt={`${route.from} to ${route.to} route`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{route.from} to {route.to}</h3>
                      <p className="text-sm">{route.distance} | {route.duration} drive</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">Sedan</p>
                      <p className="text-xl font-bold text-primary">{route.sedanFare}</p>
                      <div className="mt-1 flex justify-center">
                        <Car className="h-5 w-5 text-gray-500" />
                        <span className="text-xs text-gray-500 ml-1">4 Seats</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">SUV</p>
                      <p className="text-xl font-bold text-primary">{route.suvFare}</p>
                      <div className="mt-1 flex justify-center">
                        <Car className="h-5 w-5 text-gray-500" />
                        <span className="text-xs text-gray-500 ml-1">6-7 Seats</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/booking">
                    <span className="block w-full py-2 bg-primary/10 text-primary text-center rounded-md hover:bg-primary/20 transition cursor-pointer">
                      Book This Route
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Why Choose Our One-Way Cab Service?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Fixed Pricing</h3>
                <p className="text-gray-600">
                  Know exactly what you'll pay with our transparent, all-inclusive pricing structure.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Safe Travel</h3>
                <p className="text-gray-600">
                  Well-maintained vehicles with experienced drivers who know the best routes.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">No Return Charges</h3>
                <p className="text-gray-600">
                  Pay only for your one-way journey. No additional return fare charges.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Important Information</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>All fares are inclusive of driver allowance, fuel and vehicle charges.</li>
                <li>Toll and parking charges (if any) are extra and to be paid by the customer.</li>
                <li>Fares may vary slightly based on exact pickup and drop locations.</li>
                <li>Night charges may apply for rides between 10 PM and 6 AM.</li>
                <li>Waiting charges will apply if the vehicle is kept waiting for more than 30 minutes after arrival.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your One-Way Cab?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience a comfortable and hassle-free journey with Gautham Tours and Travels.
          </p>
          <Link href="/booking">
            <span className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition cursor-pointer">
              Book Now
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default OneWayFares;