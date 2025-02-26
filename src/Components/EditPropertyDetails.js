import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaTimes } from 'react-icons/fa';

// AddressDetails Component
const AddressDetails = ({ address, handleChange }) => {
  return (
    <div className="mb-4 ml-7">
      <h3 className="text-lg font-semibold mb-2">Address</h3>
      <input
        type="text"
        name="pincode"
        value={address.pincode}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
        placeholder="Enter pincode"
      />
      <input
        type="text"
        name="city"
        value={address.city}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
        placeholder="Enter city"
      />
      <input
        type="text"
        name="state"
        value={address.state}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
        placeholder="Enter state"
      />
      <input
        type="text"
        name="house"
        value={address.house}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
        placeholder="Enter house details"
      />
      <input
        type="text"
        name="locality"
        value={address.locality}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-12"
        placeholder="Enter locality"
      />
    </div>
  );
};

// BasicDetails Component
const BasicDetails = ({ address, handleChange }) => {
  return (
    <div className="mb-4 ml-7">
      <h3 className="text-lg font-semibold mb-2">Basic Details</h3>
      <input
        type="text"
        name="propertyName"
        value={address.propertyName}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
        placeholder="Enter property name"
      />
    </div>
  );
};

// EditPropertyDetails Component
const EditPropertyDetails = ({ buttonName = "Edit Property", nextButton = "Update Properties" }) => {
  const navigate = useNavigate(); // Initialize navigate function

  // State for address details
  const [address, setAddress] = useState({
    propertyName: "riya", // You can set default values if you want
    pincode: "CRIB005679",
    city: "Coimbatore",
    state: "Tamil Nadu",
    house: "No.03",
    locality: "Ganapathy",
  });

  // Handle change in input fields
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // Function to handle the button click and navigate to the HostelDetails page
  const handleUpdateClick = () => {
    navigate('/', { state: { address } }); // Passing address data to HostelDetails
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 font-[Montserrat]" style={{ fontFamily: 'Montserrat' }}>
      {/* Header Component */}
      <div className="flex items-center space-x-2 py-4">
        <FaTimes
          className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200"
          onClick={() => navigate('/')} // Navigate on click
        />
        <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
          <span className="text-2xl font-semibold">{buttonName}</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-4 flex-grow">
        {/* Basic Details */}
        <BasicDetails address={address} handleChange={handleChange} />

        {/* Address Details */}
        <AddressDetails address={address} handleChange={handleChange} />

        {/* Only Update Button */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleUpdateClick} // Add the click handler here
            className="bg-[#69205D] text-white py-2 rounded-md w-full text-sm md:text-base"
          >
            {nextButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPropertyDetails;
