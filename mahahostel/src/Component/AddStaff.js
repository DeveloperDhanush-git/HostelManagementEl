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

  return (
    <div>
      <Header title="Add Staff" />
      <p className="text-blue-500 text-sm">STEP 1 of 3</p>
      <h2 className="text-xl font-bold">Staff details</h2>

      {/* Full Name Input */}
      <input
        type="text"
        placeholder="Full name"
        className="w-full border p-2 my-2 rounded-md"
        value={staffName}
        onChange={(e) => setStaffName(e.target.value)}
      />

      {/* Mobile Number Input */}
      <div className="flex items-center space-x-2">
        <span className="border p-2 rounded-md">+91</span>
        <input
          type="text"
          placeholder="Mobile number"
          className="flex-grow border p-2 rounded-md"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>

      {/* Gender Selection */}
      <h3 className="mt-4">Gender</h3>
      <div className="flex space-x-2 my-2">
        {["Male", "Female", "Others"].map((gender) => (
          <button
            key={gender}
            className={`border p-2 rounded-md ${selectedGender === gender ? "bg-[#69205D] text-white" : ""}`}
            onClick={() => setSelectedGender(gender)}
          >
            {gender}
          </button>
        ))}
      </div>

      {/* Add from Contacts Button */}
      <button className="w-full border p-3 my-2 rounded-md text-[#69205D]">Add from contacts</button>

      {/* Continue Button */}
      <button className="w-full bg-[#69205D] text-white p-3 rounded-md" onClick={handleNext}>
        Continue
      </button>
    </div>
  );
};

export default AddStaff;
