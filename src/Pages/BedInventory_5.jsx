import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Coins from '../assets/coins.png'
import buildingIcon from "../assets/building_icon.png";
import { FaAngleRight } from "react-icons/fa";

const BedInventory_5 = () => {
 
    const [selectedRoom, setSelectedRoom] = useState("Single");

  // Room data based on selection
  const roomData = {
    Single: { name: "Single Sharing Bed", rent: 2500 },
    Double: { name: "Double Sharing Bed", rent: 5000 },
    Triple: { name: "Triple Sharing Bed", rent: 7500 },
    "3+" : { name:"Three and a above Sharing Bed", rent:10000}
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
        <div className="flex items-center space-x-2 py-4">
          <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
          <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
            <span className="text-xl font-semibold">Add Beds</span>
          </div>
        </div>
      </div>

      {/* Hostel Info */}
      <div className="w-full max-w-4xl px-4 mt-4">
        <div className="bg-gray-200 p-4 flex justify-between items-center rounded-lg">
          <div>
            <span className="text-md font-semibold">Maha Hostel</span>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
               <span>01</span>
                <FaAngleRight className="w-4 h-4" />
              </div>
          </div>
          <img src={buildingIcon} alt="Hostel" className="w-12 h-12" />
        </div>
      </div>

      {/* Room Type Selection */}
      <div className="w-full max-w-4xl px-4 mt-6">
        <div className="flex justify-between items-center">
          <span className="text-md font-semibold">Select room type</span>
          <span className="text-blue-600 cursor-pointer">+ Add room type</span>
        </div>
        <div className="flex space-x-4 mt-3">
          {["Single", "Double", "Triple","3+"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedRoom(type)}
              className={`px-4 py-2 rounded-lg text-md font-semibold transition ${
                selectedRoom === type ? "bg-[#69205D] text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Room Details */}
      <div className="w-full max-w-4xl px-4 mt-6">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{roomData[selectedRoom].name}</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center">
              <img src={Coins} alt="Coin" />
              <span className="ml-2">Attached Balcony</span>
            </li>
            <li className="flex items-center">
            <img src={Coins} alt="Coin"  />
              <span className="ml-2">Attached Washroom</span>
            </li>
            <li className="flex items-center">
            <img src={Coins} alt="Coin" />
              <span className="ml-2">Air Conditioner</span>
            </li>
            <li className="flex items-center">
            <img src={Coins} alt="Coin" />
              <span className="ml-2">Geyser</span>
            </li>
          </ul>

          {/* Rent and Select Button */}
          <div className="flex justify-between items-center mt-4">
          <button className="flex items-center gap-2 px-4 py-1 rounded-lg border-2 border-[#69205D] bg-[#69205D] text-white">
           <span className="bg-white text-[#69205D] px-3 py-1 rounded-lg">Rent</span> 
           ₹{roomData[selectedRoom].rent}
          </button>

            <button className="px-7 py-2 bg-[#12C898] text-white font-semibold rounded-lg">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default BedInventory_5



// <button className="px-5 py-2 bg-[#69205D] text-white font-semibold rounded-lg">
//               Rent ₹{roomData[selectedRoom].rent}
//             </button>