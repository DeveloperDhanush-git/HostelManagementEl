import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const AddProperty = () => {
  const navigate = useNavigate();

  // State for form fields
  const [propertyName, setPropertyName] = useState("");
  const [totalBeds, setTotalBeds] = useState("");
  const [vacantBeds, setVacantBeds] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [locality, setLocality] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine address fields into a single string
    const address = `${houseNumber}, ${locality}, ${city}, ${stateValue}, ${pincode}`;

    // Create an object with property details
    const propertyData = {
      name: propertyName,
      totalBeds,
      vacantBeds,
      address,
    };

    // Navigate to the Details2page and pass propertyData in state
    navigate("/Details2page", { state: { propertyData } });
  };

  return (
    <div className="bg-[#69205D] max-w-4xl mx-auto p-6 bg-white rounded-lg mt-1">
      {/* Header Section */}
      <div className="text-center">
        <Header title="ADD Property" />
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-md relative">
        {/* Step Info */}
        <p className="text-blue-600 text-sm mt-2 text-left">STEP 1 of 6</p>

        {/* Basic Details Section */}
        <h3 className="text-lg font-semibold mt-4 text-left">Basic Details</h3>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Property Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Total Beds"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={totalBeds}
            onChange={(e) => setTotalBeds(e.target.value)}
          />
          <input
            type="number"
            placeholder="Vacant Beds"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={vacantBeds}
            onChange={(e) => setVacantBeds(e.target.value)}
          />

          {/* Address Section */}
          <h3 className="text-lg font-semibold mt-6 text-left">Address</h3>
          <input
            type="text"
            placeholder="Pincode"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <select
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="House/Flat/Block No."
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Locality"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />

          {/* Submit Button */}
          <Button button="next" defaultColor="#69205D" />
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
