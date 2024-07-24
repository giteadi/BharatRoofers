import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="p-4 border-r">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded"
        />
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full flex items-center justify-center">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Filters</h3>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full flex items-center justify-center">
          <FaFilter className="mr-2" /> Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
