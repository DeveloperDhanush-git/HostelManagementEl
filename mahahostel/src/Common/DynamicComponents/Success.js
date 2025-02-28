import React from "react";
import SuccessIcon from "./Assests/success.png";
import { useNavigate } from "react-router-dom";

const SuccessScreen = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#F8F5F4] px-6">

      <div className="flex flex-col items-center justify-center flex-grow">
        <img src={SuccessIcon} alt="Success Icon" />

        <p className="text-gray-600 mt-2 text-lg font-medium">
          Tenant added successfully
        </p>
       
      <button className="border border-[#69205D] text-white bg-[#69205D] py-2 mt-5 rounded-md text-2xl w-50 font-semibold" onClick={() => navigate("/")} >
        Done
      </button>
      </div>
    </div>
  );
};

export default SuccessScreen;