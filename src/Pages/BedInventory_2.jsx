import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png";
import { useNavigate } from "react-router-dom";

const BedInventory_2 = ({ buttonName = "Add Bed Inventory",nextButton="Continue"}) => {
  const navigate = useNavigate();
  const [floorCount, setFloorCount] = useState("");
  const [groundFloor, setGroundFloor] = useState(null);
  const [error, setError] = useState("");

  const handleFloorChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // Allow only numbers
      setFloorCount(value);
      setError(""); // Clear error when valid input
    } else {
      setError("Please enter a valid number of floors.");
    }
  };
    const handleContinue = () => {
    if (!floorCount) {
      setError("Please enter a valid number of floors.");
      return;
    }

    const totalFloors = parseInt(floorCount, 10);
    let outputFloors = [];

    if (groundFloor) {
      outputFloors.push("Ground Floor");
      for (let i = 1; i < totalFloors; i++) {
        outputFloors.push(`${i} Floor`);
      }
    } else {
      for (let i = 1; i <= totalFloors; i++) {
        outputFloors.push(`${i} Floor`);
      }
    }
  
    
    console.log("Floor Count:", floorCount);
    console.log("Ground Floor Included:", groundFloor);
    console.log("Output Floors:", outputFloors);

    navigate("/step2", { state: { outFloors: outputFloors, groundFloor } }); 
  };
  


  return (
    <div className="flex flex-col items-center">
      {/* Navigation Header */}
      <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
        <div className="flex items-center space-x-2 py-4">
          <FaArrowLeft
            className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200"
            onClick={() => navigate(-1)}
          />
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
        <p className="text-sm text-blue-600 font-medium mb-1">STEP 1 of 3</p>
        <h3 className="text-lg font-semibold">Add floors</h3>
      </div>

      {/* Total Floors Input */}
      <div className="w-full max-w-4xl px-4 mt-3">
        <label className="block text-gray-700 text-sm font-semibold mb-1">
          Total no. of floors:
        </label>
        <input
          type="text"
          value={floorCount}
          onChange={handleFloorChange}
          placeholder="Enter number of floors"
          className="w-full px-3 py-2 border border-gray-500 rounded-lg outline-gray-500"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      {/* Ground Floor Selection */}
      <div className="w-full max-w-4xl px-4 mt-4">
        <p className="text-sm text-gray-700 font-semibold mb-2">Is ground floor included?</p>
        <div className="flex gap-4">
          <button
            className={`w-1/2 p-2 border rounded-md cursor-pointer ${
              groundFloor === true ? "bg-[#69205D] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setGroundFloor(true)}
          >
            Yes
          </button>
          <button
            className={`w-1/2 p-2 border rounded-md cursor-pointer ${
              groundFloor === false ? "bg-[#69205D] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setGroundFloor(false)}
          >
            No
          </button>
        </div>
      </div>

      <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base" onClick={handleContinue} route='/step2'>
          <span className="text-2xl">{nextButton}</span>
        </button>

    </div>
  );
};

export default BedInventory_2;
