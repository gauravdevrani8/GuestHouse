import React, { useState } from 'react';
import room1Image from '../../assets/room1.jpg';
import room2Image from '../../assets/room2.jpg';
import room3Image from '../../assets/room3.jpg';
import room4Image from '../../assets/room4.jpg';
import room5Image from '../../assets/room5.jpg';
import room6Image from '../../assets/room6.jpg';
import room7Image from '../../assets/room7.jpg';
import room8Image from '../../assets/room8.jpg';

const initialRooms = [
  {
    id: 1,
    title: 'Deluxe Room',
    image: room1Image,
    description: 'Spacious room with a view, perfect for relaxation.',
    price: '$150 per night',
  },
  {
    id: 2,
    title: 'Luxury Suite',
    image: room2Image,
    description: 'Elegant suite with modern amenities and panoramic windows.',
    price: '$250 per night',
  },
  {
    id: 3,
    title: 'Family Suite',
    image: room3Image,
    description: 'Comfortable suite designed for families, with separate areas.',
    price: '$200 per night',
  },
  {
    id: 4,
    title: 'Penthouse',
    image: room4Image,
    description: 'Exclusive penthouse with private terrace and stunning views.',
    price: '$350 per night',
  },

];

const moreRooms = [
  {
    id: 5,
    title: 'Luxury Room',
    image: room5Image,
    description: 'Spacious villa with private pool and scenic views.',
    price: '$500 per night',
  },
  {
    id: 6,
    title: 'Luxury Villa',
    image: room6Image,
    description: 'Spacious villa with private pool and scenic views.',
    price: '$500 per night',
  },
  {
    id: 7,
    title: 'Executive Suite',
    image: room7Image,
    description: 'Executive suite designed for business travelers with luxury amenities.',
    price: '$300 per night',
  },
  {
    id: 8,
    title: 'Classic Room',
    image: room8Image,
    description: 'Classic room with elegant decor and modern comforts.',
    price: '$120 per night',
  },
];

const Room = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMore = () => {
    setRooms([...rooms, ...moreRooms]);
    setShowLoadMore(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our <span className='text-green-500'>Rooms</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map(room => (
          <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={room.image} alt={room.title} className="w-full hover:scale-105 duration-700 h-64 object-cover object-center" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.title}</h3>
              <p className="text-gray-700 mb-4">{room.description}</p>
              <p className="text-gray-800 font-semibold">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
      {showLoadMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="gradient-button bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Room;
