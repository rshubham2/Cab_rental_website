'use client'

import { useEffect, useRef, useState } from "react"
import { MapPin, Car, Clock, Navigation, Route, Users } from "lucide-react"

const ScrollingMap = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const carRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentDestination, setCurrentDestination] = useState(0)

  const destinations = [
    {
      name: "Mumbai",
      position: 0,
      distance: "Start",
      time: "0h 0m",
      description: "Financial capital and gateway to Maharashtra",
      icon: "🏙️",
      coords: { x: 50, y: 5 },
    },
    {
      name: "Lonavala",
      position: 20,
      distance: "64 km",
      time: "1h 30m",
      description: "Scenic hill station with lush green valleys",
      icon: "🏔️",
      coords: { x: 25, y: 25 },
    },
    {
      name: "Pune",
      position: 40,
      distance: "83 km",
      time: "2h 15m",
      description: "Oxford of the East and IT hub",
      icon: "🎓",
      coords: { x: 75, y: 45 },
    },
    {
      name: "Mahabaleshwar",
      position: 70,
      distance: "120 km",
      time: "3h 45m",
      description: "Queen of hill stations with strawberries",
      icon: "🍓",
      coords: { x: 20, y: 70 },
    },
    {
      name: "Goa",
      position: 100,
      distance: "464 km",
      time: "8h 30m",
      description: "Tropical paradise with golden beaches",
      icon: "🏖️",
      coords: { x: 80, y: 95 },
    },
  ]

  const roadPath = "M 50 50 Q 25 150, 75 250 Q 125 350, 20 450 Q -30 550, 80 650 Q 130 750, 50 850 Q 20 950, 80 1050"

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const elementTop = rect.top
            const elementHeight = rect.height

            if (elementTop < windowHeight && elementTop + elementHeight > 0) {
              const scrolledDistance = Math.max(0, windowHeight - elementTop)
              const totalScrollDistance = elementHeight + windowHeight * 0.5
              let progress = Math.min(1, Math.max(0, scrolledDistance / totalScrollDistance))

              progress = progress * progress * (3 - 2 * progress)
              setScrollProgress(progress)

              const destinationIndex = Math.floor(progress * destinations.length)
              setCurrentDestination(Math.min(destinationIndex, destinations.length - 1))

              if (pathRef.current && carRef.current) {
                const pathLength = pathRef.current.getTotalLength()
                const point = pathRef.current.getPointAtLength(progress * pathLength)
                const nextPoint = pathRef.current.getPointAtLength(
                  Math.min((progress + 0.01) * pathLength, pathLength)
                )

                const angle = (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180) / Math.PI

                carRef.current.style.transform = `translate(${point.x - 32}px, ${point.y - 48}px) rotate(${angle + 90}deg)`
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="pt-24 pb-16 text-center bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-slate-800 mb-6">
            Premium Journey Experience
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Travel in comfort across Maharashtra's most beautiful destinations.
            Our professional drivers ensure a safe and luxurious journey.
          </p>
          <div className="flex justify-center items-center gap-8 mt-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Professional Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <Route className="h-5 w-5" />
              <span>Scenic Routes</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              <span>Premium Vehicles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Map Section */}
      <section
        ref={containerRef}
        className="relative bg-slate-50"
        style={{ height: "600vh" }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-5xl h-full">
              {/* SVG Road Path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 1100"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter
                    id="roadShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="2"
                      dy="2"
                      stdDeviation="3"
                      floodColor="#000"
                      floodOpacity="0.3"
                    />
                  </filter>
                  <pattern
                    id="roadPattern"
                    x="0"
                    y="0"
                    width="4"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x="1" y="0" width="2" height="10" fill="white" />
                    <rect x="1" y="15" width="2" height="5" fill="white" />
                  </pattern>
                </defs>

                <path
                  d={roadPath}
                  stroke="#374151"
                  strokeWidth="12"
                  fill="none"
                  filter="url(#roadShadow)"
                />

                <path
                  ref={pathRef}
                  d={roadPath}
                  stroke="url(#roadPattern)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Destination Markers */}
              {destinations.map((destination, index) => {
                const isActive = scrollProgress * 100 >= destination.position
                const isPassed = scrollProgress * 100 > destination.position + 5

                return (
                  <div
                    key={destination.name}
                    className="absolute z-10"
                    style={{
                      left: `${destination.coords.x}%`,
                      top: `${destination.coords.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Destination Info Card */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "-left-80" : "-right-80"
                      } top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-40 scale-95"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 w-72">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{destination.icon}</span>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              {destination.name}
                            </h4>
                            <p className="text-xs text-slate-500">
                              {destination.distance} • {destination.time}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {destination.description}
                        </p>
                      </div>
                    </div>

                    {/* Marker Pin */}
                    <div
                      className={`relative transition-all duration-500 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    >
                      <div
                        className={`p-4 rounded-full shadow-lg border-4 transition-all duration-300 ${
                          isPassed
                            ? "bg-green-600 border-green-200"
                            : isActive
                            ? "bg-blue-600 border-blue-200"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        <MapPin
                          className={`h-6 w-6 ${
                            isPassed || isActive
                              ? "text-white"
                              : "text-slate-400"
                          }`}
                        />
                      </div>

                      {/* Pulse Animation for Active */}
                      {isActive && !isPassed && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-blue-600 opacity-25 animate-ping"></div>
                          <div
                            className="absolute inset-0 rounded-full bg-blue-400 opacity-15 animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Realistic Car */}
              <div
                ref={carRef}
                className="absolute w-16 h-24 z-20 transition-transform duration-75 ease-out"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0">
                    <div className="absolute top-1 left-1 w-full h-full bg-slate-900 opacity-20 rounded-lg blur-sm"></div>
                    <div className="relative w-full h-full bg-blue-600 rounded-lg overflow-hidden shadow-lg">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-blue-700 rounded-t-lg"></div>
                      <div className="absolute top-1 left-1 right-1 h-4 bg-slate-200 rounded-t opacity-80"></div>
                      <div className="absolute top-6 left-1 right-1 h-8 bg-slate-300 opacity-60 rounded-sm"></div>
                      <div className="absolute top-8 left-0 w-1/2 h-6 border-r border-blue-800"></div>
                      <div className="absolute top-8 right-0 w-1/2 h-6 border-l border-blue-800"></div>
                      <div className="absolute top-0 left-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <div className="absolute top-0 right-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <div className="absolute bottom-0 left-1 w-2 h-1 bg-red-500 rounded-sm"></div>
                      <div className="absolute bottom-0 right-1 w-2 h-1 bg-red-500 rounded-sm"></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-slate-800 rounded-sm"></div>
                      <div className="absolute top-7 -left-1 w-1 h-2 bg-slate-800 rounded-sm"></div>
                      <div className="absolute top-7 -right-1 w-1 h-2 bg-slate-800 rounded-sm"></div>
                    </div>
                    <div className="absolute -bottom-1 left-1 w-3 h-3 bg-slate-800 rounded-full border-2 border-slate-600">
                      <div className="absolute inset-1 bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-1 right-1 w-3 h-3 bg-slate-800 rounded-full border-2 border-slate-600">
                      <div className="absolute inset-1 bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="absolute -top-1 left-1 w-3 h-3 bg-slate-800 rounded-full border-2 border-slate-600">
                      <div className="absolute inset-1 bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="absolute -top-1 right-1 w-3 h-3 bg-slate-800 rounded-full border-2 border-slate-600">
                      <div className="absolute inset-1 bg-slate-400 rounded-full"></div>
                    </div>
                  </div>

                  {scrollProgress > 0.05 && (
                    <>
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                        <div className="flex flex-col space-y-1">
                          <div className="w-3 h-0.5 bg-slate-400 rounded-full opacity-60"></div>
                          <div className="w-2 h-0.5 bg-slate-400 rounded-full opacity-40"></div>
                          <div className="w-1 h-0.5 bg-slate-400 rounded-full opacity-20"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-2 bg-slate-300 opacity-30 rounded-full blur-sm"></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScrollingMap