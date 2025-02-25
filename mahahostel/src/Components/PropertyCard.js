import React, { useState } from "react";
import Header from "./DynamicComponents/Header"; 
import { FiMoreHorizontal, FiSearch, FiPlus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import hostelBuilding from "../Assets/Hostel Building.png";
import { Link } from "react-router-dom";

const PropertyCard = ({ name, address, image, id }) => {
  return (
    <Link to={`/property/${id}`} className="block">
      <div className="w-full bg-white rounded-lg shadow-md border-2 border-[#69205D] p-4 cursor-pointer">
        <div className="flex justify-end">
          <button className="text-gray-500"></button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <p className="mb-3 font-bold text-md text-black text-center w-30 whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </p>
            <img src={image} alt="Hostel Icon" className="w-20 h-20 object-cover" />
          </div>
          <div className="p-2 bg-[#F7F7F7] mt-11 rounded-md text-m text-gray-600 w-full md:w-2/3 mb-2">
            <p>{address}</p>
          </div>
        </div>

        <div className="border-t-2 border-[#69205D] mt-2 pt-2 flex justify-between items-center">
          <p className="flex text-[#69205D] font-semibold text-lg">
            <FiMoreHorizontal className="mt-2 justify-end" size={24} />
            {id}
          </p>
          <button className="flex items-center text-green-500 gap-2">
            <FaWhatsapp size={24} />
            <span className="text-lg font-medium">Share</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

const PropertyList = () => {
  const [properties] = useState([
    {
      id: "CRIB005679",
      name: "Maha Hostel",
      address: "No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State, 6xxxx6",
      image: hostelBuilding
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Function to handle search toggle
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  // Handle button clicks from Header
  const handleHeaderButtonClick = (icon) => {
    if (icon === "search") {
      handleSearchToggle();
    }
  };

  // Filter properties based on search query
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      {/* Header with button functionality */}
      <Header
        title="My Properties"
        icons={["search", "plus"]} // Plus button is visible but non-functional
        iconColor="white"
        onIconClick={handleHeaderButtonClick} // Plus button does nothing
      />

      {/* Search Bar (Toggles when Search is Clicked) */}
      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded-md w-full sm:w-64 mt-3"
        />
      )}

      {/* Total Count */}
      <div className="mt-4">
        <p className="w-35 bg-[#69205D] text-lg font-semibold text-white rounded px-4 py-2">
          {properties.length} Properties
        </p>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
