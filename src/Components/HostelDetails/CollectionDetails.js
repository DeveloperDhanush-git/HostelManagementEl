// CollectionDetails.js
import React from 'react';

const CollectionDetails = ({ selectedRoom }) => {
  return (
    <div className="p-6">
      <div className="space-y-4">
        <div className="font-semibold text-lg">Collection</div>

        {/* Rent Section */}
        <div className="bg-[#D9D9D9] p-4 rounded-lg">
          <div className="font-semibold text-lg mb-2">Rent</div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            {/* Left Section */}
            <div>
              <div className="font-medium">Rent cycle</div>
              <div>1-1</div>
              <div className="font-medium mt-2">Fixed Amount</div>
              <div>₹{selectedRoom.rent}</div>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <div className="font-medium">Grace period</div>
              <div>7 days</div>
              <div className="font-medium mt-2">Fine Amount</div>
              <div>₹0</div>
            </div>
          </div>
        </div>

        {/* Maintenance Section */}
        <div className="bg-[#D9D9D9] p-4 rounded-lg">
          <div className="font-semibold text-lg mb-2">Maintenance</div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            {/* Left Section */}
            <div>
              <div className="font-medium">Pay cycle</div>
              <div>1-1</div>
              <div className="font-medium mt-2">Repetition</div>
              <div>Monthly</div>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <div className="font-medium">Grace period</div>
              <div>0 days</div>
              <div className="font-medium mt-2">Fine Amount</div>
              <div>₹0</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CollectionDetails;
