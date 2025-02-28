import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom"; 
import buildingIcon from "./Assests/hostel-building.png";

const Amount = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState(""); // State for amount input
  const location = useLocation();
  const property = location.state || { id: "Unknown", name: "Unknown Property", address: "Unknown Address" };

  // Function to handle radio button selection
  const handleOptionChange = (option) => {
    if (selectedOption === option) {
      // Clicking the same option again will deselect it
      setSelectedOption("");
      setAmount(""); // Reset the amount input
    } else {
      // Selecting a new option
      setSelectedOption(option);
      setAmount(""); // Reset amount when changing selection
    }
  };

  return (
    <div className=" min-h-screen flex flex-col bg-white rounded-lg mt-1">
      <div className="flex-grow p-4">
      <Header title="Add Tenant" />
      <div className="ml-6">
          {/* ✅ Fix: Using property data */}
          <div className="w-full px-4 mt-4">
            <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-xl font-semibold block">{property.name}</span>
                <span className="text-md text-gray-700">{property.address}</span>
              </div>
              <img src={buildingIcon} alt="Hostel" className="w-12 h-12" />
            </div>
          </div>
          <p className="text-m text-blue-500 mt-3">STEP 5 OF 5</p>
          <h3 className="text-xl font-semibold mt-2 mb-2">Account Summary</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Collection</span>
          </div>
          <div className="bg-gray-100 p-3 rounded-md mt-2">
            <div className="flex justify-between">
              <span>💰 Security deposit</span>
              <span>₹2500</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>📅 11 Dec - 31 Dec, 24</span>
              <span>₹4200</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>⏳ Total Dues</span>
              <span>₹6700</span>
            </div>
          </div>

          {/* Due Options */}
          <p className="font-semibold mt-4">Any due or advance?</p>
          <div className="space-y-2 mt-3">
            {["No dues", "Pending dues", "Excess payment", "Token amount"].map(
              (option, index) => (
                <div key={index}>
                  <label className="flex items-center border rounded-md p-2 cursor-pointer">
                    <input
                      type="radio"
                      name="due"
                      className="mr-2"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                    />
                    {option}
                  </label>

                  {/* Toggle input box visibility when clicking the same option */}
                  {selectedOption === option && selectedOption !== "No dues" && (
                    <div className="mt-2">
                      <label className="font-semibold">Amount</label>
                      <input
                        type="number"
                        className="w-full border p-2 rounded-md mt-1"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Online Payments */}
          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Allow online payments</span>
            </label>
          </div>
          <div className="bg-gray-100 p-3 rounded-md mt-3">
            <p className="font-semibold">Online payment</p>
            <div className="flex justify-between mt-2">
              <span>Total due</span>
              <span>₹6700</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Paid Amount</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between mt-2 font-bold">
              <span>Pending</span>
              <span>₹0</span>
            </div>
          </div>

        </div>
      </div>
      <div className="ml-6 p-4 ">

      <button
          className="w-full p-3 bg-[#69205D] text-white font-semibold rounded-lg"
          onClick={() => navigate("/success", { state: property })}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Amount;
