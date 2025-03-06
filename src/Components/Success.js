import React from "react";
import { useNavigate } from "react-router-dom"; 
import SuccessIcon from "../Asset/success.png";

const Success = () => {
  const navigate = useNavigate(); 

  const handleDoneClick = () => {
    // navigate("/bank-account"); // Navigate back to Bank Details page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F8F5F4] px-6">
      {/* Success Icon */}
      <img src={SuccessIcon} alt="Success Icon" className="w-24 h-24 mb-4" />

      {/* Success Message */}
      <h2 className="text-[#69205D] text-xl font-bold text-center">
        Bank Added Successfully!
      </h2>
      <p className="text-gray-600 text-center text-sm mt-2 px-4">
        Your bank account has been linked. You can now receive payments seamlessly.
      </p>

      {/* Done Button */}
      <button
        onClick={handleDoneClick} // Navigate on click
        className="mt-6 bg-[#69205D] text-white py-2 px-6 rounded-md w-full max-w-xs text-lg font-semibold"
      >
        Done
      </button>
    </div>
  );
};

export default Success;
