import React from "react";
import { FaArrowLeft, FaBed, FaPencilAlt, FaSlidersH, FaBell, FaSearch, FaPlus, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const iconsMap = {
  arrowLeft: FaArrowLeft,
  bed: FaBed,
  pencil: FaPencilAlt,
  sliders: FaSlidersH,
  bell: FaBell,
  search: FaSearch,
  plus: FaPlus,
  cog: FaCog,
};

const Header = ({ title, icons, onSearchClick, onFilterClick }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-2 py-4">
      {/* Back Button */}
      <FaArrowLeft
        className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200"
        onClick={() => navigate(-1)}
      />

      {/* Main Header */}
      <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-20">
        <span className="text-[14px] sm:text-[18px] font-semibold">{title}</span>

        {/* Icons */}
        <div className="flex space-x-3 gap-1">
          {icons &&
            icons.map((iconKey, index) => {
              const IconComponent = iconsMap[iconKey];
              if (!IconComponent) return null;

              return (
                <IconComponent
                  key={index}
                  className="text-xl cursor-pointer"
                  onClick={() => {
                    if (iconKey === "search" && onSearchClick) onSearchClick();
                    if (iconKey === "sliders" && onFilterClick) onFilterClick();
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
