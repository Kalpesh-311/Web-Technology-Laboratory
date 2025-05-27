
import { Button } from "@/components/ui/button";
import { Award, Shield, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team consists of licensed veterinarians and certified pet care specialists."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "State-of-the-art facilities with 24/7 security and climate control."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 7 days a week with emergency services available 24/7."
    },
    {
      icon: Heart,
      title: "Passionate Care",
      description: "We treat every pet as if they were our own family members."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                About Dhule Pet Hostel
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 10 years, Dhule Pet Hostel has been the trusted choice for pet care in our community. 
                We started with a simple mission: to provide the highest quality care for pets while 
                giving their owners complete peace of mind.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art facility and experienced team ensure that every pet receives 
                personalized attention and care. From routine grooming to emergency veterinary services, 
                we're here for you and your furry family members.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3"
                alt="Our team at Dhule Pet Hostel"
                className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow group-hover:animate-hover-bounce">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
