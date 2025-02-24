import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
  return (
    
      <div className="flex items-center space-x-2 py-4">
       
        <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />

        <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
          <span className="text-2xl font-semibold">Maha Hostel</span>
        </div>
      </div>
   
  );
}

export default Header;
