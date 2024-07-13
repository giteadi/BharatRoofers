import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="text-2xl font-bold">BharatRoofers</div>
        <nav className="hidden md:flex flex-wrap space-x-4 font-bold">
          <a href="#buy" className="text-gray-600 hover:text-gray-900">Buy</a>
          <a href="#rent" className="text-gray-600 hover:text-gray-900">Rent</a>
          <a href="#sell" className="text-gray-600 hover:text-gray-900">Sell</a>
          <a href="#commercial" className="text-gray-600 hover:text-gray-900">Commercial</a>
        </nav>
        <div className="flex space-x-4 items-center">
          <FaSearch className="text-gray-600" />
          <FaUser className="text-gray-600" />
        </div>
      </div>
      <div className="w-full transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden">
      <img 
  src="https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-krisumi-v9.jpg" 
  alt="bg" 
  className="w-full h-[5rem] md:h-60 lg:h-90 object-cover object-center"
/>


      </div>
      <nav className="flex md:hidden flex-wrap justify-around p-4 font-bold bg-white shadow-md">
        <a href="#buy" className="text-gray-600 hover:text-gray-900">Buy</a>
        <a href="#rent" className="text-gray-600 hover:text-gray-900">Rent</a>
        <a href="#sell" className="text-gray-600 hover:text-gray-900">Sell</a>
        <a href="#commercial" className="text-gray-600 hover:text-gray-900">Commercial</a>
      </nav>
    </header>
  );
};

export default Header;
