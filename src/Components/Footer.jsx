import React from "react";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../Assets/3dhouse3.jpg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 backdrop-blur-sm  transparent py-8">
        <div className="flex flex-col mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
            <div className="col-span-1 md:col-span-1 px-4">
              <h6 className="border-b border-white pb-2 mb-4 text-center">Popular Residential Property Searches</h6>
              <ul>
                <li><a href="/property/propertyType/house" target="_blank">Houses in Jabalpur</a></li>
                <li><a href="/property/propertyType/villa" target="_blank">Villas in Jabalpur</a></li>
                <li><a href="/property/propertyType/plot" target="_blank">Plots in Jabalpur</a></li>
                <li><a href="/property/propertyType/flat" target="_blank">Flats in Jabalpur</a></li>
                <li><a href="/property/propertyType/land" target="_blank">Land in Jabalpur</a></li>
                <li><a href="/property/propertyType/farmLand" target="_blank">Farm Land in Jabalpur</a></li>
                <li><a href="/property/propertyType/farmHouse" target="_blank">Farm House in Jabalpur</a></li>
                <li><a href="/property/propertyType/commercial" target="_blank">Commercial Property in Jabalpur</a></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1 px-4">
              <h6 className="border-b border-white pb-2 mb-4 text-center">Popular BHK Searches</h6>
              <ul>
                <li><a href="/property/flat/1" target="_blank">1 BHK Flats in Jabalpur</a></li>
                <li><a href="/property/flat/2" target="_blank">2 BHK Flats in Jabalpur</a></li>
                <li><a href="/property/flat/3" target="_blank">3 BHK Flats in Jabalpur</a></li>
                <li><a href="/property/flat/4" target="_blank">4 BHK Flats in Jabalpur</a></li>
                <li><a href="/property/house/1" target="_blank">1 BHK House for Sale in Jabalpur</a></li>
                <li><a href="/property/house/2" target="_blank">2 BHK House for Sale in Jabalpur</a></li>
                <li><a href="/property/house/3" target="_blank">3 BHK House for Sale in Jabalpur</a></li>
                <li><a href="/property/house/4" target="_blank">4 BHK House for Sale in Jabalpur</a></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1 px-4">
              <h6 className="border-b border-white pb-2 mb-4 text-center">Popular Rental Property Searches</h6>
              <ul>
                <li><a href="/property/propertiesForRent/house" target="_blank">Houses for Rent in Jabalpur</a></li>
                <li><a href="/property/propertiesForRent/villa" target="_blank">Villas for Rent in Jabalpur</a></li>
                <li><a href="/property/propertiesForRent/plot" target="_blank">Plots for Rent in Jabalpur</a></li>
                <li><a href="/property/propertiesForRent/flat" target="_blank">Flats for Rent in Jabalpur</a></li>
                <li><a href="/property/propertiesForRent/land" target="_blank">Land for Rent in Jabalpur</a></li>
                <li><a href="/property/propertiesForRent/farmLand" target="_blank">Farm Lands for Rent in Jabalpur</a></li>
                <li><a href="/property/propertiesForRent/farmHouse" target="_blank">Farm House for Rent in Jabalpur</a></li>
                <li><a href="/property/propertiesForRent/commercial" target="_blank">Commercial Property for Rent in Jabalpur</a></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1 px-4">
              <h6 className="border-b border-white pb-2 mb-4 text-center">Popular Resale Property Searches</h6>
              <ul>
                <li><a href="/property/propertiesForResale/house" target="_blank">House for Resale in Jabalpur</a></li>
                <li><a href="/property/propertiesForResale/villa" target="_blank">Villas for Resale in Jabalpur</a></li>
                <li><a href="/property/propertiesForResale/plot" target="_blank">Plots for Resale in Jabalpur</a></li>
                <li><a href="/property/propertiesForResale/flat" target="_blank">Flats for Resale in Jabalpur</a></li>
                <li><a href="/property/propertiesForResale/land" target="_blank">Lands for Resale in Jabalpur</a></li>
                <li><a href="/property/propertiesForResale/farmLand" target="_blank">Farm Lands for Resale in Jabalpur</a></li>
                <li><a href="/property/propertiesForResale/farmHouse" target="_blank">Farm Houses for Resale in Jabalpur</a></li>
                <li><a href="/property/propertiesForResale/commercial" target="_blank">Commercials Property for Resale in Jabalpur</a></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center my-8">
            <img src={logo} alt="Real Estate Logo" className="rounded-full h-24 w-24 object-cover" />
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="https://www.facebook.com/bharatroofers/" target="_blank" className="text-blue-500 hover:text-blue-700"><BsFacebook size={30} /></Link>
            <Link to="https://www.instagram.com/bharatroofers?utm_source=qr&igsh=YzU1NGVlODEzOA==" target="_blank" className="text-pink-500 hover:text-pink-700"><BsInstagram size={30} /></Link>
            <Link to="https://wa.me/+918839280515" target="_blank" className="text-green-500 hover:text-green-700"><BsWhatsapp size={30} /></Link>
            <IoLogoYoutube size={30} className="text-red-500" />
          </div>

          <div className="text-white text-center mt-8">
            <h5 className="text-sm">&copy; 2024 Bharatroofers.com | All Rights Reserved</h5>
            <p className="text-sm"><a href="https://bharatroofers.com/info/terms-and-conditions" target="_blank" className="text-white">Terms and Conditions</a> | <a href="https://bharatroofers.com/info/privacy-policy" target="_blank" className="text-white">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
