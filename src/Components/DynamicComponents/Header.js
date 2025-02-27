import React, { useState } from "react";
import { FaArrowLeft, FaBed, FaPencilAlt, FaSlidersH, FaBell, FaSearch, FaPlus, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FilterModal from "./FilterModal"; // Import the Filter Modal

const iconsMap = {
  arrowLeft: FaArrowLeft,
  bed: FaBed,
  pencil: FaPencilAlt,
  sliders: FaSlidersH,
  bell: FaBell,
  search: FaSearch,
  plus: FaPlus,
  cog: FaCog
};

const Header = ({ title, icons = [], onIconClick, searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <div className="flex items-center space-x-2 py-4 font-montserrat">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="bg-transparent text-black rounded-lg cursor-pointer"
        >
          <FaArrowLeft className="text-xl" />
        </button>

        <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-20">
          {/* Title */}
          <span className="text-2xl font-semibold font-montserrat">{title}</span>

          {/* Right Side - Icons & Search Bar */}
          <div className="flex items-center space-x-3">
            {/* Large Screen Search Bar - Toggled with Icon */}
            {(icons || []).includes("search") && showSearch && (
              <div className="hidden sm:flex items-center bg-white rounded-md px-3 py-2 border border-gray-300">
                <FaSearch className="text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-black focus:outline-none font-montserrat"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}

            {/* Search Icon - Click to Toggle Search Bar */}
            {(icons || []).includes("search") && (
              <button 
                onClick={() => setShowSearch(!showSearch)} 
                className="bg-transparent text-white p-2 rounded-lg cursor-pointer"
              >
                <FaSearch className="text-xl" />
              </button>
            )}

            {/* Filter Icon */}
            {(icons || []).includes("sliders") && (
              <button 
                onClick={() => setIsFilterOpen(true)} 
                className="bg-transparent text-white p-2 rounded-lg cursor-pointer"
              >
                <FaSlidersH className="text-xl" />
              </button>
            )}

            {/* Dynamic Icons */}
            {(icons || []).map((iconKey, index) => {
              if (iconKey === "search" || iconKey === "sliders") return null; // Skip already added icons
              const IconComponent = iconsMap[iconKey];
              return IconComponent ? (
                <button 
                  key={index} 
                  className="bg-transparent text-white p-2 rounded-lg cursor-pointer font-montserrat" 
                  onClick={() => onIconClick && onIconClick(iconKey)}
                >
                  <IconComponent className="text-xl" />
                </button>
              ) : null;
            })}
          </div>
        </div>
      </div>

      {/* Search Bar - Visible BELOW the header on mobile screens */}
      {showSearch && (icons || []).includes("search") && (
        <div className="w-full px-4 mt-2 block sm:hidden mb-5 ml-5 font-montserrat">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
      )}

      {/* Filter Modal */}
      <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </>
  );
};

export default Header;
