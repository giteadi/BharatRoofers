import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import moment from "moment";

const FooterCategory = () => {
  const [properties, setProperties] = useState([]);
  const [propertiesImages, setPropertiesImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const categoryType = location.state?.categoryType;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        if (categoryType) {
          const response = await axios.get(`https://bharatroofers.com/api/property/getPropertiesByCategory/${categoryType}`);
          setProperties(response.data.data || []);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    const fetchPropertiesImages = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllPropertyImages');
        setPropertiesImages(response.data.data || []);
      } catch (error) {
        console.error('Error fetching property images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
    fetchPropertiesImages();
  }, [categoryType]);

  if (!categoryType) {
    return <div className="text-center p-4">No category selected</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">{categoryType} Properties</h1>

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        properties.length > 0 ? (
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {properties.map((property) => {
                const matchingImages = propertiesImages.filter(
                  (image) => image.property_id === property.id
                );
                const imageSrc = matchingImages.length > 0 ? matchingImages[0].image : "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg";
                return (
                  <div className="bg-white border rounded-lg shadow-md overflow-hidden" key={property.id}>
                    <Link to={`/property/${property.id}`}>
                      <img src={imageSrc} className="w-full h-48 object-cover" alt={`Property ${property.id}`} />
                    </Link>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-2">
                        <span className="mr-1 text-lg">📍</span> {property.property_address}
                      </p>
                      <Link to={`/property/${property.id}`} className="text-blue-500 hover:underline">
                        <h5 className="text-lg font-semibold mb-2">{property.property_name}</h5>
                      </Link>
                      <h5 className="text-lg font-semibold mb-2">
                        <FaRupeeSign /> {property.price}
                      </h5>
                      <p className="text-gray-500 text-sm">
                        <span className="mr-1 text-lg"><CgCalendarDates /></span> posted on: {moment(property.created_at).fromNow()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-4">No properties found</div>
        )
      )}
    </div>
  );
};

export default FooterCategory;
