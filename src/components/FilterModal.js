import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const FilterModal = ({ isOpen, onClose }) => {
  const [selectedSharing, setSelectedSharing] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const toggleSharing = (type) => {
    setSelectedSharing((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((item) => item !== feature) : [...prev, feature]
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50"
      ariaHideApp={false}
    >
      {/* Background Click to Close */}
      <div className="w-full h-full flex items-center justify-center" onClick={onClose}>
        {/* Modal Content - Stop Propagation */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-lg font-semibold">Filter</h2>
            <FaTimes className="cursor-pointer text-gray-600" onClick={onClose} />
          </div>

          {/* Filter Options */}
          <div className="mt-4 space-y-4">
            {/* Sharing Type */}
            <div>
              <h3 className="font-medium">Sharing Type</h3>
              {["Single", "Double", "Triple", "3+"].map((type) => (
                <label key={type} className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    checked={selectedSharing.includes(type)}
                    onChange={() => toggleSharing(type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
            <hr className="border-gray-300 my-4" />

            {/* Gender */}
            <div>
              <h3 className="font-medium">Gender</h3>
              {["Boys", "Girls"].map((gender) => (
                <label key={gender} className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    name="gender"
                    checked={selectedGender === gender}
                    onChange={() => setSelectedGender(gender)}
                  />
                  <span>{gender}</span>
                </label>
              ))}
            </div>
            <hr className="border-gray-300 my-4" />

            {/* Room Features */}
            <div>
              <h3 className="font-medium">Room Features</h3>
              {["Attached balcony", "Attached washroom", "Air conditioner"].map((feature) => (
                <label key={feature} className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                  />
                  <span>{feature}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-300 my-4" />

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              className="text-red-500"
              onClick={() => {
                setSelectedSharing([]);
                setSelectedGender(null);
                setSelectedFeatures([]);
              }}
            >
              Clear all
            </button>
            <button className="bg-[#69205d] text-white px-4 py-2 rounded-md">
              Show results
            </button>
          </div>
        </motion.div>
      </div>
    </Modal>
  );
};

export default FilterModal;
