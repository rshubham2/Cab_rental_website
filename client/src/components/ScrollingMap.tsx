import { useEffect, useRef, useState } from 'react';
import { MapPin, Car } from 'lucide-react';

const ScrollingMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const destinations = [
    { name: "Mumbai", position: 10 },
    { name: "Lonavala", position: 25 },
    { name: "Pune", position: 40 },
    { name: "Mahabaleshwar", position: 60 },
    { name: "Goa", position: 85 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate scroll progress when element is in view
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
          const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Journey with Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience seamless travel across Maharashtra and beyond with our premium cab services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Road/Path */}
          <div className="relative h-32 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full overflow-hidden">
            {/* Road markings */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white transform -translate-y-1/2">
              <div className="flex justify-between h-full">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="w-8 h-full bg-gray-300"></div>
                ))}
              </div>
            </div>
            
            {/* Moving Car */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out"
              style={{ 
                left: `${Math.min(scrollProgress * 90, 90)}%`,
                transform: `translateY(-50%) translateX(-50%)` 
              }}
            >
              <div className="bg-primary text-white p-3 rounded-lg shadow-lg">
                <Car className="h-6 w-6" />
              </div>
            </div>
            
            {/* Destination Markers */}
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${destination.position}%` }}
              >
                <div className="flex flex-col items-center">
                  <div className={`p-2 rounded-full shadow-lg transition-all duration-300 ${
                    scrollProgress * 100 >= destination.position 
                      ? 'bg-secondary text-white scale-110' 
                      : 'bg-white text-gray-600'
                  }`}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-center">
                    <div className={`px-2 py-1 rounded ${
                      scrollProgress * 100 >= destination.position 
                        ? 'bg-secondary text-white' 
                        : 'bg-white text-gray-700'
                    } shadow-sm`}>
                      {destination.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${scrollProgress * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(scrollProgress * 100)}% Journey Complete
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingMap;