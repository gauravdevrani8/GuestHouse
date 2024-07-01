import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../../assets/service.jpg';
import natureImage from '../../assets/nature.png';
import BookingSection from '../Booking/Booking';
import aboutImage from '../../assets/gallery1.png';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    // Hero Section Animations
    gsap.fromTo('.hero-heading', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo('.hero-subheading', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });

    // About Section Animations with ScrollTrigger
    gsap.fromTo('.about-heading', { opacity: 0, x: -50 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.about-heading',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.fromTo('.about-content', { opacity: 0, x: 50 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Attractions Section Animations with ScrollTrigger
    gsap.fromTo('.attractions-heading', { opacity: 0, x: -50 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.attractions-heading',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.fromTo('.attractions-content', { opacity: 0, x: 50 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.attractions-content',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }, []);

  return (
    <>
      <div className="relative h-36 md:h-[75vh] rounded-2xl overflow-hidden">
        <img src={heroImage} alt="ks Guest Rooms" className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 hover:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-60"></div>
        <div className="absolute inset-10 flex items-center justify-center text-center text-white z-10">
          <div className="px-1 max-w-4xl mx-auto">
            <h1 className="hero-heading text-3xl md:text-6xl font-bold leading-tight mb-4 animate__animated animate__fadeIn">
              Welcome to <span className='text-green-500'>KingSukh </span>Guest House
            </h1>
            <p className="hero-subheading text-lg md:text-xl hidden md:block mb-6 animate__animated animate__fadeInUp">
              Discover a great platform to <span className="text-blue-400">book your perfect stay</span> without hassle.
            </p>
          </div>
        </div>
      </div>
      
      <BookingSection />
      
      {/* about */}
      <div className="flex flex-col mx-2 mt-72 md:mt-32 lg:mt-0 md:flex-row items-center mb-16">
        <div className="w-full md:w-[35vw] mb-8 md:mb-0">
          <img src={aboutImage} alt="About our guest house" className="rounded-lg shadow-xl w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="about-heading text-3xl md:text-5xl font-cinzel text-gray-900 mb-6 leading-tight">
            <span className='text-green-500'>About</span> Our Guest House
          </h2>
          <p className="about-content text-gray-700 text-lg mb-6 leading-relaxed">
            Welcome to our cozy and charming guest house, where comfort meets tranquility. Nestled in a serene environment, our guest house offers a perfect escape from the hustle and bustle of city life. Our beautifully landscaped gardens and peaceful surroundings create an oasis of calm for our guests.
          </p>
          <hr className="border-gray-300 my-6" />
          <p className="about-content text-gray-700 text-lg mb-6 leading-relaxed">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
        </div>
      </div>
      
      {/* attractions */}
      <div className="bg-teal-100 mt-12 p-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="attractions-heading text-3xl md:text-5xl font-cinzel text-teal-700 mb-6">
            Nearby <span className='text-green-500'>Attractions</span>
          </h3>
          <p className="attractions-content text-gray-700 mb-4">
            We are conveniently located near a variety of local attractions, making it easy for you to explore the area's top sights and activities. Whether you're interested in cultural experiences, outdoor adventures, or simply relaxing in a beautiful setting, our guest house is the perfect base for your travels.
          </p>
          <p className="attractions-content text-gray-700 mb-4">
            Discover the charm of our locality with historic landmarks and museums, scenic hiking and biking trails, vibrant local markets and shops, picturesque parks and nature reserves, and renowned restaurants and cafes.
          </p>
          <p className="attractions-content text-gray-700 mb-4">
            Our team is happy to provide personalized recommendations and assist with planning your itinerary to ensure you experience the best our region has to offer.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <img src={natureImage} alt="Nearby attractions" className="rounded-lg shadow-lg w-full max-w-xs mx-auto md:max-w-sm" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
