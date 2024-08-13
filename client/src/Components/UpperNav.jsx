import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/slices/authSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

export default function UpperNav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed top-0 w-screen max-w-full bg-gradient-to-r from-transparent via-transparent to-gray-900 bg-opacity-70 shadow-md z-10 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"} overflow-x-hidden`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo (Hidden on mobile devices) */}
        <div className="text-2xl font-bold text-white hidden md:block">BharatRoofers</div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" p-1 absolute top-1 right-4 text-black">
            {isMenuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
        
        {/* Navbar Links (Hidden on mobile devices when menu is closed) */}
        <nav className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className={`flex flex-col md:flex-row md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
            <li><Link to="/" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Home</Link></li>
            <li><Link to="/blogs" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Blogs</Link></li>
            <li><Link to="/contact" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact us</Link></li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li><Link to="/login" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</Link></li>
                <li><Link to="/register" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
