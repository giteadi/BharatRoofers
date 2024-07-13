import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    console.log(`Searching with Location: ${location}, Property Type: ${propertyType}, Price Range: ${priceRange}`);
    // Implement your search logic here
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-4 px-4">
      <div className="flex flex-wrap items-center justify-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
        {/* Location Filter */}
        <input
          type="text"
          placeholder="Enter Location"
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-full md:w-auto focus:outline-none focus:border-blue-500"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Property Type Filter */}
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-full md:w-auto focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>

        {/* Price Range Filter */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-full md:w-auto focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Price Range (INR)</option>
          <option value="0-5000000">Up to ₹50 Lakh</option>
          <option value="5000000-10000000">₹50 Lakh - ₹1 Crore</option>
          <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
          <option value="20000000+">Above ₹2 Crores</option>
        </select>

        {/* Search Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md w-full md:w-auto hover:bg-blue-600 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
