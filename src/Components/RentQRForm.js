import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiCheckCircle, FiCircle, FiCamera, FiUpload, FiArrowLeft } from "react-icons/fi"; 
import Header from "./Header";
import Buildingg from "../Asset/buildingg.png";


const steps = [
  { id: 1, title: "Select access to property" },
  { id: 2, title: "Upload KYC documents" },
  { id: 3, title: "Verify basic details" },
  { id: 4, title: "Select bank account" },
];

const RentQRForm= () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [formData, setFormData] = useState({
    propertyName: "",
    ownerName: "",
    email: "",
    pincode: "",
    name: "",
    state: "",
    street: "",
    landmark: "",
  });

  const properties = [
    { id: "CRIB005679", name: "Maha Hostel", address: "No. 03, ABC Road, ABC Colony, ABC City, ABC State, 6xxxx6", image: Buildingg },
    { id: "CRIB008123", name: "Chennai Hostel", address: "No. 05, XYZ Road, XYZ Colony, XYZ City, XYZ State, 7xxxx7", image: Buildingg },
  ];

  const nextStep = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const toggleSelectProperty = (id) => {
    setSelectedProperties((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col p-4" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header 
  title="Get Rent QR" 
  onBack={() => step > 1 ? setStep(step - 1) : navigate(-1)} 
  rightIcon={<FiPlus className="text-lg text-white cursor-pointer" onClick={() => navigate("/next-page")} />} 
/>


      <div className="p-4 ml-7">
        <p className="text-[#69205D] ">Step {step} of 4</p>
        <h2 className="font-bold text-lg ">{steps[step - 1].title}</h2>

        {step === 1 && (
          <div>
            <p>Each property will have a unique QR code. You can raise requests for other properties later in the settings.</p>
            <div className="bg-[#69205D] text-white p-4 rounded-lg mt-4">{properties.length} Properties</div>
            <div className="flex flex-col gap-4 mt-4">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className={`w-full bg-white rounded-lg shadow-md border-2 p-4 cursor-pointer flex flex-col border-[#69205D] relative ${selectedProperties.includes(property.id) ? 'border-[#69205D]' : ''}`}
                  onClick={() => toggleSelectProperty(property.id)}
                >
                  <div className="flex flex-col md:flex-row items-center gap-2 w-full">
                    <div className="flex flex-col items-center w-full md:w-1/3">
                      <p className="mb-3 font-bold text-md text-black text-center">{property.name}</p>
                      <img src={property.image} alt={property.name} className="w-20 h-20 object-cover" />
                    </div>
                    <div className="mt-4 mr-6 p-2 bg-[#F7F7F7] rounded-md text-sm text-gray-600 w-full md:w-2/3 text-left">
                      <p className="whitespace-pre-line break-words leading-5">
                        {property.address.replace(/, /g, "\n")}
                      </p>
                    </div>
                  </div>
                  <hr className="mt-4 text-gray-300"/>
                  <p className="text-[#69205D] font-bold mt-2 text-right">{property.id}</p>
                  <div className="absolute top-20 right-4">
                    {selectedProperties.includes(property.id) ? <FiCheckCircle className="text-[#69205D] text-2xl" /> : <FiCircle className="text-gray-400 text-2xl" />}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={nextStep} className={`p-3 w-full rounded-lg mt-4 ${selectedProperties.length ? 'bg-[#69205D] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!selectedProperties.length}>Continue</button>
          </div>
        )}

{step === 2 && (
  <div>
    <p>Each property will have a unique QR code. You can raise request for other properties later in the settings.</p>
    
    {/* Upload Address Proof */}
    <div className="bg-white p-4 rounded-lg text-center">
      <FiUpload className="text-gray-500 text-5xl mx-auto" />
      <p className="mt-2">Upload address proof</p>
      <p className="text-sm mb-6 text-gray-500">Electricity bill, water bill, registration, etc (PDF only)</p>
      <input type="file" accept="image/*" className="hidden" id="upload-doc" />
      <label htmlFor="upload-doc" className="mt-2 p-2 border rounded-lg text-[#69205D] bg-white cursor-pointer">Upload Document</label>
    </div>

    {/* Grey Line Below Upload Document */}
    <hr className="border-t border-gray-300 my-4" />

    {/* Upload Property Photo */}
    <div className="bg-white p-4 rounded-lg text-center">
      <FiCamera className="text-gray-500 text-5xl mx-auto" />
      <p className="mt-2">Upload property photo</p>
      <p className="text-sm mb-6 text-gray-500">Upload property photo with signboard</p>
      <input type="file" accept="image/*" className="hidden" id="upload-photo" />
      <label htmlFor="upload-photo" className="mt-2 p-2 border rounded-lg text-[#69205D] bg-white cursor-pointer">Upload Photo</label>
    </div>

    <button onClick={nextStep} className="p-3 w-full rounded-lg mt-8 bg-[#69205D] text-white">Continue</button>
  </div>
)}


        {step === 3 && (
          <div>
            <input type="text" name="propertyName" placeholder="Property Name" className="border p-2 w-full rounded-md" onChange={handleChange} value={formData.propertyName} />
            <input type="text" name="ownerName" placeholder="Owner Name" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.ownerName} />
            <input type="email" name="email" placeholder="Email ID" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.email} />
               <p className="font-bold mt-2">Address</p>
            <p className="text-gray-500 text-sm">Note: It should match with the uploaded address proof</p>
            <input type="text" name="pincode" placeholder="Pincode" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.pincode} />
            <input type="text" name="name" placeholder="name" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.name} />
            <input type="text" name="state" placeholder="state" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.state} />
            <input type="text" name="doorno" placeholder="Door No" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.doorno} />
            <input type="text" name="address" placeholder="Address" className="border p-2 w-full rounded-md mt-2" onChange={handleChange} value={formData.address} />
           
            <button onClick={nextStep} className="p-3 w-full rounded-lg mt-4 bg-[#69205D] text-white">Continue</button>
    </div>
        )}

        {step === 4 && (
          <div>
            
            <p>Select the bank account you want to link with the QR of this property. You can change it later in the settings.</p>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <p className="font-bold">{formData.propertyName || "Property Name"}</p>
              <p className="text-sm text-gray-600">{formData.address}, {formData.name} ,{formData.state} </p>
            </div>
            <button onClick={() => navigate("/bank-account")} className="p-3 w-full rounded-lg mt-4 border text-[#69205D] bg-white">+ Add bank account</button>
            <button 
      onClick={() => navigate("/qr-code")}
      className="p-3 w-full rounded-lg mt-4 bg-[#69205D] text-white"
    >
      Generate Rent QR
    </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentQRForm;
