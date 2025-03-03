import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";

const HostelForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Store selected cities from AddCity page
  const [selectedCities, setSelectedCities] = useState(location.state?.cities || []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-6">
        {/* Title & Subtitle */}
        <div className="flex flex-col text-left">
          <h2 className="text-[28px] font-semibold tracking-[2px] text-[#69205D]">
            Welcome to Sri Maha Hostel 🎉
          </h2>
          <p className="text-sm text-gray-500 tracking-[1px] mt-1">
            Please tell us a little bit about you
          </p>
        </div>

        {/* Personal Details */}
        <div className="mt-6">
          <p className="text-[16px] font-semibold">Personal details</p>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mt-2 bg-gray-100 rounded-md outline-none text-gray-900"
          />
          <input
            type="text"
            placeholder="Branch Name"
            className="w-full p-3 mt-2 bg-gray-100 rounded-md outline-none text-gray-900"
          />
        </div>

        {/* Business Size */}
        <div className="mt-6">
          <p className="text-[16px] font-semibold">Business size</p>
          <input
            type="text"
            placeholder="Total beds"
            className="w-full p-3 mt-2 bg-gray-100 rounded-md outline-none text-gray-900"
          />
          <input
            type="text"
            placeholder="Branch Total properties"
            className="w-full p-3 mt-2 bg-gray-100 rounded-md outline-none text-gray-900"
          />
        </div>

        {/* Location */}
        <div className="mt-6">
          <p className="text-[16px] font-semibold">Where do you operate?</p>
          <input
            type="text"
            placeholder={selectedCities.length > 0 ? selectedCities.join(", ") : "Add Cities"}
            className="w-full p-3 mt-2 bg-gray-100 rounded-md outline-none text-gray-900 cursor-pointer"
            readOnly
            onClick={() => navigate("/addcity", { state: { cities: selectedCities } })}
          />
        </div>

        {/* Language Preference */}
        <div className="mt-6">
          <p className="text-[16px] font-semibold">What’s your preferred language?</p>
          <input
            type="text"
            placeholder="Select Language"
            className="w-full p-3 mt-2 bg-gray-100 rounded-md outline-none text-gray-900"
          />
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-6 w-full">
        <Button button="Continue" defaultColor="#69205D" route="/addproperty" />
      </div>
    </div>
  );
};

export default HostelForm;
