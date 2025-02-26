// RoomTypeSelection.js
import React from 'react';
const RoomTypeSelection = ({ roomType, handleRoomTypeClick }) => {
  return (
    <div className="flex justify-between p-4  mr-6 mt-1 ml-6">
      {['Single', 'Double', 'Triple', '3+'].map((type) => (
        <button
          key={type}
          className={`px-5 py-2 rounded-md transition-colors duration-300 ${roomType === type
            ? 'bg-[#69205D] text-white'
            : 'text-gray-700 hover:bg-[#69205D] hover:text-white'
            }`}
          onClick={() => handleRoomTypeClick(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};
export default RoomTypeSelection;