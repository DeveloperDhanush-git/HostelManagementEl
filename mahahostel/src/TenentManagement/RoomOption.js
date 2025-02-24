import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import PropertyCard from "./PropertyCard";

const RoomOption = ({buttonName, nextButton }) => {
    const rooms = [
        { label: "Single Sharing", icon: "asst/BedSize/single.png" },
        { label: "Double Sharing", icon: "asst/BedSize/double.png" },
        { label: "Triple Sharing", icon: "asst/BedSize/triple.png" },
        { label: "3+ Sharing", icon: "asst/BedSize/3-share.png" },
    ];

    return (
        <div className="bg-white">
    

            {/* Header */}
            
            <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1" style={{ fontFamily: 'Montserrat' }}>
                <div className="flex items-center space-x-2 py-4">

                    <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />

                    <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
                        <span className="text-2xl font-semibold">{buttonName}</span>
                    </div>
                </div>
            </div>

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
            <div>
                <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md ml-11 w-197 text-sm md:text-base">
                    {nextButton}
                </button>
            </div>
        </div>
    );
};

export default RoomOption;
