import React from "react";
import { useNavigate } from "react-router-dom";
import MeterImage from "../Assets/meter.png"; 
import { FaChevronRight } from "react-icons/fa";

const HostelDetails = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-2 p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mx-auto">
      
      {/* Hostel Info & Buttons */}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-semibold text-black">Maha Hostel</h3>
        <p className="text-gray-600 text-sm">9 Beds</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button 
            className="bg-[#69205D] text-white px-6 py-3 rounded-md text-lg font-semibold flex-1 flex justify-between items-center w-full sm:w-auto"
            onClick={() => navigate("/occupied-details")}
          >
            <div className="flex flex-col w-28 sm:w-40">
              <span>Occupied</span>
              <span className="text-2xl font-bold">3</span>
            </div>
            <FaChevronRight />
          </button>
          <button 
            className="bg-[#69205D] text-white px-6 py-3 rounded-md text-lg font-semibold flex-1 flex justify-between items-center w-full sm:w-auto"
            onClick={() => navigate("/vacant-details")}
          >
            <div className="flex flex-col w-28 sm:w-40">
              <span>Vacant</span>
              <span className="text-2xl font-bold">9</span>
            </div>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Meter & View Button */}
      <div className="w-full md:w-1/2 flex flex-col items-end lg:items-end mt-4 md:mt-0">
        <button
          onClick={() => navigate("/property-details")}
          className="text-blue-600 font-semibold text-lg flex items-center gap-1"
        >
          View <FaChevronRight />
        </button>
        <img 
          src={MeterImage} 
          alt="Meter Indicator" 
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto mt-2"
        />
      </div>

    </section>
  );
};

export default HostelDetails;
