import React from "react";
import Header from "./Header";

const AddProperty = () => {
  return (
    <div className="bg-[#69205D] p-4 max-w-4xl mx-auto p-6 bg-white rounded-lg mt-1">
      {/* Header Section */}
      <div className="text-center">
        <Header title="ADD Property" />
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-md relative">
        {/* Close Button */}
  
        {/* Step Info */}
        <p className="text-blue-600 text-sm mt-2 text-left">STEP 1 of 6</p>

        {/* Basic Details Section */}
        <h3 className="text-lg font-semibold mt-4 text-left">Basic Details</h3>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Property Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            placeholder="Total Beds"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            placeholder="Vacant Beds"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Address Section */}
          <h3 className="text-lg font-semibold mt-6 text-left">Address</h3>
          <input
            type="text"
            placeholder="Pincode"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400">
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="House/Flat/Block No."
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Locality"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Submit Button */}
          <button className="w-full bg-[#69205D] text-white p-3 rounded-md font-semibold hover:bg-purple-800 transition">
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
