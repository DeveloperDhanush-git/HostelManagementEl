import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FormDataContext } from "./PropertyContext";
import PropertyCard from "./Propertycard";
import Header from "./Header";
import Button from "./Button";

const ROOM_TYPES = [
  { label: "Single Sharing", icon: "single.png", key: "single", route: "/Page4" },
  { label: "Double Sharing", icon: "double.png", key: "double", route: "/double-room" },
  { label: "Triple Sharing", icon: "triple.png", key: "triple", route: "/triple-room" },
  { label: "3+ Sharing", icon: "3-share.png", key: "multi", route: "/multi-room" },
];

const RoomOption = ({ buttonName = "Next", nextButton = "/next-route" }) => {
  const { formData } = useContext(FormDataContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve rooms from state (handle undefined state safely)
  const initialRooms = location.state?.rooms ?? [];
  const [rooms, setRooms] = useState(initialRooms);

  // Track room count and total price per type
  const roomData = rooms.reduce((acc, room) => {
    const key = room.type ?? "single";
    if (!acc[key]) {
      acc[key] = { count: 0, totalPrice: 0 };
    }
    acc[key].count += 1;
    acc[key].totalPrice += room.totalPrice ?? 0;
    return acc;
  }, {});

  const handleAddRoom = (roomKey, roomLabel, route) => {
    const newRooms = [...rooms, { type: roomKey, label: roomLabel, totalPrice: 1000 }];
    setRooms(newRooms);
    
    console.log("Navigating to:", route, "with state:", { selectedRoom: roomKey, rooms: newRooms });
    
    navigate(route, { state: { selectedRoom: roomKey, rooms: newRooms } });
  };

  const propertyData = formData ?? {
    name: "Default Property Name",
    address: "Default Address",
    image: "assets/building icon.png",
  };

  return (
    <div className=" bg-white min-h-screen rounded-lg flex flex-col">
      <div className="flex-grow p-4">
      <Header title="Add Property" />
      <PropertyCard 
        name={propertyData.name} 
        address={propertyData.address} 
        image={propertyData.image} 
      />
      <div className="ml-6 flex-grow">
        <p className="text-[#0012B9] mt-2 ml-7">STEP 3 of 6</p>    
        <h2 className="font-bold text-lg mb-2">Room Options</h2>

        <div className="space-y-6 mt-4">
          {ROOM_TYPES.map((room) => (
            <div 
              key={room.key} 
              className="flex justify-between items-center bg-gray-200 p-3 rounded-md"
            >
              <div className="flex items-center gap-3">
                <img src={room.icon} alt={room.label} className="w-6 h-6" loading="lazy" />
                <div className="flex flex-col">
                  <span className="font-semibold">{room.label}</span>
                  {roomData[room.key] && (
                    <p className="text-sm text-gray-700 mt-1">
                      {roomData[room.key].count} options - ₹{roomData[room.key].totalPrice}
                    </p>
                  )}
                </div>
              </div>

              <button
                className="text-[#69205D] flex items-center gap-1 cursor-pointer"
                onClick={() => handleAddRoom(room.key, room.label, room.route)}
              >
                <FaPlus className="text-sm text-black" /> 
                <span className="text-sm text-[#69205D]">Add room</span>
              </button>
            </div>
          ))}
        </div>

      
      </div>
      </div>
      <div className="p-4">
          <Button 
            button={buttonName} 
            route={nextButton} 
            navState={{ rooms }} 
            width="full" 
            defaultColor="#69205D"
          />
        </div>

    </div>
  );
};

export default RoomOption;
