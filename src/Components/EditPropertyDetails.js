import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const AddressDetails = ({ address, handleChange }) => {
  return (
    <div className="mb-4 ml-7">
      <h3 className="text-lg font-semibold mb-2">Address</h3>
      {["pincode", "city", "state", "house", "locality"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          value={address[field] || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl mb-4"
          placeholder={`Enter ${field}`}
        />
      ))}
    </div>
  );
};

const BasicDetails = ({ address, handleChange }) => {
  return (
    <div className="mb-4 ml-7">
      <h3 className="text-lg font-semibold mb-2">Basic Details</h3>
      <input
        type="text"
        name="propertyName"
        value={address.propertyName || ""}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
        placeholder="Enter property name"
      />
    </div>
  );
};

const EditPropertyDetails = ({ buttonName = "Edit Property", nextButton = "Update Properties" }) => {
  const navigate = useNavigate();

  // Retrieve stored data from localStorage (if available)
  const initialData = JSON.parse(localStorage.getItem("propertyData")) || {
    propertyName: "",
    pincode: "",
    city: "",
    state: "",
    house: "",
    locality: "",
  };

  // State for form data
  const [address, setAddress] = useState(initialData);

  // Save data to local storage whenever the address state changes
  useEffect(() => {
    localStorage.setItem("propertyData", JSON.stringify(address));
  }, [address]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Update Button Click (Patch values dynamically)
  const handleUpdateClick = () => {
    navigate("/", { state: { address } });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 font-[Montserrat]">
      {/* Header */}
      <div className="flex items-center space-x-2 py-4">
        <FaTimes
          className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200"
          onClick={() => navigate("/")}
        />
        <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
          <span className="text-2xl font-semibold">{buttonName}</span>
        </div>
      </div>

     

      {/* Form Section */}
      <div className="p-4 flex-grow">
        <BasicDetails address={address} handleChange={handleChange} />
        <AddressDetails address={address} handleChange={handleChange} />

        {/* Update Button */}
        <div className="flex flex-col space-y-4 mt-4">
          <button
            onClick={handleUpdateClick}
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
