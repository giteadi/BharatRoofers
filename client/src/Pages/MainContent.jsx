import React from 'react';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const MainContent = () => {
  const properties = [
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Luxury Villa',
      location: 'California, USA',
      beds: 3,
      baths: 2,
      size: 1500,
      price: 500000,
    },
    // Add more property objects as needed
  ];

  return (
    <div className="p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg flex mb-4">
            <img src={property.image} alt="Property" className="w-1/3 h-auto object-cover" />
            <div className="p-4 w-2/3">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-700 mb-4 flex items-center">
                <FaMapMarkerAlt className="inline-block mr-2 text-gray-500" />
                {property.location}
              </p>
              <div className="flex justify-between text-gray-700 mb-4">
                <div>
                  <FaBed className="inline-block mr-1 text-gray-500" /> {property.beds} Beds
                </div>
                <div>
                  <FaBath className="inline-block mr-1 text-gray-500" /> {property.baths} Baths
                </div>
                <div>
                  <FaRulerCombined className="inline-block mr-1 text-gray-500" /> {property.size} sqft
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${property.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Contact</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
