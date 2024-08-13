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
  const [selectedOption, setSelectedOption] = useState('Buy');
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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    switch (option) {
      case 'Buy':
        setPropertyFor('sale');
        break;
      case 'Rent':
        setPropertyFor('rent');
        break;
      case 'PG/Co':
        setPropertyFor('pg/co');
        break;
      case 'Plots':
        setPropertyFor('plots');
        break;
      default:
        setPropertyFor('sale');
    }
  };

  return (
    <div className="w-full relative">
      {/* Backside div with options */}
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:max-w-full md:relative">
        <div className="text-white w-full flex justify-center space-x-1 md:space-x-20 text-md bg-black bg-opacity-70 font-semibold rounded-xl pb-10 md:w-[40rem] backdrop-blur-2xl pb-15">
          {['Buy', 'Rent', 'PG/Co', 'Plots'].map((option) => (
            <button
              key={option}
              className={`py-1 px-2 md:px-4 pt-3 ${selectedOption === option ? 'border' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Full navbar for larger screens */}
      <div className="hidden md:flex absolute top-[0.01rem] md:top-[3rem] bg-white p-2 md:p-4 flex flex-wrap md:flex-row max-h-[7rem] w-full rounded-lg md:rounded-full md:space-y-0">
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
          <option value="pg/co">PG/Co</option>
          <option value="plots">Plots</option>
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

      {/* Simplified navbar for mobile devices */}
      <div className="md:hidden fixed top-6 left-0 w-full  p-2 rounded-lg shadow-md z-10 ">
  <div className="flex flex-row items-center space-x-2 justify-center">
    <button
      type="button"
      className="text-black font-medium hover:text-blue-700 focus:outline-none bg-white rounded-md"
    >
      Buy
    </button>
    <button
      type="button"
      className="text-black font-medium hover:text-blue-700 focus:outline-none bg-white rounded-md"
    >
      Rent
    </button>
    <select
          className="form-select  border rounded-lg md:border-none md:rounded-none"
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
  </div>
  <div className="flex  items-center space-y-2 mt-2">
    <input
      className="form-control p-2 border rounded-lg w-[10rem] max-w-md focus:outline-none focus:ring-blue-300 focus:border-blue-300"
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchTermChange}
    />
    <button
      type="button"
      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-200 ease-in-out "
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
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
                <div className="text-center text-gray-900 mt-4">
                  {filteredProperties.length > 0 ? (
                    <p className="text-white font-semibold bg-gray-500/50 backdrop-5 rounded-full">
                      Showing {filteredProperties.length} properties matching your criteria.
                    </p>
                  ) : (
                    <p className="text-white font-semibold bg-gray-500/50 backdrop-5 rounded-full">No properties found</p>
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
