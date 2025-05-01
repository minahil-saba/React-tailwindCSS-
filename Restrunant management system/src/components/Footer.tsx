import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat size={24} className="text-amber-400" />
              <span className="text-xl font-bold">Gusto</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Experience authentic, bold flavors in an ambiance that transports you to the heart of culinary excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#instagram" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#facebook" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#twitter" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-amber-500 pb-2 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span>info@gustorestaurant.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-1" />
                <span>123 Culinary Street, Foodville, FC 12345</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-amber-400 mt-1" />
                <div>
                  <p>Mon-Thu: 11am - 10pm</p>
                  <p>Fri-Sat: 11am - 11pm</p>
                  <p>Sunday: 12pm - 9pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-amber-500 pb-2 mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-amber-400 transition-colors">Menu</Link>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
              <Link to="/reservations" className="hover:text-amber-400 transition-colors">Reservations</Link>
              <a href="#order" className="hover:text-amber-400 transition-colors">Order Online</a>
              <a href="#careers" className="hover:text-amber-400 transition-colors">Careers</a>
              <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gusto Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;