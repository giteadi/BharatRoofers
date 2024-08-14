import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { FaLightbulb, FaRoad, FaWater, FaRupeeSign, FaCalendarAlt } from 'react-icons/fa'; // Added FaCalendarAlt
import { formatDistanceToNow } from 'date-fns';

const CategoryPage = () => {
  const location = useLocation();
  const { filteredProperties } = location.state || { filteredProperties: [] };
  const [propertiesImages, setPropertiesImages] = useState([]);

  useEffect(() => {
    console.log('Filtered Properties:', filteredProperties); // Add this to debug
  }, [filteredProperties]);

  useEffect(() => {
    const getAllPropertiesImages = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllPropertyImages');
        const { data } = response.data;

        if (Array.isArray(data)) {
          setPropertiesImages(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching property images:', error);
      }
    };

    getAllPropertiesImages();
  }, []);

  const getPropertyImage = (propertyId) => {
    const propertyImage = propertiesImages.find(image => image.property_id === String(propertyId));
    return propertyImage && propertyImage.image ? propertyImage.image : 'https://via.placeholder.com/300'; // Placeholder image URL
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Available Property </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => {
            const timeAgo = formatDistanceToNow(new Date(property.created_at), { addSuffix: true });

            return (
              <div
                className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                key={property.id}
              >
                <Link to={`/property/${property.id}`}>
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={getPropertyImage(property.id)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      alt={`Property ${property.id}`}
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-sm flex items-center space-x-2 text-gray-600">
                    <FaRoad className="text-lg" /> <span>{property.property_address}</span>
                  </p>
                  <Link to={`/property/${property.id}`}>
                    <h5 className="text-lg mt-2 font-semibold text-gray-800 hover:text-blue-600">{property.property_name}</h5>
                  </Link>
                  <h5 className="flex items-center text-lg mt-2 text-gray-800">
                    <FaRupeeSign /> {property.price}
                  </h5>
                  <p className="text-sm text-gray-500 mt-2 flex items-center space-x-2">
                    <FaCalendarAlt className="inline text-lg" /> {/* Calendar icon */}
                    <span>Posted {timeAgo}</span>
                  </p>
                </div>
              </div>
            );
          })
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
