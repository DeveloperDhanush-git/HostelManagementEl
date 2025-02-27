import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import Prop from '../assets/prop.png'

const TenantDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get room type and previous state
  const selectedRoom = location.state?.selectedRoom || "Single";
  const room = location.state?.room || [];
  const headerTitle = location.state?.headerTitle || ` ${selectedRoom} room option`; 

  const featuresList = [
    { name: "Attached Washroom", price: 1000 },
    { name: "Attached Balcony", price: 800 },
    { name: "Air Conditioner", price: 1500 },
    { name: "Geyser", price: 700 },
  ];

  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [manualAmount, setManualAmount] = useState("");

  useEffect(() => {
    if (isNaN(manualAmount) || manualAmount < 0) {
      setManualAmount("");
    }
  }, [manualAmount]);

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) => {
      const exists = prev.some((item) => item.name === feature.name);
      const updatedFeatures = exists
        ? prev.filter((item) => item.name !== feature.name)
        : [...prev, feature];
  
      console.log("Updated selectedFeatures:", updatedFeatures);
      return updatedFeatures;
    });
  };
  

  const totalPrice =
    (manualAmount ? Number(manualAmount) : 0) +
    selectedFeatures.reduce((sum, feature) => sum + feature.price, 0);

    const handleNext = () => {
      const newEntry = { features: selectedFeatures, totalPrice, manualAmount };
      const updatedRooms = [...room, newEntry];
    
      console.log("Final state before navigation:", {
        selectedFeatures,
        totalPrice,
        manualAmount,
        rooms: updatedRooms,
      });
    
      navigate("/Page6", {
        state: {
          selectedFeatures,
          totalPrice,
          manualAmount,
          rooms: updatedRooms,
          headerTitle: ` ${selectedRoom} Room option`, // Pass title dynamically
        },
      });
      
    };
    
    

    
    

  return (
    <div className=" bg-white min-h-screen rounded-lg flex flex-col">
      <div className="flex-grow p-4">
      <Header title={headerTitle} />

        <div className="mt-4  ml-6">
          <label className="block text-gray-700 font-bold">Enter Amount</label>
          <input
            type="text"
            value={manualAmount}
            onChange={(e) => setManualAmount(e.target.value.replace(/\D/, ""))}
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl"
            placeholder="Enter base amount"
          />

          <h2 className="font-medium text-lg mt-6 mb-4">Room Features</h2>
          <div className="space-y-1">
            {featuresList.map((feature) => (
              <label
                key={feature.name}
                className="flex items-center justify-between cursor-pointer p-4 bg-white hover:bg-gray-100"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={Prop}
                    alt={feature.name}
                    className="w-7 h-7"
                  />
                  <span className="text-gray-700 text-lg">{feature.name}</span>
                </div>
                <div
                  className={`w-7 h-7 border-2 rounded-md flex items-center justify-center cursor-pointer transition-all ${
                    selectedFeatures.some((item) => item.name === feature.name)
                      ? "bg-purple-700 border-purple-700"
                      : "border-gray-400"
                  }`}
                  onClick={() => toggleFeature(feature)}
                >
                  {selectedFeatures.some(
                    (item) => item.name === feature.name
                  ) && (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 ml-6">
        <Button button="Next" defaultColor="#69205D"onClick={handleNext} />
      </div>
    </div>
  );
};

export default TenantDetails;
