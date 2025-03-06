// import React from "react";
import { Switch } from "@mui/material";
import Header from "./Header"; 
import Button from "./Button";

const Agreement1 = () => {
  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      {/* Header Component */}
      <Header title="Move-in Checklist" />
      
      {/* Property Details */}
      <div className="ml-10 mt-4">
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
            className={`flex justify-between items-center p-4 ml-1 ${
              index !== 0 ? "border-t border-gray-300 ml-1" : ""
            }`}
          >
            <div>
              <h4 className="font-semibold mb-1">{item.title}</h4> 
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
            {/* Material-UI Switch with Green Color */}
            <Switch
              defaultChecked={false} // Ensures switch starts OFF
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "green", // Thumb (circle) color when ON
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "green", // Track (background) color when ON
                },
              }}
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

export default Agreement1;