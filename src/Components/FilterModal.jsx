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
    onClick={onClose} // Clicking the background will close the modal
  >
    <div 
      className="bg-white p-6 rounded-2xl w-80"
      onClick={(e) => e.stopPropagation()} // Prevents click inside modal from closing it
    >
      <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="text-4xl p-2 rounded-full  flex justify-center items-center cursor-pointer"
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold">Filter</h2>
        </div>
</div>

        <div className="mt-4">
          <h3 className="font-semibold">Sharing Type</h3>
          {["Single", "Double", "Triple", "3+"].map((type) => (
            <label key={type} className="flex justify-between items-center mt-2 ">
              <span>{type}</span>
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
          <h3 className="font-semibold">Gender</h3>
          {["Boys", "Girls"].map((gender) => (
            <label key={gender} className="flex justify-between items-center mt-2">
              <span>{gender}</span>
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
          <h3 className="font-semibold">Room Features</h3>
          {["Attached balcony", "Attached washroom", "Air conditioner", "Geyser"].map((feature) => (
            <label key={feature} className="flex justify-between items-center mt-2">
              <span>{feature}</span>
              <input
                type="checkbox"
                checked={filters.roomFeatures.includes(feature)}
                onChange={() => handleCheckboxChange("roomFeatures", feature)}
                className="accent-[#69205D]"
              />
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button className="text-red-500" onClick={handleClearAll}>Clear all</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded" onClick={onClose}>
            Show results
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
