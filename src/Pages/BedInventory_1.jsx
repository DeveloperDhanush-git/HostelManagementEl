import React, {useState} from "react";
import { FaArrowLeft } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png";
import Button from "../Components/Button";


const BedInventory_1 = ({buttonName = "Add Bed Inventory"  }) => {
  const [selected, isSelected] = useState(false); // ✅ Track radio selection
  
  
  const handleRadioClick = () => {
    isSelected(!selected);
  };
  

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

      {/* Property Selection Section */}
      <div className="w-full max-w-md mt-6">
        <h2 className="text-gray-700 font-semibold text-lg mb-2">
          Select Property
        </h2>
        <div className="border-2 border-[#69205D] rounded-lg p-5 flex items-center gap-8 shadow-md bg-white">
          {/* Left Section - Name & Icon */}
          <div className="flex flex-col items-center w-20">
            <h2 className="font-bold text-md text-center whitespace-nowrap">Maha Hostel</h2>
            <img src={buildingIcon} alt="Hostel Icon" className="w-14 h-14" />
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
            onChange={handleRadioClick} />
        </div>
      </div>

     {/* Continue Button (Pass Props) */}
     <Button button="Continue" route={selected ? "/step1" : "#"} disabled={!selected} />
    </div>
  );
};


export default BedInventory_1;
