
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Vivek Patil",
      location: "Downtown",
      text: "Dhule Pet Hostel has been taking care of my golden retriever Max for 3 years now. The staff is incredibly caring and professional. I never worry when Max is with them!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b6d5b8c8?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Harshal Patel",
      location: "Westside",
      text: "The grooming service here is outstanding! My Persian cat Fluffy always comes home looking beautiful and relaxed. The team really knows how to handle anxious pets.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Gaurav Chudhari",
      location: "Eastside",
      text: "When I travel for business, I trust Dhule Pet Hostel with my two rescue dogs. The boarding facility is clean, safe, and the staff sends me updates with photos. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Devendra Patil",
      location: "Suburbs",
      text: "The training program here transformed my puppy Luna from a wild ball of energy into a well-behaved companion. The trainers are patient and use positive reinforcement methods.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            What Pet Parents Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Dhule Pet Hostel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Happy Pet Family!
            </h3>
            <p className="text-gray-600 mb-6">
              Over 500 pet parents trust us with their furry family members. 
              Experience the Dhule Pet Hostel difference today.
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-lg font-semibold text-gray-800">
              4.9/5 ⭐ Rating on Google Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
