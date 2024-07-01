import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const BookingCompleted = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-cinzel text-gray-900 mb-8">Our <span className='text-green-500'>Achievements</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" ref={ref}>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {inView && <CountUp end={100} duration={3} />}+
            </h3>
            <p className="text-gray-600">Bookings Completed</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {inView && <CountUp end={150} duration={3} />}+
            </h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCompleted;
