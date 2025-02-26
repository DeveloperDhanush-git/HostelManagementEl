import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import BuildingImg from "./Assests/hostel-building.png";

const AddTenant = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState(""); // State for amount input

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
        <div className="mt-4 bg-gray-100 p-3 rounded-md">
          <div className="flex justify-between">
            <span className="font-semibold mt-1">Maha Hostel</span>
            <img src={BuildingImg} alt="Hostel Icon" className="w-10 h-10" />
          </div>
        </div>
        <p className="text-blue-500 text-sm mt-3">STEP 3 of 3</p>
        <h2 className="font-bold text-lg mt-2">Account Summary</h2>
        <p className="text-gray-600 mt-2 mb-2">Collection</p>
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
      <div className="ml-6">

        <Button button="Add Tenant" defaultColor="#69205D" route="/success" />
      </div>
    </div>
  );
};

export default AddTenant;
