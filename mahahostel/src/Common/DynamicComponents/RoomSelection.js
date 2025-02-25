import { useState } from "react";

import Header from "./Header";
import Button from "./Button";  

const roomDetailsMap = {
  Single: "Single Sharing Bed",
  Double: "Double Sharing Bed",
  Triple: "Triple Sharing Bed",
  "3+": "Multi Sharing Bed"
};

const RoomSelection = () => {
  const [selectedRoom, setSelectedRoom] = useState("Single");

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 h-auto flex flex-col md:p-6">
        <Header title="Add Units"/>

      {/* Hostel Info */}
      <div className="bg-gray-200 p-4 rounded-lg flex justify-between items-center">
        <span className="font-bold text-lg">Maha Hostel <span className="text-gray-600">01</span></span>
        <img src="/hostel-icon.png" alt="Hostel" className="w-10 h-10" />
      </div>

      {/* Room Type Selection */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Select Room Type</span>
          <button className="text-[#69205D] font-medium cursor-pointer">+ Add Room Type</button>
        </div>
        <div className="flex space-x-2">
          {["Single", "Double", "Triple", "3+"].map((type) => (
            <button
              key={type}
              className={`py-2 px-4 rounded-lg font-medium ${
                selectedRoom === type
                  ? "bg-[#69205D] text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => setSelectedRoom(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Room Details (Change Name Based on Selection) */}
      <div className="bg-[#DCE4EB] p-4 rounded-lg mt-4">
        <h2 className="font-bold text-lg">{roomDetailsMap[selectedRoom]}</h2>
        <ul className="text-gray-700 mt-2 space-y-1">
          <li>✅ Attached Balcony</li>
          <li>✅ Attached Washroom</li>
          <li>✅ Air Conditioner</li>
          <li>✅ Geyser</li>
        </ul>
        <div className="flex justify-between gap-4 items-center mt-4">
            <Button button="Rent ₹2500" width="half" defaultColor="#69205D"/>
            <Button button="Select" width="half" defaultColor="#28A745" route="/bedselect"/>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;       