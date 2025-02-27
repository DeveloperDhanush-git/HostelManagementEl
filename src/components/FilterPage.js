import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import Header from "./Header";

const FilterPage = () => {
  const navigate = useNavigate();
  const [dueTypeChecked, setDueTypeChecked] = useState([false, false, false]);
  const [paymentProof, setPaymentProof] = useState(false);
  const [dueStatus, setDueStatus] = useState([false, false, false]);

  // Function to toggle "Select All"
  const handleSelectAll = () => {
    const allSelected = dueTypeChecked.every(Boolean);
    setDueTypeChecked(dueTypeChecked.map(() => !allSelected));
  };

  // Function to clear all checkboxes
  const handleClearAll = () => {
    setDueTypeChecked([false, false, false]);
    setPaymentProof(false);
    setDueStatus([false, false, false]);
  };

  return (
    <div className="flex flex-col min-h-screen">
  <div className="flex-grow p-4">
      <Header title="Filter" />

     <div className="pr-6 pl-6 ml-4">
      <div className="mt-4">
        <button className="bg-[#69205D] text-white py-2 px-6 font-semibold rounded-md inline-block text-sm mb-2">Search by</button>
        <div className="flex gap-2 mt-2">
          <button className="flex-1 bg-gray-200 text-black py-2 rounded-md">Tenant name</button>
          <button className="flex-1 bg-gray-200 text-black py-2 rounded-md">Property name</button>
        </div>
      </div>

   
      <div className="flex items-center border border-gray-300 rounded-md p-2 mt-4">
        <FaSearch className="text-gray-500" />
        <input type="text" placeholder="Search" className="ml-2 w-full outline-none" />
      </div>

      {/* Tenant Status */}
      <div className="mt-6">
        <p className="bg-[#69205D] text-white py-2 px-3 rounded-md inline-block text-sm mb-2">Tenant status</p>
        <div className="flex gap-2 mt-2">
          <button className="flex-1 bg-gray-200 py-2 rounded-md">Active</button>
          <button className="flex-1 bg-gray-200 py-2 rounded-md">Inactive</button>
        </div>
      </div>

      {/* Due Type */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <p className="bg-[#69205D] text-white py-2 px-3 rounded-md inline-block text-sm mb-2">Due type</p>
          <button onClick={handleSelectAll} className="text-[#69205D] text-sm font-semibold">
            Select all
          </button>
        </div>
        <div className="flex items-center justify-center ">
          <button className="flex items-center text-[#69205D] text-sm font-semibold mt-2 gap-3">View all<FaChevronDown /></button>
        </div>
        <div className="mt-2 space-y-2">
          {dueTypeChecked.map((checked, index) => (
            <div key={index} className="flex items-center">
              <p className="flex-1">Rent</p>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  const newChecked = [...dueTypeChecked];
                  newChecked[index] = !newChecked[index];
                  setDueTypeChecked(newChecked);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Select Duration */}
      <div className="mt-6">
        <p className="bg-[#69205D] text-white py-2 px-3 rounded-md inline-block text-sm mb-2">Select duration</p>
        <div className="flex gap-2 mt-2">
          <button className="flex-1 bg-gray-200 py-2 rounded-md">Till date</button>
          <button className="flex-1 bg-gray-200 py-2 rounded-md">Month</button>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="mt-6">
        <div className="flex items-center">
          <p className="flex-1">Payment proof added</p>
          <input type="checkbox" checked={paymentProof} onChange={() => setPaymentProof(!paymentProof)} />
        </div>

        <p className="text-m font-semibold mt-4">Due status</p>
        <div className="mt-2 space-y-2">
          {["Due", "Overdue", "Partially Paid"].map((label, index) => (
            <div key={index} className="flex items-center">
              <p className="flex-1">{label}</p>
              <input
                type="checkbox"
                checked={dueStatus[index]}
                onChange={() => {
                  const newChecked = [...dueStatus];
                  newChecked[index] = !newChecked[index];
                  setDueStatus(newChecked);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-5 flex justify-between gap-2">
        <button onClick={handleClearAll} className="w-1/2 bg-gray-300 text-black py-3 rounded-md">
          Clear all
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-1/2 bg-[#69205D] text-white py-3 rounded-md"
        >
          Show results
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default FilterPage;
