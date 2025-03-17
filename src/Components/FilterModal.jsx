import React from "react";

const FilterModal = ({ isOpen, onClose, filters, setFilters }) => {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const handleRadioChange = (value) => {
    setFilters((prev) => ({ ...prev, gender: value }));
  };

  const handleClearAll = () => {
    setFilters({ sharingType: [], gender: "", roomFeatures: [] });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white p-4 rounded-2xl w-[90%] max-w-[320px] sm:flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="text-3xl p-1 rounded-full flex justify-center items-center cursor-pointer"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold">Filter</h2>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-sm">Sharing Type</h3>
          {["Single", "Double", "Triple", "3+"].map((type) => (
            <label key={type} className="flex justify-between items-center mt-1">
              <span className="text-xs">{type}</span>
              <input
                type="checkbox"
                checked={filters.sharingType.includes(type)}
                onChange={() => handleCheckboxChange("sharingType", type)}
                className="accent-[#69205D]"
              />
            </label>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-sm">Gender</h3>
          {["Boys", "Girls"].map((gender) => (
            <label key={gender} className="flex justify-between items-center mt-1">
              <span className="text-xs">{gender}</span>
              <input
                type="radio"
                name="gender"
                checked={filters.gender === gender}
                onChange={() => handleRadioChange(gender)}
                className="accent-[#69205D]"
              />
            </label>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-sm">Room Features</h3>
          {["Attached balcony", "Attached washroom", "Air conditioner", "Geyser"].map((feature) => (
            <label key={feature} className="flex justify-between items-center mt-1">
              <span className="text-xs">{feature}</span>
              <input
                type="checkbox"
                checked={filters.roomFeatures.includes(feature)}
                onChange={() => handleCheckboxChange("roomFeatures", feature)}
                className="accent-[#69205D]"
              />
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button className="text-red-500 text-xs" onClick={handleClearAll}>Clear all</button>
          <button className="bg-purple-700 text-white px-3 py-1 rounded text-xs" onClick={onClose}>
            Show results
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;