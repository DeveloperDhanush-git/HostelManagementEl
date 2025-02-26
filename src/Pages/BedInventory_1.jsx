import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png";
import Button from "../Components/Button";
import Header from "../Components/Header";

const BedInventory_1 = () => {
  const [selected, isSelected] = useState(false);

  const handleRadioClick = () => {
    isSelected(!selected);
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col">
      {/* Add Property Button */}
      <div className="flex-grow p-4">
      
          <Header buttonName="Add Property"/>
      

      {/* Center the Property Selection Section */}
<div className="w-full flex justify-center mt-6">
  <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-gray-700 font-semibold text-lg mb-2 text-left">
      Select Property
    </h2>
    
    {/* Property Card */}
    <div className="border-2 border-[#69205D] rounded-lg p-5 flex items-center gap-8 shadow-md bg-white">
      {/* Left Section - Name & Icon */}
      <div className="flex flex-col items-center w-20">
        <h2 className="font-bold text-md text-center whitespace-nowrap">
          Maha Hostel
        </h2>
        <img src={buildingIcon} alt="Hostel Icon" className="w-14 h-14 mt-2" />
      </div>

      {/* Right Section - Address */}
      <div className="bg-gray-200 p-3 rounded-md text-sm text-gray-600 flex-1">
        No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State,
        <br /> 6xxxx6
      </div>

      {/* Radio Button */}
      <input
        type="radio"
        name="property"
        className="w-5 h-5 text-[#69205D] accent-[#69205D] cursor-pointer"
        checked={selected}
        onChange={handleRadioClick}
      />
    </div>
  </div>
</div>


      
      </div>
      <div className="p-4 ml-6">
        <Button button="Continue" route={selected ? "/step1" : "#"} disabled={!selected} />
      </div>
    </div>
  );
};

export default BedInventory_1;
