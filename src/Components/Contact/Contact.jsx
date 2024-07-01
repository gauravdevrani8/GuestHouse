import React from 'react';
import bgContactImage from '../../assets/contact.jpg'; 

const ContactSection = () => {
  return (
    <div
      className="bg-cover bg-center p-6 "
      style={{ backgroundImage: `url(${bgContactImage})` }}
    >
      <div className="max-w-4xl mx-auto text-center bg-black bg-opacity-0 p-6">
        <h3 className="text-3xl font-bold text-white mb-6">Contact Us</h3>
        <p className="text-white mb-4">
          For inquiries or bookings, feel free to reach out to us. Our team is here to assist you.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:mr-6 mb-4 md:mb-0">
            <p className="text-lg text-white font-semibold mb-2">Phone:</p>
            <p className="text-white">+91 9007062180
            </p> 
          </div>
          <div className="md:mr-6 mb-4 md:mb-0">
            <p className="text-lg text-white font-semibold mb-2">Email:</p>
            <p className="text-white">%20kkghosh0099@gmail.com</p> 
          </div>
          <div>
            <p className="text-lg text-white font-semibold mb-2">Address:</p>
            <p className="text-white"> Barshal Water Tank,
Manpur, Barhanti,
West Bengal
</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
