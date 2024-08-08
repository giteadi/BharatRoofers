import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import stringSimilarity from 'string-similarity';

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
    <div className="w-full relative">
      {/* Backside div with options */}
      <div className="max-h-30 flex flex-col md:flex-row justify-center md:justify-start w-full md:max-w-full relative ">
        <div className="text-white w-full flex justify-center space-x-1 md:space-x-20 text-md bg-black bg-opacity-70 font-semibold rounded-xl pb-10 md:w-[40rem] backdrop-blur-2xl pb-15">
          <button className="py-1 px-2 md:px-4 pt-3">Buy</button>
          <button className="py-1 px-2 md:px-4 pt-3">Rent</button>
          <button className="py-1 px-2 md:px-4 pt-3">PG/Co</button>
          <button className="py-1 px-2 md:px-4 pt-3">Plots</button>
        </div>
      </div>

      {/* Navbar absolute positioning */}
      <div className="absolute top-[2.3rem] md:top-[3rem] bg-white p-2 md:p-4 flex flex-col md:flex-row w-full rounded-lg md:rounded-full space-y-2 md:space-y-0">
        <input
          className="form-control p-2 border rounded-lg md:rounded-none md:border-none md:rounded-l-md focus:outline-none"
          type="text"
          placeholder="Enter Location Or Project"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <select
          className="form-select p-2 border rounded-lg md:border-none md:rounded-none"
          onChange={handlePropertyForChange}
          value={propertyFor}
        >
          <option value="sale">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <select
          className="form-select p-2 border rounded-lg md:border-none md:rounded-none"
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
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 border border-transparent transition-all duration-200 ease-in-out ml-auto"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Modal */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mx-auto text-lg font-bold" id="searchModalLabel">
                Total {filteredProperties.length || 0} Property Found
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {loading ? (
                <CarouselPlaceholder />
              ) : (
                <div className="text-center text-gray-500 mt-4">
                  {filteredProperties.length > 0 ? (
                    <p className="text-black">
                      Showing {filteredProperties.length} properties matching your criteria.
                    </p>
                  ) : (
                    <p>No properties found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
