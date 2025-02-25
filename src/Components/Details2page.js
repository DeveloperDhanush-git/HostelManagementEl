import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropertyCard from "./Propertycard";
import Button from "./Button"; // Importing your custom button
import Header from "./Header";

const TenantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve propertyData from AddProperty page via navigation state
  const propertyData = location.state?.propertyData || {
    name: "Default Property Name",
    address: "Default Address",
    image: "assets/building icon.png",
  };

  // States for Tenant Details selections
  const [whoCanStay, setWhoCanStay] = useState(""); // State for "Who can stay"
  const [bestSuitedFor, setBestSuitedFor] = useState(""); // State for "Best suited for"

  // Function to handle button click
  const handleSubmit = () => {
    console.log("Who Can Stay:", whoCanStay);
    console.log("Best Suited For:", bestSuitedFor);
    alert(`Who Can Stay: ${whoCanStay}\nBest Suited For: ${bestSuitedFor}`);
    navigate("/"); // Change the route as per your requirement
  };

  return (
    <div className="flex flex-col min-h-screen p-4 ml-6">
      <Header title="Add Property" />

      {/* Display the filled property details using PropertyCard */}
      <PropertyCard 
        name={propertyData.name} 
        address={propertyData.address} 
        image={propertyData.image} 
      />

      <h2 className="font-bold text-lg mb-2">Tenant Details</h2>

      {/* Who Can Stay Section */}
      <div className="bg-gray-200 p-2 rounded-md">Who can stay</div>
      <div className="space-y-4 mt-2 ml-3">
        {["Male", "Female", "Others"].map((label) => (
          <label key={label} className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <img src="prop.png" alt={label} className="w-6 h-6" />
              <span>{label}</span>
            </div>
            {/* Square Radio Button */}
            <div
              className={`w-5 h-5 border-2 mr-3 rounded-sm flex items-center justify-center cursor-pointer
                ${whoCanStay === label ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"}
              `}
              onClick={() => setWhoCanStay(label)}
            >
              {whoCanStay === label && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
          </label>
        ))}
      </div>

      {/* Spacer between sections */}
      <div className="h-6"></div>

      {/* Best Suited For Section */}
      <div className="bg-gray-200 p-2 mt-4 rounded-md">Best Suited for</div>
      <div className="space-y-4 mt-2 ml-3">
        {["Student", "Working professional"].map((label) => (
          <label key={label} className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <img src="prop.png" alt={label} className="w-6 h-6" />
              <span>{label}</span>
            </div>
            {/* Square Radio Button */}
            <div
              className={`w-5 h-5 mr-3 border-2 rounded-sm flex items-center justify-center cursor-pointer
                ${bestSuitedFor === label ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"}
              `}
              onClick={() => setBestSuitedFor(label)}
            >
              {bestSuitedFor === label && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
          </label>
        ))}
      </div>

      {/* Push the button to the bottom */}
      <div className="mt-auto">
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
