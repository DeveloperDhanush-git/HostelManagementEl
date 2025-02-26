import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation for retrieving passed data
import RoomTypeSelection from './RoomTypeSelection';
import SelectedRoomDetails from './SelectedRoomDetails';
import ServicesFeaturesFurnishings from './ServicesFeaturesFurnishings';
import CollectionDetails from './CollectionDetails';
import TermsOfAgreement from './TermsOfAgreement';
import { FaArrowLeft, FaPen } from 'react-icons/fa';

const HostelDetails = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const { state } = useLocation(); // Retrieve state passed from EditPropertyDetails
  const address = state ? state.address : {}; // Fallback to an empty object if no state is passed

  // Initial state for room details (the state will be dynamically updated later)
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

  // Effect to update the room details based on address changes (if needed)
  useEffect(() => {
    if (address.propertyName) {
      setSelectedRoom((prevState) => ({
        ...prevState,
        propertyAddress: `${address.house}, ${address.locality}, ${address.city}, ${address.state} - ${address.pincode}`,
      }));
    }
  }, [address]);

  // Handle room type selection
  const handleRoomTypeClick = (type) => {
    setRoomType(type);
    
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

    // Update selected room
    setSelectedRoom(roomData[type]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 font-[Montserrat]">
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">

        {/* Back Button (No Navigation) */}
        <div className="absolute top-10 ml-6 left-4 z-10">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-300">
            <FaArrowLeft className="text-xl text-black hover:text-gray-700 transition duration-200" />
          </div>
        </div>

        {/* Edit Button (Navigates to Edit Property Page) */}
        <div className="absolute top-10 right-4 z-10">
          <div
            className="w-10 h-10 flex mr-8 -12 items-center justify-center bg-white rounded-full shadow-md border border-gray-300 cursor-pointer"
            onClick={() => navigate('/edit-property', { state: { address } })} // Pass address data when navigating to edit
          >
            <FaPen className="text-xl text-black hover:text-gray-700 transition duration-200" />
          </div>
        </div>

        {/* Image */}
        <div className="h-95 flex items-center justify-center relative">
          <img
            src="assest/gallery.png"
            alt="Hostel Gallery"
            className="h-full w-full mr-6 ml-6 mt-12 object-cover rounded-lg"
          />
        </div>

        {/* Hostel Details */}
        <div className="p-6 rounded-t-lg mr-6 mt-6 ml-6">
          <div className="text-sm text-gray-600">CRIB005679</div>
          <div className="text-2xl font-semibold">{address.propertyName || 'srii hostel Hostel'}</div>
          <div className="text-sm text-gray-600">{`${address.house || 'NO.3'}, ${address.locality || 'sri Hostel'}, ${address.city || 'Cbe'}, ${address.state || 'Tamil Nadu'} - ${address.pincode || 'CRI005679'}`}</div>
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
              {selectedRoom.propertyHouseRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Collection Details */}
        <CollectionDetails selectedRoom={selectedRoom} />

        {/* Terms of Agreement */}
        <TermsOfAgreement />
      </div>
    </div>
  );
};

export default HostelDetails;
