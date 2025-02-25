import React, { useState } from 'react';

import PropertyHeader from './PropertyHeader';
import PropertyDetails from './PropertyDetails';
import OptionSelector from './OptionSelector';

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

  const renderOptions = (options, selectedItems, setItems) => (
    <OptionSelector
      options={options}
      selectedItems={selectedItems}
      setItems={setItems}
      toggleItem={toggleItem}
    />
  );

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1" style={{ fontFamily: 'Montserrat' }}>
      <PropertyHeader buttonName={buttonName} />

      <PropertyDetails />

      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">Select those options which apply or are allowed.</h2>

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