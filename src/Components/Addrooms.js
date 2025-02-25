import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import PropertyCard from "./Propertycard";
import Header from "./Header";
import Button from "./Button";

const RoomOption = ({ buttonName, nextButton }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve selected room options from state (if any)
  const rooms = location.state?.rooms || [];

  // Room types available for selection
  const roomTypes = [
    { label: "Single Sharing", icon: "single.png", key: "single" },
    { label: "Double Sharing", icon: "double.png", key: "double" },
    { label: "Triple Sharing", icon: "triple.png", key: "triple" },
    { label: "3+ Sharing", icon: "3-share.png", key: "multi" }
  ];

  // Function to navigate to options page with selected room type
  const handleAddRoom = (roomKey) => {
    navigate("/options", { state: { selectedRoom: roomKey } });
  };

  // Retrieve property data passed from the AddProperty page via navigation state.
  // If not available, default values are used.
  const propertyData = location.state?.propertyData || {
    name: "Default Property Name",
    address: "Default Address",
    image: "assets/building icon.png",
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <Header title="Add property" />

      {/* Content */}
      <div className="flex-grow p-4">
        {/* Display the user-filled property details using PropertyCard */}
        <PropertyCard 
          name={propertyData.name} 
          address={propertyData.address} 
          image={propertyData.image} 
        />

        <p className="text-[#0012B9] mt-2 ml-11">STEP 3 of 6</p>
        
        <div className="ml-7">
          <h2 className="font-bold text-lg mb-2">Room Options</h2>
          <div className="space-y-6">
            {roomTypes.map((room) => (
              <div key={room.key} className="flex flex-col bg-gray-200 p-3 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={room.icon} alt={room.label} className="w-6 h-6" />
                    <span>{room.label}</span>
                  </div>
                  {/* Clicking "Add room" navigates to another component/page */}
                  <button
                    className="text-[#69205D] flex items-center gap-1 cursor-pointer"
                    onClick={() => handleAddRoom(room.key)}
                  >
                    <FaPlus className="text-sm text-black" /> Add room
                  </button>
                </div>
                {/* Show total selections below Single Sharing */}
                {room.key === "single" && rooms.length > 0 && (
                  <p className="mt-2 text-sm text-gray-700 ml-8">
                    {rooms.length} option{rooms.length > 1 ? "s" : ""}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Next Button */}
      <div className="p-4 bg-white shadow-md">
        <Button button="Next" defaultColor="#69205D" />
      </div>
    </div>
  );
};

export default RoomOption;
