import React from "react";

const PropertyCard = ({ name, address, image }) => {
  return (
    <div className="flex justify-center items-center h-full p-9">
      <div className="border-2 border-[#69205D] rounded-md p-9 flex items-center gap-4 shadow-md bg-white max-w-md flex-shrink-0">
        {/* Left Section - Property Name & Logo */}
        <div className="flex flex-col items-center w-30">
          <h2 className="font-bold text-md text-center whitespace-nowrap">
            {name || "EL codamics"}
          </h2>
          <img src={image || "assets/building icon.png"} alt="Property Icon" className="w-14 h-14" />
        </div>

        {/* Right Section - Address */}
        <div className="bg-[#F7F7F7] p-2 rounded-md text-sm text-gray-600 w-70">
          {address || "EL codamics"}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
