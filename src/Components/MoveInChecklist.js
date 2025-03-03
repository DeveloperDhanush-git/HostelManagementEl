import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Switch } from "@mui/material";
import Header from "./Header"; 
import Button from "./Button";

const MoveInChecklist = () => {
  const [switches, setSwitches] = useState({
    tenantDetails: false,
    kycVerification: false,
    rentalAgreement: false,
    houseRules: false,
  });

  const toggleSwitch = (key) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mx-auto bg-white min-h-screen max-w-4xl flex flex-col p-4 font-sans">
      {/* Header Component */}
      <Header title="Move-in Checklist" />
      
      {/* Property Details */}
      <div className="ml-9 mt-4">
        <h3 className="text-xl font-semibold text-[#69205D]">Maha Hostel</h3>
        <p className="text-gray-600 mt-1">
          No. 03, ABC Road
          <br />
          ABC Colony,
          <br />
          ABC City, ABC State,
          <br />
          6xxxxx6
        </p>
      </div>

      {/* Checklist Items */}
      <div className="ml-5">
        {[
          {
            key: "tenantDetails",
            title: "Tenant details",
            desc: "The information that your tenants will provide before moving into your property.",
          },
          {
            key: "kycVerification",
            title: "KYC verification",
            desc: "Your tenants will be requested to provide valid Aadhaar verification before moving in.",
          },
          {
            key: "rentalAgreement",
            title: "Rental agreement",
            desc: "A pre-made agreement template, this will be sent to your tenants while onboarding.",
          },
          {
            key: "houseRules",
            title: "Upload house rules",
            desc: "Share the property guidelines that your tenants are required to follow.",
          },
        ].map((item, index) => (
          <div
            key={item.key}
            className={`flex justify-between items-center p-4 ${
              index !== 0 ? "border-t border-gray-300" : ""
            }`}
          >
            <div>
              {/* Added mb- for spacing */}
              <h4 className="font-semibold mb-1">{item.title}</h4> 
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
            {/* Material-UI Switch */}
            <Switch
              checked={switches[item.key]}
              onChange={() => toggleSwitch(item.key)}
              color="secondary"
            />
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-center">
        <Button button="Save" />
      </div>
    </div>
  );
};

export default MoveInChecklist;
