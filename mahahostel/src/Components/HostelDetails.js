import React, { useState } from 'react';

const HostelDetails = () => {
  const [roomType, setRoomType] = useState('Single');
  const [selectedRoom, setSelectedRoom] = useState({
    type: 'Single Sharing Bed',
    features: ['Attached Balcony', 'Attached Washroom', 'Air Conditioner', 'Geyser'],
    rent: 2500,
    services: ['Food', 'Wifi', 'Laundry'],
    propertyFeatures: ['Security', 'Parking', 'Lift'],
    propertyFrunshings: ['Sofa', 'Table', 'Chair'],
  });

  const handleRoomTypeClick = (type) => {
    setRoomType(type);
    const roomData = {
      Single: {
        type: 'Single Sharing Bed',
        rent: 2500,
      },
      Double: {
        type: 'Double Sharing Bed',
        rent: 3500,
      },
      Triple: {
        type: 'Triple Sharing Bed',
        rent: 4500,
      },
      '3+': {
        type: 'Multiple Sharing Bed',
        rent: 5500,
      },
    };

    setSelectedRoom({
      ...roomData[type],
      features: ['Attached Balcony', 'Attached Washroom', 'Air Conditioner', 'Geyser'],
      services: ['Food', 'Wifi', 'Laundry'],
      propertyFeatures: ['Security', 'Parking', 'Lift'],
      propertyFrunshings: ['Sofa', 'Table', 'Chair'],
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto p-6 font-[Montserrat] bg-white rounded-lg mt-1">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <div className="h-96 flex items-center justify-center">
          <img src="assest/gallery.png" alt="Hostel Gallery" className="h-full w-full object-cover rounded-lg" />
        </div>

        {/* Hostel Details */}
        <div className="p-6 rounded-t-lg">
          <div className="text-sm text-gray-600">CRIB005679</div>
          <div className="text-2xl font-semibold">Maha Hostel</div>
          <div className="text-sm text-gray-600">No. 03, ABC Road</div>
          <div className="text-xl text-gray-600 p-6">Select Room Type</div>
        </div>

        {/* Room Type Selection */}
        <div className="flex justify-between p-4 border-b">
          {['Single', 'Double', 'Triple', '3+'].map((type) => (
            <button
              key={type}
              className={`px-10 py-3 rounded-md transition-colors duration-300 ${
                roomType === type
                  ? 'bg-[#69205D] text-white'
                  : 'text-gray-700 hover:bg-[#69205D] hover:text-white'
              }`}
              onClick={() => handleRoomTypeClick(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Selected Room Details */}
        <div className="p-6 bg-[#7C9DB3] rounded-b-lg">
          <div className="text-xl font-semibold text-black px-4 py-2 inline-block">{selectedRoom.type.replace(' Sharing Bed', '')}</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {selectedRoom.features.map((feature) => (
              <div key={feature} className="flex items-center text-black">
                <span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center justify-between mt-4 mb-2 py-5 bg-white text-black rounded-lg px-4 shadow-md">
            <div className="font-semibold text-lg">Rent:</div>
            <div className="text-2xl font-bold">₹{selectedRoom.rent}</div>
          </div>
        </div>

        {/* Services and Property Features */}
        <div className="p-6">
          <div className="bg-[#E0F0F8] p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="assest/pic.png" alt="Service Icon" className="w-6 h-6 mr-2" />
                <div className="font-semibold text-lg">Services</div>
              </div>
              <button className="text-[#69205D]">+ Add</button>
            </div>
            <div className="mt-2 text-sm text-gray-600">{selectedRoom.services?.join(', ')}</div>
          </div>

          <div className="mt-6 bg-[#E0F0F8] p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="assest/pic.png" alt="Property Icon" className="w-6 h-6 mr-2" />
                <div className="font-semibold text-lg">Property Features</div>
              </div>
              <button className="text-[#69205D]">+ Add</button>
            </div>
            <div className="mt-2 text-sm text-gray-600">{selectedRoom.propertyFeatures?.join(', ')}</div>
          </div>

          <div className="mt-6 bg-[#E0F0F8] p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="assest/pic.png" alt="Furniture Icon" className="w-6 h-6 mr-2" />
                <div className="font-semibold text-lg">Furnishings</div>
              </div>
              <button className="text-[#69205D]">+ Add</button>
            </div>
            <div className="mt-2 text-sm text-gray-600">{selectedRoom.propertyFrunshings?.join(', ')}</div>
          </div>

          {/* House Rules */}
          <div className="mt-6">
            <div className="font-semibold text-lg">House Rules</div>
            <ul className="mt-2 text-sm text-gray-600 list-decimal list-inside">
              <li>Non veg food is not allowed.</li>
              <li>Smoking is not allowed.</li>
              <li>Drinking is not allowed.</li>
              <li>Guardian is not allowed.</li>
              <li>Visitors are not allowed.</li>
              <li>Guests of opposite gender are not allowed.</li>
              <li>Pets are not allowed.</li>
            </ul>
          </div>

          {/* Collection */}
          <div className="mt-6">
            <div className="font-semibold text-lg">Collection</div>
            <div className="grid grid-cols-1 gap-4 mt-2">
              <div className="bg-[#D9D9D9] p-4 rounded-lg">
                <div className="font-semibold text-lg mb-2">Rent</div>
                <div className="text-sm text-gray-600">Rent cycle: 1-1</div>
                <div className="text-sm text-gray-600">Grace period: 7 days</div>
                <div className="text-sm text-gray-600">Fixed Amount: ₹{selectedRoom.rent}</div>
              </div>

              <div className="bg-[#D9D9D9] p-4 rounded-lg">
                <div className="font-semibold text-lg mb-2">Maintenance</div>
                <div className="text-sm text-gray-600">Pay cycle: 1-1</div>
                <div className="text-sm text-gray-600">Grace period: 0 days</div>
                <div className="text-sm text-gray-600">Repetition: Monthly</div>
                <div className="text-sm text-gray-600">Fine Amount: ₹0</div>
              </div>
            </div>
          </div>

          {/* Terms of Agreement */}
          <div className="mt-10">
            <div className="font-semibold text-lg">Terms of Agreement</div>
            <div className="grid grid-cols-1 gap-2 mt-2">
              <div className="bg-[#D9D9D9] p-1 rounded-lg flex justify-between">
                <div className="text-sm text-gray-600">Security deposit:</div>
                <div className="text-sm text-gray-600">0.5 Months</div>
              </div>
              <div className="bg-[#D9D9D9] p-1 rounded-lg flex justify-between">
                <div className="text-sm text-gray-600">Agreement duration:</div>
                <div className="text-sm text-gray-600">1 Month</div>
              </div>
              <div className="bg-[#D9D9D9] p-1 rounded-lg flex justify-between">
                <div className="text-sm text-gray-600">Lock-in period:</div>
                <div className="text-sm text-gray-600">0.5 Months</div>
              </div>
              <div className="bg-[#D9D9D9] p-1 rounded-lg flex justify-between">
                <div className="text-sm text-gray-600">Notice period:</div>
                <div className="text-sm text-gray-600">0.5 Months</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HostelDetails;
