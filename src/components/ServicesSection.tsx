
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Home, GraduationCap, Stethoscope, Car, Heart } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pet looking and feeling their best.",
      features: ["Full-service baths", "Nail trimming", "Hair styling", "Teeth cleaning"],
      color: "bg-primary"
    },
    {
      icon: Home,
      title: "Pet Boarding",
      description: "Safe, comfortable overnight care in our state-of-the-art facility.",
      features: ["Climate-controlled rooms", "24/7 supervision", "Daily exercise", "Medication administration"],
      color: "bg-secondary"
    },
    {
      icon: GraduationCap,
      title: "Pet Training",
      description: "Expert training programs for pets of all ages and behavior levels.",
      features: ["Obedience training", "Behavior modification", "Puppy classes", "Advanced tricks"],
      color: "bg-primary"
    },
    {
      icon: Stethoscope,
      title: "Veterinary Care",
      description: "Comprehensive health services from our licensed veterinary team.",
      features: ["Health checkups", "Vaccinations", "Emergency care", "Dental services"],
      color: "bg-secondary"
    },
    {
      icon: Car,
      title: "Pet Taxi",
      description: "Safe transportation services for your pet's appointments and activities.",
      features: ["Door-to-door service", "Climate-controlled vehicles", "Experienced handlers", "Real-time updates"],
      color: "bg-primary"
    },
    {
      icon: Heart,
      title: "Pet Daycare",
      description: "Fun, supervised daycare where your pet can socialize and play.",
      features: ["Supervised playtime", "Indoor/outdoor activities", "Socialization", "Exercise programs"],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Pet Care Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive pet care services designed to keep your furry friends healthy, 
            happy, and well-cared for. Every service is delivered with love and professional expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:animate-hover-bounce`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full border-gray-200 hover:border-primary hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
