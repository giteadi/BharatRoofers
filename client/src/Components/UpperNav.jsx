import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/slices/authSlice'; 

export default function UpperNav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div className={`fixed top-0 w-full bg-gradient-to-r from-transparent via-transparent to-gray-900 bg-opacity-70 shadow-md z-10 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white">BharatRoofers</div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Home</Link>
          <Link to="/blogs" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Blogs</Link>
          <Link to="/contact" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Contact us</Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</Link>
              <Link to="/register" className="text-white font-semibold px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Register</Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
