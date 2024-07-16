import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import blueBgImage from '../Assets/bgblue.webp';
import orangeBgImagw from '../Assets/orangebg.jpg';
import pinkBhImage from '../Assets/pinkbg.jpg';
import greenBg from '../Assets/bluebg.jpg'
import Nav2 from '../Pages/Nav2';

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
        {/* <div className="flex space-x-4 items-center">
          <FaSearch className="text-gray-600" />
          <FaUser className="text-gray-600" />
        </div> */}
      </div>
      <div className="w-full transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden relative">
        <img 
          // src="https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-krisumi-v9.jpg" 
          src={greenBg}
          alt="bg" 
          className="w-full h-[8rem] md:h-[20rem] lg:h-90 object-cover object-center"
        />
       <div className="absolute top-[1rem] sm:top-[4rem] md:top-[6rem] lg:top-[8rem] max-w-[80rem] left-1/2 transform -translate-x-1/2">
  <Nav2 />
</div>


      </div>
      <nav className="flex md:hidden flex-wrap justify-center w-1/2 mx-auto p-4 font-bold bg-white shadow-md">
        <a href="#buy" className="text-gray-600 hover:text-gray-900">Buy</a>
        <a href="#rent" className="text-gray-600 hover:text-gray-900">Rent</a>
        <a href="#sell" className="text-gray-600 hover:text-gray-900">Sell</a>
        <a href="#commercial" className="text-gray-600 hover:text-gray-900">Commercial</a>
      </nav>
    </header>
  );
};

export default Header;
