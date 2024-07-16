import React from 'react';

export default function Nav2() {
    return (
        <div className="w-full">
            {/* Backside div with options */}
            <div className="h-20  flex flex-col md:flex-row relative flex-wrap justify-center md:justify-start">
                <div className="text-white flex justify-center flex-wrap space-x-2 md:space-x-20 text-md bg-black opacity-90 font-semibold rounded-lg  pb-7 ">
                    <button className="py-1 px-2 md:px-4">Buy</button>
                    <button className="py-1 px-2 md:px-4">Rent</button>
                    <button className="py-1 px-2 md:px-4">PG/Co Living</button>
                    <button className="py-1 px-2 md:px-4">Plots</button>
                </div>
            </div>

            {/* Navbar absolute positioning */}
            <div className="absolute top-[5.4rem] md:top-[3rem] bg-white p-2 md:p-4 flex flex-col md:flex-row w-full rounded-lg md:rounded-full space-y-2 md:space-y-0">
                <select className="mr-2 mb-2 md:mb-0 border border-gray-300 rounded-md">
                    <option value="">City</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="jabalpur">Jabalpur</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                </select>
                {/* Divider */}
                <div className="border-l h-full mx-2">|</div>
                <div className="flex flex-grow">
                    <input 
                        type="text" 
                        className="flex-grow px-2 py-1 border-none rounded-l-md focus:outline-none" 
                        placeholder="Search..."
                    />
                    <button className="bg-green-500 text-white w-[5rem] rounded-full ">Search</button>
                </div>
            </div>
        </div>
    );
}
