import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import room1Image from '../../assets/gallery1.png';
import room2Image from '../../assets/gallery2.jpg';
import room3Image from '../../assets/gallery3.jpg';
import room4Image from '../../assets/gallery4.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: room1Image,
      alt: 'Room 1',
      title: 'Luxury Suite',
      description: 'Spacious room with a king-sized bed and a panoramic view.',
      price: '$200 per night',
      rating: 4.5,
    },
    {
      id: 2,
      src: room2Image,
      alt: 'Room 2',
      title: 'Cozy Retreat',
      description: 'Comfortable room perfect for a relaxing getaway.',
      price: '$150 per night',
      rating: 4.0,
    },
    {
      id: 3,
      src: room3Image,
      alt: 'Room 3',
      title: 'Executive Room',
      description: 'Ideal for business travelers with modern amenities.',
      price: '$180 per night',
      rating: 4.2,
    },
    {
      id: 4,
      src: room4Image,
      alt: 'Room 4',
      title: 'Family Suite',
      description: 'Spacious suite with separate areas for adults and children.',
      price: '$250 per night',
      rating: 4.8,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryImages.map(image => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
            <img src={image.src} alt={image.alt} className="w-full hover:scale-105 duration-700 h-64 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{image.description}</p>
              <p className="text-sm text-gray-600 mb-2">{image.price}</p>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-1">Rating:</span>
                <div className="flex">
                  {Array.from({ length: Math.floor(image.rating) }, (_, index) => (
                    <AiFillStar key={index} className="h-4 w-4 text-yellow-500" />
                  ))}
                  {image.rating % 1 !== 0 && (
                    <AiOutlineStar className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
