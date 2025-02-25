import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Button from '../Components/Button';
import Floor from "../assets/floor.png";

const BedInventory_4 = ({buttonName = "Maha Hostel" }) => {
  return (
    <div className="flex flex-col items-center">
        {/* Add Property Button */}
        <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
          <div className="flex items-center space-x-2 py-4">
            <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
            <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
              <span className="text-xl font-semibold">{buttonName}</span>
            </div>
          </div>
        </div>
        {/* Step Progress */}
        <div className="w-full max-w-4xl px-4 mt-6 text-left">
          <p className="text-sm text-blue-600 font-medium mb-1">STEP 2 of 3</p>
          <h3 className="text-lg font-semibold">Add Beds</h3>
      </div>

      {/* Beds Section */}
      <div className="w-full max-w-4xl mt-4 space-y-6">
        {/* Ground Floor Section */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span className="text-md font-semibold">Ground floor</span>
            <select className="bg-transparent text-[#69205D] font-medium cursor-pointer outline-none">
              <option>Select all</option>
            </select>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <img src={Floor} alt="Bed Icon" className="w-6 h-6" />
                <span className="text-md">0001</span>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-[#69205D]" />
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <img src={Floor} alt="Bed Icon" className="w-6 h-6" />
                <span className="text-md">0002</span>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-[#69205D]" />
            </div>
          </div>
        </div>

        {/* First Floor Section */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span className="text-md font-semibold">First floor</span>
            <select className="bg-transparent text-[#69205D] font-medium cursor-pointer outline-none">
              <option>Select all</option>
            </select>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <img src={Floor} alt="Bed Icon" className="w-6 h-6" />
                <span className="text-md">Room 1 Up</span>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-[#69205D]" />
            </div>
            <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <img src={Floor} alt="Bed Icon" className="w-6 h-6" />
                <span className="text-md">Room 1 Down</span>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-[#69205D]" />
            </div>
          </div>
        </div>
      </div>
      {/*Add Beds Button */}
      <Button button="Add Beds"  />
    </div>
  )
}

export default BedInventory_4