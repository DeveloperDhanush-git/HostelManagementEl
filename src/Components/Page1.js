import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import { FormDataContext } from "./PropertyContext";

const AddProperty = () => {
  const navigate = useNavigate();
  const { setFormData } = useContext(FormDataContext);
  const formRef = useRef(null); // Create a form reference

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
    const address = `${houseNumber}, ${locality}, ${city}, ${stateValue}, ${pincode}`;
    const propertyData = {
      name: propertyName,
      totalBeds,
      vacantBeds,
      address,
    };

    setFormData(propertyData);
    navigate("/Details2page");
  };

  // Function to manually submit the form
  const handleNextClick = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }
  };

  return (
    <div className="  bg-white min-h-screen rounded-lg  flex flex-col">
      <div className="flex-grow p-4">
        <Header title="Add Property" />
        <div className="ml-6">
          <p className="text-blue-600 text-sm mt-2 text-left">STEP 1 of 6</p>
          <h3 className="text-lg font-semibold mt-4 text-left">Basic Details</h3>

          {/* Form with ref */}
          <form ref={formRef} className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Property Name"
              className="w-full p-3 border rounded-md focus:outline-none text-sm"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Total Beds"
              className="w-full p-3 border rounded-md no-spinner focus:outline-none text-sm"
              value={totalBeds}
              onChange={(e) => setTotalBeds(e.target.value)}
            />
            <input
              type="number"
              placeholder="Vacant Beds"
              className="w-full p-3 border rounded-md no-spinner focus:outline-none text-sm"
              value={vacantBeds}
              onChange={(e) => setVacantBeds(e.target.value)}
            />

            <h3 className="text-lg font-semibold text-left">Address</h3>
            <input
              type="text"
              placeholder="Pincode"
              className="w-full p-3 border rounded-md focus:outline-none text-sm"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 border rounded-md focus:outline-none text-sm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              className="w-full p-3 border rounded-md focus:outline-none text-sm"
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="House/Flat/Block No."
              className="w-full p-3 border rounded-md focus:outline-none text-sm"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Locality"
              className="w-full p-3 border rounded-md focus:outline-none text-sm"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Button outside the form that triggers form submission */}
      <div className="p-4 ml-6">
        <Button button="Next" route="/Details2page" onClick={handleNextClick} defaultColor="#69205D" />
      </div>
    </div>
  );
};

export default AddProperty;
