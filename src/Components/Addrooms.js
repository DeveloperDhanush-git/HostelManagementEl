import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FormDataContext } from "./PropertyContext";
import PropertyCard from "./Propertycard";
import Header from "./Header";
import Button from "./Button";

const RoomOption = ({ buttonName, nextButton }) => {
  const { formData } = useContext(FormDataContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve rooms either from navigation state or from context
  const roomsFromState = location.state?.rooms;
  const rooms = roomsFromState || formData.rooms || [];

  // Calculate total price from all room options (if needed)
  const totalPrice = rooms.reduce((acc, room) => acc + room.totalPrice, 0);

  const roomTypes = [
    { label: "Single Sharing", icon: "single.png", key: "single" },
    { label: "Double Sharing", icon: "double.png", key: "double" },
    { label: "Triple Sharing", icon: "triple.png", key: "triple" },
    { label: "3+ Sharing", icon: "3-share.png", key: "multi" }
  ];

  // Navigate to the options page with dynamic header title
  const handleAddRoom = (roomKey, roomLabel) => {
    navigate("/options", { state: { selectedRoom: roomKey, headerTitle: roomLabel } });
  };

  // Fallback property data if not provided in context
  const propertyData = formData || {
    name: "Default Property Name",
    address: "Default Address",
    image: "assets/building icon.png",
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header title="Add property" />
      <div className="flex-grow p-4">
        <PropertyCard 
          name={propertyData.name} 
          address={propertyData.address} 
          image={propertyData.image} 
        />
        <p className="text-[#0012B9] mt-2 ml-7">STEP 3 of 6</p>

        <div className="ml-7">
          <h2 className="font-bold text-lg mb-2">Room Options</h2>
          <div className="space-y-6">
            {roomTypes.map((room) => (
              <div key={room.key} className="flex flex-col bg-gray-200 p-3 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={room.icon} alt={room.label} className="w-6 h-6" />
                    <span>{room.label}</span>
                  </div>
                  <button
                    className="text-[#69205D] flex items-center gap-1 cursor-pointer"
                    onClick={() => handleAddRoom(room.key, room.label)}
                  >
                    <FaPlus className="text-sm text-black" /> Add room
                  </button>
                </div>
                {room.key === "single" && rooms.length > 0 && (
                  <p className="mt-2 text-sm text-gray-700 ml-8">
                    {rooms.length} option{rooms.length > 1 ? "s" : ""}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Button added below the room options */}
        <div className="mt-20">
          <Button 
            button={buttonName || "Next"} 
            route={nextButton || "/next-route"} 
            size="lg" 
            width="full" 
            defaultColor="#69205D"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomOption;
