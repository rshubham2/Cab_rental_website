"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Plane, 
  Clock, 
  Route,
  Car,
  Users,
  Shield,
  Star
} from 'lucide-react'

const services = [
  {
    id: 'outstation',
    title: 'Outstation Trips',
    description: 'Comfortable long-distance travel to your favorite destinations',
    icon: Route,
    features: [
      'Lonavala & Khandala',
      'Mahabaleshwar & Panchgani', 
      'Goa Beach Holiday',
      'Shirdi Darshan',
      'Trimbakeshwar Temple',
      'Nashik & Panchvati',
      'Bhimashankar Jyotirlinga',
      'Somnath & Dwarka',
      'North India Tours'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'local',
    title: 'Local Trips',
    description: 'Explore Mumbai and nearby attractions with ease',
    icon: MapPin,
    features: [
      'Siddhivinayak Temple',
      'Mahalaxmi Temple',
      'Gateway of India',
      'Marine Drive',
      'Elephanta Caves',
      'Crawford Market',
      'Film City Tours',
      'Mumbai Darshan'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'airport',
    title: 'Airport Pickup/Drop',
    description: 'Reliable airport transfers with professional service',
    icon: Plane,
    features: [
      'Mumbai Airport (Domestic)',
      'Mumbai Airport (International)',
      'Pune Airport',
      'Flight Tracking',
      'Meet & Greet Service',
      'Luggage Assistance',
      '24/7 Availability'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'hourly',
    title: 'Hourly Car Rental',
    description: 'Flexible hourly rentals for your convenience',
    icon: Clock,
    features: [
      'Minimum 4 hours',
      'Business Meetings',
      'Shopping Tours',
      'City Exploration',
      'Wedding Functions',
      'Corporate Events',
      'Flexible Timing'
    ],
    color: 'from-orange-500 to-orange-600'
  }
]

const whyChooseUs = [
  {
    icon: Car,
    title: 'Premium Fleet',
    description: 'Well-maintained, comfortable vehicles with modern amenities'
  },
  {
    icon: Users,
    title: 'Professional Drivers',
    description: 'Experienced, courteous drivers with local knowledge'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Regular vehicle maintenance and safety checks'
  },
  {
    icon: Star,
    title: 'Complete Trip Planning',
    description: 'Hotel bookings and complete travel itinerary planning'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From local sightseeing to outstation adventures, we provide comprehensive 
            travel solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 4} more destinations
                      </li>
                    )}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Gautham Tours?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We go beyond just transportation - we provide complete travel solutions 
            including hotel bookings and trip planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}