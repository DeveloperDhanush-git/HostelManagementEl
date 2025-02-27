import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import { FormDataContext } from "./PropertyContext";

const AddProperty = () => {
  const navigate = useNavigate();
  const { setFormData } = useContext(FormDataContext);

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

  return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow p-4">
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

      <Header title="Add Property" />
      <div className="ml-6">
      <p className="text-blue-600 text-sm mt-2 text-left">STEP 1 of 6</p>
      <h3 className="text-lg font-semibold mt-4 text-left">Basic Details</h3>

      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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

        <h3 className="text-lg font-semibold  text-left">Address</h3>
        
       
   
      </form> 

      </div>

            </div>
            <div className="p-4">
            <button className="w-full bg-blue-500 text-white py-2 rounded-md">
              Next
             </button>
      </div>
    </div>
  );
};

export default AddProperty;
