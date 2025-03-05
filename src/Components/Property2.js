import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button"; // Ensure you have this component

const Property2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      {/* Page Content */}
      <div className="flex-grow">
        <Header title="Property 2" />

        {/* Toggle Switch */}
        <div className="flex justify-between ml-5 items-center mt-4 p-4">
          <div>
            <h2 className="text-md font-semibold">Outpass & attendance</h2>
            <p className="text-sm text-gray-500">
              Turning on this feature will allow tenants to raise outpass and enable attendance.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isEnabled}
              onChange={() => setIsEnabled(!isEnabled)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:transform peer-checked:after:translate-x-full"></div>
          </label>
        </div>

        {/* Conditional Content - Shows only when toggle is ON */}
        {isEnabled && (
          <div className="mt-4 ml-8 space-y-4 flex flex-col min-h-[60vh]">
            {/* Set entry time */}
            <div>
              <h3 className="text-md font-semibold">Set entry time for attendance</h3>
              <input
                type="text"
                placeholder="Enter in-time"
                className="w-full mt-2 p-2 border rounded-md text-gray-600"
              />
            </div>

            {/* Assign warden */}
            <div>
              <h3 className="text-md font-semibold">Assign warden</h3>
              <p className="text-sm text-gray-500">
                Assign a warden to review outpass and take attendance.
              </p>
              <select className="w-full mt-2 p-2 border rounded-md text-gray-600">
                <option>Select warden</option>
              </select>
            </div>

            {/* Approval selection */}
            <div>
              <h3 className="text-md font-semibold">Outpass to be approved by</h3>
              <select className="w-full mt-2 p-2 border rounded-md text-gray-600">
                <option>Select</option>
              </select>
            </div>

            {/* Save Button - Properly Aligned */}
            <div className="w-full mt-auto flex justify-center">
              <button className="w-full p-3 bg-[#69205D] text-white rounded-md text-center">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Property2;
