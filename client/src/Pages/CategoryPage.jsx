import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { FaLightbulb, FaRoad, FaWater, FaRupeeSign } from 'react-icons/fa'; // Added FaRupeeSign

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
    <div className="container mx-auto mt-4 px-4">
      <h1 className="text-2xl font-bold mb-4">Filtered Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <div className="card bg-white shadow-md rounded-lg overflow-hidden" key={property.id}>
              <Link to={`/property/${property.id}`}>
                <div className="w-full h-[15rem] overflow-hidden">
                  <img
                    src={getPropertyImage(property.id)}
                    className="w-full h-full object-cover" // Changed from object-fit to object-cover for proper scaling
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
                  <h5 className="text-xl mt-2 text-gray-800">{property.property_name}</h5>
                </Link>
                <h5 className="flex items-center text-lg mt-2 text-gray-800">
                  <FaRupeeSign /> {property.price}
                </h5>
                <p className="text-sm text-gray-500 mt-2">
                  <FaWater className="inline text-lg" /> Posted on: {new Date(property.created_at).toLocaleDateString()}
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
