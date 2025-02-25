import React from 'react'
import { FaArrowLeft, FaAngleRight, FaAngleDown } from "react-icons/fa";

const BedInventory_6 = ({ buttonName = "Maha Hostel" }) => {
  // Sample Data for Rooms and Beds
  const floors = {
    "Ground floor": ["0001", "0002", "0003"],
    "First floor": ["0004", "0005", "0006"],
  };

  return (
    <div className="flex flex-col items-center ">
      {/* Header */}
      <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
        <div className="flex items-center space-x-2">
          <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700" />
          <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-14">
            <span className="text-xl font-semibold">{buttonName}</span>
          </div>
        </div>

        {/* Step Progress */}
        <div className="mt-4">
          <p className="text-sm text-blue-600 font-medium">STEP 3 of 3</p>
          <h3 className="text-lg font-semibold">Add Beds</h3>
        </div>

        {/* Room Sections */}
        {Object.entries(floors).map(([floorName, rooms]) => (
          <div key={floorName} className="mt-4">
            {/* Floor Header */}
            <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg">
              <span className="text-md font-semibold">{floorName}</span>
              <button className="text-sm text-gray-700">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <span>Select All</span>
                  <FaAngleDown className="w-4 h-4" />  {/* ✅ Updated Here */}
                </div>
              </button>
            </div>

            {/* Room List */}
            {rooms.map((room) => (
              <div key={room} className="flex items-center space-x-3 mt-2">
                {/* Room Number with Arrow */}
                <button className="flex items-center justify-between bg-[#69205D] text-white text-lg font-medium px-4 w-24 h-12 rounded-lg">
                  {room} <FaAngleRight className="text-white" /> {/* ✅ Updated Here */}
                </button>

                {/* Empty Beds (Checkbox) */}
                <div className="flex space-x-4">
                  <div className="w-8 h-12 border-2 border-gray-400 rounded-md"></div>
                  <div className="w-8 h-12 border-2 border-gray-400 rounded-md"></div>
                </div>

                {/* Selected Beds */}
                <div className="flex space-x-4">
                  <div className="w-8 h-12 bg-[#69205D] rounded-md"></div>
                  <div className="w-8 h-12 bg-[#69205D] rounded-md"></div>
                  <div className="w-8 h-12 bg-[#69205D] rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Add Beds Button */}
        <button className="w-full bg-[#69205D] text-white text-lg font-semibold p-3 rounded-lg mt-6">
          Add Beds
        </button>
      </div>
    </div>
  );
};

export default BedInventory_6;
