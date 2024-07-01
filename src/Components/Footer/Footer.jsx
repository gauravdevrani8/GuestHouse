import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 text-gray-900 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            King Sukh Guest House offers a comfortable and luxurious stay with exceptional hospitality. Experience the perfect blend of modern amenities and traditional charm.
          </p>
        </div>
        {/* Contact Information Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Phone: +91 9007062180

            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email: %20kkghosh0099@gmail.com
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Address: Beside Barshal Water Tank,
Manpur, Barhanti,
West Bengal 723156

            </li>
          </ul>
        </div>
        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="/rooms" className="hover:underline">Rooms</a></li>
            <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        {/* Social Media Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg">&copy; 2024 King Sukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
