import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../Assets/brLogo.png';
import BackgroundBeams from "./BackgroundBeams";

const Footer = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllProperty');
        setProperties(response.data.data || []); // Ensure data is an array
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const navigateToCategory = (category) => {
    const filteredProperties = properties.filter(property => property.property_type.toLowerCase() === category.toLowerCase());
    navigate('/category', { state: { filteredProperties } });
  };

  const categoryLinks = [
    { type: 'house', title: 'House' },
    { type: 'villa', title: 'Villa' },
    { type: 'plot', title: 'Plot' },
    { type: 'flat', title: 'Flat' },
    { type: 'land', title: 'Land' },
    { type: 'farmLand', title: 'Farm Land' },
    { type: 'farmHouse', title: 'Farm House' },
    { type: 'commercial', title: 'Commercial' }
  ];

  return (
    <footer className="relative bg-black text-white py-4 z-0">
      {/* BackgroundBeams component */}
      <BackgroundBeams className="absolute inset-0 z-[-1]" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between mb-4 md:gap-4 items-center">
          {/* Popular Residential Property Searches */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h6 className="text-xs font-bold border-b border-white pb-1 mb-2">Popular Residential Property Searches</h6>
            <ul className="space-y-1">
              {categoryLinks.map(({ type, title }) => (
                <li key={type}>
                  <button
                    onClick={() => navigateToCategory(type)}
                    className="text-white hover:text-red-500 text-xs px-2 py-1 rounded"
                  >
                    {title} in Jabalpur
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular BHK Searches */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h6 className="text-xs font-bold border-b border-white pb-1 mb-2">Popular BHK Searches</h6>
            <ul className="space-y-1">
              {[1, 2, 3, 4].map(bhk => (
                <li key={bhk}>
                  <button
                    onClick={() => navigateToCategory(`flat/${bhk}`)}
                    className="text-white hover:text-red-500 text-xs px-2 py-1 rounded"
                  >
                    {bhk} BHK Flats in Jabalpur
                  </button>
                </li>
              ))}
              {[1, 2, 3, 4].map(bhk => (
                <li key={`house-${bhk}`}>
                  <button
                    onClick={() => navigateToCategory(`house/${bhk}`)}
                    className="text-white hover:text-red-500 text-xs px-2 py-1 rounded"
                  >
                    {bhk} BHK House for Sale in Jabalpur
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Rental Property Searches */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h6 className="text-xs font-bold border-b border-white pb-1 mb-2">Popular Rental Property Searches</h6>
            <ul className="space-y-1">
              {categoryLinks.map(({ type, title }) => (
                <li key={type}>
                  <button
                    onClick={() => navigateToCategory(`propertiesForRent/${type}`)}
                    className="text-white hover:text-red-500 text-xs px-2 py-1 rounded"
                  >
                    {title} for Rent in Jabalpur
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Resale Property Searches */}
          <div className="text-center md:text-left">
            <h6 className="text-xs font-bold border-b border-white pb-1 mb-2">Popular Resale Property Searches</h6>
            <ul className="space-y-1">
              {categoryLinks.map(({ type, title }) => (
                <li key={type}>
                  <button
                    onClick={() => navigateToCategory(`propertiesForResale/${type}`)}
                    className="text-white hover:text-red-500 text-xs px-2 py-1 rounded"
                  >
                    {title} for Resale in Jabalpur
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Real Estate Logo" className="rounded-full h-16 w-16 object-cover" />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 mb-2">
          <a href="https://www.facebook.com/bharatroofers/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-red-500 p-2 rounded">
            <BsFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/bharatroofers?utm_source=qr&igsh=YzU1NGVlODEzOA==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-red-500 p-2 rounded">
            <BsInstagram size={24} />
          </a>
          <a href="https://wa.me/+918839280515" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-red-500 p-2 rounded">
            <BsWhatsapp size={24} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-500 p-2 rounded">
            <IoLogoYoutube size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <h5 className="text-xs mb-1">&copy; 2024 Bharatroofers.com | All Rights Reserved</h5>
          <p className="text-xs">
            <Link to="/terms" className="text-white font-bold hover:underline">Terms and Conditions</Link> | 
            <Link to="/privacy" className="text-white font-bold hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
