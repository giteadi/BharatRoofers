import React from 'react';
import { FaHome, FaBuilding, FaRegBuilding } from 'react-icons/fa';
import Carausal from './Carausal';
import CompletedProjects from './CompeteProjects';
import Slider from '../Pages/Slider';
import lapi from '../Assets/lapi.png';

const FeatureSection = () => {
  return (
    <div>
      {/* Image Grid Section */}
      <section className="mt-8 md:mt-12 max-w-screen mx-auto flex items-center justify-center px-4 hover:cursor-pointer">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl w-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-1.png"
              alt="home1"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Orchard</p>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-2.png"
              alt="home2"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Rose Cottage</p>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-3.png"
              alt="home3"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Ong Barn</p>
          </div>
          <div className="col-span-2 sm:col-span-3 md:col-span-4 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-4.png"
              alt="home4"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className="text-white text-3xl transition delay-100 ease-in-out transform hover:text-green-400 font-bold absolute top-5 left-5">Beach House</p>
          </div>
          <div className="col-span-2 sm:col-span-3 md:col-span-2 relative overflow-hidden">
            <img
              src="https://solverwp.com/demo/react/mingrand/assets/img/product/cat-5.png"
              alt="home5"
              className="transition-transform duration-500 transform hover:scale-110 w-full h-full object-cover"
            />
            <p className='text-white text-3xl transition delay-300 transform:ease-in-out hover:text-green-400  font-bold absolute top-5 left-5'>Family House</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 md:mb-8">Explore Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHome className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Buy a Home</h3>
              <p className="text-gray-600">Find your dream home from our extensive collection of listings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBuilding className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Rent a Home</h3>
              <p className="text-gray-600">Explore rental options that suit your budget and lifestyle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaRegBuilding className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Sell a Home</h3>
              <p className="text-gray-600">Get the best value for your property with our expert assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Larger Laptop Image with YouTube Video */}
      <section className="mt-8 md:mt-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 px-4">
        <div className="w-full lg:max-w-lg relative">
          {/* Laptop Image */}
          <img src={lapi} alt="laptopimage" className="w-full" />
          
          {/* YouTube Video Embed */}
          <iframe
            width="57%"
            height="35%"
            src="https://www.youtube.com/embed/u7-B6ezSLI8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="absolute md:top-[12.4rem] md:left-[7.3rem] rounded-md top-[8.7rem] left-[4.9rem]"
          ></iframe>
        </div>

        <div className="text-center lg:text-left w-full lg:max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Completed Projects</h2>
          <p className="text-lg text-gray-600">
            Explore some of our completed projects that demonstrate our commitment to quality and craftsmanship.
          </p>
          {/* Additional content or links can be added here */}
        </div>
      </section>

      {/* Additional Completed Projects Section */}
      <section className="mt-8 md:mt-12">
        <CompletedProjects />
      </section>
    </div>
  );
};

export default FeatureSection;
