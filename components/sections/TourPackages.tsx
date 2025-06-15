import { MapPin, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const tourPackages = [
  {
    id: 'pilgrimage',
    title: 'Pilgrimage Tours',
    packages: [
      {
        name: "Shirdi Darshan",
        duration: "1 Day",
        distance: "246 km",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Sai Baba Temple", "Dwarkamai", "Chavadi", "Shani Shingnapur"],
        rating: 4.8,
        description: "Visit the holy shrine of Sai Baba with comfortable transportation and guided tour."
      },
      {
        name: "Bhimashankar Jyotirlinga",
        duration: "1 Day",
        distance: "110 km",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        highlights: ["Bhimashankar Temple", "Wildlife Sanctuary", "Hanuman Lake"],
        rating: 4.7,
        description: "Sacred Jyotirlinga temple nestled in the Sahyadri mountains."
      }
    ]
  },
  {
    id: 'hill-stations',
    title: 'Hill Stations',
    packages: [
      {
        name: "Lonavala Khandala",
        duration: "2 Days",
        distance: "64 km",
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1586616431_5_3.jpg.webp",
        highlights: ["Tiger Point", "Bhushi Dam", "Karla Caves", "Lohagad Fort"],
        rating: 4.6,
        description: "Popular hill station with scenic valleys, waterfalls and pleasant weather."
      },
      {
        name: "Mahabaleshwar Panchgani",
        duration: "3 Days",
        distance: "120 km",
        image: "https://i.cdn.newsbytesapp.com/images/l4120211229212844.jpeg",
        highlights: ["Elephant's Head Point", "Strawberry Gardens", "Table Land", "Arthur's Seat"],
        rating: 4.7,
        description: "Queen of hill stations with strawberry farms and panoramic valley views."
      }
    ]
  }
]

const TourPackages = () => {
  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Tour Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations with our carefully curated tour packages across Maharashtra and beyond.
          </p>
        </div>

        {tourPackages.map((category) => (
          <div key={category.id} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">{category.title}</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.packages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{pkg.distance}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
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
                    
                    <Button className="w-full">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TourPackages