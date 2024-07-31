import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaLightbulb, FaRoad, FaWater } from 'react-icons/fa';  // Example icons

const CategoryPage = () => {
  const location = useLocation();
  const { filteredProperties } = location.state || { filteredProperties: [] };

  return (
    <div className="container mt-4">
      <h1 className="text-2xl font-bold mb-4">Filtered Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <div className="card bg-white shadow-md rounded-lg overflow-hidden" key={property.id}>
              <a href={`/property/${property.id}`} target="_blank" rel="noopener noreferrer">
                <img src={property.image} className="w-full h-40 object-cover" alt={`Property ${property.id}`} />
              </a>
              <div className="p-4">
                <p className="text-sm flex items-center space-x-2 text-gray-600">
                  <FaRoad className="text-lg" /> <span>{property.property_address}</span>
                </p>
                <a href={`/property/${property.id}`} target="_blank" rel="noopener noreferrer">
                  <h5 className="text-xl mt-2 text-gray-800">{property.property_name}</h5>
                </a>
                <h5 className="text-lg mt-2 text-gray-800"><FaLightbulb /> {property.price}</h5>
                <p className="text-sm text-gray-500 mt-2">
                  <FaWater className="inline text-lg" /> posted on: {new Date(property.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-4">
            <h5>No properties found</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
