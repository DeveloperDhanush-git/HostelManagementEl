import React, { useState } from "react";
import Header from "../components/Header"; // Importing your custom header

const steps = [
  { id: 1, title: "Step 1", subtitle: "Add Business Details" },
  { id: 2, title: "Step 2", subtitle: "Add Tenant Details" },
  { id: 3, title: "Step 3", subtitle: "Add Room Options" },
  { id: 4, title: "Step 4", subtitle: "Add Agreement Details" },
  { id: 5, title: "Step 5", subtitle: "Add Rent Details" },
  { id: 6, title: "Step 6", subtitle: "Add Other Charge Details" },
];

const AddProperties = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow p-4">
      {/* Header with back button */}
      <Header title="Add Properties" />

      {/* Description */}
      <p className="text-sm mt-3 ml-10">
        Follow these steps to make your property live
      </p>
      <div className=" items-center justify-around"></div>
      {/* Progress Steps */}
      <div className="mt-6 space-y-6 ml-10 mr-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-start space-x-4 ${
              index + 1 < currentStep ? "opacity-50 text-gray-500" : ""
            }`} // Making completed steps inactive
          >
            {/* Step Number */}
            <p
              className={`text-sm font-medium ${
                index + 1 <= currentStep ? "text-purple-500" : "text-gray-400"
              }`}
            >
              {step.id.toString().padStart(2, "0")}
            </p>

            {/* Progress Line & Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                  index + 1 <= currentStep
                    ? "border-purple-500 text-purple-500"
                    : "border-gray-400 text-gray-400"
                }`}
              >
                {index + 1 < currentStep && (
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                )}
              </div>
              {index !== steps.length - 1 && (
                <div
                  className={`h-10 w-[2px] ${
                    index + 1 < currentStep ? "bg-purple-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>

            {/* Step Content */}
            <div className="flex flex-col">
              <p
                className={`text-m font-semibold ${
                  index + 1 <= currentStep ? "text-[#1D1617]" : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
              <p className="text-xs text-[#7B6F72]">{step.subtitle}</p>
            </div>

            {/* Add/Completed Button */}
            {index + 1 === currentStep && (
              <button
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="ml-auto bg-[#69205D] text-white text-m px-10 py-1 rounded-lg"
              >
                Add
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AddProperties;
