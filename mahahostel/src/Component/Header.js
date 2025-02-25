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

const Header = ({ title, icons }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-2 py-4">
      <FaArrowLeft
        className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200"
        onClick={() => navigate(-1)}
      />

      <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
        <span className="text-2xl font-semibold">{title}</span>

        <div className="flex space-x-3 gap-1">
          {icons &&
            icons.map((iconKey, index) => {
              const IconComponent = iconsMap[iconKey];

              // If the icon is "plus", navigate to the next page
              return IconComponent ? (
                <IconComponent
                  key={index}
                  className="text-xl cursor-pointer"
                  onClick={() => iconKey === "plus" && navigate("/add-staff")}
                />
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
