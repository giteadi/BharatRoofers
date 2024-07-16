import React from 'react';

export default function Nav2() {
    return (
        <div className="w-full relative">
            {/* Backside div with options */}
            <div className="max-h-20 flex flex-col md:flex-row justify-center md:justify-start max-w-full relative">
                <div className="text-white flex justify-center space-x-1 md:space-x-20 text-md bg-black bg-opacity-70 font-semibold rounded-lg pb-7 w-[40rem] backdrop-blur-lg">
                    <button className="py-1 px-2 md:px-4">Buy</button>
                    <button className="py-1 px-2 md:px-4">Rent</button>
                    <button className="py-1 px-2 md:px-4">PG/Co</button>
                    <button className="py-1 px-2 md:px-4">Plots</button>
                </div>
            </div>

            {/* Navbar absolute positioning */}
            <div className="absolute top-[2rem] md:top-[2rem] bg-white p-2 md:p-4 flex flex-col md:flex-row w-full rounded-lg md:rounded-full space-y-2 md:space-y-0">
                <select className="mr-2 mb-2 md:mb-0 border border-gray-300 rounded-md">
                    <option value="">City</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="jabalpur">Jabalpur</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                </select>
                {/* Divider */}
                <div className="border-l h-full mx-2 hidden md:block">|</div> {/* Hide on small screens */}
                <div className="flex flex-grow items-center md:items-stretch md:pl-4">
                    <input
                        type="text"
                        className="flex-grow px-2 py-1 border-none rounded-l-md focus:outline-none"
                        placeholder="Search..."
                    />
                    <button className="bg-green-500 text-white md:w-20 rounded-2xl ml-2 md:ml-0 mt-2 md:mt-0">Search</button>
                </div>
            </div>
        </div>
    );
}
