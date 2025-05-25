
import { Button } from "@/components/ui/button";
import { Heart, Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-accent to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Your Pet's
                <span className="text-primary block">Happy Place</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Professional pet care services with love, attention, and expertise. 
                We treat your furry family members like our own.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                Book an Appointment
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-800">500+</div>
                  <div className="text-gray-600">Happy Pets</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-800">5-Star</div>
                  <div className="text-gray-600">Reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-800">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3"
                alt="Happy pets at Mr n Mrs Pet"
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-green-600">Always Open</div>
                    <div className="text-sm text-gray-600">24/7 Emergency Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
