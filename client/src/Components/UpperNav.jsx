import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/slices/authSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import icon from '../Assets/brLogo.png';

export default function UpperNav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-gray-600 to-gray-400 bg-opacity-90 shadow-md z-10 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white flex items-center space-x-2">
            <Link to="/" className="flex gap-5 items-center">
              <img src={icon} alt="icon" className="w-8 h-8" />
              <p className="text-lg font-medium hidden md:block">BharatRoofers</p>
            </Link>
          </div>

          {/* Navbar Links */}
          <nav className="hidden md:flex space-x-4 flex-wrap">
            <Link to="/" className="text-white font-semibold px-2 py-2 rounded hover:bg-gray-700">Home</Link>
            <Link to="/about" className="text-white font-semibold px-2 py-2 rounded hover:bg-gray-700">About</Link>
            <Link to="/blogs" className="text-white font-semibold px-2 py-2 rounded hover:bg-gray-700">Blogs</Link>
            <Link to="/contact" className="text-white font-semibold px-2 py-2 rounded hover:bg-gray-700">Contact Us</Link>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-white font-semibold px-2 py-2 rounded hover:bg-gray-700">Logout</button>
            ) : (
              <>
                <Link to="/login" className="text-white font-semibold px-2 py-2 rounded hover:bg-gray-700">Login</Link>
                <Link to="/register" className="text-white font-semibold px-2 py-2 rounded hover:bg-gray-700">Register</Link>
              </>
            )}
          </nav>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-1 text-white">
              {isMenuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile (only visible on small screens) */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-gray-900 text-white z-20 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="p-4 flex flex-col justify-center h-full">
          <ul className="flex flex-col items-center space-y-10">
            <li><Link to="/" className="text-white font-semibold" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="text-white font-semibold" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/blogs" className="text-white font-semibold" onClick={toggleMenu}>Blogs</Link></li>
            <li><Link to="/contact" className="text-white font-semibold" onClick={toggleMenu}>Contact Us</Link></li>
            {isAuthenticated ? (
              <li>
                <button onClick={() => { handleLogout(); toggleMenu(); }} className="text-white font-semibold">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li><Link to="/login" className="text-white font-semibold" onClick={toggleMenu}>Login</Link></li>
                <li><Link to="/register" className="text-white font-semibold" onClick={toggleMenu}>Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
