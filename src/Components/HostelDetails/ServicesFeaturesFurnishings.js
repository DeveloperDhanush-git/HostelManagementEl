import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const ServicesFeaturesFurnishings = ({ selectedRoom }) => {
  const navigate = useNavigate(); // Initialize navigation

  const handleAddClick = () => {
    navigate('/property-card'); // Navigate to /property-card
  };

  return (
    <div className="p-6">
      {[{ title: 'Services', items: selectedRoom.services },
      { title: 'Property Features', items: selectedRoom.propertyFeatures },
      { title: 'Furnishings', items: selectedRoom.propertyFurnishings },
      { title: 'Furnishings Property', items: selectedRoom.propertyFurnishingsProperty },
      { title: 'Prime Features', items: selectedRoom.propertyPrimeFeatures },
      { title: 'House Rules', items: selectedRoom.propertyHouseRules }].map(({ title, items }) => (
        <div key={title} className="mt-5 bg-[#E0F0F8] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="assest/pic.png" alt={`${title} Icon`} className="w-8 h-8 mr-4" />
              <div className="font-semibold text-lg">{title}</div>
            </div>
            <button className="text-[#69205D] flex items-center" onClick={handleAddClick}>
              <IoIosAdd className="text-2xl mr-1" />
              Add
            </button>
          </div>
          <div className="mt-2 text-m text-gray-600">{items?.join(', ')}</div>
        </div>
      ))}
    </div>
  );
};

export default ServicesFeaturesFurnishings;
