import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PropertyCard from './Propertycard';
import Header from "./Header";
import Button from "./Button";
import SingleRoomOption from "./SingleRoomoption";// Import SingleRoomOption

const RoomOption = ({ buttonName, nextButton }) => {
    const [selectedRoom, setSelectedRoom] = useState(null); // State for selected room

    const rooms = [
        { label: "Single Sharing", icon: "single.png", key: "single" },
        { label: "Double Sharing", icon: "double.png", key: "double" },
        { label: "Triple Sharing", icon: "triple.png", key: "triple" },
        { label: "3+ Sharing", icon: "3-share.png", key: "multi" }
    ];

    // Show SingleRoomOption if Single Sharing is selected
    if (selectedRoom === "single") {
        return <SingleRoomOption />;
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Header */}
            <Header title="Add property" />

            {/* Content */}
            <div className="flex-grow p-4">
                <PropertyCard />
                <p className="text-[#0012B9] mt-2 ml-11">STEP 3 of 6</p>
                
                <div className="ml-7">
                    <h2 className="font-bold text-lg mb-2">Room Options</h2>
                    <div className="space-y-6">
                        {rooms.map((room) => (
                            <div key={room.key} className="flex items-center justify-between bg-gray-200 p-3 rounded-md">
                                <div className="flex items-center gap-2">
                                    <img src={room.icon} alt={room.label} className="w-6 h-6" />
                                    <span>{room.label}</span>
                                </div>
                                {/* Set selectedRoom when clicking "Add room" */}
                                <button
                                    className="text-[#69205D] flex items-center gap-1 cursor-pointer"
                                    onClick={() => setSelectedRoom(room.key)} // Navigate to SingleRoomOption
                                >
                                    <FaPlus className="text-sm text-black" /> Add room
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer with Next Button */}
            <div className="p-4 bg-white shadow-md">
                <Button button="Next" />
            </div>
        </div>
    );
};
export default RoomOption;
