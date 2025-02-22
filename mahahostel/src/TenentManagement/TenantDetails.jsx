import { useState } from "react";


const TenantDetails = () => {
  const [whoCanStay, setWhoCanStay] = useState(""); // State for "Who can stay"
  const [bestSuitedFor, setBestSuitedFor] = useState(""); // State for "Best suited for"

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-2">Tenant Details</h2>

      {/* Who Can Stay Section */}
      <div className="bg-gray-200 p-2 rounded-md">
        Who can stay
      </div>
      <div className="space-y-2 mt-2">
        {["Male", "Female", "Others"].map((label) => (
          <label key={label} className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <img src="./assets/prop.png" alt={label} className="w-6 h-6" />
              <span>{label}</span>
            </div>
            {/* Square Radio Button */}
            <div
              className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center cursor-pointer
                ${whoCanStay === label ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"}
              `}
              onClick={() => setWhoCanStay(label)}
            >
              {/* Tick Mark (✔) Inside Selected Button */}
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

      {/* Best Suited For Section */}
      <div className="bg-gray-200 p-2 mt-4 rounded-md">
        Best Suited for
      </div>
      <div className="space-y-2 mt-2">
        {["Student", "Working professional"].map((label) => (
          <label key={label} className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <img src="/src/assets/prop.png" alt={label} className="w-6 h-6" />
              <span>{label}</span>
            </div>
            {/* Square Radio Button */}
            <div
              className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center cursor-pointer
                ${bestSuitedFor === label ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"}
              `}
              onClick={() => setBestSuitedFor(label)}
            >
              {/* Tick Mark (✔) Inside Selected Button */}
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
    </div>
  );
};

export default TenantDetails;
