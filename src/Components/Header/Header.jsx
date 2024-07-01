import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="fixed w-full px-6 md:px-40 backdrop-blur-lg bg-white/80 p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-gray-700 text-2xl md:text-4xl font-playfair-display font-extralight">KS</h1>
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-4 md:space-x-6 font-league-spartan">
              <li className="relative group">
                <Link to="/" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Home</Link>
              </li>
              <li className="relative group">
                <Link to="/about" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">About</Link>
              </li>
              <li className="relative group">
                <Link to="/contact" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Contact</Link>
              </li>
              <li className="relative group">
                <Link to="/gallery" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Gallery</Link>
              </li>
              <li className="relative group">
                <Link to="/rooms" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Rooms</Link>
              </li>
              <li className="relative group">
                <button
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                  className="text-gray-700 py-2 px-4 flex items-center hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md focus:outline-none"
                >
                  Services <FaChevronDown className="ml-1 text-[0.6rem]" />
                </button>
                {isDropdownOpen && (
                  <ul
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 group-hover:block"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <li className="hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white  transition-colors rounded-md">
                      <Link to="/service1" className="text-gray-700 block py-2 px-4">Service 1</Link>
                    </li>
                    <li className="hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white  transition-colors rounded-md">
                      <Link to="/service2" className="text-gray-700 block py-2 px-4">Service 2</Link>
                    </li>
                    <li className="hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white  transition-colors rounded-md">
                      <Link to="/service3" className="text-gray-700 block py-2 px-4">Service 3</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="bg-blue-500 text-white py-2 px-4 rounded gradient-button hover:bg-blue-600 transition-colors">
              Signup
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
          <li className="relative group">
            <Link to="/" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Home</Link>
          </li>
          <li className="relative group">
            <Link to="/about" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">About</Link>
          </li>
          <li className="relative group">
            <Link to="/contact" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Contact</Link>
          </li>
          <li className="relative group">
            <Link to="/gallery" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Gallery</Link>
          </li>
          <li className="relative group">
            <Link to="/rooms" className="text-gray-700 block py-2 px-4 hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md">Rooms</Link>
          </li>
          <li className="relative group">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 py-2 px-4 flex items-center hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white transition-colors rounded-md focus:outline-none"
            >
              Services <FaChevronDown className="ml-1 text-[0.6rem]" />
            </button>
            {isDropdownOpen && (
              <ul
                className="mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200"
              >
                <li className="hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white  transition-colors rounded-md">
                  <Link to="/service1" className="text-gray-700 block py-2 px-4">Service 1</Link>
                </li>
                <li className="hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white  transition-colors rounded-md">
                  <Link to="/service2" className="text-gray-700 block py-2 px-4">Service 2</Link>
                </li>
                <li className="hover:bg-gradient-to-tr from-green-400 to-blue-500 hover:text-white  transition-colors rounded-md">
                  <Link to="/service3" className="text-gray-700 block py-2 px-4">Service 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group mt-2">
            <button className="bg-blue-500 text-white py-2 px-4 rounded gradient-button hover:bg-blue-600 transition-colors">
              Signup
            </button>
          </li>
        </ul>
      </nav>
      <div className='w-full h-20 bg-white'></div>
    </>
  );
};

export default Header;
