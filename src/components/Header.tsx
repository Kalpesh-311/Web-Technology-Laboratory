
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

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
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Mr n Mrs Pet</h1>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive("/") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors font-medium ${
                isActive("/services") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                isActive("/about") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={`transition-colors font-medium ${
                isActive("/gallery") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                isActive("/contact") ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              Contact
            </Link>
            <Link to="/book-now">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Book Now
              </Button>
            </Link>
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
              <Link 
                to="/" 
                className={`transition-colors font-medium ${
                  isActive("/") ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors font-medium ${
                  isActive("/services") ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors font-medium ${
                  isActive("/about") ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/gallery" 
                className={`transition-colors font-medium ${
                  isActive("/gallery") ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors font-medium ${
                  isActive("/contact") ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/book-now" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-secondary hover:bg-secondary/90 text-white w-fit">
                  Book Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
