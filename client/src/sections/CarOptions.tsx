import React from 'react';
import { Link } from 'wouter';
import { Car, Users, ArrowRight } from 'lucide-react';

const carOptions = [
  {
    title: "AC Hatchback",
    description: "Economy Cabs",
    seats: "4 seats",
    image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    info: "Perfect for city travel and short trips, our hatchbacks are fuel-efficient and easy to navigate in urban settings.",
  },
  {
    title: "AC Sedan",
    description: "Premium Economy Cabs",
    seats: "4 seats",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    info: "Our sedans offer an excellent balance of comfort and value, ideal for business travel or small families.",
  },
  {
    title: "AC SUV Large",
    description: "Perfect for Families",
    seats: "7 seats",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    info: "Spacious SUVs with ample luggage space, ideal for family vacations and group travel with maximum comfort.",
  },
  {
    title: "Full Size Van",
    description: "Full Size Van",
    seats: "12 seats",
    image: "https://5.imimg.com/data5/CE/AC/MY-15973426/force-traveller-26-mini-bus-500x500.jpg",
    info: "Perfect for large groups and corporate outings, our full-size vans offer maximum capacity with comfort.",
  },
];

const CarOptions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Our Vehicle Fleet</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse fleet of well-maintained vehicles to match your specific needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {carOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-sans font-semibold text-xl">{option.title}</h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                  <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
                    <Users className="h-4 w-4 text-primary mr-1" />
                    <span className="text-primary text-sm font-medium">{option.seats}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm">{option.info}</p>
                </div>
                
                <Link href="/booking">
                  <span className="block w-full bg-primary text-white text-center py-2 rounded-lg hover:bg-primary/90 transition cursor-pointer">
                    Book Now
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/fleet">
            <span className="inline-flex items-center text-primary font-medium hover:underline cursor-pointer">
              View Complete Fleet <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarOptions;