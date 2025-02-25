import React from "react";
import SuccessIcon from "../assets/success.png";

const SuccessScreen = ({name}) => {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#F8F5F4] px-6">
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src={SuccessIcon} alt="Success Icon" />

        <p className="text-gray-600 mt-2 text-lg font-medium">
          {name} added successfully
        </p>
      </div>

      {/* Done Button at the Bottom */}
      <button className="border border-[#69205D] text-[#69205D] py-2 mb-6 rounded-md w-full text-2xl font-semibold">
        Done
      </button>
    </div>
  );
};

export default SuccessScreen;
