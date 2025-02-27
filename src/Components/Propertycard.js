import React, { useContext } from "react";
import { FormDataContext } from "./PropertyContext";
import BuildingIcon from "../assets/buildingicon.png"; 

const PropertyCard = () => {
  const { formData } = useContext(FormDataContext);

  console.log("🔹 Rendering PropertyCard with formData:", formData);

  return (
    <div className="flex justify-center items-center p-4">
      <div className="border-2 border-[#69205D] rounded-lg p-6 flex flex-col sm:flex-row items-center gap-8 shadow-md bg-white max-w-md w-full sm:max-w-md lg:max-w-lg">
        
       
        <div className="flex flex-col items-center gap-5 w-full sm:w-auto">
          <h2 className="font-bold text-md text-center">{formData?.name || "EL Codamics"}</h2>
          <img 
            src={formData?.image || BuildingIcon} 
            alt="Property Icon" 
            className="w-20 h-20"
          />
        </div>

        {/* Right Section - Address */}
        <div className="bg-[#F7F7F7] p-3 rounded-md text-sm text-gray-600 w-full sm:w-2/3">
          <p>{formData?.houseNumber || "N/A"}</p>
          <p>{formData?.locality || "N/A"}</p>
          <p>{formData?.city || "N/A"}</p>
          <p>{formData?.stateValue || "N/A"}</p>
          <p>{formData?.pincode || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
