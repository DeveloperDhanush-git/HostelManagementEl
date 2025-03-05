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

const Header = ({ title, icons, onIconClick }) => {
  const navigate = useNavigate();

  // Show search icon for specific pages
  const showSearchIcon =
    title === "Rent Reminders" ||
    title === "Rent Receipts" ||
    title === "Edit Parent Details" ||
    title === "Online Payment" ||
    title === "Payment Verification";

  return (
    <div className="flex items-center space-x-2 py-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-transparent text-black rounded-lg cursor-pointer"
      >
        <FaArrowLeft className="text-xl cursor-pointer hover:text-gray-500 transition duration-200" />
      </button>

      {/* Header Container */}
      <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
        <span className="text-xl font-semibold">{title}</span>

        {/* Icons Section */}
        <div className="flex items-center space-x-3">
          {/* Show Search Icon for specific pages */}
          {showSearchIcon && (
            <button
              className="bg-transparent text-white p-2 rounded-lg cursor-pointer"
              onClick={() => onIconClick && onIconClick("search")}
            >
              <FaSearch className="text-xl" />
            </button>
          )}

          {/* Render Other Icons */}
          {icons &&
            icons.map((iconKey, index) => {
              const IconComponent = iconsMap[iconKey];

              return IconComponent ? (
                <button
                  key={index}
                  className="bg-transparent text-white p-2 rounded-lg cursor-pointer"
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
