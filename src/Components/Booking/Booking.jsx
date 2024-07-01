import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineHome, AiOutlineDollarCircle } from 'react-icons/ai';

const BookingSection = () => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log({ category, minPrice, maxPrice, searchQuery });
  };

  const handleBook = () => {
    // Implement booking functionality here
    console.log('Booking...');
  };

  return (
    <div className="max-w-screen w-full md:max-w-6xl absolute bottom-auto md:bottom-12 left-1/2 transform -translate-x-1/2 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="p-3 border rounded-md flex-grow text-gray-400"
        >
          <option value="">Select Category</option>
          <option value="single"><AiOutlineHome className="inline" size={20} /> Single Room</option>
          <option value="double"><AiOutlineHome className="inline" size={20} /> Double Room</option>
          <option value="suite"><AiOutlineHome className="inline" size={20} /> Suite</option>
        </select>

        <div className="flex flex-grow gap-2">
          <div className="relative flex-grow">
            <input 
              type="number" 
              value={minPrice} 
              onChange={(e) => setMinPrice(e.target.value)} 
              className="p-2 border rounded-md w-full pl-10 text-gray-700" 
              placeholder="Min Price"
            />
            <AiOutlineDollarCircle className="absolute top-2 left-3 text-gray-500" size={20} />
          </div>

          <div className="relative flex-grow">
            <input 
              type="number" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)} 
              className="p-2 border rounded-md w-full pl-10 text-gray-700" 
              placeholder="Max Price"
            />
            <AiOutlineDollarCircle className="absolute top-2 left-3 text-gray-500" size={20} />
          </div>
        </div>
        
        <div className="relative flex-grow">
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="p-2 border rounded-md w-full pl-10 text-gray-700" 
            placeholder="Search for rooms..."
          />
          <AiOutlineSearch className="absolute top-2 left-3 text-gray-500" size={20} />
        </div>
        
        <button 
          onClick={handleSearch} 
          className="px-4 py-2 gradient-button text-white rounded-md"
        >
          Search Now
        </button>
        
        <button 
          onClick={handleBook} 
          className="px-4 py-2 gradient-button text-white rounded-md"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingSection;
