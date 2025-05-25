
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Mr n Mrs Pet</h3>
            <p className="text-gray-300">
              Your trusted partner in pet care for over 10 years. We treat your pets 
              like family because they are family.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary p-2 rounded-full hover:bg-primary/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded-full hover:bg-secondary/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary p-2 rounded-full hover:bg-primary/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Pet Grooming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Pet Boarding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Pet Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Veterinary Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Pet Daycare</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">123 Pet Street, City, State 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@mrnmrspet.com</span>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-sm font-bold text-secondary mb-1">Emergency 24/7</div>
              <div className="text-sm text-gray-300">(555) 123-4568</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2024 Mr n Mrs Pet. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              Made with <Heart className="w-4 h-4 text-red-500" /> for pets everywhere
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
