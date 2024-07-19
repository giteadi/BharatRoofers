import React from "react";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../Assets/3dhouse3.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 backdrop-blur-sm text-white py-8">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-5 mb-8">
          {/* Popular Residential Property Searches */}
          <div className="px-4">
            <h6 className="border-b border-white pb-2 mb-4 text-start font-bold">Popular Residential Property Searches</h6>
            <div className="flex flex-col items-start">
              <div className="mb-2">
                <a href="/property/propertyType/house" target="_blank" className="text-white hover:text-gray-300 text-start">Houses in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertyType/villa" target="_blank" className="text-white hover:text-gray-300">Villas in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertyType/plot" target="_blank" className="text-white hover:text-gray-300">Plots in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertyType/flat" target="_blank" className="text-white hover:text-gray-300">Flats in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertyType/land" target="_blank" className="text-white hover:text-gray-300">Land in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertyType/farmLand" target="_blank" className="text-white hover:text-gray-300">Farm Land in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertyType/farmHouse" target="_blank" className="text-white hover:text-gray-300">Farm House in Jabalpur</a>
              </div>
              <div>
                <a href="/property/propertyType/commercial" target="_blank" className="text-white hover:text-gray-300">Commercial Property in Jabalpur</a>
              </div>
            </div>
          </div>

          {/* Popular BHK Searches */}
          <div className="px-4">
            <h6 className="border-b border-white pb-2 mb-4 text-start font-bold">Popular BHK Searches</h6>
            <div className="flex flex-col items-start">
              <div className="mb-2">
                <a href="/property/flat/1" target="_blank" className="text-white hover:text-gray-300 text-start">1 BHK Flats in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/flat/2" target="_blank" className="text-white hover:text-gray-300">2 BHK Flats in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/flat/3" target="_blank" className="text-white hover:text-gray-300">3 BHK Flats in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/flat/4" target="_blank" className="text-white hover:text-gray-300">4 BHK Flats in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/house/1" target="_blank" className="text-white hover:text-gray-300">1 BHK House for Sale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/house/2" target="_blank" className="text-white hover:text-gray-300">2 BHK House for Sale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/house/3" target="_blank" className="text-white hover:text-gray-300">3 BHK House for Sale in Jabalpur</a>
              </div>
              <div>
                <a href="/property/house/4" target="_blank" className="text-white hover:text-gray-300">4 BHK House for Sale in Jabalpur</a>
              </div>
            </div>
          </div>

          {/* Popular Rental Property Searches */}
          <div className="px-4">
            <h6 className="border-b border-white pb-2 mb-4 text-start font-bold">Popular Rental Property Searches</h6>
            <div className="flex flex-col items-start">
              <div className="mb-2">
                <a href="/property/propertiesForRent/house" target="_blank" className="text-white hover:text-gray-300">Houses for Rent in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForRent/villa" target="_blank" className="text-white hover:text-gray-300">Villas for Rent in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForRent/plot" target="_blank" className="text-white hover:text-gray-300">Plots for Rent in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForRent/flat" target="_blank" className="text-white hover:text-gray-300">Flats for Rent in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForRent/land" target="_blank" className="text-white hover:text-gray-300">Land for Rent in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForRent/farmLand" target="_blank" className="text-white hover:text-gray-300">Farm Lands for Rent in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForRent/farmHouse" target="_blank" className="text-white hover:text-gray-300">Farm House for Rent in Jabalpur</a>
              </div>
              <div>
                <a href="/property/propertiesForRent/commercial" target="_blank" className="text-white hover:text-gray-300">Commercial Property for Rent in Jabalpur</a>
              </div>
            </div>
          </div>

          {/* Popular Resale Property Searches */}
          <div className="px-4">
            <h6 className="border-b border-white pb-2 mb-4 text-start font-bold">Popular Resale Property Searches</h6>
            <div className="flex flex-col items-start">
              <div className="mb-2">
                <a href="/property/propertiesForResale/house" target="_blank" className="text-white hover:text-gray-300">House for Resale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForResale/villa" target="_blank" className="text-white hover:text-gray-300">Villas for Resale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForResale/plot" target="_blank" className="text-white hover:text-gray-300">Plots for Resale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForResale/flat" target="_blank" className="text-white hover:text-gray-300">Flats for Resale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForResale/land" target="_blank" className="text-white hover:text-gray-300">Lands for Resale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForResale/farmLand" target="_blank" className="text-white hover:text-gray-300">Farm Lands for Resale in Jabalpur</a>
              </div>
              <div className="mb-2">
                <a href="/property/propertiesForResale/farmHouse" target="_blank" className="text-white hover:text-gray-300">Farm Houses for Resale in Jabalpur</a>
              </div>
              <div>
                <a href="/property/propertiesForResale/commercial" target="_blank" className="text-white hover:text-gray-300">Commercial Property for Resale in Jabalpur</a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center mb-8">
          <img src={logo} alt="Real Estate Logo" className="rounded-full h-24 w-24 object-cover" />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.facebook.com/bharatroofers/" target="_blank" className="text-blue-500 hover:text-blue-700"><BsFacebook size={30} /></a>
          <a href="https://www.instagram.com/bharatroofers?utm_source=qr&igsh=YzU1NGVlODEzOA==" target="_blank" className="text-pink-500 hover:text-pink-700"><BsInstagram size={30} /></a>
          <a href="https://wa.me/+918839280515" target="_blank" className="text-green-500 hover:text-green-700"><BsWhatsapp size={30} /></a>
          <a href="https://www.youtube.com/" target="_blank" className="text-red-500 hover:text-red-700"><IoLogoYoutube size={30} /></a>
        </div>

        {/* Footer Text */}
        <div className="text-start">
          <h5 className="text-sm">&copy; 2024 Bharatroofers.com | All Rights Reserved</h5>
          <p className="text-sm"><a href="https://bharatroofers.com/info/terms-and-conditions" target="_blank" className="text-white font-bold">Terms and Conditions</a> | <a href="https://bharatroofers.com/info/privacy-policy" target="_blank" className="text-white font-bold">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
