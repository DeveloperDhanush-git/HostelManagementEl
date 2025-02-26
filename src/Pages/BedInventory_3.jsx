import { FaArrowLeft } from "react-icons/fa";
import buildingIcon from "../assets/building_icon.png";
import Staircase from "../assets/staircase.png";
import Button from "../Components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const BedInventory_3 = ({ buttonName = "Add Bed Inventory", totalFloors = 10 }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { floors, hasGroundFloor } = location.state || { floors: 1, hasGroundFloor: false };

  useEffect(() => {
    if (floors === undefined || hasGroundFloor === undefined) {
      navigate("/step1");
    }
  }, [floors, hasGroundFloor, navigate]);

  if (floors === undefined || hasGroundFloor === undefined) {
    return null;
  }

  // Generate correct floor output
  const floorList = [];
  const floorStart = hasGroundFloor ? 0 : 1;
  for (let i = floorStart; i < floors + (hasGroundFloor ? 0 : 1); i++) {
    floorList.push(i === 0 ? "Ground Floor" : `Floor ${i}`);
  }

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

      <div className="w-full max-w-4xl mt-4 space-y-4">
        {floorList.map((floor, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md border">
            <div className="flex items-center gap-2">
              <img src={Staircase} alt="Staircase Icon" className="w-6 h-6" />
              <span className="text-md font-medium">{floor}</span>
            </div>
            <button className="px-4 py-2 border rounded-md text-[#69205D] font-medium border-[#69205D]">
              Rooms
            </button>
          </div>
        ))}
      </div>

      <Button button="Continue" route="/next-page" />
    </div>
  );
};

export default BedInventory_3;
