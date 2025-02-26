import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png";
import Staircase from "../assets/staircase.png";
import { useNavigate, useLocation } from "react-router-dom";

const BedInventory_3 = ({ buttonName = "Add Bed Inventory", nextButton = "Continue" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { outFloors, groundFloor } = location.state || { outFloors: null, groundFloor: null };

  const [rooms, setRooms] = useState({}); // State to store the number of rooms for each floor
  const [isEditing, setIsEditing] = useState({}); // State to track which floor is being edited

  useEffect(() => {
    if (outFloors === null || groundFloor === null) {
      navigate("/step1"); // Redirect to step1 if data is missing
    }
  }, [outFloors, groundFloor, navigate]);

  if (outFloors === null || groundFloor === null) {
    return null; // Show nothing while data is being loaded
  }

  // Prepare the floor list to display
  const floorList = [];

  if (groundFloor) {
    floorList.push("Ground Floor");
  }

  for (let i = groundFloor ? 1 : 1; i < outFloors.length; i++) {
    floorList.push(`${i} Floor`);
  }

  // Handle change of room number
  const handleRoomChange = (floor, event) => {
    const value = event.target.value;
    setRooms((prev) => ({
      ...prev,
      [floor]: value, // Update the number of rooms for the specific floor
    }));
  };

  // Toggle edit mode for floors
  const handleEditClick = (floor) => {
    setIsEditing((prev) => ({
      ...prev,
      [floor]: !prev[floor], // Toggle edit state for the clicked floor
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
        <div className="flex items-center space-x-2 py-4">
          <FaArrowLeft className="text-xl cursor-pointer" onClick={() => navigate(-1)} />
          <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
            <span className="text-xl font-semibold">{buttonName}</span>
          </div>
        </div>
      </div>

      {/* Property Selection Section */}
      <div className="w-full max-w-md mt-6">
        <div className="border-2 border-[#69205D] rounded-lg p-5 flex items-center gap-8 shadow-md bg-white">
          <div className="flex flex-col items-center w-20">
            <h2 className="font-bold text-md text-center whitespace-nowrap">Maha Hostel</h2>
            <img src={buildingIcon} alt="Hostel Icon" className="w-14 h-14" />
          </div>
          <div className="bg-gray-200 p-3 rounded-md text-sm text-gray-600 flex-1">
            No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC <br /> State, <br /> 6xxxx6
          </div>
        </div>
      </div>

      {/* Step Progress */}
      <div className="w-full max-w-4xl px-4 mt-6 text-left">
        <p className="text-sm text-blue-600 font-medium mb-1">STEP 2 of 3</p>
        <h3 className="text-lg font-semibold">Add floors</h3>
      </div>

      {/* Floor List Section */}
      <div className="w-full max-w-4xl mt-4 space-y-4">
        {floorList.length > 0 ? (
          floorList.map((floor, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md border">
              <div className="flex items-center gap-2">
                <img src={Staircase} alt="Staircase Icon" className="w-6 h-6" />
                <span className="text-md font-medium">{floor}</span>
              </div>

              <div className="flex items-center gap-4">
               

                {isEditing[floor] ? (
                  <input
                    type="text"
                    value={rooms[floor] || ""}
                    onChange={(event) => handleRoomChange(floor, event)}
                    className="p-2 border rounded-md text-[#69205D] font-medium border-[#69205D] w-20"
                  />
                ) : (
                  <button
                    onClick={() => handleEditClick(floor)}
                    className="px-3 py-2 border rounded-md text-[#69205D] font-medium border-[#69205D] w-20"
                  >
                    {rooms[floor] ? rooms[floor] : "Rooms"}
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">No floors selected</p>
        )}
      </div>

      <button
  className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base cursor-pointer"
  onClick={() => navigate("/step3", { state: { outFloors, groundFloor, rooms } })}
>
  <span className="text-xl">{nextButton}</span>
</button>

    </div>
  );
};

export default BedInventory_3;
