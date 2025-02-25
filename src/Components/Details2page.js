// src/Components/TenantDetails.js
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "./Propertycard";
import Button from "./Button";
import Header from "./Header";
import { FormDataContext } from "./PropertyContext";

const TenantDetails = () => {
  const { formData } = useContext(FormDataContext);
  const navigate = useNavigate();

  // Use the globally stored propertyData or fallback to default values
  const propertyData = formData || {
    name: "Default Property Name",
    address: "Default Address",
    image: "assets/building icon.png",
  };

  // Local states for Tenant Details selections
  const [whoCanStay, setWhoCanStay] = useState("");
  const [bestSuitedFor, setBestSuitedFor] = useState("");

  const handleSubmit = () => {
    console.log("Who Can Stay:", whoCanStay);
    console.log("Best Suited For:", bestSuitedFor);
    alert(`Who Can Stay: ${whoCanStay}\nBest Suited For: ${bestSuitedFor}`);
    // Navigate to the next step (update the route as needed)
    navigate("/Add");
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      
      {/* Main Content */}
      <div className="flex-grow p-4 ml-6">
      <Header title="Add Property" />
        <PropertyCard 
          name={propertyData.name} 
          address={propertyData.address} 
          image={propertyData.image} 
        />
        <div className="mt-4">
          <h2 className="font-bold text-lg mb-2">Tenant Details</h2>

          {/* Who Can Stay Section */}
          <div className="bg-gray-200 p-2 rounded-md">Who can stay</div>
          <div className="space-y-6 mt-2 ml-3">
            {["Male", "Female", "Others"].map((label) => (
              <label key={label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <img src="prop.png" alt={label} className="w-6 h-6" />
                  <span>{label}</span>
                </div>
                <div
                  className={`w-5 h-5 border-2 mr-3 rounded-sm flex items-center justify-center cursor-pointer ${
                    whoCanStay === label ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"
                  }`}
                  onClick={() => setWhoCanStay(label)}
                >
                  {whoCanStay === label && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
              </label>
            ))}
          </div>

          {/* Best Suited For Section */}
          <div className="bg-gray-200 p-2 mt-4 rounded-md">Best Suited for</div>
          <div className="space-y-6 mt-2 ml-3">
            {["Student", "Working professional"].map((label) => (
              <label key={label} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-2">
                  <img src="prop.png" alt={label} className="w-6 h-6" />
                  <span>{label}</span>
                </div>
                <div
                  className={`w-5 h-5 mr-3 border-2 rounded-sm flex items-center justify-center cursor-pointer ${
                    bestSuitedFor === label ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"
                  }`}
                  onClick={() => setBestSuitedFor(label)}
                >
                  {bestSuitedFor === label && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Button */}
      <div className="p-4 ml-6">
        <Button
          button="Next"
          route="/Add"
          size="md"
          width="full"
          defaultColor="#69205D"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default TenantDetails;
