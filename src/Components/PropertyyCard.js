import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./DynamicComponents/Header";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import hostelBuilding from "../Assets/Hostel Building.png";

// Property Card Component
const PropertyCard = ({ property }) => {
  return (

    
      <Link to={`/property/${property.id}`} className="block font-montserrat">
        <div className="bg-white rounded-lg  flex flex-col" style={{ fontFamily: "Montserrat" }}>
        <div className="flex-grow p-4">
        <div className="w-full bg-white rounded-lg shadow-md border-2 border-[#69205D] p-4 cursor-pointer font-montserrat">
          <div className="flex flex-col md:flex-row items-center gap-5 font-montserrat">
            <div className="flex flex-col items-center w-full md:w-1/3 font-montserrat">
              <p className="mb-3 font-bold text-md text-black text-center font-montserrat">{property.name}</p>
              <img src={property.image} alt={property.name} className="w-20 h-20 object-cover" />
            </div>
            <div className="mt-7 p-2 bg-[#F7F7F7] rounded-md text-sm text-gray-600 w-full md:w-2/3 font-montserrat">
              <p className="whitespace-pre-line break-words leading-5 font-montserrat">
                {property.address.replace(/, /g, "\n")}
              </p>
            </div>
          </div>
          <div className="border-t-2 border-[#69205D] mt-3 pt-2 flex justify-between items-center font-montserrat">
            <p className="flex text-[#69205D] font-semibold text-lg font-montserrat">
              <FiMoreHorizontal size={20}className="mr-2 mt-1" />
              {property.id}
            </p>
            <button className="flex items-center text-green-500 gap-2 font-montserrat">
              <FaWhatsapp size={20} />
              <span className="text-md font-medium font-montserrat">Share</span>
            </button>
          </div>
        </div>
        </div>
        </div>
      </Link>
   
  );
};

// Property List Component
const PropertyList = () => {
  const [properties, setProperties] = useState([
    { id: "CRIB005679", name: "Maha Hostel", address: "10/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
    { id: "CRIB008234", name: "Sunrise PG", address: "11/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
    { id: "CRIB009876", name: "Green Stay", address: "12/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
    { id: "CRIB004321", name: "Elite", address: "13/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
    { id: "CRIB007890", name: "Comfort", address: "14/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // Function to toggle search bar visibility
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  // Handle header button clicks
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
    <div className="bg-white rounded-lg  flex flex-col" >
      <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4">
      <Header
        title={
          <div className="flex flex-col mt-4 font-montserrat">
            <span className="font-semibold mb-2 font-montserrat">Add Property</span>
          </div>
        }
        icons={["search", "plus"]}
        onSearchClick={() => setShowSearch(!showSearch)}
        showSearch={showSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Search Bar */}
      {showSearch && (
        <div className="font-montserrat">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border rounded-md w-full sm:w-64 mt-3 font-montserrat "
          />
        </div>
      )}

      {/* Property Count */}
<div className="mt-4 mx-8 font-montserrat">
        <p className="w-43 bg-[#69205D] text-lg font-semibold text-white rounded px-4 py-2 font-montserrat">
          {filteredProperties.length} Properties
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="mx-8 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 font-montserrat items-stretch">
      {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default PropertyList;
