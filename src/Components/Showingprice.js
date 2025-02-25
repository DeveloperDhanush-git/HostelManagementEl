import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function SingleRoomOption() {
  const location = useLocation();
  const navigate = useNavigate();

  // Load stored data from localStorage
  const storedEntries = JSON.parse(localStorage.getItem("Roms")) || [];

  // Extract values from location state (when navigating)
  const { selectedFeatures = [], totalPrice = 0 } = location.state || {};

  // Check if the new entry already exists in storedEntries
  const newEntry = selectedFeatures.length > 0 ? { features: selectedFeatures, totalPrice } : null;

  // State to store room entries
  const [rooms, setRoomEntries] = useState(storedEntries);

  useEffect(() => {
    if (newEntry) {
      const isDuplicate = storedEntries.some(
        (entry) =>
          JSON.stringify(entry.features) === JSON.stringify(newEntry.features) &&
          entry.totalPrice === newEntry.totalPrice
      );

      if (!isDuplicate) {
        const updatedEntries = [...storedEntries, newEntry];
        setRoomEntries(updatedEntries);
        localStorage.setItem("Roms", JSON.stringify(updatedEntries));
      }
    }
  }, [newEntry]);

  // Navigate back to TenantDetails while keeping old selections
  const handleAddOptions = () => {
    navigate("/", { state: { selectedFeatures, totalPrice } });
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-white">
      <Header title="Single Room Option" onBack={() => navigate(-1)} />

      <div className="ml-6">
        <div className="p-4 bg-gray-200 rounded-md mt-4 flex justify-between">
          <span className="font-semibold text-gray-700">Add Options</span>
          <button className="text-[#69205D] font-semibold" onClick={handleAddOptions}>
            + Add
          </button>
        </div>

        <div className="mt-4 p-3 border rounded-xl bg-gray-100 flex flex-col">
          <span className="text-gray-700 font-semibold text-lg">Total Selections</span>

          {rooms.map((entry, index) => (
            <div key={index} className="mt-3 p-3 border rounded-md bg-white shadow">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Total Price</span>
                <span className="font-bold text-lg text-green-700">₹{entry.totalPrice}</span>
              </div>
              <ul className="list-disc ml-4 mt-2 text-gray-600">
                {entry.features.map((feature, i) => (
                  <li key={i}>{feature.name}</li> // Showing only the feature name
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4">
        <button
          onClick={() => navigate("/", { state: { rooms } })}
          className="w-full bg-[#69205D] text-white py-3 rounded-md font-semibold"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
