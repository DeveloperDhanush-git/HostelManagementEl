import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./DynamicComponents/Header";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import hostelBuilding from "../Assets/Hostel Building.png";

// Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="w-full bg-white rounded-lg shadow-md border-2 border-[#69205D] p-4 cursor-pointer">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <p className="mb-3 font-bold text-md text-black text-center">{property.name}</p>
            <img src={property.image} alt={property.name} className="w-24 h-24 object-cover" />
          </div>
          <div className="p-2 bg-[#F7F7F7] rounded-md text-sm text-gray-600 w-full md:w-2/3">
            <p>{property.address}</p>
          </div>
        </div>
        <div className="border-t-2 border-[#69205D] mt-3 pt-2 flex justify-between items-center">
          <p className="flex text-[#69205D] font-semibold text-lg">
            <FiMoreHorizontal size={20} className="mr-2 mt-3" />
            {property.id}
          </p>
          <button className="flex items-center text-green-500 gap-2">
            <FaWhatsapp size={20} />
            <span className="text-md font-medium">Share</span>
          </button>
        </div>
      </div>
    </Link>
  );
};


// Property List Component
const PropertyList = () => {
  // Initial property data
  const [properties, setProperties] = useState([
    { id: "CRIB005679", name: "Maha Hostel", address: "10/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
    { id: "CRIB008234", name: "Sunrise PG", address: "XYZ City, XYZ State", image: hostelBuilding },
    { id: "CRIB009876", name: "Green Stay", address: "PQR City, PQR State", image: hostelBuilding },
    { id: "CRIB004321", name: "Elite ", address: "LMN City, LMN State", image: hostelBuilding },
    { id: "CRIB007890", name: "Comfort ", address: "STU City, STU State", image: hostelBuilding },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Function to add a new property
  const addProperty = () => {
    const newProperty = {
      id: `CRIB${Math.floor(100000 + Math.random() * 900000)}`,
      name: "New Hostel",
      address: "GHI City, GHI State",
      image: hostelBuilding,
    };
    setProperties([...properties, newProperty]);
  };

  // Function to toggle search bar visibility
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  // Handle header button clicks
  // Handle header button clicks
const handleHeaderButtonClick = (icon) => {
  if (icon === "search") {
    handleSearchToggle();
  } 
  // Do nothing when "plus" icon is clicked
};


  // Filter properties based on search query
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md font-montserrat">
      {/* Header with search & add property buttons */}
      <Header
        title="My Properties"
        icons={["search", "plus"]}
        iconColor="white"
        onIconClick={handleHeaderButtonClick}
      />

      {/* Search Bar */}
      {showSearch && (
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded-md w-full sm:w-64 mt-3"
        />
      )}

      {/* Property Count */}
      <div className="mt-4">
        <p className="w-35 bg-[#69205D] text-lg font-semibold text-white rounded px-4 py-2">
          {filteredProperties.length} Properties
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
