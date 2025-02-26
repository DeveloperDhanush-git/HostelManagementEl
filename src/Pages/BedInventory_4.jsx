import { useState } from 'react';
import Header from "../Components/Header";
import Floor from "../assets/floor.png";
import { useNavigate, useLocation } from 'react-router-dom';

const BedInventory_4 = ({ buttonName = "Maha Hostel", addButton = "Add Beds" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rooms = {} } = location.state || {};

  const [selectedBeds, setSelectedBeds] = useState({});

  const handleSelectAll = (floor) => {
    const allSelected = selectedBeds[floor]?.length === rooms[floor];
    setSelectedBeds({
      ...selectedBeds,
      [floor]: allSelected ? [] : Array.from({ length: Number(rooms[floor]) }, (_, i) => i + 1),
    });
  };

  const handleSelectBed = (floor, index) => {
    setSelectedBeds({
      ...selectedBeds,
      [floor]: selectedBeds[floor]?.includes(index)
        ? selectedBeds[floor].filter((id) => id !== index)
        : [...(selectedBeds[floor] || []), index],
    });
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col">
    {/* Add Property Button */}
    <div className="flex-grow p-4">
    
        <Header buttonName = "Maha Hostel"/>

      {/* Step Progress */}
      <div className="w-full max-w-4xl px-4 mt-6 text-left ml-6">
        <p className="text-sm text-blue-600 font-medium mb-1">STEP 2 of 3</p>
        <h3 className="text-lg font-semibold">Add Beds</h3>
      </div>

      {/* Beds Section */}
      <div className="w-full mt-4 space-y-6 ml-4">
        {Object.entries(rooms).map(([floor, count]) => (
          <div key={floor} className=" shadow-md">
            <div className="bg-gray-200 p-4 rounded-lg flex justify-between items-center">
              <span className="text-md font-semibold">{floor}</span>
              <button
                className="text-[#69205D] font-medium cursor-pointer outline-none"
                onClick={() => handleSelectAll(floor)}
              >
                Select all
              </button>
            </div>
            <div className="mt-3 space-y-2">
              {Array.from({ length: Number(count) }, (_, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <img src={Floor} alt="Bed Icon" className="w-6 h-6" />
                    <span className="text-md">{String(index + 1).padStart(4, '0')}</span>
                  </div>
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#69205D]"
                    checked={selectedBeds[floor]?.includes(index + 1) || false}
                    onChange={() => handleSelectBed(floor, index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 ml-6">
      <button
        className="bg-[#69205D] text-white py-2 mt-6 rounded-md w-full text-sm md:text-base cursor-pointer"
        onClick={() => navigate('/step4', { state: { selectedBeds } })}
      >
        <span className="text-lg">{addButton}</span>
      </button>
      </div>
    </div>
    </div>
  );
};

export default BedInventory_4;
