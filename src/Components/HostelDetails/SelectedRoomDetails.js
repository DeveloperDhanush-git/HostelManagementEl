// SelectedRoomDetails.js
import React from 'react';

const SelectedRoomDetails = ({ selectedRoom }) => {
  return (
    <div className="p-6 mr-6 ml-6 bg-[#E0F0F8] rounded-lg">
      <div className="text-xl font-semibold text-black px-4 py-2 inline-block">
        {selectedRoom.type.replace(' Sharing Bed', ' Sharing Bed')}
      </div>
      <div className="mt-4">
        {selectedRoom.features.map((feature) => (
          <div key={feature} className="flex items-center text-black mb-2">
            <img src="assest/image.png" alt="Feature Icon" className="w-4 h-4 mr-2" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center p-4 mt-4 mb-2 bg-[#69205D] rounded-xl w-max h-12">
        <div className="font-semibold text-lg text-black bg-white rounded w-20 text-center">
          Rent
        </div>
        <div className="text-2xl font-bold text-white  px-8 py-2">
          ₹{selectedRoom.rent}
        </div>
      </div>
    </div>
  );
};

export default SelectedRoomDetails;