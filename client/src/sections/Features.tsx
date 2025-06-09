import { MapPin, UserCheck, Car, Headphones } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const features = [
  {
    icon: <MapPin className="text-primary text-2xl" />,
    title: "2000+ Cities",
    description: "Extensive coverage across India for seamless travel"
  },
  {
    icon: <UserCheck className="text-primary text-2xl" />,
    title: "Professional Drivers",
    description: "Trained chauffeurs focused on safety and comfort"
  },
  {
    icon: <Car className="text-primary text-2xl" />,
    title: "Quality Vehicles",
    description: "Well-maintained fleet for a smooth journey"
  },
  {
    icon: <Headphones className="text-primary text-2xl" />,
    title: "24/7 Support",
    description: "Always available to assist you during your trip"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <ParticleBackground 
        className="opacity-5"
        particleCount={40}
        particleColor="#3B82F6"
        particleSize={2}
        speed={0.4}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {feature.icon}
              </div>
              <h3 className="font-sans font-semibold text-xl mb-2 relative z-10">{feature.title}</h3>
              <p className="text-gray-600 relative z-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;