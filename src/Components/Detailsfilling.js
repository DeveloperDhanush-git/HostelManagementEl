import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import { FormDataContext } from "./PropertyContext";

const AddProperty = () => {
  const navigate = useNavigate();
  const { setFormData } = useContext(FormDataContext);

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

    // Save the property data into the global context
    setFormData(propertyData);

    // Navigate to the Details2page without having to pass the data explicitly
    navigate("/Details2page ");
  };

  return (
    <>
      {/* Inline CSS to remove spinner controls from number inputs */}
      <style>{`
        .no-spinner::-webkit-inner-spin-button,
        .no-spinner::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .no-spinner {
          -moz-appearance: textfield;
        }
      `}</style>
      
      <div >
        {/* Header Section */}
        <div className="text-center">
          <Header title="Add Property" />
        </div>

        {/* Step Info */}
        <p className="text-blue-600 text-sm mt-2 text-left">STEP 1 of 6</p>

        {/* Basic Details Section */}
        <h3 className="text-lg font-semibold mt-4 text-left">Basic Details</h3>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Property Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-0"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Total Beds"
            className="w-full p-3 border rounded-md no-spinner focus:outline-none focus:ring-0"
            value={totalBeds}
            onChange={(e) => setTotalBeds(e.target.value)}
          />
          <input
            type="number"
            placeholder="Vacant Beds"
            className="w-full p-3 border rounded-md no-spinner focus:outline-none focus:ring-0"
            value={vacantBeds}
            onChange={(e) => setVacantBeds(e.target.value)}
          />

          {/* Address Section */}
          <h3 className="text-lg font-semibold mt-6 text-left">Address</h3>
          <input
            type="text"
            placeholder="Pincode"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-0"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          {/* City input with datalist for suggestions */}
          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-0"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            list="cityOptions"
          />
          <datalist id="cityOptions">
            <option value="New York" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-0"
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="House/Flat/Block No."
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-0"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Locality"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-0"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />

          {/* Submit Button */}
          <Button button="next" defaultColor="#69205D" />
        </form>
      </div>
    </>
  );
};

export default AddProperty;
