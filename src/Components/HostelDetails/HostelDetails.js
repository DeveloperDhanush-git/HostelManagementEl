// HostelDetails.js
import React, { useState } from 'react';
import RoomTypeSelection from './RoomTypeSelection';
import SelectedRoomDetails from './SelectedRoomDetails';
import ServicesFeaturesFurnishings from './ServicesFeaturesFurnishings';
import CollectionDetails from './CollectionDetails';
import TermsOfAgreement from './TermsOfAgreement';
import { FaArrowLeft, FaPen } from 'react-icons/fa';

const HostelDetails = () => {
  const [roomType, setRoomType] = useState('Single');
  const [selectedRoom, setSelectedRoom] = useState({
    type: 'Single Sharing Bed',
    features: ['Attached Balcony', 'Attached Washroom', 'Air Conditioner', 'Geyser'],
    rent: 2500,
    services: ['Food', 'Wifi', 'Laundry'],
    propertyFeatures: ['Security', 'Parking', 'Lift'],
    propertyFurnishings: ['Sofa', 'Table', 'Chair'],
    propertyFurnishingsProperty: ['Fridge', 'Washing Machine', 'Microwave'],
    propertyPrimeFeatures: ['Security', 'Parking', 'Lift'],
    propertyHouseRules: ['Non veg food is not allowed.', 'Smoking is not allowed.']
  });

  const handleRoomTypeClick = (type) => {
    const roomData = {
      Single: {
        type: 'Single Sharing Bed',
        rent: 2500,
        features: ['Attached Balcony', 'Attached Washroom', 'AC', 'Geyser'],
      },
      Double: {
        type: 'Double Sharing Bed',
        rent: 3500,
        features: ['Attached Bathroom', 'Air Conditioner', 'Study Table', 'Chair'],
      },
      Triple: {
        type: 'Triple Sharing Bed',
        rent: 4500,
        features: ['Attached Bathroom', 'Air Conditioner', 'Geyser'],
      },
      '3+': {
        type: 'Multiple Sharing Bed',
        rent: 5500,
        features: ['Attached Bathroom', 'Fan', 'Table'],
      },
    };

    setSelectedRoom({
      ...roomData[type],
      services: ['Food', 'Wifi', 'Laundry'],
      propertyFeatures: ['Security', 'Parking', 'Lift'],
      propertyFurnishings: ['Sofa', 'Table', 'Chair'],
      propertyFurnishingsProperty: ['Fridge', 'Washing Machine', 'Microwave'],
      propertyPrimeFeatures: ['Security', 'Parking', 'Lift'],
      propertyHouseRules: ['Non veg food is not allowed.', 'Smoking is not allowed.', 'Drinking is not allowed']
    });
    setRoomType(type);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 font-[Montserrat]">
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <div className="absolute top-3 ml-6 left-4 z-10">
          <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
        </div>
        <div className="absolute top-4 mb-4 mr-7 right-4 z-10">
          <FaPen className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
        </div>

        {/* Image */}
        <div className="h-81 mt-5 flex items-center justify-center relative">
          <img
            src="assest/gallery.png"
            alt="Hostel Gallery"
            className="h-full w-full mr-6 ml-6 mt-12 object-cover rounded-lg"
          />
        </div>

        {/* Hostel Details */}
        <div className="p-6 rounded-t-lg mr-6 mt-6 ml-6">
          <div className="text-sm text-gray-600">CRIB005679</div>
          <div className="text-2xl font-semibold">Maha Hostel</div>
          <div className="text-sm text-gray-600">No. 03, ABC Road</div>
          <div className="text-xl text-gray-600 mt-4">Select Room Type</div>
        </div>

        {/* Room Type Selection */}
        <RoomTypeSelection roomType={roomType} handleRoomTypeClick={handleRoomTypeClick} />

        {/* Selected Room Details */}
        <SelectedRoomDetails selectedRoom={selectedRoom} />

        {/* Services, Property Features, Furnishings */}
        <ServicesFeaturesFurnishings selectedRoom={selectedRoom} />

        {/* House Rules */}
        <div className="p-6">
          <div className="mt-1">
            <div className="font-semibold text-lg">House Rules</div>
            <ul className="mt-2 text-sm text-gray-600 list-decimal list-inside space-y-2">
              <li>Non veg food is not allowed.</li>
              <li>Smoking is not allowed.</li>
              <li>Drinking is not allowed.</li>
              <li>Guardian is not allowed.</li>
              <li>Visitors are not allowed.</li>
              <li>Guests of opposite gender are not allowed.</li>
              <li>Pets are not allowed.</li>
            </ul>
          </div>
        </div>

        {/* Collection */}
        <CollectionDetails selectedRoom={selectedRoom} />

        {/* Terms of Agreement */}
        <TermsOfAgreement />
      </div>
    </div>
  );
};

export default HostelDetails;