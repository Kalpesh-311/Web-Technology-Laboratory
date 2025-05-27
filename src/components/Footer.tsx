import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Dhule Pet Hostel</h3>
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
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Pet Grooming</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Pet Boarding</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Pet Training</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Veterinary Care</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Pet Daycare</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">SVKM-IOT, Dhule, Maharashtra 424001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">(+91) 88065-98000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Kalpeshpatil3@acm.org</span>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-sm font-bold text-secondary mb-1">Emergency 24/7</div>
              <div className="text-sm text-gray-300">(+91) 88052-98000</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2025 Dhule Pet Hostel. All rights reservedby SVKM-IOT,
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              Special Thanks<Heart className="w-4 h-4 text-red-500" /> To Mam Rinku Sharma
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              Made with <Heart className="w-4 h-4 text-red-500"  /> from Devendra + Vivek + Yash + Kalpesh 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
