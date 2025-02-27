import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

export default function SingleRoomOption() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedRoom = location.state?.selectedRoom || "single";
  const headerTitle = location.state?.headerTitle || ` ${selectedRoom} room option`; // Dynamically receive header title

  useEffect(() => {
    if (!location.state || !location.state.rooms) {
      setRooms([]); // Reset state properly
    } else {
      setRooms(Array.isArray(location.state.rooms) ? [...location.state.rooms] : []);
    }
  }, [location.state]);
  
  const state = location.state || {}; // Ensure state is always an object
  const {
    selectedFeatures = [],
    totalPrice = 0,
    rooms: prevRooms = [],
  } = state;

  const [rooms, setRooms] = useState(
    Array.isArray(prevRooms) ? [...prevRooms] : []
  );

  // ✅ Only add a new entry when the user clicks a button
  const handleAddOptions = () => {
    const isDuplicate = rooms.some(
      (entry) =>
        entry.totalPrice === totalPrice &&
        JSON.stringify(entry.features) === JSON.stringify(selectedFeatures)
    );
  
    if (!isDuplicate) {
      const newEntry = { features: selectedFeatures, totalPrice };
      const updatedRooms = [...rooms, newEntry];
  
      navigate("/Page5", { state: { rooms: updatedRooms, totalOptions: updatedRooms.length } });
    } else {
      navigate("/Page5", { state: { rooms, totalOptions: rooms.length } });
    }
  };
  
  const totalSelectedPrice = rooms.reduce(
    (sum, room) => sum + (Number(room.totalPrice) || 0),
    0
  );

  return (
    <div className="  bg-white min-h-screen rounded-lg  flex flex-col">
      <div className="flex-grow p-4">
      <Header title={headerTitle} />
        <div className="ml-6">
          {/* Add Options Button */}
          <div className="p-4 bg-gray-200 rounded-md mt-4 flex justify-between">
            <span className="font-semibold text-gray-700">Add Options</span>
            <button
              className="text-[#69205D] font-semibold"
              onClick={handleAddOptions}
            >
              + Add
            </button>
          </div>

          {/* Total Selections Display */}
          <div className="mt-4 p-3 border rounded-xl bg-gray-100 flex flex-col">
            <span className="text-gray-700 font-semibold text-lg">Rent</span>

            {rooms.length > 0 ? (
              rooms.map((entry, index) => (
                <div
                  key={index}
                  className="mt-3 p-3 border rounded-md bg-white shadow"
                >
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">
                      Total options
                    </span>
                    <span className="font-bold text-lg text-green-700">
                      ₹{entry.totalPrice}
                    </span>
                  </div>
                  <ul className="list-disc ml-4 mt-2 text-gray-600">
                    {(entry.features || []).map((feature, i) => (
                      <li key={i}>{feature.name}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-2">No rooms added yet.</p>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 ml-6 ">
        <Button
          button="Proceed"
          route="/Add"
          navState={{ rooms, totalPrice: totalSelectedPrice }}
          size="md"
          width="full"
          defaultColor="#69205D"
        />
      </div>
    </div>
  );
}
