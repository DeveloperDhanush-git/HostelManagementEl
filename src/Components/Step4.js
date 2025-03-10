import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const steps = [
  { id: 1, title: "Select access to property" },
  { id: 2, title: "Upload KYC documents" },
  { id: 3, title: "Verify basic details" },
  { id: 4, title: "Select bank account" },
];

const Step4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {}; // Retrieve form data

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col p-4" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Get Rent QR" />

      <div className="p-4 ml-7">
        <p className="text-[#69205D]">Step 4 of 4</p>
        <h2 className="font-bold text-lg">{steps[3].title}</h2>

        <p>Select the bank account you want to link with the QR of this property. You can change it later in the settings.</p>
        
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <p className="font-bold">{formData?.propertyName || "Property Name"}</p>
          <p className="text-sm text-gray-600">
            {formData?.address}, {formData?.name}, {formData?.state}
          </p>
        </div>

        <button onClick={() => navigate("/bank-account")} className="p-3 w-full rounded-lg mt-4 border text-[#69205D] bg-white">
          + Add bank account
        </button>
        
        <button onClick={() => navigate("/qr-code")} className="p-3 w-full rounded-lg mt-4 bg-[#69205D] text-white">
          Generate Rent QR
        </button>
      </div>
    </div>
  );
};

export default Step4;
