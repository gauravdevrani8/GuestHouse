import React from 'react';
import guestHouseImage from '../../assets/room3.jpg';

const FaqSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">FAQ</h2>
            <p className="text-lg text-gray-700 mb-8">Frequently asked questions</p>
            <div className="space-y-6">
              <Question title="How can I book a room?">
                You can book a room by visiting our website or calling our reservation desk. We also offer booking through popular travel platforms.
              </Question>
              <Question title="What amenities do you offer?">
                Our guest house provides complimentary breakfast, free Wi-Fi, and access to our garden and lounge areas. See our amenities page for more details.
              </Question>
              <Question title="Do you allow pets?">
                Yes, we are pet-friendly! We welcome well-behaved pets in designated rooms. Please check our pet policy for more information.
              </Question>
              <Question title="Can I cancel my reservation?">
                Yes, you can cancel your reservation up to 24 hours before check-in without any penalty. For cancellations within 24 hours, please contact us directly.
              </Question>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={guestHouseImage} alt="Guest House" className="max-w-full h-auto lg:max-h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

const Question = ({ title, children }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer group-hover:text-primary">
          <span className="text-lg font-medium">{title}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-gray-700">{children}</p>
      </details>
    </div>
  );
};

export default FaqSection;
