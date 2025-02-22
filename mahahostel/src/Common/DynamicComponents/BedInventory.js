import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaBed, FaPencilAlt, FaSlidersH } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const floors = [
  { name: "Ground ", rooms: ["001", "002", "003", "004"] },
  { name: "First ", rooms: ["101", "102", "103", "104"] },
  { name: "Second ", rooms: ["201", "202", "203", "204"] },
  { name: "Third ", rooms: ["301", "302", "303", "304"] },
  { name: "Fourth ", rooms: ["401", "402", "403", "404"] },
];

const occupiedSpaces = [];
const PropertyDashboard = () => {
  const [selectedFloor, setSelectedFloor] = useState(floors[0]);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateOpen, setIsDateOpen] = useState(false);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".date-picker-dropdown")) {
        setIsDateOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1" style={{fontFamily: 'Montserrat' }}>
     
      <div className="flex items-center space-x-2 py-4 ">
        <FaArrowLeft className="text-xl cursor-pointer text-black" />
        <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16 ">
          <span className="text-2xl font-semibold">Maha Hostel</span>
          <div className="flex space-x-3">
            <FaPencilAlt className="text-xl cursor-pointer" />      
            <FaBed className="text-xl cursor-pointer" />
            <FaSlidersH className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>

     
      <div className="flex flex-wrap md:flex-nowrap md:justify-between gap-2 py-4">
        <button className="bg-[#D8E0E6] text-black px-4 py-2 rounded-lg text-sm flex-1">
          Pending dues ▼
        </button>

        
        <div className=" relative flex-1 date-picker-dropdown  ">
          <button
            className="bg-[#D8E0E6] text-black  rounded-lg text-sm w-full py-2 px-4"
            onClick={() => setIsDateOpen(!isDateOpen)}
          >
            {selectedDate.toDateString()} ▼
          </button>
          {isDateOpen && (
            <div className="absolute -left-20 rounded-lg overflow-hidden flex justify-normal">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setIsDateOpen(false);
                }}
                inline
              />
            </div>
          )}
        </div>

        <button className="bg-[#D8E0E6] text-black px-4 py-2 rounded-lg text-sm flex-1">
          Vacant, Occupied ▼
        </button>
      </div>
      <div className="flex md:justify-between py-4">
        {floors.map((floor) => (
          <button
            key={floor.name }
            className={`px-3 py-2 mr-1 rounded-lg  font-semibold cursor-pointer transition whitespace-nowrap ${
              selectedFloor.name === floor.name
                ? "bg-[#69205D] text-white"
                : "text-black"
            }`}
            onClick={() => setSelectedFloor(floor)}
          >
            {floor.name}
          </button>
        ))}
      </div>

      <div className="py-4 space-y-4">
        {selectedFloor.rooms.map((roomId) => (
          <div key={roomId} className="flex items-center space-x-4">
            <button className="bg-[#69205D] text-white px-10 py-3 rounded-lg font-bold">
              {roomId}
            </button>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((space) => (
                <button
                  key={`${roomId}-${space}`}
                  className={`w-12 h-12 rounded-lg transition duration-300 ${
                    occupiedSpaces.includes(`${roomId}-${space}`)
                      ? "bg-[#69205D]"
                      : "bg-gray-300"
                  }`}
                  onClick={() =>
                    !occupiedSpaces.includes(`${roomId}-${space}`) &&
                    setSelectedSpace({ room: roomId, space })
                  }
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>

      
      {selectedSpace && (
        <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-t-lg shadow-lg w-full max-w-md animate-slide-up">
            <h2 className="text-lg font-bold">Room Details</h2>
            <p className="mt-2">
              Room: {selectedSpace.room} - Space: {selectedSpace.space}
            </p>
            <p className="text-[#69205D]">Rent: ₹5000</p>
            <button
              className="mt-4 w-full bg-[#69205D] text-white py-2 rounded-lg"
              onClick={() => setSelectedSpace(null)}
            >
              Continue
            </button>
          </div>
        </div>
      )}

     
      <style>
        {`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-in-out;
        }
      `}
      </style>
    </div>
  );
};

export default PropertyDashboard;
