import React from "react";
import SuccessIcon from "./Assests/success.png";
import Button from "./Button";

const SuccessScreen = ({ name }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 h-auto flex flex-col md:p-6">
      <div className="bg-white rounded-lg shadow-lg w-full mt-10  text-center">
        <img src={SuccessIcon} alt="Success Icon" className="mx-auto mb-4" />
        <p className="text-gray-600 text-lg font-medium">{name} added successfully</p>
        <div className="mt-6">
          <Button button="/*Done" route="/bedInventory"/>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;