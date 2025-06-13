import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { MapPin, Clock, Users, Star, ArrowRight, Phone, Calendar } from 'lucide-react';

const TourPackagesPage = () => {
  const packageCategories = [
    {
      id: 'pilgrimage',
      title: 'Pilgrimage Tours',
      description: 'Sacred journeys to holy destinations',
      icon: '🕉️',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'hill-stations',
      title: 'Hill Stations',
      description: 'Scenic mountain getaways',
      icon: '🏔️',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'beaches',
      title: 'Beach Destinations',
      description: 'Coastal paradise experiences',
      icon: '🏖️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mumbai-local',
      title: 'Mumbai Local Tours',
      description: 'Explore the city of dreams',
      icon: '🏙️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'heritage',
      title: 'Heritage Sites',
      description: 'Historical and cultural tours',
      icon: '🏛️',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'adventure',
      title: 'Adventure Tours',
      description: 'Thrilling outdoor experiences',
      icon: '🎯',
      color: 'from-red-500 to-purple-500'
    }
  ];

  const tourPackages = {
    'pilgrimage': [
      {
        name: "Shirdi Darshan",
        duration: "1 Day",
        distance: "246 km",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Sai Baba Temple", "Dwarkamai", "Chavadi", "Shani Shingnapur"],
        price: "₹4,500",
        rating: 4.8,
        description: "Visit the holy shrine of Sai Baba with comfortable transportation and guided tour."
      },
      {
        name: "Bhimashankar Jyotirlinga",
        duration: "1 Day",
        distance: "110 km",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Bhimashankar Temple", "Wildlife Sanctuary", "Hanuman Lake"],
        price: "₹3,800",
        rating: 4.7,
        description: "Sacred Jyotirlinga temple nestled in the Sahyadri mountains."
      },
      {
        name: "Trimbakeshwar Temple",
        duration: "1 Day", 
        distance: "167 km",
        image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Trimbakeshwar Temple", "Brahmagiri Hill", "Kushavarta Kund"],
        price: "₹4,200",
        rating: 4.9,
        description: "One of the twelve Jyotirlingas, source of river Godavari."
      },
      {
        name: "Somnath Dwarka Tour",
        duration: "3 Days",
        distance: "850 km",
        image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Somnath Temple", "Dwarka Temple", "Bet Dwarka", "Nageshwar"],
        price: "₹18,500",
        rating: 4.8,
        description: "Complete Gujarat pilgrimage covering Somnath and Dwarka with comfortable stay."
      }
    ],
    'hill-stations': [
      {
        name: "Lonavala Khandala",
        duration: "2 Days",
        distance: "64 km",
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1586616431_5_3.jpg.webp",
        highlights: ["Tiger Point", "Bhushi Dam", "Karla Caves", "Lohagad Fort"],
        price: "₹6,500",
        rating: 4.6,
        description: "Popular hill station with scenic valleys, waterfalls and pleasant weather."
      },
      {
        name: "Mahabaleshwar Panchgani",
        duration: "3 Days",
        distance: "120 km",
        image: "https://i.cdn.newsbytesapp.com/images/l4120211229212844.jpeg",
        highlights: ["Elephant's Head Point", "Strawberry Gardens", "Table Land", "Arthur's Seat"],
        price: "₹9,800",
        rating: 4.7,
        description: "Queen of hill stations with strawberry farms and panoramic valley views."
      },
      {
        name: "Matheran Hill Station",
        duration: "2 Days",
        distance: "90 km",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Panorama Point", "Echo Point", "Charlotte Lake", "One Tree Hill"],
        price: "₹7,200",
        rating: 4.5,
        description: "Asia's only automobile-free hill station with pristine nature."
      }
    ],
    'beaches': [
      {
        name: "Goa Beach Holiday",
        duration: "4 Days",
        distance: "464 km",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Baga Beach", "Calangute Beach", "Old Goa Churches", "Spice Plantations"],
        price: "₹22,500",
        rating: 4.8,
        description: "Complete Goa experience with beaches, nightlife and Portuguese heritage."
      },
      {
        name: "Konkan Coast Tour",
        duration: "3 Days",
        distance: "350 km",
        image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Places-To-Visit-In-Konkan-In-August-Cover-Photo-840x425.jpg",
        highlights: ["Ganpatipule", "Ratnagiri", "Tarkarli Beach", "Sindhudurg Fort"],
        price: "₹12,800",
        rating: 4.6,
        description: "Pristine Konkan coastline with beautiful beaches and seafood."
      }
    ],
    'mumbai-local': [
      {
        name: "Mumbai City Tour",
        duration: "8 Hours",
        distance: "Local",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Crawford Market"],
        price: "₹2,500",
        rating: 4.7,
        description: "Complete Mumbai sightseeing covering iconic landmarks and local culture."
      },
      {
        name: "Bollywood & Film City Tour",
        duration: "6 Hours",
        distance: "Local",
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Film City Studios", "Celebrity Homes", "Bollywood Museum", "Juhu Beach"],
        price: "₹3,200",
        rating: 4.5,
        description: "Behind-the-scenes look at Bollywood with studio visits and celebrity spots."
      },
      {
        name: "Mumbai Heritage Walk",
        duration: "4 Hours",
        distance: "Local",
        image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["CST Station", "High Court", "University of Mumbai", "Oval Maidan"],
        price: "₹1,800",
        rating: 4.6,
        description: "Explore Mumbai's colonial architecture and historical significance."
      }
    ],
    'heritage': [
      {
        name: "Ajanta Ellora Caves",
        duration: "2 Days",
        distance: "350 km",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Ajanta Caves", "Ellora Caves", "Daulatabad Fort", "Bibi Ka Maqbara"],
        price: "₹8,500",
        rating: 4.9,
        description: "UNESCO World Heritage sites showcasing ancient Indian art and architecture."
      },
      {
        name: "Pune Heritage Tour",
        duration: "1 Day",
        distance: "150 km",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Osho Ashram"],
        price: "₹3,500",
        rating: 4.4,
        description: "Historical and cultural tour of the Oxford of the East."
      }
    ],
    'adventure': [
      {
        name: "Sahyadri Adventure",
        duration: "2 Days",
        distance: "200 km",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Trekking", "River Rafting", "Camping", "Rock Climbing"],
        price: "₹7,800",
        rating: 4.6,
        description: "Thrilling adventure activities in the Western Ghats."
      },
      {
        name: "Dandeli Adventure",
        duration: "3 Days",
        distance: "450 km",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["White Water Rafting", "Jungle Safari", "Zip Lining", "Kayaking"],
        price: "₹12,500",
        rating: 4.7,
        description: "Ultimate adventure destination with water sports and wildlife."
      }
    ]
  };

  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Tour Packages - Gautham Tours and Travels</title>
        <meta name="description" content="Explore our comprehensive tour packages including pilgrimage tours, hill stations, beaches, Mumbai local tours, heritage sites and adventure tours across Maharashtra and India." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tour Packages</h1>
            <p className="text-xl mb-8 text-white/90">
              Discover amazing destinations with our carefully curated tour packages across Maharashtra and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Tour Packages</div>
              </div>
              <div>
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-white/80">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Customizable</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tour Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of tour categories designed to suit every traveler's preference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageCategories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white hover:scale-105 transition-transform duration-300`}>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center text-white/80">
                    <span className="text-sm">Explore packages</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages by Category */}
      {Object.entries(tourPackages).map(([categoryId, packages]) => {
        const category = packageCategories.find(cat => cat.id === categoryId);
        return (
          <section key={categoryId} className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl mr-3">{category?.icon}</span>
                  <h2 className="text-3xl font-bold">{category?.title}</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">{category?.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full">
                        <div className="flex items-center">
                          {renderRating(pkg.rating)}
                          <span className="ml-1 text-sm font-medium">{pkg.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{pkg.name}</h3>
                        <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{pkg.duration}</span>
                        </div>
                        {pkg.distance !== 'Local' && (
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{pkg.distance}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {pkg.highlights.map((highlight, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link href="/booking" className="flex-1">
                          <span className="block w-full text-center py-2 bg-primary text-white rounded hover:bg-primary/90 transition cursor-pointer text-sm">
                            Book Now
                          </span>
                        </Link>
                        <a href="tel:9833401900" className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition">
                          <Phone className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Custom Tour Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Custom Tour Packages</h2>
            <p className="text-gray-600 mb-8">
              Don't see what you're looking for? We create personalized tour packages based on your preferences, budget, and schedule.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Flexible Dates</h3>
                <p className="text-sm text-gray-600">Choose your preferred travel dates and duration</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Group Size</h3>
                <p className="text-sm text-gray-600">Packages for solo travelers to large groups</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Custom Routes</h3>
                <p className="text-sm text-gray-600">Design your own itinerary with multiple destinations</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition cursor-pointer">
                  Plan Custom Tour <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <a href="tel:9833401900" className="inline-flex items-center bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition">
                <Phone className="mr-2 h-4 w-4" />
                Call for Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your dream tour package today and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <span className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
                Book Tour Package <ArrowRight className="ml-2 h-4 w-4" />
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

export default TourPackagesPage;