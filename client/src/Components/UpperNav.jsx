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
      // Only change showNavbar if the sidebar is closed
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
    <div className={`relative`}>
      {/* Main Navbar */}
      <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-gray-600 to-gray-400 bg-opacity-90 shadow-md z-10 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${isMenuOpen ? "h-screen" : "h-auto"}`}>
        <div className={`container mx-auto flex flex-col md:flex-row ${isMenuOpen ? 'h-full' : 'h-auto'} ${isMenuOpen ? 'justify-center' : 'justify-between'} items-center p-4 transition-all duration-500 ease-in-out`}>
          {/* Logo (Visible on desktop and tablet only) */}
          <div className="text-2xl font-bold text-white hidden md:block">
            <div className="flex items-center space-x-2">
              <img src={icon} alt="icon" className="w-8 h-8" />
              <p className="text-lg font-medium">BharatRoofers</p>
            </div>
          </div>
          
          {/* Hamburger Menu for Mobile (Visible on mobile only) */}
          <div className="md:hidden absolute top-1 right-4 ">
            <button onClick={toggleMenu} className="p-1 text-white">
              {isMenuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
          
          {/* Navbar Links */}
          <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden md:flex'} ${isMenuOpen ? 'flex-col absolute top-0 left-0 w-[300px] bg-gray-900 h-full' : 'flex-row'} md:bg-transparent`}>
            <ul className={`flex ${isMenuOpen ? 'flex-col gap-8 items-center' : 'md:flex-row md:space-x-4 md:items-center'}`}>
              <li><Link to="/" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Home</Link></li>
              <li><Link to="/about" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">About</Link></li>
              <li><Link to="/blogs" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Blogs</Link></li>
              <li><Link to="/contact" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact Us</Link></li>
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

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 bottom-0 left-0 p-4 w-[300px] bg-gray-900 text-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
              <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center justify-between">
                  <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                  <h1 className="font-bold text-gray-200 text-[15px] ml-3">BharatRoofers</h1>
                  <i
                    className="bi bi-x cursor-pointer"
                    onClick={toggleMenu}
                  ></i>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>
              <ul className="flex flex-col gap-8 mt-4">
                <li><Link to="/" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                <li><Link to="/blogs" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
                <li><Link to="/contact" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li><Link to="/login" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                    <li><Link to="/register" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
