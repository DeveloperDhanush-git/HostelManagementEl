import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { FaTimes, FaChevronRight } from "react-icons/fa";
import roomtype from "../../Assets/roomtype.png";
import flattype from "../../Assets/flattype.png";



const FilterModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50"
      ariaHideApp={false}
    >
      {/* Background Click to Close */}
      <div className="w-full h-full flex items-center justify-center" onClick={onClose}>
        {/* Modal Content */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Header */}
          <h2 className="text-xl font-bold text-center mb-4">Select Property Type</h2>

          {/* Option 1: Room Style */}
          <button className="flex items-center w-full p-4 border-b hover:bg-gray-100">
            <img src={roomtype} alt="Room Style" className="w-10 h-10 mr-4" />
            <div className="flex-grow">
              <p className="text-lg font-semibold">Room Style</p>
              <p className="text-gray-500 text-sm">PG, Hostel, Co-living etc.</p>
            </div>
            <FaChevronRight className="text-gray-500" />
          </button>

          {/* Option 2: Flat Style */}
          <button className="flex items-center w-full p-4 border-b hover:bg-gray-100">
            <img src={flattype} alt="Flat Style" className="w-10 h-10 mr-4" />
            <div className="flex-grow">
              <p className="text-lg font-semibold">Flat Style</p>
              <p className="text-gray-500 text-sm">Apartment, Studio, 2BHK etc.</p>
            </div>
            <FaChevronRight className="text-gray-500" />
          </button>

          {/* Cancel Button */}
          <button
            className="w-full mt-4 py-3 bg-gray-200 text-lg font-semibold rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </motion.div>
      </div>
    </Modal>
  );
};

export default FilterModal;
