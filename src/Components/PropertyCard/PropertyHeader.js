import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PropertyHeader = ({ buttonName }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className="flex items-center space-x-2 py-4">
      <FaArrowLeft
        className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200"
        onClick={handleBackClick}
      />
      <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
        <span className="text-2xl font-semibold">{buttonName}</span>
      </div>
    </div>
  );
};

export default PropertyHeader;
