import { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    trip: "Delhi to Jaipur trip",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
    rating: 5,
    text: "Our family trip from Delhi to Jaipur was absolutely amazing! The driver was professional, friendly, and knew all the best spots to stop along the way. The car was comfortable and well-maintained. Will definitely book with RoadTrip India for our next vacation!"
  },
  {
    name: "Rahul Mehta",
    trip: "Mumbai Airport Transfer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
    rating: 4.5,
    text: "I was worried about missing my early morning flight, but RoadTrip India was right on time. The driver was tracking my flight status and was very helpful with my luggage. The car was clean and comfortable. Highly recommend their airport transfer service!"
  },
  {
    name: "Aisha Patel",
    trip: "Kerala Backwaters Tour",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200",
    rating: 5,
    text: "We booked a week-long tour of Kerala, and it was the best decision! Our driver was knowledgeable about local culture and showed us hidden gems we would have never discovered on our own. The car was perfect for the long journeys, and the flexibility to change our itinerary was a huge plus!"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-primary text-primary" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg 
          key="half" 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary"
        >
          <defs>
            <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <polygon 
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
            fill="url(#halfStar)" 
            stroke="#FF6B35"
          />
        </svg>
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-primary" />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real experiences from travelers who chose RoadTrip India for their journeys.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`testimonial-card ${
                  index === activeIndex ? 'active' : 'hidden-card'
                } bg-gray-50 rounded-xl shadow-md p-6 md:p-8`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-sans font-semibold text-xl">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.trip}</p>
                    <div className="flex text-primary mt-1">
                      {renderRating(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="bg-gray-50 hover:bg-gray-200 text-foreground w-12 h-12 rounded-full"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              onClick={nextTestimonial}
              className="bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
