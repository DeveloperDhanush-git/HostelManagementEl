import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import BuildingImg from "./Assests/hostel-building.png";
import { useNavigate } from "react-router-dom";
import Coin from "./Assests/coin.png";

const roomDetailsMap = {
  Single: "Single Sharing Bed",
  Double: "Double Sharing Bed",
  Triple: "Triple Sharing Bed",
  "3+": "Multi Sharing Bed",
};

const RoomSelection = () => {
  const [selectedRoom, setSelectedRoom] = useState("Single");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white rounded-lg mt-1">
      <div className="flex-grow p-4">
        <Header title="Add Units" />

        <div className="ml-6">
          
          <div className="bg-gray-200 p-4 rounded-lg flex justify-between items-center">
            <span className="font-bold text-lg">
              Maha Hostel <span className="text-gray-600">01</span>
            </span>
            <img src={BuildingImg} alt="Hostel" className="w-10 h-10" />
          </div>

         
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Select Room Type</span>
              <button
                className="text-[#69205D] font-medium cursor-pointer"
                onClick={() => navigate("/addroom")}
              >
                + Add Room Type
              </button>
            </div>
            <div className="flex space-x-2">
              {["Single", "Double", "Triple", "3+"].map((type) => (
                <button
                  key={type}
                  className={`py-2 px-4 rounded-lg font-medium  mb-2 ${
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

        
          <div className="bg-[#DCE4EB] p-4 rounded-lg mt-4">
            <h2 className="font-bold text-lg">
              {roomDetailsMap[selectedRoom]}
            </h2>
            <ul className="text-gray-700 mt-2 space-y-1">
              <li className="flex items-center">
                <img src={Coin} alt="Check" className="w-5 h-5 mr-2" />
                Attached Balcony
              </li>
              <li className="flex items-center">
                <img src={Coin} alt="Check" className="w-5 h-5 mr-2" />
                Attached Washroom
              </li>
              <li className="flex items-center">
                <img src={Coin} alt="Check" className="w-5 h-5 mr-2" />
                Air Conditioner
              </li>
              <li className="flex items-center">
                <img src={Coin} alt="Check" className="w-5 h-5 mr-2" />
                Geyser
              </li>
            </ul>
            <div className="flex justify-between gap-4 items-center mt-4 ml-6 p-4 mt-35">
              <Button button="Rent ₹2500" width="half" defaultColor="#69205D" />
              <Button
                button="Select"
                width="half"
                defaultColor="#28A745"
                route="/edit"
                className="!bg-[#28A745] !text-white !hover:bg-[#28A745] !active:bg-[#28A745] !focus:bg-[#28A745]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
