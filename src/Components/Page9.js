import React, { useState, useEffect, useContext } from "react";
import { FaArrowLeft, FaCaretDown } from "react-icons/fa";
import Header from "./Header";
import Button from "./Button";
import PropertyCard from "./Propertycard";
import { FormDataContext } from "./PropertyContext";

const Screen_10 = ({ buttonName, nextButton, step2 }) => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step < 6) setStep((prevStep) => prevStep + 1);
  };

  const extraCharge = ["Yes", "No"];
  const extraChargeRepetition = ["One time", "Monthly"];
  const gracePeriod = ["5 days", "7 days", "10 days"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharge, setSelectedCharge] = useState("Maintenance");
  const [selectedOptions, setSelectedOptions] = useState({
    latePayment: "",
    paymentOptions: "",
    gracePeriod: "",
  });
  const { formData } = useContext(FormDataContext);

  const handleSelection = (category, value) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const handleChargeSelection = (charge) => {
    setSelectedCharge(charge.label);
    setIsModalOpen(false);
  };

  const propertyData = formData || {
    name: "Default Property Name",
    address: "Default Address",
    image: "/assets/building icon.png",
  };

  const chargeTypes = [
    { value: "Maintenance", label: "Maintenance" },
    { value: "Registration Charge", label: "Registration Charge" },
    { value: "KYC Charge", label: "KYC Charge" },
    { value: "Agreement Charge", label: "Agreement Charge" },
    { value: "Onboarding Charge", label: "Onboarding Charge" },
    { value: "One-Time Charge", label: "One-Time Charge" },
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isModalOpen]);

  return (
    <div className="bg-white min-h-screen rounded-lg flex flex-col">
      <div className="flex-grow p-4">
        <Header title="Add property" />
        <PropertyCard 
          name={propertyData.name} 
          address={propertyData.address} 
          image={propertyData.image} 
        />

        <div className="flex flex-wrap justify-between w-full mt-4 mr-7">
          <div className="rounded-lg w-full p-4">
            {step === 1 && (
              <p className="text-sm text-blue-600 font-medium mb-2">
                STEP {step2} of 6
              </p>
            )}
            <h2 className="text-2xl font-semibold mb-4">Other Charges</h2>

            {/* Extra Charge Section */}
            <div className="mb-4 w-full">
              <p className="text-gray-700 font-medium mb-2">Do you take any extra charge?</p>
              <div className="flex flex-wrap gap-3 w-full">
                {extraCharge.map((item) => (
                  <button
                    key={item}
                    className={`w-full px-4 py-2 rounded-lg text-gray-800 ${
                      selectedOptions.latePayment === item ? "bg-[#69205D] text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleSelection("latePayment", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Conditional Extra Charge Details */}
            {selectedOptions.latePayment === "Yes" && (
              <>
                {/* Charge Dropdown */}
                <div className="mb-4 relative w-full">
                  <p className="text-gray-700 font-medium mb-2">Add a charge</p>
                  <button
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-left flex justify-between items-center"
                    onClick={() => setIsModalOpen((prev) => !prev)}
                  >
                    {selectedCharge} <FaCaretDown className="text-gray-600" />
                  </button>

                  {/* Dropdown Modal */}
                  {isModalOpen && (
                    <div className="absolute left-0 top-full z-50 w-full bg-white rounded-lg shadow-lg border mt-2 max-h-60 overflow-y-auto">
                      {chargeTypes.map((charge) => (
                        <button
                          key={charge.value}
                          className="w-full px-6 py-3 text-left border-b last:border-b-0 hover:bg-gray-100 transition"
                          onClick={() => handleChargeSelection(charge)}
                        >
                          {charge.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Amount Input */}
                <input
                  type="text"
                  placeholder="Amount"
                  className="w-full px-3 py-2 border border-gray-500 rounded-lg outline-gray-500"
                />

                {/* Extra Charge Repetition */}
                <div className="my-4 w-full">
                  <p className="text-gray-700 font-medium mb-2">Extra Charge repetition</p>
                  <div className="flex flex-wrap gap-3 w-full">
                    {extraChargeRepetition.map((item) => (
                      <button
                        key={item}
                        className={`w-full px-4 py-2 rounded-lg text-gray-800 ${
                          selectedOptions.paymentOptions === item ? "bg-[#69205D] text-white" : "bg-gray-200"
                        }`}
                        onClick={() => handleSelection("paymentOptions", item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grace Period */}
                <div className="mb-4 w-full">
                  <p className="text-gray-700 font-medium mb-2">Grace Period</p>
                  <div className="flex flex-wrap gap-3 w-full">
                    {gracePeriod.map((item) => (
                      <button
                        key={item}
                        className={`w-full px-4 py-2 rounded-lg text-gray-800 ${
                          selectedOptions.gracePeriod === item ? "bg-[#69205D] text-white" : "bg-gray-200"
                        }`}
                        onClick={() => handleSelection("gracePeriod", item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="p-4">
        <Button button="Next" route="/Page10" className="w-full" />
      </div>
    </div>
  );
};

export default Screen_10;
