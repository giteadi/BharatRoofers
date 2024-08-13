import React from 'react';

const NavDesktop = ({ searchTerm, handleSearchTermChange, propertyType, handlePropertyTypeChange, propertyFor, handlePropertyForChange, handleSearch }) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full p-2 md:p-4 bg-white shadow-md border-b border-gray-200">
      <input
        className="p-1 md:p-2 border border-gray-300 rounded-lg w-full md:w-[300px] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter Location Or Project"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <div className="flex flex-col md:flex-row md:space-x-2 mt-2 md:mt-0 w-full md:w-auto">
        <select
          className="p-1 md:p-2 border border-gray-300 rounded-lg w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handlePropertyForChange}
          value={propertyFor}
        >
          <option value="sale">Buy</option>
          <option value="rent">Rent</option>
          <option value="pg/co">PG/Co</option>
          <option value="plots">Plots</option>
        </select>
        <select
          className="p-1 md:p-2 border border-gray-300 rounded-lg w-full mt-2 md:mt-0 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <button
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 mt-2 md:mt-0"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default NavDesktop;
