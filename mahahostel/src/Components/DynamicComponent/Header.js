import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

const Header = ({ title, icons = [], iconColor = "white", onIconClick }) => {
  return (
    <div className="bg-[#69205D] text-white flex justify-between items-center px-4 py-3 rounded-t-lg">
      {/* Title */}
      <h1 className="text-xl font-semibold">{title}</h1>

      {/* Icons Section */}
      <div className="flex gap-4">
        {icons.includes("search") && (
          <button onClick={() => onIconClick("search")} className="text-white">
            <FiSearch size={24} />
          </button>
        )}
        {icons.includes("plus") && (
          <button onClick={() => onIconClick("plus")} className="text-white">
            <FiPlus size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
