import React, { useState } from "react";

import Header from "./Header";
import Button from "./Button";
import BuildingImg from "./Assests/hostel-building.png"

const AddTenant = () => {
  const [rentalType, setRentalType] = useState("");
  const [rentCycle, setRentCycle] = useState("");
  const [agreementDuration, setAgreementDuration] = useState("");
  const [lockInPeriod, setLockInPeriod] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [agreementStartDate, setAgreementStartDate] = useState("");
  const periodOptions = [];
  
  for (let i = 1; i <= 12; i += 0.5) {
    periodOptions.push(`${i} months`);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white rounded-lg mt-1 ">
      <div className="flex-grow p-4">
      <Header title="Add Tenant" route="/test"/>

      <div className="ml-6">
      
      <div className="bg-[#D8E0E6] p-3 rounded-md mb-4 flex justify-between">
        <span>Maha Hostel 01</span>
        <img src={BuildingImg} alt="Hostel Icon" className="w-6 h-6" />
      </div>
      
      <p className="text-blue-600 text-sm mb-2">STEP 2 of 3</p>
      <h2 className="font-semibold text-lg mb-2">Terms of agreement</h2>
      
      <p className="text-sm font-medium mb-3">Rental type</p>
      <div className="flex gap-2 my-2 mb-4">
        {["Monthly", "One-time", "Daily(short stay)"].map((type) => (
          <button
            key={type}
            onClick={() => setRentalType(type)}
            className={`px-3 py-2 rounded-md text-sm ${rentalType === type ? "bg-[#69205D] text-white" : "bg-[#D8E0E6] text-black"}`}
          >
            {type}
          </button>
        ))}
      </div>
      
      <input type="text" placeholder="Monthly Rent" className="w-full border rounded-md p-2 mb-2" />
      <input type="text" placeholder="Security deposit" className="w-full border rounded-md p-2 mb-2" />
      <input type="text" placeholder="Maintenance" className="w-full border rounded-md p-2 mb-2" />
      <div className="relative">
        <input 
          type="date" 
          className="w-full border rounded-md p-2 pr-10" 
          value={agreementStartDate} 
          onChange={(e) => setAgreementStartDate(e.target.value)}
        />
        <label className="absolute right-3 top-2 cursor-pointer">
          <input 
            type="date" 
            className="absolute opacity-0 w-full h-full cursor-pointer" 
            onChange={(e) => setAgreementStartDate(e.target.value)}
          />
        </label>
      </div>
      
      <h3 className="font-semibold text-lg mt-4">Add tenant move-in date</h3>
      <p className="text-sm font-medium mb-3">Rent cycle</p>

      <div className="flex gap-2 my-2 mb-4">
  {["01-01", "15-15", "Date to Date"].map((cycle) => (
    <button
      key={cycle}
      onClick={() => setRentCycle(cycle)}
      className={`px-3 py-2 rounded-md text-sm ${
        rentCycle === cycle ? "bg-[#69205D] text-white" : "bg-[#D8E0E6] text-black"
      }`}
    >
      {cycle}
    </button>
  ))}
</div>
 
      
      <select
        className="w-full border rounded-md p-2 mb-2"
        value={agreementDuration}
        onChange={(e) => setAgreementDuration(e.target.value)}
      >
        <option value="" disabled>Select Agreement Duration</option>
        {periodOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      
      <select
        className="w-full border rounded-md p-2 mb-2"
        value={lockInPeriod}
        onChange={(e) => setLockInPeriod(e.target.value)}
      >
        <option value="" disabled>Select Lock-in Period</option>
        {periodOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      
      <select
        className="w-full border rounded-md p-2 mb-4"
        value={noticePeriod}
        onChange={(e) => setNoticePeriod(e.target.value)}
      >
        <option value="" disabled>Select Notice Period</option>
        {periodOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      
    </div>
    </div>
    <div className="ml-6">

      <Button button="Continue" defaultColor="#69205D" route="/addtenant2" />
    </div>
    </div>  
  );
};

export default AddTenant;
