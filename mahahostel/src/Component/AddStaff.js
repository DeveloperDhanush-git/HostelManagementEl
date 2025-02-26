import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const AddStaff = () => {
  const navigate = useNavigate();
  const [staffName, setStaffName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleNext = () => {
    if (staffName.trim() === "" || mobileNumber.trim() === "" || !selectedGender) {
      alert("Please fill all the fields");
      return;
    }

    // Store staff details in localStorage
    const staffDetails = {
      name: staffName,
      mobile: mobileNumber,
      gender: selectedGender,
    };
    localStorage.setItem("staffDetails", JSON.stringify(staffDetails));

    // Navigate to role selection
    navigate("/select-role");
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".gender-buttons")) {
      setSelectedGender(""); // Reset gender selection when clicking outside
    }
  };

  return (
    <div className="flex flex-col h-screen" onClick={handleOutsideClick}>
      {/* Header */}
      <Header title="Add Staff" />

      {/* Content Section (Aligned with ml-4) */}
      <div className="flex-1 p-4 ml-4">
        <p className="text-blue-500 text-sm mb-2">STEP 1 of 3</p>
        <h2 className="text-xl mb-2">Staff details</h2>

        {/* Full Name Input */}
        <input
          type="text"
          placeholder="Full name"
          className="w-full border p-2 my-2 rounded-md"
          value={staffName}
          onChange={(e) => setStaffName(e.target.value)}
          onClick={(e) => e.stopPropagation()} // Prevents unwanted reset
        />

        {/* Mobile Number Input */}
        <div className="flex items-center space-x-2">
          <span className="border p-2 rounded-md">+91</span>
          <input
            type="tel" // Allows only phone numbers
            placeholder="Mobile number"
            className="flex-grow border p-2 rounded-md"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))} // Remove non-numeric values
            maxLength={10} // Limit input to 10 digits
            onClick={(e) => e.stopPropagation()} // Prevents unwanted reset
          />
        </div>


        {/* Gender Selection */}
        <h3 className="mt-4">Gender</h3>
        <div className="gender-buttons flex space-x-2 my-2">
          {["Male", "Female", "Others"].map((gender) => (
            <button
              key={gender}
              className={`border p-2 rounded-md ${selectedGender === gender ? "bg-[#69205D] text-white" : ""
                }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevents unwanted reset
                setSelectedGender(gender);
              }}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="p-4 ml-4 mt-auto">
        <button className="w-full border p-3 rounded-md text-[#69205D]">Add from contacts</button>
        <button className="w-full bg-[#69205D] text-white p-3 rounded-md mt-2" onClick={handleNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddStaff;
