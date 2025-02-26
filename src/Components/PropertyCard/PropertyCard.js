// PropertyCard.js
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyHeader from './PropertyHeader';
import PropertyDetails from './PropertyDetails';
import OptionSelector from './OptionSelector';
import { SelectedRoomContext } from '../SelectedRoomContext';
const PropertyCard = ({ buttonName = "Add Property" }) => {
  const { selectedRoom, setSelectedRoom } = useContext(SelectedRoomContext);
  const navigate = useNavigate();

  // Local states initialized from context
  const [whoCanStay, setWhoCanStay] = useState(selectedRoom.services || []);
  const [bestSuitedFor, setBestSuitedFor] = useState(selectedRoom.propertyFeatures || []);
  const [furnishingInRoom, setFurnishingInRoom] = useState(selectedRoom.propertyFurnishings || []);
  const [furnishingInProperty, setFurnishingInProperty] = useState(selectedRoom.propertyFurnishingsProperty || []);
  const [primeFeatures, setPrimeFeatures] = useState(selectedRoom.propertyPrimeFeatures || []);
  const [houseRules, setHouseRules] = useState(selectedRoom.propertyHouseRules || []);

  // Update context when local state changes
  useEffect(() => {
    setSelectedRoom({
      services: whoCanStay,
      propertyFeatures: bestSuitedFor,
      propertyFurnishings: furnishingInRoom,
      propertyFurnishingsProperty: furnishingInProperty,
      propertyPrimeFeatures: primeFeatures,
      propertyHouseRules: houseRules,
    });
  }, [whoCanStay, bestSuitedFor, furnishingInRoom, furnishingInProperty, primeFeatures, houseRules, setSelectedRoom]);

  // Toggle Select All / Unselect All
  const toggleSelectAll = (items, selectedItems, setItems) => {
    setItems(selectedItems.length === items.length ? [] : items);
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

  const handleSave = () => {
    navigate('/'); // Navigate after saving selections
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-#F7F7F7 rounded-lg mt-1" style={{ fontFamily: 'Montserrat' }}>
      <PropertyHeader buttonName={buttonName} />
      <PropertyDetails />

      <div className="p-4">
        <h2 className="font- text-3xl ml-7 mb-2">Select those options which apply or are allowed.</h2>


        {/* Services Included in Rent */}
        <div className="p-2 ml-7 rounded-md text-2xl flex justify-between items-center">
          <span>Services Included in Rent</span>
          <button
            className="text-[#69205D] text-sm ml -7 font-semibold"
            onClick={() => toggleSelectAll(
              ["WIFI", "Laundry", "Housekeeping", "Food", "Electricity"],
              whoCanStay,
              setWhoCanStay
            )}
          >
            {whoCanStay.length === 5 ? "Unselect All" : "Select All"}
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {["WIFI", "Laundry", "Housekeeping", "Food", "Electricity"].map((service) => (
            <div key={service} className={`ml-13 ${service.toLowerCase()}`}>
              {renderOptions([service], whoCanStay, setWhoCanStay)}
            </div>
          ))}
        </div>


        {/* Property Features */}
        <div className="p-2 mt-6 text-2xl ml-7 rounded-md flex justify-between items-center">
          <span>Property Features</span>
          <button
            className="text-[#69205D] text-sm font-semibold"
            onClick={() => toggleSelectAll([
              "Guard", "Biometric Enabled Entry", "CCTV Camera", "Lift", "Parking", "Power Backup", "Common Area"
            ], bestSuitedFor, setBestSuitedFor)}
          >
            {bestSuitedFor.length === 7 ? "Unselect All" : "Select All"}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {["Guard", "Biometric Enabled Entry", "CCTV Camera", "Lift", "Parking", "Power Backup", "Common Area"].map((feature) => (
            <div key={feature} className={`ml-13 ${feature.toLowerCase().replace(/\s+/g, '-')}`}>
              {renderOptions([feature], bestSuitedFor, setBestSuitedFor)}
            </div>
          ))}
        </div>

        {/* Furnishing in Room */}
        <div className="p-2 mt-6 text-2xl ml-7 rounded-md flex justify-between items-center">
          <span>Furnishing in Room</span>
          <button
            className="text-[#69205D] text-sm font-semibold"
            onClick={() => toggleSelectAll([
              "Bed with Mattress", "Wall Mirror", "Cupboard", "Study Table", "Chair", "Bookshelf"
            ], furnishingInRoom, setFurnishingInRoom)}
          >
            {furnishingInRoom.length === 6 ? "Unselect All" : "Select All"}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {["Bed with Mattress", "Wall Mirror", "Cupboard", "Study Table", "Chair", "Bookshelf"].map((item) => (
            <div key={item} className={`ml-13 ${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {renderOptions([item], furnishingInRoom, setFurnishingInRoom)}
            </div>
          ))}
        </div>

        {/* Furnishing in Property */}
        <div className="p-2 mt-6 text-2xl ml-7 rounded-md flex justify-between items-center">
          <span>Furnishing in Property</span>
          <button
            className="text-[#69205D] text-sm font-semibold"
            onClick={() => toggleSelectAll([
              "Fridge", "Washing Machine", "Microwave", "Water Purifier", "Coffee Machine", "Induction", "Electric Kettle"
            ], furnishingInProperty, setFurnishingInProperty)}
          >
            {furnishingInProperty.length === 7 ? "Unselect All" : "Select All"}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {["Fridge", "Washing Machine", "Microwave", "Water Purifier", "Coffee Machine", "Induction", "Electric Kettle"].map((item) => (
            <div key={item} className={`ml-13 ${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {renderOptions([item], furnishingInProperty, setFurnishingInProperty)}
            </div>
          ))}
        </div>

        {/* Prime Features */}
        <div className="p-2 mt-6 text-2xl ml-7 rounded-md flex justify-between items-center">
          <span>Prime Features</span>
          <button
            className="text-[#69205D] text-sm font-semibold"
            onClick={() => toggleSelectAll([
              "Gaming Zone", "Library", "Gym", "Swimming Pool", "Private Fridge", "Private TV"
            ], primeFeatures, setPrimeFeatures)}
          >
            {primeFeatures.length === 6 ? "Unselect All" : "Select All"}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {["Gaming Zone", "Library", "Gym", "Swimming Pool", "Private Fridge", "Private TV"].map((item) => (
            <div key={item} className={`ml-13 ${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {renderOptions([item], primeFeatures, setPrimeFeatures)}
            </div>
          ))}
        </div>

        {/* House Rules */}

        {/* <div className="p-2 mt-6 ml-1 text-2xl rounded-md flex justify-between items-center">
          <span>House Rules</span>
          <button
            className="text-[#69205D] text-sm font-semibold"
            onClick={() => toggleSelectAll([
              "Smoking", "Drinking", "Visitors", "Non Veg food", "Guardians", "Guest of opposite gender", "Pets", "Flexible entry exit timings"
            ], houseRules, setHouseRules)}

          >
            {houseRules.length === 8 ? "Unselect All" : "Select All"}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {["Smoking", "Drinking", "Visitors", "Non Veg food", "Guardians", "Guest of opposite gender", "Pets", "Flexible entry exit timings"].map((rule) => (
            <div key={rule} className={`ml-6 ${rule.toLowerCase().replace(/\s+/g, '-')}`}>
              {renderOptions([rule], houseRules, setHouseRules)}
            </div>
          ))}
        </div> */}

<div className="p-2 mt-6 ml-1 text-2xl ml-7 rounded-md flex justify-between items-center">
  <span>House Rules</span>
  <button
    className="text-[#69205D] text-sm font-semibold"
    onClick={() => toggleSelectAll([
      "Smoking", "Drinking", "Visitors", "Non Veg food", "Guardians", "Guest of opposite gender", "Pets", "Flexible entry exit timings"
    ], houseRules, setHouseRules)}
  >
    {houseRules.length === 8 ? "Unselect All" : "Select All"}
  </button>
</div>

{/* Added the text below House Rules */}


<div className="flex flex-col gap-3">
  {[
    { name: "Smoking", question: "is smoking allowed?" },
    { name: "Drinking", question: "is drinking allowed?" },
    { name: "Visitors", question: "Are visitors allowed?" },
    { name: "Non Veg food", question: "is non-veg food allowed?" },
    { name: "Guardians", question: "Are guardians allowed to stay?" },
    { name: "Guest of opposite gender", question: "is guests of opposite gender allowed?" },
    { name: "Pets", question: "Are pets allowed?" },
    { name: "Flexible entry exit timings", question: "When can the tenant enter and leave?" }
  ].map((rule) => (
    <div key={rule.name} className={`ml-13 ${rule.name.toLowerCase().replace(/\s+/g, '-')}`}>
      {renderOptions([rule.name], houseRules, setHouseRules)}
      <div className="text-sm text-gray-600 ml-9">{rule.question}</div> {/* Adjusted margin here */}
    </div>
  ))}
</div>




        <button onClick={handleSave} className="mt-6 p-3 ml-7  bg-[#69205D] text-white rounded-lg w-full">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;