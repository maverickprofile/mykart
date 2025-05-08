import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyKART</h2>
          <p className="text-sm text-gray-400">
            Your reliable source for high-quality printer cartridges, toner, and printing solutions. Delivering performance and value across all your printing needs.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Toner Cartridges</a></li>
            <li><a href="#" className="hover:text-white transition">Ink Cartridges</a></li>
            <li><a href="#" className="hover:text-white transition">Laser Printers</a></li>
            <li><a href="#" className="hover:text-white transition">Printer Accessories</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-blue-500 mt-1" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-blue-500 mt-1" />
              <span>support@mykart.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <span>123 Print Lane, Tech City, Australia</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyKART. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
