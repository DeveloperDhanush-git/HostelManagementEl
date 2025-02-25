import React, { useState, useEffect } from "react";
import { FaBed } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import { motion } from "framer-motion"; 
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pending dues");
  const [isVacancyDropdownOpen, setIsVacancyDropdownOpen] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState("Vacant, Occupied");
  const [isBedDetailsOpen, setIsBedDetailsOpen] = useState(false); 

  const navigate = useNavigate();

  const handleIconClick = (iconKey) => {
    if (iconKey === "pencil") {
      navigate("/edit-hostel");
    }

  };

  useEffect(() => { 
    const handleClickOutside = (event) => {
      if (!event.target.closest(".date-picker-dropdown")) {
        setIsDateOpen(false);
      }
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
      if (!event.target.closest(".vacancy-dropdown")) {
        setIsVacancyDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}>

<Header title="Maha Hostel" icons={["pencil", "bed", "sliders"]} onIconClick={(icon) => {
    if (icon === "pencil") {
      navigate("/edit");
    }   
}} />


      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-4">
        <div className="relative dropdown">
          <button className="bg-[#D8E0E6] text-black px-4 py-2 rounded-lg text-sm w-full" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedOption} ▼
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-md rounded-lg mt-1 w-full z-10">
              {["Pending dues", "Off-boarding", "Move-in", "Token pending"].map((option) => (
                <button key={option} className="w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => {
                  setSelectedOption(option);
                  setIsDropdownOpen(false);
                }}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative date-picker-dropdown">
          <button className="bg-[#D8E0E6] text-black rounded-lg text-sm w-full py-2 px-4" onClick={() => setIsDateOpen(!isDateOpen)}>
            {selectedDate.toDateString()} ▼
          </button>

          {isDateOpen && (
            <div className="absolute left-0 right-0 md:left-auto md:right-auto overflow-hidden flex justify-center z-50">
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

        <div className="relative vacancy-dropdown">
          <button className="bg-[#D8E0E6] text-black px-4 py-2 rounded-lg text-sm w-full" onClick={() => setIsVacancyDropdownOpen(!isVacancyDropdownOpen)}>
            {selectedVacancy} ▼
          </button>
          {isVacancyDropdownOpen && (
            <div className="absolute bg-white shadow-md rounded-lg mt-1 w-full z-10">
              {["Vacant", "Occupied", "Both"].map((option) => (
                <button key={option} className="w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => {
                  setSelectedVacancy(option);
                  setIsVacancyDropdownOpen(false);
                }}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex md:justify-between py-4">
        {floors.map((floor) => (
          <button key={floor.name} className={`px-3 py-2 mr-1 rounded-lg font-semibold cursor-pointer transition whitespace-nowrap ${
            selectedFloor.name === floor.name ? "bg-[#69205D] text-white" : "text-black"
          }`} onClick={() => setSelectedFloor(floor)}>
            {floor.name}
          </button>
        ))}
      </div>

      <div className="py-4 space-y-4">
        {selectedFloor.rooms.map((roomId) => (
          <div key={roomId} className="flex items-center space-x-4">
            <button className="bg-[#69205D] text-white px-10 py-3 rounded-lg font-bold">{roomId}</button>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((space) => (
                <button key={`${roomId}-${space}`} className={`w-12 h-12 rounded-lg transition duration-300 ${
                  occupiedSpaces.includes(`${roomId}-${space}`) ? "bg-[#69205D]" : "bg-gray-300"
                }`} onClick={() => {
                  if (!occupiedSpaces.includes(`${roomId}-${space}`)) {
                    setSelectedSpace({ room: roomId, space });
                    setIsBedDetailsOpen(true); 
                  }
                }}>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>       

      {isBedDetailsOpen && (
    <div 
      className="fixed inset-0 bg-[#B2B2B2] bg-opacity-10 flex justify-center items-center transition-opacity duration-300"
      onClick={() => setIsBedDetailsOpen(false)} // Close popup when clicking outside
    >
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="bg-white p-5 rounded-xl shadow-lg w-80 popup-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-lg font-semibold">Bed Details</h2>
        <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
          <span>🛏 {selectedSpace?.room}</span>
          <span>👤 1</span>
          <span className="bg-gray-300 text-xs px-2 py-1 rounded-md">VACANT</span>
        </div>
        <h3 className="text-green-600 font-bold text-xl mt-2">SINGLE</h3>
        <ul className="mt-3 text-gray-600">
          <li>✔ Attached Balcony</li>
          <li>✔ Attached Washroom</li>
          <li>✔ Air Conditioner</li>
          <li>✔ Geyser</li>
        </ul>
        <p className="text-xl font-bold mt-4">₹ 5000/-</p>
        <p className="text-gray-500 text-sm">Security - ₹ 2500</p>
        <div className="flex gap-10 mt-4 ml-2">
          <Button variant="outline" className="w-1/2" size="md" button="/*Link Tenant" onClick={() => setIsBedDetailsOpen(false)} />
          <Button className="md:w-1/2" size="md" button="Add Tenant" onClick={() => setIsBedDetailsOpen(false)} route="/test" defaultColor="#69205D" />
        </div>
      </motion.div>
    </div>
  )}
</div>
   
  );
};

export default PropertyDashboard;
