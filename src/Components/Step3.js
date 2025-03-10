import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const steps = [
  { id: 1, title: "Select access to property" },
  { id: 2, title: "Upload KYC documents" },
  { id: 3, title: "Verify basic details" },
  { id: 4, title: "Select bank account" },
];

const Step3 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyName: "",
    ownerName: "",
    email: "",
    pincode: "",
    name: "",
    state: "",
    street: "",
    landmark: "",
    doorno: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col p-4" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Get Rent QR" />

      <div className="p-4 ml-7">
        <p className="text-[#69205D]">Step 3 of 4</p>
        <h2 className="font-bold text-lg">{steps[2].title}</h2>

        <input type="text" name="propertyName" placeholder="Property Name" className="border p-2 w-full rounded-md" onChange={handleChange} value={formData.propertyName} />
        <input type="text" name="ownerName" placeholder="Owner Name" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.ownerName} />
        <input type="email" name="email" placeholder="Email ID" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.email} />
        
        <p className="font-bold mt-2">Address</p>
        <p className="text-gray-500 text-sm">Note: It should match with the uploaded address proof</p>
        <input type="text" name="pincode" placeholder="Pincode" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.pincode} />
        <input type="text" name="name" placeholder="Name" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.name} />
        <input type="text" name="state" placeholder="State" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.state} />
        <input type="text" name="doorno" placeholder="Door No" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.doorno} />
        <input type="text" name="address" placeholder="Address" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.address} />
        
        <button 
          onClick={() => navigate("/step4", { state: formData })} 
          className="p-3 w-full rounded-lg mt-4 bg-[#69205D] text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step3;
