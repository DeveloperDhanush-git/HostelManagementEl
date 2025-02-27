import React, { useState, useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FormDataContext } from "./PropertyContext";
import PropertyCard from "./Propertycard";
import Header from "./Header";
import Button from "./Button";

const Screen_9 = () => {
  const [step, setStep] = useState(1);
  const { formData } = useContext(FormDataContext); // ✅ Correct placement inside function component

  const nextStep = () => {
    if (step < 6) setStep((prevStep) => prevStep + 1);
  };

  const buttons = ["01 - 01", "15 - 15"];
  const gracePeriodButtons = ["5 days", "7 days", "10 days"];
  const fineButtons = ["Yes", "No"];

  const [selectedOptions, setSelectedOptions] = useState({
    rentalCycle: "",
    gracePeriod: "",
    latePayment: "",
  });

  const handleSelection = (category, value) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const propertyData = formData ?? {
    name: "Default Property Name",
    address: "Default Address",
    image: "assets/building icon.png",
  };

  return (
    <div className="  bg-white min-h-screen rounded-lg  flex flex-col">

      <div className="flex-grow p-4 ml-6">
        <Header title="Add property" />

        {/* Hostel Info */}
        <PropertyCard
          name={propertyData.name}
          address={propertyData.address}
          image={propertyData.image}
        />

        <div className="flex w-full mt-4">
          <div className="rounded-lg w-full p-4">
            {step === 1 && (
              <p className="text-sm text-[#0012B9] mb-2">STEP 5 of 6</p>
            )}

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4">Rent</h2>

            {/* Monthly Rental Cycle (Full-Width Row) */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-2">
                Monthly rental cycle
              </p>
              <div className="flex w-full gap-3">
                {buttons.map((item) => (
                  <button
                    key={item}
                    className={`flex-1 px-8 py-3 rounded-lg text-gray-800 text-center ${
                      selectedOptions.rentalCycle === item
                        ? "bg-[#69205D] text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleSelection("rentalCycle", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Grace Period (Full-Width Row) */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-2">Grace period</p>
              <div className="flex w-full gap-3">
                {gracePeriodButtons.map((item) => (
                  <button
                    key={item}
                    className={`flex-1 px-8 py-3 rounded-lg text-gray-800 text-center ${
                      selectedOptions.gracePeriod === item
                        ? "bg-[#69205D] text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleSelection("gracePeriod", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Fine for Late Payment (Full-Width Row) */}
            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-2">
                Fine for late payment
              </p>
              <div className="flex w-full gap-3">
                {fineButtons.map((item) => (
                  <button
                    key={item}
                    className={`flex-1 px-8 py-3 rounded-lg text-gray-800 text-center ${
                      selectedOptions.latePayment === item
                        ? "bg-[#69205D] text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleSelection("latePayment", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <input
              type="text"
              placeholder="Amount"
              className="w-full px-3 py-3 border border-gray-500 rounded-lg outline-gray-500"
            />
          </div>
        </div>
      </div>
      <div className="p-4 ml-8">
        <Button button="Next" route="/Page9" />
      </div>
    </div>
  );
};

export default Screen_9;
