import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const TenantDetails = () => {
  const navigate = useNavigate();

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
      return exists
        ? prev.filter((item) => item.name !== feature.name)
        : [...prev, feature];
    });
  };

  const totalPrice =
    (manualAmount ? Number(manualAmount) : 0) +
    selectedFeatures.reduce((sum, feature) => sum + feature.price, 0);

  const handleNext = () => {
    navigate("/single-room", {
      state: {
        selectedFeatures,
        totalPrice,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Single Room Option" />
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-md mt-4 w-full flex-grow">
        <div className="mt-4">
          <label className="block text-gray-700 font-bold">Enter Amount</label>
          <input
            type="text"
            value={manualAmount}
            onChange={(e) => setManualAmount(e.target.value.replace(/\D/, ""))}
            className="w-full mt-2 p-3 border border-gray-300 rounded-xl"
            placeholder="Enter base amount"
          />
        </div>
        <h2 className="font-medium text-lg mt-6 mb-4">Room Features</h2>
        <div className="space-y-6">
          {featuresList.map((feature) => (
            <label
              key={feature.name}
              className="flex items-center justify-between cursor-pointer p-4 bg-white hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <img src="./assets/prop.png" alt={feature.name} className="w-7 h-7" />
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
                {selectedFeatures.some((item) => item.name === feature.name) && (
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
      <div className="mt-auto p-4 w-full bg-white shadow-md">
        <div onClick={handleNext}>
          <Button button="Next" />
        </div>
      </div>
    </div>
  );
};

export default TenantDetails;
