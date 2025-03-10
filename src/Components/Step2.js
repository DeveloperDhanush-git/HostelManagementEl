import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCamera, FiUpload } from "react-icons/fi";
import Header from "./Header";
const Step2 = () => {
  const navigate = useNavigate();

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col p-4">
        <Header 
                title="Get Rent QR" 
               
              />
      <p className=" ml-7 text-[#69205D]">Step 2 of 4</p>
      <h2 className="font-bold ml-7 text-lg">Upload KYC Documents</h2>
      <p className=" ml-7 text-lg">Each property will have a unique QR code. You can raise a request for other properties later in the settings.</p>

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

      <button onClick={() => navigate("/step3")} className="p-3  w-full rounded-lg mt-8 bg-[#69205D] text-white">Continue</button>
    </div>
  );
};

export default Step2;
