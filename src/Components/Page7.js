import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import PropertyCard from './Propertycard'
import Header from "./Header";
import Button from "./Button";
const RoomOption = ({buttonName, nextButton }) => {
    const rooms = [
        { label: "Single Sharing", icon: "/src/assets/BedSize/single.png" },
        { label: "Double Sharing", icon: "/src/assets/BedSize/double.png" },
        { label: "Triple Sharing", icon: "/src/assets/BedSize/triple.png" },
        { label: "3+ Sharing", icon: "/src/assets/BedSize/3-share.png" }
    ];
    return (
        <div className="bg-white">
          <Header title="Add property" />
            <PropertyCard />
            <p className="text-[#0012B9] mt-2 ml-11">STEP 3 of 6</p>
            <div className="p-4 ml-7">
                <h2 className="font-bold text-lg mb-2">Room Options</h2>
                <div className="space-y-2">
                    {rooms.map((room, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-200 p-3 rounded-md">
                            <div className="flex items-center gap-2">
                                <img src={room.icon} alt={room.label} className="w-6 h-6" />
                                <span>{room.label}</span>
                            </div>
                            <button className="text-[#69205D] flex items-center gap-1 cursor-pointer">
                                <FaPlus className="text-sm text-black" /> Add room
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Next Button */}
            <div className="mt-auto p-4">
                    <Button button="Next" />
            </div>
        </div>
    );
};
export default RoomOption;






