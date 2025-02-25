import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Header from "./Header";
import Button from "./Button";

const HostelBedSelection = () => {
  const [selectedBeds, setSelectedBeds] = useState({});

  const toggleSelectAll = (floor) => {
    const newSelectedBeds = { ...selectedBeds };
    const allSelected = floor.beds.every((bed) => selectedBeds[bed.id]);
    floor.beds.forEach((bed) => {
      newSelectedBeds[bed.id] = !allSelected;
    });
    setSelectedBeds(newSelectedBeds);
  };

  const toggleBedSelection = (bedId) => {
    setSelectedBeds({ ...selectedBeds, [bedId]: !selectedBeds[bedId] });
  };

  const floors = [
    {
      name: "Ground floor",
      beds: [
        { id: "0001", name: "0001" },
        { id: "0002", name: "0002" },
      ],
    },
    {
      name: "First floor",
      beds: [
        { id: "room1up", name: "Room 1 Up" },
        { id: "room1down", name: "Room 1 Down" },
      ],
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 h-auto flex flex-col md:p-6">
      <Header title="Maha Hostel" />
      <p className="text-purple-700 font-bold text-sm">STEP 3 of 3</p>
      <h2 className="text-xl font-bold mb-4">Add Beds</h2>
      {floors.map((floor, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{floor.name}</h3>
            <button
              className="bg-[#69205D] text-white px-3 py-1 rounded-md text-sm"
              onClick={() => toggleSelectAll(floor)}
            >
              {floor.beds.every((bed) => selectedBeds[bed.id]) ? 'Unselect all' : 'Select all'}
            </button>
          </div>
          <div className="mt-2">
            {floor.beds.map((bed) => (
              <div key={bed.id} className="flex items-center gap-2 mb-2">
                <span>🛏️</span>
                <span className="flex-1">{bed.name}</span>
                <input
                  type="checkbox"
                  checked={selectedBeds[bed.id] || false}
                  onChange={() => toggleBedSelection(bed.id)}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <Button button="Add Beds" defaultColor="#69205D" route="/"/>
    </div>
  );
};

export default HostelBedSelection;
