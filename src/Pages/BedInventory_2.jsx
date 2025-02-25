import React,{useState} from 'react'
import { FaArrowLeft } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const BedInventory_2 = ({buttonName = "Add Bed Inventory" }) => {
  const [floorCount, setFloorCount] = useState(""); // State for floor input
  const [groundFloor, setGroundFloor] = useState(null); // State for ground floor selection
  const navigate = useNavigate(); 
 

  
  
  
  return (
         <div className="flex flex-col items-center">
        {/* Add Property Button */}
        <div className="p-4 max-w-4xl w-full bg-white rounded-lg mt-1">
          <div className="flex items-center space-x-2 py-4">
            <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" onClick={() => navigate(-1)} />
            <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
              <span className="text-xl font-semibold">{buttonName}</span>
            </div>
          </div>
        </div>

      {/* Property Selection Section */}
      <div className="w-full max-w-md mt-6">
        <div className="border-2 border-[#69205D] rounded-lg p-5 flex items-center gap-8 shadow-md bg-white">
          {/* Left Section - Name & Icon */}
          <div className="flex flex-col items-center w-20">
            <h2 className="font-bold text-md text-center whitespace-nowrap">Maha Hostel</h2>
            <img src={buildingIcon} alt="Hostel Icon" className="w-14 h-14" />
          </div>
          {/* Right Section - Address */}
          <div className="bg-gray-200 p-3 rounded-md text-sm text-gray-600 flex-1">
            No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC <br />State,
            <br /> 6xxxx6
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
          onChange={(e) => setFloorCount(e.target.value)}
          placeholder="Enter number of floors"
          className="w-full px-3 py-2 border border-gray-500 rounded-lg outline-gray-500"
        />
      </div>

      {/* Ground Floor Selection */}
      <div className="w-full max-w-4xl px-4 mt-4">
        <p className="text-sm text-gray-700 font-semibold mb-2">
          Is ground floor included?
        </p>
        <div className="flex gap-4">
        <button
            className={`w-1/2 p-2 border rounded-md cursor-pointer ${
              groundFloor === true ? "bg-[#69205D] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setGroundFloor(true)}
          >Yes
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

     {/* Continue Button (Pass Props) */}
     <Button button="Continue" route={floorCount && !isNaN(floorCount) && parseInt(floorCount) > 0 && groundFloor !== null ? "/step2" : "#"} disabled={!floorCount || isNaN(floorCount) || parseInt(floorCount) <= 0 || groundFloor === null}/>
    </div>
  )
}

export default BedInventory_2
