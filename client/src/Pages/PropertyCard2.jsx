import React from 'react';
import { FaBed, FaBath, FaRulerCombined, FaLocationArrow, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const PropertyCard2 = ({ properties, currentPropertyId }) => {
  if (!properties || properties.length === 0) {
    return <p>Loading properties...</p>;
  }

  // Filter out the current property
  const filteredProperties = properties.filter(property => property.id !== currentPropertyId);

  // Get top 4 properties after filtering
  const topProperties = filteredProperties.slice(0, 4);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {topProperties.length > 0 ? (
        topProperties.map(property => (
          <div key={property.id} className="w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Image Section */}
            {property.imageUrl ? (
              <img src={property.imageUrl} alt={property.property_name} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500">
                No Image
              </div>
            )}
            {/* Details Section */}
            
            <div className="flex-1 p-4">
            <Link to={`/property/${property.id}`}>
              <h5 className="text-lg font-semibold mb-2 hover:text-blue-500">{property.property_name || 'No Name'}</h5>
              </Link>
              <p className="text-gray-700 mb-2">
                <FaLocationArrow className="inline-block mr-1" />
                {property.property_address || 'No Address'}
              </p>
              <p className="text-gray-700 mb-2">
                <FaDollarSign className="inline-block mr-1" />
                {property.price || 'No Price'}
              </p>
              <p className="text-gray-700 mb-2">
                <FaBed className="inline-block mr-1" />
                {property.bhk || 'No BHK'}
              </p>
              <p className="text-gray-700 mb-2">
                <FaBath className="inline-block mr-1" />
                {property.bathroom || 'No Bathrooms'}
              </p>
              <p className="text-gray-700 mb-2">
                <FaRulerCombined className="inline-block mr-1" />
                {property.square_ft || 'No Size'}
              </p>
            </div>
            {/* Button Section */}
            <div className="p-4">
              <Link to={`/property/${property.id}`} className="inline-block bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600 w-full text-center">
                View Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No properties available.</p>
      )}
    </div>
  );
};

export default PropertyCard2;
