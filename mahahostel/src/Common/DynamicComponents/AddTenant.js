import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";  // ✅ Import useLocation
import Header from "./Header";
import Button from "./Button";
import buildingIcon from "./Assests/hostel-building.png";
import { IoIosArrowDown } from "react-icons/io";

const AddTenant = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state || { id: "Unknown", name: "Unknown Property", address: "Unknown Address" };

  const [rentalType, setRentalType] = useState("");
  const [rentCycle, setRentCycle] = useState("");
  const [agreementDuration, setAgreementDuration] = useState("");
  const [lockInPeriod, setLockInPeriod] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [agreementStartDate, setAgreementStartDate] = useState("");
  const [isAgreementDurationOpen, setIsAgreementDurationOpen] = useState(false);
  const [isLockInPeriodOpen, setIsLockInPeriodOpen] = useState(false);
  const [isNoticePeriodOpen, setIsNoticePeriodOpen] = useState(false);

  const periodOptions = [];
  for (let i = 1; i <= 12; i += 0.5) {
    periodOptions.push(`${i} months`);
  }

  const toggleAgreementDurationDropdown = () => setIsAgreementDurationOpen(!isAgreementDurationOpen);
  const toggleLockInPeriodDropdown = () => setIsLockInPeriodOpen(!isLockInPeriodOpen);
  const toggleNoticePeriodDropdown = () => setIsNoticePeriodOpen(!isNoticePeriodOpen);


  return (
    <div className="min-h-screen flex flex-col bg-white rounded-lg mt-1">
      <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4">
        <Header title="Add Tenant" />

        {/* Hostel Info */}
        <div className="w-full px-4 mt-4">
          <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-xl font-semibold block">{property.name}</span>
              <span className="text-md text-gray-700">{property.address}</span>
            </div>
            <img src={buildingIcon} alt="Hostel" className="w-12 h-12" />
          </div>
        </div>
        <div className="p-6">
        <p className="text-m text-blue-500 mt-3">STEP 4 OF 5</p>
          <h3 className="text-xl font-semibold mt-2 mb-2">Terms of agreement</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Rental type</span>
          </div>
          <div className="flex gap-2 my-2 mb-4">
            {["Monthly", "One-time", "Daily(short stay)"].map((type) => (
              <button
                key={type}
                onClick={() => setRentalType(type)}
                className={`px-3 py-2 rounded-md text-sm ${rentalType === type ? "bg-[#69205D] text-white" : "bg-[#D8E0E6] text-black"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Inputs for Rent Details */}
          <input type="text" placeholder="Monthly Rent" className="w-full border rounded-md p-2 mb-2" />
          <input type="text" placeholder="Security Deposit" className="w-full border rounded-md p-2 mb-2" />
          <input type="text" placeholder="Maintenance" className="w-full border rounded-md p-2 mb-2" />

          {/* Agreement Start Date */}
          <div className="relative">
            <input
              type="date"
              className="w-full border rounded-md p-2 pr-10"
              value={agreementStartDate}
              onChange={(e) => setAgreementStartDate(e.target.value)}
            />
          </div>

          <h3 className="font-semibold text-lg mt-4">Add Tenant Move-in Date</h3>

          {/* Rent Cycle Selection */}
          <p className="text-sm font-medium mb-3">Rent Cycle</p>
          <div className="flex gap-2 my-2 mb-4">
            {["01-01", "15-15", "Date to Date"].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setRentCycle(cycle)}
                className={`px-3 py-2 rounded-md text-sm ${rentCycle === cycle ? "bg-[#69205D] text-white" : "bg-[#D8E0E6] text-black"
                  }`}
              >
                {cycle}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
      {/* Agreement Duration Dropdown */}
      <div className="relative">
        <button
          onClick={toggleAgreementDurationDropdown}
          className="w-full border rounded-md p-2 text-left flex justify-between items-center"
        >
          <span>{agreementDuration || "Select Agreement Duration"}</span>
          <IoIosArrowDown className="text-gray-500" />
        </button>
        {isAgreementDurationOpen && (
          <ul
            className="absolute w-full border rounded-md mt-1 bg-white max-h-40 overflow-y-auto"
            style={{ zIndex: 1000 }}
          >
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setAgreementDuration(""); // Reset when the placeholder is selected
                toggleAgreementDurationDropdown(); // Close dropdown
              }}
            >
              Select Agreement Duration
            </li>
            {periodOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setAgreementDuration(option);
                  toggleAgreementDurationDropdown(); // Close dropdown after selection
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Lock-in Period Dropdown */}
      <div className="relative">
        <button
          onClick={toggleLockInPeriodDropdown}
          className="w-full border rounded-md p-2 text-left flex justify-between items-center"
        >
          <span>{lockInPeriod || "Select Lock-in Period"}</span>
          <IoIosArrowDown className="text-gray-500" />
        </button>
        {isLockInPeriodOpen && (
          <ul
            className="absolute w-full border rounded-md mt-1 bg-white max-h-40 overflow-y-auto"
            style={{ zIndex: 1000 }}
          >
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setLockInPeriod(""); // Reset when the placeholder is selected
                toggleLockInPeriodDropdown(); // Close dropdown
              }}
            >
              Select Lock-in Period
            </li>
            {periodOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setLockInPeriod(option);
                  toggleLockInPeriodDropdown(); // Close dropdown after selection
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Notice Period Dropdown */}
      <div className="relative">
        <button
          onClick={toggleNoticePeriodDropdown}
          className="w-full border rounded-md p-2 text-left flex justify-between items-center"
        >
          <span>{noticePeriod || "Select Notice Period"}</span>
          <IoIosArrowDown className="text-gray-500" />
        </button>
        {isNoticePeriodOpen && (
          <ul
            className="absolute w-full border rounded-md mt-1 bg-white max-h-40 overflow-y-auto"
            style={{ zIndex: 1000 }}
          >
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setNoticePeriod(""); // Reset when the placeholder is selected
                toggleNoticePeriodDropdown(); // Close dropdown
              }}
            >
              Select Notice Period
            </li>
            {periodOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setNoticePeriod(option);
                  toggleNoticePeriodDropdown(); // Close dropdown after selection
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
        </div>
      </div>

      <div className="ml-5 mr-5 p-4">
        {/* ✅ Fix: Pass property data when navigating */}
        <button
          className="w-full p-3 bg-[#69205D] text-white font-semibold rounded-lg"
          onClick={() => navigate("/amount", { state: property })}
        >
          Continue
        </button>
        </div>
      </div>
    </div>
  );
};

export default AddTenant;
