import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png"; // or .svg, .jpg


const Screen_9 = ({ buttonName,nextButton,step1 }) => {
    const [step, setStep] = useState(1);
    const nextStep = () => {
      if (step < 6) setStep((prevStep) => prevStep + 1);
    };
    
    const buttons = ["01 - 01", "15 - 15"];
    const gracePeriodButtons = ["5 days", "7 days", "10 days"];
    const fineButtons = ["Yes", "No"];

    const [selectedOptions, setSelectedOptions] = useState({
      rentalCycle: "",
      gracePeriod: "",
      latePayment: ""
    });
  
    const handleSelection = (category, value) => {
      setSelectedOptions((prev) => ({ ...prev, [category]: value }));
    };
  
    return (
      <div className="flex flex-col items-center">
        {/* Add Property Button */}
        <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
          <div className="flex items-center space-x-2 py-4">
            <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
            <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
              <span className="text-2xl font-semibold">{buttonName}</span>
            </div>
          </div>
        </div>
  
        {/* Hostel Info */}
        <div className="flex justify-center items-center w-full mt-4">
          <div className="border-2 border-[#69205D] rounded-md p-5 flex items-center gap-8 shadow-md bg-white max-w-md">
            {/* Left Section - Hostel Name & Logo */}
            <div className="flex flex-col items-center w-20">
              <h2 className="font-bold text-md text-center whitespace-nowrap">
                Maha Hostel
              </h2>
              <img src={buildingIcon} alt="Hostel Icon" className="w-14 h-14" />
            </div>
            {/* Right Section - Address */}
            <div className=" bg-gray-200 p-2 rounded-md text-sm text-gray-600 w-60">
              No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State,
              <br />6xxxx6
            </div>
          </div>
        </div>
  
        <div className="flex items-center justify-center w-full mt-4 mr-5">
      <div className="rounded-lg max-w-3xl w-full p-4">

          
          {step === 1 && (
            <p className="text-sm text-blue-600 font-medium mb-2">
              STEP {step1} of 6
            </p>
          )}

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">Rent</h2>

          {/* Monthly Rental Cycle */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Monthly rental cycle</p>
            <div className="flex gap-3">
            {buttons.map((item) => (
                <button
                  key={item}
                  className={`px-8 py-2 rounded-lg text-gray-800 ${selectedOptions.rentalCycle === item ? "bg-[#69205D] text-white" : "bg-gray-200"}`}
                  onClick={() => handleSelection("rentalCycle", item)}
                >
                  {item}
                </button>
              ))}
           
              
            </div>
          </div>

          {/* Grace Period */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Grace period</p>
            <div className="flex gap-3">
              
            {gracePeriodButtons.map((item) => (
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

          {/* Fine for Late Payment */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Fine for late payment</p>
            <div className="flex gap-3">
             {fineButtons.map((item) => (
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

          {/* Amount Input */}
          <input
           type="text"
           placeholder="Amount"
           className="w-full px-3 py-2 border border-gray-500 rounded-lg outline-gray-500"
          />         

        </div>
        </div>
      
      


        {step === 1 && (
            <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base" onClick={nextStep}>
         
          <span className="text-2xl font-semibold ">{nextButton}</span>
          </button>
        )}
      </div>
    );
}

export default Screen_9