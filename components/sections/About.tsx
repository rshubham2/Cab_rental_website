import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            About Gautham Tours and Travels
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover why we're passionate about making road trips comfortable,
            flexible, and enjoyable across Maharashtra and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-semibold text-2xl mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-4">
              At Gautham Tours and Travels, we believe that journey matters as much as the
              destination. Our mission is to transform the way Maharashtra travels by
              road, offering premium chauffeur-driven services that prioritize
              your comfort, safety, and experience.
            </p>

            <h3 className="font-semibold text-2xl mb-4">
              Why We Love Road Trips
            </h3>
            <p className="text-gray-700 mb-4">
              Maharashtra's diverse landscapes, from misty mountain passes to coastal
              highways, deserve to be experienced up close. Road trips offer
              flexibility, authentic experiences, and the chance to discover
              hidden gems that most travelers miss.
            </p>

            <p className="text-gray-700">
              Our team of travel enthusiasts has curated services that eliminate
              the typical hassles of road travel while preserving the joy of
              discovery and freedom that makes road trips special.
            </p>

            <div className="mt-8">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link href="#contact">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Places-To-Visit-In-Konkan-In-August-Cover-Photo-840x425.jpg"
              alt="Scenic mountain road in Maharashtra"
              className="rounded-xl shadow-md h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500"
              alt="Luxury chauffeur-driven car"
              className="rounded-xl shadow-md object-cover mb-4"
            />
            <img
              src="https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500"
              alt="Maharashtra tourist destination"
              className="rounded-xl shadow-md object-cover mt-4 col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About