import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TestimonialsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 6;

  const allTestimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      trip: "Delhi to Jaipur trip",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Our family trip from Delhi to Jaipur was absolutely amazing! The driver was professional, friendly, and knew all the best spots to stop along the way. The car was comfortable and well-maintained. Will definitely book with Gautham Tours and Travels for our next vacation!",
      date: "December 2024"
    },
    {
      name: "Rahul Mehta",
      location: "Pune",
      trip: "Mumbai Airport Transfer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "I was worried about missing my early morning flight, but Gautham Tours was right on time. The driver was tracking my flight status and was very helpful with my luggage. The car was clean and comfortable. Highly recommend their airport transfer service!",
      date: "November 2024"
    },
    {
      name: "Aisha Patel",
      location: "Nashik",
      trip: "Kerala Backwaters Tour",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "We booked a week-long tour of Kerala, and it was the best decision! Our driver was knowledgeable about local culture and showed us hidden gems we would have never discovered on our own. The car was perfect for the long journeys, and the flexibility to change our itinerary was a huge plus!",
      date: "October 2024"
    },
    {
      name: "Vikram Singh",
      location: "Thane",
      trip: "Corporate Travel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "As a business traveler, I need reliable transportation. Gautham Tours has been my go-to service for the past year. Always punctual, professional drivers, and clean vehicles. Their corporate packages are very reasonable too.",
      date: "November 2024"
    },
    {
      name: "Sneha Desai",
      location: "Aurangabad",
      trip: "Wedding Transportation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "They handled transportation for our entire wedding party flawlessly. Multiple cars, perfect timing, and the vehicles were beautifully decorated. The coordination was excellent and stress-free. Thank you for making our special day perfect!",
      date: "September 2024"
    },
    {
      name: "Arjun Kumar",
      location: "Kolhapur",
      trip: "Mahabaleshwar Weekend Trip",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 4,
      text: "Great service for our weekend getaway to Mahabaleshwar. The driver was courteous and knew all the scenic routes. The car was comfortable for the mountain roads. Only minor issue was a slight delay in pickup, but overall excellent experience.",
      date: "October 2024"
    },
    {
      name: "Meera Joshi",
      location: "Solapur",
      trip: "Local City Tour",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Booked a full-day local tour of Mumbai for my parents who were visiting. The driver was patient, knowledgeable about the city's history, and took them to all the important places. They had a wonderful time!",
      date: "December 2024"
    },
    {
      name: "Rajesh Patil",
      location: "Satara",
      trip: "Shirdi Pilgrimage",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Excellent service for our family pilgrimage to Shirdi. The driver was respectful of our religious sentiments and waited patiently during our temple visits. The journey was comfortable and peaceful.",
      date: "November 2024"
    },
    {
      name: "Kavita Reddy",
      location: "Nagpur",
      trip: "Goa Beach Holiday",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      rating: 5,
      text: "Amazing road trip to Goa! The driver was friendly and made great suggestions for stops along the way. The car was spacious enough for all our luggage and beach gear. Made our vacation start perfectly!",
      date: "October 2024"
    }
  ];

  const totalPages = Math.ceil(allTestimonials.length / testimonialsPerPage);
  const currentTestimonials = allTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <>
      <Helmet>
        <title>Customer Testimonials - Gautham Tours and Travels</title>
        <meta name="description" content="Read what our customers say about their travel experiences with Gautham Tours and Travels. Real reviews from satisfied customers across Maharashtra." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Customers Say</h1>
            <p className="text-xl mb-8 text-white/90">
              Real experiences from travelers who chose Gautham Tours and Travels for their journeys.
            </p>
            <div className="flex items-center justify-center gap-8 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {renderRating(testimonial.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({testimonial.rating}/5)</span>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.trip}
                  </span>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                  {testimonial.date}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="w-12 h-12 rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentPage ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="w-12 h-12 rounded-full"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Customer Satisfaction Breakdown</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's how our customers rate different aspects of our service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-gray-600 mb-2">Driver Quality</div>
              <div className="flex justify-center">
                {renderRating(5)}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-gray-600 mb-2">Vehicle Condition</div>
              <div className="flex justify-center">
                {renderRating(5)}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-gray-600 mb-2">Punctuality</div>
              <div className="flex justify-center">
                {renderRating(5)}
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-gray-600 mb-2">Customer Service</div>
              <div className="flex justify-center">
                {renderRating(5)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference Yourself</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and book your next journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Book Your Ride Now
            </a>
            <a href="/contact" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Share Your Experience
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;