import React from 'react';

const NavMobile = ({ searchTerm, handleSearchTermChange, propertyType, handlePropertyTypeChange, propertyFor, handlePropertyForChange, handleSearch }) => {
  return (
    <div className="w-full p-2 bg-white shadow-lg flex flex-col space-y-2 sm:hidden">
      <input
        className="p-2 border rounded-lg focus:outline-none"
        type="text"
        placeholder="Enter Location Or Project"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <select
        className="p-2 border rounded-lg"
        onChange={handlePropertyForChange}
        value={propertyFor}
      >
        <option value="sale">Buy</option>
        <option value="rent">Rent</option>
        <option value="pg/co">PG/Co</option>
        <option value="plots">Plots</option>
      </select>
      <select
        className="p-2 border rounded-lg"
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
        className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default NavMobile;
