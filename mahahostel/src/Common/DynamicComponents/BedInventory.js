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
  const [isBedDetailsOpen, setIsBedDetailsOpen] = useState(null); 
  const [occupiedSpaces, setOccupiedSpaces] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleIconClick = (iconKey) => {
    if (iconKey === "pencil") {
      navigate("/edit-hostel");
    } else if (iconKey === "bed") {
      setIsOpen(true);
    }
  };
  
  const LegendItem = ({ bgColor, border, label }) => {
    return (
      <div className="flex flex-col items-center justify-between">
        <div className={`w-16 h-23 rounded-md ${bgColor || ""} ${border || ""}`} />
        <span className="text-sm mt-2">{label}</span>
      </div>
    );
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

  const handleSpaceClick = (roomId, space) => {
    const spaceKey = `${roomId}-${space}`;
    if (occupiedSpaces.includes(spaceKey)) {
      setOccupiedSpaces(occupiedSpaces.filter((s) => s !== spaceKey));
      setIsBedDetailsOpen(false);
    } else {
      setOccupiedSpaces([...occupiedSpaces, spaceKey]);
      setSelectedSpace({ room: roomId, space });
      setIsBedDetailsOpen(true);
    }
  };

  const closePopup = () => {
    setIsBedDetailsOpen(false);
    setSelectedSpace(null);
    setOccupiedSpaces([]); // Reset occupied spaces when popup closes
  };

  return (
    <div className="min-h-screen flex flex-col bg-white rounded-lg mt-1"
     style={{ fontFamily: "Montserrat" }}>
      <div className="flex-grow p-4">

<Header title="Maha Hostel" icons={["pencil", "bed", "sliders"]} route="/" onIconClick={(icon) => {
    if (icon === "pencil") {
      navigate("/edit");
    } else if (icon === "bed") {
      setIsOpen(true);
    }
}} />

      <div className="ml-6">
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

      <div className="overflow-x-auto scrollbar-hide py-4">
  <div className="flex md:space-x-4  md:justify-between">
    {floors.map((floor) => (
      <button
        key={floor.name}
        className={`px-3 py-2 rounded-lg  cursor-pointer transition whitespace-nowrap ${
          selectedFloor.name === floor.name ? "bg-[#69205D] text-white" : "text-black"
        }`}
        onClick={() => setSelectedFloor(floor)}
      >
        {floor.name}
      </button>
    ))}
  </div>
</div>

<div className="py-4 space-y-4">
      {selectedFloor.rooms.map((roomId) => (
        <div key={roomId} className="flex items-center space-x-6">
          <button className="bg-[#69205D] text-white px-10 py-3 rounded-lg font-bold text-center">
            {roomId}
          </button>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((space) => (
              <button
                key={`${roomId}-${space}`}
                className={`w-9 h-13 rounded-lg transition duration-300 flex items-center justify-center ${
                  occupiedSpaces.includes(`${roomId}-${space}`) ? "bg-[#69205D]" : "bg-gray-300"
                }`}
                onClick={() => handleSpaceClick(roomId, space)}
              >
              </button>
            ))}

            </div>
          </div>
      ))}
         </div> 
      
    

{isBedDetailsOpen && selectedSpace && (
        <div 
        className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center 
transition-opacity duration-300 p-4"

          onClick={() => setIsBedDetailsOpen(false)}
        >
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            className="bg-white p-5 rounded-xl shadow-lg w-full max-w-sm popup-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Bed Details</h2>
            <div className="flex justify-between gap-2  text-sm mt-1 ">
              <span>🛏 {selectedSpace.room}</span>
              <span>👤 1</span>
              <span className="bg-[#E0E0E0] text-xs font-bold px-2 py-1 ml-8 rounded-md">VACANT</span>
            </div>
            </div>
            <h3 className="text-green-600 font-bold text-xl mt-4 flex justify-center">SINGLE</h3>
            <ul className="mt-3 text-gray-600">
              <li>✔ Attached Balcony</li>
              <li>✔ Attached Washroom</li>
              <li>✔ Air Conditioner</li>
              <li>✔ Geyser</li>
            </ul>
            <p className="text-xl font-bold mt-4">₹ 5000/-</p>
            <p className="text-gray-500 text-sm">Security - ₹ 2500</p>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" className="w-1/2" size="md" button="/*Link Tenant" onClick={() => setIsBedDetailsOpen(false)} />
              <Button className="w-1/2" size="md" button="Add Tenant" onClick={() => setIsBedDetailsOpen(false)} route="/test" defaultColor="#69205D" />
            </div>
          </motion.div>
        </div>
      )}


      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]  flex items-center justify-center transition-opacity duration-300">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow-lg  relative"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
                {/* Bed Inventory Legend UI */}

                <div className="p-4 text-center">
      <h2 className="text-lg font-semibold mb-4">Bed Status Legend</h2>
      <div className="flex flex-row gap-6">
        <LegendItem border="border border-black" label="Vacant" />
        <LegendItem bgColor="bg-[#C3E6CB] " label="Occupied" />
        <LegendItem bgColor="bg-[#FFEB99]" label="Booked" />
        <LegendItem bgColor="bg-[#D6A6B1]" label="Ending" />
      </div>
    </div>

          </motion.div>
        </div>
      )}
    </div>
      </div>
    </div>
   
  );
}

export default PropertyDashboard;
