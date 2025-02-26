import React, { useState } from "react";
import { FaRestroom, FaBuilding, FaWind, FaShower } from "react-icons/fa";
import Header from "./Header";
import Button from "./Button";

const AddRoomType = () => {
  const [formData, setFormData] = useState({
    sharingType: "",
    rent: "",
    features: [],
  });

  const handleFeatureChange = (feature) => {
    setFormData((prev) => {
      const features = prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features };
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white rounded-lg mt-1">
      <div className="flex-grow p-4">
        <Header title="Add Room Type" />
        <div className="ml-6">
          <div className="mt-4">
            <label className="text-[#69205D] font-medium">Sharing Type</label>
            <input
              type="text"
              placeholder="Add sharing type"
              className="w-full p-2 border rounded mt-1 text-gray-600"
            />
          </div>
          <div className="mt-4">
            <label className="text-[#69205D] font-medium">Rent</label>
            <input
              type="text"
              placeholder="Rent"
              className="w-full p-2 border rounded mt-1 text-gray-600"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-[#69205D] font-medium">Room Features</h2>
            <div className="mt-2 space-y-2">
              {[
                { label: "Attached Washroom", icon: <FaRestroom /> },
                { label: "Attached Balcony", icon: <FaBuilding /> },
                { label: "Air Conditioner", icon: <FaWind /> },
                { label: "Geyser", icon: <FaShower /> },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center justify-between p-2 border-b border-gray-200 "
                >
                  <span className="flex items-center gap-2 text-gray-700">
                    {feature.icon} {feature.label}
                  </span>
                  <div
                    onClick={() => handleFeatureChange(feature.label)}
                    className={`w-5 h-5 border-2 border-[#69205D] rounded-sm flex items-center justify-center cursor-pointer ${
                      formData.features.includes(feature.label)
                        ? "bg-[#69205D]"
                        : "bg-white"
                    }`}
                  >
                    {formData.features.includes(feature.label) && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
      <div className="p-4">
      <Button button="Save" defaultColor="#69205D" route="/roomselect" />
      </div>
    </div>
  );
};

export default AddRoomType;
