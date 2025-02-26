import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
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
    <div className="flex flex-col items-center">
      {/* Header */}
      <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
        <div className="flex items-center space-x-2 py-4">
          <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" onClick={() => navigate(-1)} />
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
        {Object.entries(rooms).map(([floor, count]) => (
          <div key={floor} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
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

      {/* Add Beds Button */}
      <button
        className="bg-[#69205D] text-white py-2 mt-6 rounded-md w-full text-sm md:text-base cursor-pointer"
        onClick={() => navigate('/step4', { state: { selectedBeds } })}
      >
        <span className="text-lg">{addButton}</span>
      </button>
    </div>
  );
};

export default BedInventory_4;
