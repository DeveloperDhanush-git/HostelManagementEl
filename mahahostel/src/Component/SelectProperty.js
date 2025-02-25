import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const SelectProperty = () => {
  const [selectedProperties, setSelectedProperties] = useState([]);
  const navigate = useNavigate();

  // Property List
  const properties = [
    { id: 1, name: "Maha Hostel", address: "No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State, 6xxxx6" },
    { id: 2, name: "Chennai Hostel", address: "No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State, 6xxxx6" }
  ];

  // Toggle Property Selection
  const handlePropertyToggle = (id) => {
    setSelectedProperties((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Handle Final Submission
  const handleFinish = () => {
    if (selectedProperties.length === 0) {
      alert("Please select at least one property");
      return;
    }

    // Retrieve existing staff details from localStorage
    const staffDetails = JSON.parse(localStorage.getItem("staffDetails")) || {};
    staffDetails.properties = selectedProperties.map(
      (id) => properties.find((p) => p.id === id)?.name
    );

    // Retrieve existing staff list and update it
    const staffList = JSON.parse(localStorage.getItem("staffList")) || [];
    staffList.push(staffDetails);

    // Save updated staff list
    localStorage.setItem("staffList", JSON.stringify(staffList));

    // Navigate to home or staff management page
    navigate("/");
  };

  return (
    <div>
      <Header title="Add staff" />
      <p className="text-blue-500 text-sm">STEP 3 of 3</p>
      <h2 className="text-xl font-bold">Select access to property</h2>
      <p className="bg-[#69205D] text-white px-4 py-2 inline-block rounded-md">2 Properties</p>

      {/* Property Selection List */}
      <div className="my-4">
        {properties.map((property) => (
          <div key={property.id} className="border border-[#69205D] p-4 rounded-lg flex justify-between items-center my-2">
            <div>
              <h4 className="font-semibold">{property.name}</h4>
              <p className="text-sm text-gray-600">{property.address}</p>
            </div>
            <input
              type="checkbox"
              checked={selectedProperties.includes(property.id)}
              onChange={() => handlePropertyToggle(property.id)}
              className="w-5 h-5"
            />
          </div>
        ))}
      </div>

      {/* Add Staff Button */}
      <button
        className="w-full bg-[#69205D] text-white p-3 rounded-md mt-4"
        onClick={handleFinish}
        disabled={selectedProperties.length === 0}
      >
        Add staff
      </button>
    </div>
  );
};

export default SelectProperty;

