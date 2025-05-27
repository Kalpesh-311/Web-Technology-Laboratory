
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to give your pet the care they deserve? Contact us today to schedule 
            an appointment or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-gray-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-gray-200" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-gray-200" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input type="tel" placeholder="(+91) 88065-98000" className="border-gray-200" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pet Name & Type
                  </label>
                  <Input placeholder="e.g., Max - Golden Retriever" className="border-gray-200" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select a service</option>
                    <option>Pet Grooming</option>
                    <option>Pet Boarding</option>
                    <option>Pet Training</option>
                    <option>Veterinary Care</option>
                    <option>Pet Daycare</option>
                    <option>Pet Taxi</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your pet and what services you're interested in..."
                    className="border-gray-200 min-h-[120px]"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        SVKM-IOT<br />
                        Dhule<br />
                        Maharshtra-424001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">
                        Main: (+91) 88065-98000<br />
                        Emergency: (+91) 88052-98000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">
                        General: Kalpeshpatil3@acm.org<br />
                        Emergency: Kalpeshspatil311@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Hours</h4>
                      <p className="text-gray-600">
                        Mon - Sat: 7:00 AM - 7:00 PM<br />
                        Sunday: 9:00 AM - 5:00 PM<br />
                        Emergency: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/80 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
                <p className="mb-6 opacity-90">
                  Ready to schedule? Call us now or use our online booking system 
                  for immediate confirmation.
                </p>
                <div className="space-y-3">
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                    Online Booking
                  </Button>
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100">
                    Call (+91) 88065-98000
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
