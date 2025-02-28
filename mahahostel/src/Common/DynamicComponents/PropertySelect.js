import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Coins from "./Assests/coins.png";
import buildingIcon from "./Assests/hostel-building.png";
import Header from "./Header";

const BedInventory_5 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state || { id: "Unknown", name: "Unknown Property", address: "Unknown Address" };

  const [selectedRoom, setSelectedRoom] = useState("Single");
  const [showInputs, setShowInputs] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [bedNumber, setBedNumber] = useState("");

  const roomData = {
    Single: { name: "Single Sharing Bed", rent: 2500 },
    Double: { name: "Double Sharing Bed", rent: 5000 },
    Triple: { name: "Triple Sharing Bed", rent: 7500 },
    "3+": { name: "Three and Above Sharing Bed", rent: 10000 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4">
        <Header title="Select Room Type" />

        {/* Hostel Info */}
        <div className="w-full px-4 mt-4">
          <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-xl font-semibold block">{property.name}</span>
              <span className="text-md text-gray-700">{property.address}</span>
            </div>
            <img src={buildingIcon} alt="Hostel" className="w-12 h-12" />
          </div>
        </div>

        {/* Room Type Selection */}
        <div className="w-full px-4 mt-6">
          <p className="text-m text-blue-500 mt-3">STEP 3 OF 5</p>
          <h3 className="text-xl font-semibold mt-2 mb-2">Room details</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Sharing type</span>
          </div>
          <div className="flex flex-col sm:flex-row mt-3">
            {["Single", "Double", "Triple", "3+"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedRoom(type)}
                className={`px-10 py-2 m-2 rounded-lg text-md font-semibold transition ${selectedRoom === type ? "bg-[#69205D] text-white" : "bg-gray-300 text-gray-700"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Room Details */}
        <div className="w-full px-4 mt-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{roomData[selectedRoom].name}</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center">
                <img src={Coins} alt="Coin" />
                <span className="ml-2">Attached Balcony</span>
              </li>
              <li className="flex items-center">
                <img src={Coins} alt="Coin" />
                <span className="ml-2">Attached Washroom</span>
              </li>
              <li className="flex items-center">
                <img src={Coins} alt="Coin" />
                <span className="ml-2">Air Conditioner</span>
              </li>
              <li className="flex items-center">
                <img src={Coins} alt="Coin" />
                <span className="ml-2">Geyser</span>
              </li>
            </ul>

            {/* Rent and Select Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <button className="flex items-center gap-7 px-5 py-1 rounded-lg border-2 border-[#69205D] bg-[#69205D] text-white">
                <span className="bg-white text-[#69205D] font-bold px-7 py-1 rounded-lg">Rent</span>
                ₹{roomData[selectedRoom].rent}
              </button>

              <button
                className="px-7 mt-2 sm:m-0 py-2 bg-[#12C898] text-white font-semibold rounded-lg"
                onClick={() => setShowInputs(true)}
              >
                Select
              </button>
            </div>
          </div>
        </div>

        {/* Room Number & Bed Number Inputs (Visible after selection) */}
        {showInputs && (
          <div className="w-full px-4 mt-6">
            <input
              type="text"
              placeholder="Room number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg mb-3"
            />
            <input
              type="text"
              placeholder="Bed number"
              value={bedNumber}
              onChange={(e) => setBedNumber(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4"
            />

            <button
              className="w-full p-3 bg-[#69205D] text-white font-semibold rounded-lg"
              onClick={() => navigate("/addtenant", { state: property })}
            >
              Continue
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default BedInventory_5;
