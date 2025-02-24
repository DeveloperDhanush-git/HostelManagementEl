import React from 'react';
import { X } from 'lucide-react';
import { FaTimes } from 'react-icons/fa';

const EditPropertyDetails = ({ buttonName = "Edit Property", nextButton = "Update Properties" }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1" style={{ fontFamily: 'Montserrat' }}>
      {/* Header */}
      <div className="flex items-center space-x-2 py-4">
        <FaTimes className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
        <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
          <span className="text-2xl font-semibold">{buttonName}</span>
        </div>
      </div>

      {/* Form */}
      <div className="p-4 flex-grow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Basic Details</h3>
          <input
            type="text"
            placeholder="Property Name"
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
            className="w-full p-2 border rounded-xl mb-12" // Increased spacing here
          />
        </div>

        {/* Next Button */}
        <div>
          <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base">
            {nextButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPropertyDetails;
