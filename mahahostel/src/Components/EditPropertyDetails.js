import React from 'react';

const EditPropertyDetails = () => {
  return (
    <div className="p-4 font-[Montserrat] max-w-4xl mx-auto bg-white rounded-lg mt-8 mb-8">
      {/* Top Bar */}
      <div className="bg-white p-4 flex justify-end items-center">
 
      </div>

      {/* Header */}
      <div className="bg-[#69205D] text-white p-4 flex items-center justify-left rounded-xl">
        <h2 className="text-lg font-semibold">Edit property details</h2>
      </div>

      {/* Form */}
      <div className="p-4 flex-grow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Basic details</h3>
          <input
            type="text"
            placeholder="property name"
            className="w-full p-2 border rounded-xl mb-3"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <input
            type="text"
            placeholder="Pincode"
            className="w-full p-2 border rounded-xl mb-4"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 border rounded-xl mb-4"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-2 border rounded-xl mb-4"
          />
          <input
            type="text"
            placeholder="House/Flat/Block"
            className="w-full p-2 border rounded-xl mb-4"
          />
          <input
            type="text"
            placeholder="Locality"
            className="w-full p-2 border rounded-xl mb-4"
          />
        </div>

        <button className="w-full bg-[#69205D] text-white p-2 rounded-xl mb-4">
          Update Properties
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white p-4 flex justify-around items-center">
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-xs">Dashboard</span>
        </button>
        <button className="flex flex-col items-center text-[#69205D]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M5 10l7 7m-7-7l7 7" />
          </svg>
          <span className="text-xs">Properties</span>
        </button>
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l6-6m0 0l6 6M9 11l6 6m0 0l6-6" />
          </svg>
          <span className="text-xs">Transaction</span>
        </button>
        <button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M10 4l4 16m-4-4l-4-4 4-4" />
          </svg>
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default EditPropertyDetails;