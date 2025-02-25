import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaCaretDown } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png";

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

  const handleSelection = (category, value) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const handleChargeSelection = (charge) => {
    setSelectedCharge(charge.label);
    setIsModalOpen(false);
  };

  const chargeTypes = [
    { value: "Maintenance", label: "Maintenance" },
    { value: "Registration Charge", label: "Registration Charge" },
    { value: "KYC Charge", label: "KYC Charge" },
    { value: "Agreement Charge", label: "Agreement Charge" },
    { value: "Onboarding Charge", label: "Onboarding Charge" },
    { value: "One-Time Charge", label: "One-Time Charge" }
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll"); // Cleanup on unmount
  }, [isModalOpen]);

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
        <div className="flex items-center space-x-2 py-4">
          <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
          <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
            <span className="text-2xl font-semibold">{buttonName}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-4">
        <div className="border-2 border-[#69205D] rounded-md p-5 flex items-center gap-8 shadow-md bg-white max-w-md">
          <div className="flex flex-col items-center w-20">
            <h2 className="font-bold text-md text-center whitespace-nowrap">Maha Hostel</h2>
            <img src={buildingIcon} alt="Hostel Icon" className="w-14 h-14" />
          </div>
          <div className="bg-gray-200 p-2 rounded-md text-sm text-gray-600 w-60">
            No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State,
            <br />6xxxx6
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-4 mr-7">
        <div className="rounded-lg max-w-3xl w-full p-4">
          {step === 1 && <p className="text-sm text-blue-600 font-medium mb-2">STEP {step2} of 6</p>}
          <h2 className="text-2xl font-semibold mb-4">Other Charges</h2>

          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Do you take any extra charge?</p>
            <div className="flex gap-3">
              {extraCharge.map((item) => (
                <button
                  key={item}
                  className={`px-8 py-2 rounded-lg text-gray-800 ${selectedOptions.latePayment === item ? "bg-[#69205D] text-white" : "bg-gray-200"}`}
                  onClick={() => handleSelection("latePayment", item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {selectedOptions.latePayment === "Yes" && (
            <>
              <div className="mb-4 relative"> {/* Ensuring relative parent for absolute dropdown */}
                <p className="text-gray-700 font-medium mb-2">Add a charge</p>

                {/* Dropdown Button */}
                <button
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-left flex justify-between items-center"
                  onClick={() => setIsModalOpen((prev) => !prev)}
                >
                  {selectedCharge} <FaCaretDown className="text-gray-600" />
                </button>

                {/* Modal Dropdown */}
                {isModalOpen && (
                  <div
                  className="absolute left-0 top-full z-50 w-full bg-white rounded-lg shadow-lg border mt-2 max-h-60 overflow-y-auto scrollbar-hide"
                >
                
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

              <input
                type="text"
                placeholder="Amount"
                className="w-full px-3 py-2 border border-gray-500 rounded-lg outline-gray-500"
              />

              <div className="my-4">
                <p className="text-gray-700 font-medium mb-2">Extra Charge repetition</p>
                <div className="flex gap-3">
                  {extraChargeRepetition.map((item) => (
                    <button
                      key={item}
                      className={`px-8 py-2 rounded-lg text-gray-800 cursor-pointer ${selectedOptions.paymentOptions === item ? "bg-[#69205D] text-white" : "bg-gray-200"}`}
                      onClick={() => handleSelection("paymentOptions", item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-medium mb-2">Grace Period</p>
                <div className="flex gap-3">
                  {gracePeriod.map((item) => (
                    <button
                      key={item}
                      className={`px-8 py-2 rounded-lg text-gray-800 cursor-pointer ${selectedOptions.gracePeriod === item ? "bg-[#69205D] text-white" : "bg-gray-200"}`}
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

      {step === 1 && (
        <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base" onClick={nextStep}>
          <span className="text-2xl font-semibold">{nextButton}</span>
        </button>
      )}
    </div>
  );
};

export default Screen_10;
