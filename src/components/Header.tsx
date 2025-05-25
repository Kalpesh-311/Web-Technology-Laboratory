
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@mrnmrspet.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Pet Street, City, State 12345</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Open: Mon-Sat 7AM-7PM, Sun 9AM-5PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Mr n Mrs Pet</h1>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">About</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors font-medium">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</a>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Book Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors font-medium">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</a>
              <Button className="bg-secondary hover:bg-secondary/90 text-white w-fit">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
