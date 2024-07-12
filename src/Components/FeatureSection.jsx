import React from 'react';
import { FaHome, FaBuilding, FaRegBuilding } from 'react-icons/fa';
import Carausal from './Carausal';
import CompletedProjects from './CompeteProjects';
import Slider from '../Pages/Slider';

const FeatureSection = () => {
  return (
    <div>
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

      <section className="mt-8 md:mt-12">
        <Carausal />
      </section>

      {/* Completed Projects Section */}
      <section className="mt-8 md:mt-12 flex items-center justify-center gap-[12rem]">
        <div className="max-w-lg">
          <Slider />
        </div>
        <div className="text-center max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Completed Projects</h2>
          <p className="text-lg text-gray-600">
            Explore some of our completed projects that demonstrate our commitment to quality and craftsmanship.
          </p>
          {/* Additional content or links can be added here */}
        </div>
      </section>

      <section className="mt-8 md:mt-12">
        <CompletedProjects />
      </section>
    </div>
  );
};

export default FeatureSection;
