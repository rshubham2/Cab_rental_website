import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { ArrowRight, Users, Award, MapPin, Clock } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "10,000+", label: "Happy Customers" },
    { icon: <MapPin className="h-8 w-8 text-primary" />, number: "2000+", label: "Cities Covered" },
    { icon: <Award className="h-8 w-8 text-primary" />, number: "5+", label: "Years Experience" },
    { icon: <Clock className="h-8 w-8 text-primary" />, number: "24/7", label: "Customer Support" },
  ];

  const values = [
    {
      title: "Safety First",
      description: "Your safety is our top priority. All our drivers are thoroughly verified and trained.",
      icon: "🛡️"
    },
    {
      title: "Comfort & Quality",
      description: "Well-maintained vehicles with modern amenities for a comfortable journey.",
      icon: "⭐"
    },
    {
      title: "Reliability",
      description: "On-time service with professional drivers who know the best routes.",
      icon: "⏰"
    },
    {
      title: "Transparency",
      description: "No hidden charges. What you see is what you pay.",
      icon: "💎"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Gautham Tours and Travels</title>
        <meta name="description" content="Learn about Gautham Tours and Travels - your trusted partner for premium cab services across Maharashtra. Discover our mission, values, and commitment to excellence." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Gautham Tours and Travels</h1>
            <p className="text-xl mb-8 text-white/90">
              Your trusted partner for premium chauffeur-driven cab services across Maharashtra and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded with a vision to revolutionize road travel in India, Gautham Tours and Travels has been serving customers with dedication and excellence for over 5 years. What started as a small local service has grown into a trusted name across Maharashtra.
              </p>
              <p className="text-gray-700 mb-4">
                We understand that every journey is unique, and that's why we offer personalized services tailored to your specific needs. Whether it's a business trip, family vacation, or a special occasion, we ensure your travel experience is comfortable, safe, and memorable.
              </p>
              <p className="text-gray-700 mb-6">
                Our commitment to quality service, transparent pricing, and customer satisfaction has earned us the trust of thousands of travelers across India.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition cursor-pointer">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional chauffeur service"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Luxury car fleet"
                className="rounded-lg shadow-md mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Scenic road trip"
                className="rounded-lg shadow-md -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Happy customers"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience we provide to our customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/90 text-lg">
                To provide safe, comfortable, and reliable transportation services that exceed customer expectations while promoting responsible tourism and contributing to local communities.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-white/90 text-lg">
                To be the most trusted and preferred cab service provider in India, known for our commitment to excellence, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience the Difference?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen Gautham Tours and Travels for their travel needs.
          </p>
          <Link href="/booking">
            <span className="inline-flex items-center bg-white text-secondary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
              Book Your Ride Now <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;