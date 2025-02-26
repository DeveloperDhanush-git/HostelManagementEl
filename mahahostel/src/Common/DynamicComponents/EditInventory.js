import { useState } from "react";
import Header from "./Header";
import Button from "./Button";

export default function EditInventory() {
  const [selectedFloor, setSelectedFloor] = useState("Ground");
  const [selectedUnits, setSelectedUnits] = useState({});
  const floors = ["Ground", "First", "Second", "Third", "Fourth"];
  const units = [
    { id: "001", inputs: 1 },
    { id: "002", inputs: 2 },
    { id: "003", inputs: 1 },
    { id: "004", inputs: 3 },
    { id: "005", inputs: 3 },
    { id: "006", inputs: 2 },
    { id: "007", inputs: 1 },
  ];

  // Toggle individual checkboxes
  const toggleUnitSelection = (id) => {
    setSelectedUnits((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Reverse select/unselect logic
  const toggleSelectAll = () => {
    const allDeselected = Object.values(selectedUnits).every((val) => val === false || val === undefined);
    const newSelection = {};
    units.forEach((unit) => {
      newSelection[unit.id] = allDeselected;
    });
    setSelectedUnits(newSelection);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white rounded-lg mt-1">

<div className="flex-grow p-4">
      <Header title="Edit Inventory" />

      <div className="ml-6">

      <div className="flex text-sm font-medium">
        {floors.map((floor) => (
          <button
            key={floor}
            className={`p-2 w-full transition whitespace-nowrap relative text-xl ${
              selectedFloor === floor ? "text-[#69205D] font-bold" : "text-black"
            }`}
            onClick={() => setSelectedFloor(floor)}
          >
            {floor}
            {selectedFloor === floor && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#69205D] transition-all duration-300"></div>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-between text-sm font-bold text-gray-700 bg-[#F5F5F5] p-3 mt-2">
        <span>{selectedFloor} Floor</span>
        <button className="text-blue-500 cursor-pointer" onClick={toggleSelectAll}>
          {Object.values(selectedUnits).every((val) => val === false || val === undefined)
            ? "Select All"
            : "Unselect All"}
        </button>
      </div>

      <div className="p-4 bg-white rounded  mt-2 mb-20">
        {units.map((unit) => (
          <div key={unit.id} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-none">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium w-10">{unit.id}</span>
              <div className="flex space-x-1">
                {Array.from({ length: unit.inputs }).map((_, i) => (
                  <div key={i} className="w-6 h-6 border border-gray-400 rounded"></div>
                ))}
              </div>
            </div>
            <input
              type="checkbox"
              className="w-5 h-5 border-gray-400 rounded cursor-pointer"
              checked={selectedUnits[unit.id] || false}
              onChange={() => toggleUnitSelection(unit.id)}
            />
          </div>
        ))}
      </div>

      <Button button="Edit Units" defaultColor="#69205D" route="/roomselect" />
    </div>
    </div>
  </div>  
  );
}
