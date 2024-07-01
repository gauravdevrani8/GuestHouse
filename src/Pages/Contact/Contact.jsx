import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {

  return (
    <div className="flex flex-col items-center mx-4 mb-16">
      <h2 className="text-5xl font-cinzel text-gray-900 mb-6 leading-tight">Contact Us</h2>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48754.84572723515!2d77.2783412200196!3d28.38922394802513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd6da804ecb7%3A0xb3a7aa46c0507068!2sOld%20Faridabad%20metro%20station!5e0!3m2!1sen!2sin!4v1712900483395!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>

      </div>
    </div>
  );
}

export default Contact;
