import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-panel mt-16 pb-8">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary-700 mb-4">Modern Academy</h3>
            <p className="text-secondary-600 mb-4">
              Empowering students through innovation and excellence in education since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-700 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary-600 hover:text-primary-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-secondary-600 hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-secondary-600 hover:text-primary-500 transition-colors">Courses</a></li>
              <li><a href="#news" className="text-secondary-600 hover:text-primary-500 transition-colors">News</a></li>
              <li><a href="#contact" className="text-secondary-600 hover:text-primary-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-700 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mt-1 mr-2" />
                <span className="text-secondary-600">123 Education Ave, Learning City, ED 54321</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-2" />
                <span className="text-secondary-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2" />
                <span className="text-secondary-600">info@modernacademy.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-secondary-700 mb-4">Newsletter</h4>
            <p className="text-secondary-600 mb-3">Subscribe to our newsletter for updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="glass-input w-full" 
                required 
              />
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-secondary-500">
          <p>&copy; {currentYear} Modern Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;