import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import greenBg from '../Assets/king.jpg'
import Nav2 from '../Pages/Nav2';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md rounded-md">
      <div className="w-full transition-transform duration-300 ease-in-out  overflow-hidden relative">
        <img 
          src={greenBg}
          alt="bg" 
          className="w-full h-[15rem] md:h-[20rem] lg:h-90 object-cover object-center"
        />
        <div className="absolute  top-[1rem] sm:top-[4rem] md:top-[6rem] lg:top-[8rem] max-w-[80rem] left-1/2 transform -translate-x-1/2">
          <Nav2 />
        </div>
      </div>
      
    </header>
  );
};

export default Header;
