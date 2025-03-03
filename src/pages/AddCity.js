import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import search icon
import indialogo from "../assets/🦆 icon _India_.png"
const citiesList = [
  "Chennai", "Coimbatore", "Trichy", "Kanyakumari", 
  "Salem", "Erode", "Tiruppur", "Kanchipuram"
];

const AddCity = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Use existing selected cities
  const [selectedCities, setSelectedCities] = useState(location.state?.cities || []);
  const [searchText, setSearchText] = useState("");

  // Filter cities based on search input
  const filteredCities = citiesList.filter(city =>
    city.toLowerCase().includes(searchText.toLowerCase())
  );

  // Toggle city selection
  const toggleCity = (city) => {
    setSelectedCities((prevCities) =>
      prevCities.includes(city) ? prevCities.filter((c) => c !== city) : [...prevCities, city]
    );
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
  {/* Left: Close (X) Icon & Title */}
  <div className="flex items-center gap-2">
    <button onClick={() => navigate(-1)} className="text-[#69205D] text-2xl">
      &times;
    </button>
    <h2 className="text-[24px] font-semibold text-[#69205D]">Add Cities</h2>
  </div>

  {/* Right: India Flag */}
  <img 
    src={indialogo} 
    alt="India Flag" 
    className="w-8 h-6 mr-2"
  />
</div>


      {/* Styled Search Box */}
<div className="relative mt-4">
  {/* Search Icon Inside the Input Box */}
  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
  
  {/* Input Field */}
  <input
    type="text"
    placeholder="Search"
    className="w-full pl-12 p-3 bg-gray-100 rounded-full outline-none text-gray-900 shadow-sm border focus:border-[#69205D]"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
</div>

      <p className="text-[15px] bg-gray-200 p-4 mt-4 text-gray-500 rounded-lg">Search city where you operate</p>
      {/* City List */}
      <div className="mt-4">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <label key={city} className="flex items-center justify-between p-3 bg-gray-100 rounded-md mt-2">
              <span className="text-gray-900">{city}</span>
              <input
                type="checkbox"
                checked={selectedCities.includes(city)}
                onChange={() => toggleCity(city)}
              />
            </label>
          ))
        ) : (
          <p className="text-gray-500 mt-3 text-center">No cities found</p>
        )}
      </div>

      {/* Add Button */}
      <button
        className="mt-6 w-full bg-[#69205D] text-white p-3 rounded-md"
        onClick={() => navigate("/hostel-form", { state: { cities: selectedCities } })}
      >
        Add
      </button>
    </div>
  );
};

export default AddCity;
