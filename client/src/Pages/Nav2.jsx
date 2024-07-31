// src/Pages/Nav2.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CiSearch } from 'react-icons/ci';
import { FaRupeeSign } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { CgCalendarDates } from 'react-icons/cg';
import stringSimilarity from 'string-similarity';
import { useNavigate } from 'react-router-dom';

const CarouselPlaceholder = () => {
  return (
    <div className="flex justify-around items-center flex-wrap">
      <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse m-2"></div>
      <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse m-2"></div>
      <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse m-2"></div>
    </div>
  );
};

const Nav2 = () => {
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  const [propertiesImages, setPropertiesImages] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertyFor, setPropertyFor] = useState('sale');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllProperty');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getAllPropertiesImages = async () => {
      try {
        const response = await axios.get('https://bharatroofers.com/api/property/getAllPropertyImages');
        setPropertiesImages(response.data);
      } catch (error) {
        console.error('Error fetching property images:', error);
      }
    };

    getAllPropertiesImages();
  }, []);

  useEffect(() => {
    const filterProperties = () => {
      if (!properties?.data) return;
      const filtered = properties.data.filter(property => {
        const nameSimilarity = stringSimilarity.compareTwoStrings(searchTerm.toLowerCase(), property.property_name.toLowerCase());
        const addressSimilarity = stringSimilarity.compareTwoStrings(searchTerm.toLowerCase(), property.property_address.toLowerCase());
        const includesSearchTerm = searchTerm.trim() === "" || nameSimilarity > 0.2 || addressSimilarity > 0.2;
        const matchesPropertyType = propertyType === "" || property.property_type.toLowerCase() === propertyType.toLowerCase();
        const matchesPropertyFor = propertyFor === "" || property.property_for.toLowerCase() === propertyFor.toLowerCase();
        return includesSearchTerm && matchesPropertyType && matchesPropertyFor;
      });
      setFilteredProperties(filtered);
    };

    filterProperties();
  }, [searchTerm, propertyType, propertyFor, properties]);

  const handleSearchTermChange = (e) => setSearchTerm(e.target.value);
  const handlePropertyTypeChange = (e) => setPropertyType(e.target.value);
  const handlePropertyForChange = (e) => setPropertyFor(e.target.value);

  const handleSearch = () => {
    navigate('/category', { state: { filteredProperties } });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Existing Nav2 content */}
        <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <input
            className="form-control p-2 border rounded-lg"
            type="text"
            placeholder="Enter Location Or Project"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select
            className="form-select p-2 border rounded-lg"
            onChange={handlePropertyForChange}
            value={propertyFor}
          >
            <option value="sale">Buy</option>
            <option value="rent">Rent</option>
          </select>
          <select
            className="form-select p-2 border rounded-lg"
            onChange={handlePropertyTypeChange}
            value={propertyType}
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="plot">Plot</option>
            <option value="flat">Flat</option>
            <option value="land">Land</option>
            <option value="farmLand">Farm Land</option>
            <option value="farmHouse">Farm House</option>
            <option value="commercial">Commercial</option>
          </select>
          <button
            type="button"
            className="btn btn-primary p-2 border rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>

        {/* Modal */}
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mx-auto text-lg font-bold" id="searchModalLabel">
                  Total {filteredProperties?.length || 0} Property Found
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {loading ? (
                  <CarouselPlaceholder />
                ) : (
                  <div className="container-fluid">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => {
                          const matchingImages = propertiesImages?.data?.filter(
                            (image) => image.property_id === property.id
                          );
                          const imageSrc = matchingImages?.length > 0 ? matchingImages[0].image : "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg?t=st=1701323109~exp=1701326709~hmac=da85cae6601708a5416a585b78ba630517ba8a0b698f72df228ae5ae10f58c58&w=900";
                          const formattedDate = new Date(property.created_at).toLocaleDateString();
                          return (
                            <div className="card bg-white shadow-md rounded-lg overflow-hidden" key={property.id}>
                            
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center text-gray-500 mt-4">
                          <h5>No properties available</h5>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
