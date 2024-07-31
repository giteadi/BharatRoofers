import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import blueBgImage from '../Assets/bgblue.webp';
import orangeBgImagw from '../Assets/orangebg.jpg';
import pinkBhImage from '../Assets/pinkbg.jpg';
import greenBg from '../Assets/bluebg.jpg'
import Nav2 from '../Pages/Nav2';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md rounded-md">
    
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
        <Link to="#buy" className="text-gray-600 hover:text-gray-900">Buy</Link>
        <Link to="#rent" className="text-gray-600 hover:text-gray-900">Rent</Link>
        <Link to="#sell" className="text-gray-600 hover:text-gray-900">Sell</Link>
        <Link to="#commercial" className="text-gray-600 hover:text-gray-900">Commercial</Link>
      </nav>
    </header>
  );
};

export default Header;
