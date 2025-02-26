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

const Header = ({ title, icons, onIconClick }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center space-x-2 py-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-transparent text-black rounded-lg cursor-pointer"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
        <span className="text-xl font-semibold">{title}</span>

        <div className="flex ">
          {icons &&
            icons.map((iconKey, index) => {
              const IconComponent = iconsMap[iconKey];
              return IconComponent ? (
                <button
                  key={index}
                  className="bg-transparent text-white p-2 rounded-lg cursor-pointer"
                  onClick={() => onIconClick && onIconClick(iconKey)} // Call the function when clicked
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
