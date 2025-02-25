import React from "react";
import SuccessIcon from "./Assests/success.png";
import Button from "./Button";

const SuccessScreen = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F5F4] p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <img src={SuccessIcon} alt="Success Icon" className="mx-auto mb-4" />
        <p className="text-gray-600 text-lg font-medium">{name} added successfully</p>
        <div className="mt-6">
          <Button button="/*Done" route="/"/>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;