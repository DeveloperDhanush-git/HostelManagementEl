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
  cog: FaCog
};

const Header = ({ title, icons = [], onIconClick }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center py-4 space-x-2">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-transparent text-black rounded-lg p-3"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      {/* Header Container */}
      <div className="flex-grow bg-[#69205D] text-white p-4 flex items-center justify-between rounded-lg h-16">
        
        {/* Title (Always Centered) */}
        <span className="text-xl font-semibold flex-1 text-left ">{title}</span>

        {/* Icons on the Right */}
        <div className="flex space-x-3">
          {icons.map((iconKey, index) => {
            const IconComponent = iconsMap[iconKey];
            return IconComponent ? (
              <button
                key={index}
                className="bg-transparent text-white p-3 rounded-lg"
                onClick={() => onIconClick && onIconClick(iconKey)}
              >
                <IconComponent className="text-xl" />
              </button>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
