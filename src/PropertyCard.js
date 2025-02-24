import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const PropertyCard = ({ buttonName = "Add Property" }) => {
  const [whoCanStay, setWhoCanStay] = useState([]);
  const [bestSuitedFor, setBestSuitedFor] = useState([]);
  const [furnishingInRoom, setFurnishingInRoom] = useState([]);
  const [furnishingInProperty, setFurnishingInProperty] = useState([]);
  const [primeFeatures, setPrimeFeatures] = useState([]);
  const [houseRules, setHouseRules] = useState([]);

  const toggleSelectAll = (items, setItems, allSelected) => {
    if (allSelected) {
      setItems([]);
    } else {
      setItems(items);
    }
  };

  const toggleItem = (item, selectedItems, setItems) => {
    if (selectedItems.includes(item)) {
      setItems(selectedItems.filter(i => i !== item));
    } else {
      setItems([...selectedItems, item]);
    }
  };

  const renderOptions = (options, selectedItems, setItems, sectionName) => (
    <div className="space-y-2 mt-2">
      {options.map((label) => (
        <label key={label} className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <img src="/assest/logo.png" alt={label} className="w-6 h-6" />
            <span>{label}</span>
          </div>
          <div
            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center cursor-pointer ${
              selectedItems.includes(label) ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"
            }`}
            onClick={() => toggleItem(label, selectedItems, setItems)}
          >
            {selectedItems.includes(label) && (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            )}
          </div>
        </label>
      ))}
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1" style={{ fontFamily: 'Montserrat' }}>
      <div className="flex items-center space-x-2 py-4">
        <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
        <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
          <span className="text-2xl font-semibold">{buttonName}</span>
        </div>
      </div>
{/* Property Card */}
<div className="flex justify-center items-center h-full my-6">
        <div className="border-2 border-[#69205D] rounded-md p-4 flex items-center gap-4 shadow-md bg-white max-w-md flex-shrink-0">
          {/* Left Section - Hostel Name & Logo */}
          <div className="flex flex-col items-center w-20">
            <h2 className="font-bold text-md text-center whitespace-nowrap">Maha Hostel</h2>
            <img src="/assest/building.png" alt="Hostel Icon" className="w-14 h-14" />

          </div>
          {/* Right Section - Address */}
          <div className="bg-[#F7F7F7] p-2 rounded-md text-sm text-gray-600 w-60">
            No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State,
            <br />6xxxx6
          </div>
        </div>
      </div>






      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">Select those options which apply or are allowed.</h2>

        {/* Services included in rent */}
        <div className="p-2 rounded-md flex justify-between items-center">
          <span>Services included in rent</span>
          <button 
            className="text-[#69205D] text-sm font-semibold" 
            onClick={() => toggleSelectAll(["WIFI", "Laundry", "Housekeeping", "Food", "Electricity"], setWhoCanStay, whoCanStay.length === 5)}
          >
            {whoCanStay.length === 5 ? "Unselect All" : "Select All"}
          </button>
        </div>
        {renderOptions(["WIFI", "Laundry", "Housekeeping", "Food", "Electricity"], whoCanStay, setWhoCanStay)}

        {/* Property Features */}
        <div className="p-2 mt-4 rounded-md flex justify-between items-center">
          <span>Property Features</span>
          <button 
            className="text-[#69205D] text-sm font-semibold" 
            onClick={() => toggleSelectAll(["Guard", "Biometric Enabled Entry", "CCTV Camera", "Lift", "Parking", "Power Backup", "Common Area"], setBestSuitedFor, bestSuitedFor.length === 7)}
          >
            {bestSuitedFor.length === 7 ? "Unselect All" : "Select All"}
          </button>
        </div>
        {renderOptions(["Guard", "Biometric Enabled Entry", "CCTV Camera", "Lift", "Parking", "Power Backup", "Common Area"], bestSuitedFor, setBestSuitedFor)}

        {/* Furnishing in Room */}
        <div className="p-2 mt-4 rounded-md flex justify-between items-center">
          <span>Furnishing in Room</span>
          <button 
            className="text-[#69205D] text-sm font-semibold" 
            onClick={() => toggleSelectAll(["Bed with Mattress", "Wall Mirror", "Cupboard", "Study Table", "Chair", "Bookshelf"], setFurnishingInRoom, furnishingInRoom.length === 6)}
          >
            {furnishingInRoom.length === 6 ? "Unselect All" : "Select All"}
          </button>
        </div>
        {renderOptions(["Bed with Mattress", "Wall Mirror", "Cupboard", "Study Table", "Chair", "Bookshelf"], furnishingInRoom, setFurnishingInRoom)}

        {/* Furnishing in Property */}
        <div className="p-2 mt-4 rounded-md flex justify-between items-center">
          <span>Furnishing in Property</span>
          <button 
            className="text-[#69205D] text-sm font-semibold" 
            onClick={() => toggleSelectAll(["Fridge", "Washing Machine", "Microwave", "Water Purifier", "Coffee Machine", "Induction", "Electric Kettle"], setFurnishingInProperty, furnishingInProperty.length === 7)}
          >
            {furnishingInProperty.length === 7 ? "Unselect All" : "Select All"}
          </button>
        </div>
        {renderOptions(["Fridge", "Washing Machine", "Microwave", "Water Purifier", "Coffee Machine", "Induction", "Electric Kettle"], furnishingInProperty, setFurnishingInProperty)}

        {/* Prime Features */}
        <div className="p-2 mt-4 rounded-md flex justify-between items-center">
          <span>Prime Features</span>
          <button 
            className="text-[#69205D] text-sm font-semibold" 
            onClick={() => toggleSelectAll(["Gaming Zone", "Library", "Gym", "Swimming Pool", "Private Fridge", "Private TV"], setPrimeFeatures, primeFeatures.length === 6)}
          >
            {primeFeatures.length === 6 ? "Unselect All" : "Select All"}
          </button>
        </div>
        {renderOptions(["Gaming Zone", "Library", "Gym", "Swimming Pool", "Private Fridge", "Private TV"], primeFeatures, setPrimeFeatures)}

        {/* House Rules */}
        <div className="p-2 mt-4 rounded-md flex justify-between items-center">
          <span>House Rules</span>
          <button 
            className="text-[#69205D] text-sm font-semibold" 
            onClick={() => toggleSelectAll([
              "Smoking", "Drinking", "Visitors", "Non Veg food", "Guardians", "Guest of opposite gender", "Pets", "Flexible entry exit timings"
            ], setHouseRules, houseRules.length === 8)}
          >
            {houseRules.length === 8 ? "Unselect All" : "Select All"}
          </button>
        </div>
        {renderOptions([
          "Smoking", "Drinking", "Visitors", "Non Veg food", "Guardians", "Guest of opposite gender", "Pets", "Flexible entry exit timings"
        ], houseRules, setHouseRules)}

      </div>
    </div>
  );
};

export default PropertyCard;

