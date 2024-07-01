import React from 'react';
import aboutImage from '../../assets/gallery1.png';
import mithoondamImage from '../../assets/mithonDam.webp';
import img1Image from '../../assets/img1.jpg';
import img2Image from '../../assets/img2.jpg';

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={aboutImage} alt="About our guest house" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-cinzel text-gray-800 mb-6">About Our Guest House</h2>
            <p className="text-gray-600 mb-4">
              Welcome to our cozy and charming guest house, where comfort meets tranquility. Nestled in a serene environment, our guest house offers a perfect escape from the hustle and bustle of city life. Our beautifully landscaped gardens and peaceful surroundings create an oasis of calm for our guests.
            </p>
            <p className="text-gray-600 mb-4">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 mb-12">
          <h3 className="text-3xl font-cinzel text-gray-900 mb-6">What We Offer</h3>
          <p className="text-gray-700 mb-4">
            Our guest house is designed with your utmost comfort in mind, featuring modern amenities and tasteful decor. Each room is equipped with high-speed Wi-Fi, flat-screen TVs, comfortable bedding, and en-suite bathrooms to ensure a relaxing stay.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're here for a relaxing getaway or a business trip, you'll find our guest house to be the perfect home away from home. Our friendly staff is available 24/7 to assist with any needs you may have, from arranging transportation to recommending local attractions.
          </p>
          <p className="text-gray-700 mb-4">
            We also provide daily housekeeping, laundry services, and a complimentary breakfast each morning to start your day off right.
          </p>
        </div>

        <div className="bg-blue-50 p-6 mb-12">
          <h3 className="text-3xl font-cinzel text-gray-900 mb-6">Our Facilities</h3>
          <p className="text-gray-700 mb-4">
            Our guest house features a range of amenities to enhance your stay:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Outdoor swimming pool</li>
            <li>Cozy lounge area</li>
            <li>Beautifully landscaped gardens</li>
            <li>Fully equipped business center</li>
            <li>Meeting rooms</li>
          </ul>
          <p className="text-gray-700 mb-4">
            For those who need to stay connected, we offer high-speed internet access throughout the property. Enjoy a refreshing swim in our outdoor pool, relax in our cozy lounge area, or take a stroll through our beautiful gardens.
          </p>
        </div>

        <div className="white p-6">
          <h3 className="text-3xl font-cinzel text-gray-900 mb-6">Nearby Attractions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src={mithoondamImage} alt="Mithoondam" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Mithoondam Park</h4>
                <p className="text-sm text-gray-700 mb-2">A serene park with beautiful landscapes.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src={img1Image} alt="Image 1" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Local Attraction 1</h4>
                <p className="text-sm text-gray-700 mb-2">Description of local attraction 1.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src={img2Image} alt="Image 2" className="w-full h-64 object-cover object-center" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Local Attraction 2</h4>
                <p className="text-sm text-gray-700 mb-2">Description of local attraction 2.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
