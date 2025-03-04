import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import propertylogo from "../assets/images-fotor-20241211231959-removebg-preview 1.png";

const steps = [
  { id: 1, title: "Step 1", subtitle: "Add Business Details", fields: ["businessName"] },
  { id: 2, title: "Step 2", subtitle: "Add Bank Account Details", fields: ["accountHolder", "accountNumber", "ifscCode"] },
  { id: 3, title: "Step 3", subtitle: "Add Your Property Details", fields: ["propertyName", "propertyLocation"] },
  { id: 4, title: "Step 4", subtitle: "Add Referral Code (Optional)", fields: ["referralCode"], optional: true },
];

const AddProperties = () => {
  const [currentStep, setCurrentStep] = useState(0); // No step is open initially
  const [formData, setFormData] = useState({
    businessName: "",
    accountHolder: "",
    accountNumber: "",
    ifscCode: "",
    propertyName: "",
    propertyLocation: "",
    referralCode: "",
  });

  const navigate = useNavigate();
  const isLastStep = currentStep === steps.length;

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if the current step is complete
  const isStepComplete = () => {
    if (currentStep === 0) return false; // No step should be complete when nothing is open
    const stepFields = steps[currentStep - 1].fields;
    if (steps[currentStep - 1].optional) return true;
    return stepFields.every((field) => formData[field].trim() !== "");
  };

  // Handle Step Opening
  const handleOpenFirstStep = () => {
    setCurrentStep(1); // Opens Step 1 when clicking "Add"
  };

  // Handle Next Step
  const handleNextStep = () => {
    if (isStepComplete()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-6 max-w-2xl mx-auto"> {/* Centered and width limited */}
      <div className="flex-grow p-4">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <img src={propertylogo} alt="Illustration" className="w-60 h-60 mt-4" />
        </div>

        {/* Steps Heading */}
        <p className="text-m font-semibold mt-3 ml-4">Follow these steps</p>

        {/* Progress Steps */}
        <div className="mt-6 space-y-6 ml-4 mr-4">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex items-start space-x-4 ${index + 1 < currentStep ? "opacity-50 text-gray-500" : ""}`}>
              {/* Step Number */}
              <p className={`text-sm font-medium ${index + 1 <= currentStep ? "text-purple-500" : "text-gray-400"}`}>
                {step.id.toString().padStart(2, "0")}
              </p>

              {/* Step Indicator & Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                    index + 1 <= currentStep ? "border-purple-500 text-purple-500" : "border-gray-400 text-gray-400"
                  }`}
                >
                  {index + 1 < currentStep && <div className="w-2 h-2 bg-purple-500 rounded-full"></div>}
                </div>
                {index !== steps.length - 1 && <div className={`h-10 w-[2px] ${index + 1 < currentStep ? "bg-purple-500" : "bg-gray-300"}`}></div>}
              </div>

              {/* Step Content */}
              <div className="flex flex-col w-full">
                <p className={`text-m font-semibold ${index + 1 <= currentStep ? "text-[#1D1617]" : "text-gray-500"}`}>{step.title}</p>
                <p className="text-xs text-[#7B6F72]">{step.subtitle}</p>

                {/* Show form fields only for the current step */}
                {index + 1 === currentStep && (
                  <div className="mt-2 space-y-3">
                    {step.fields.map((field) => (
                      <input
                        key={field}
                        name={field}
                        type="text"
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={field.replace(/([A-Z])/g, " $1").trim()} // Formatting field name
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Show "Add" button only when no step is open */}
              {currentStep === 0 && index === 0 && (
                <button
                  onClick={handleOpenFirstStep}
                  className="ml-auto bg-[#69205D] text-white text-m px-10 py-1 rounded-lg"
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => (isLastStep ? navigate("/") : handleNextStep())}
        disabled={!isStepComplete()} // Disable until all required fields are filled
        className={`mt-6 w-full p-3 rounded-md text-lg py-4 px-6 ${isStepComplete() ? "bg-[#69205D] text-white" : "bg-gray-300 text-gray-500"}`}
      >
        {isLastStep ? "Finish" : "Continue"}
      </button>
    </div>
  );
};

export default AddProperties;
