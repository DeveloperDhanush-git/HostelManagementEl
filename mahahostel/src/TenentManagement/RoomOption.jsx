import { useState } from "react";
import Header from "./Header";
import PropertyCard from "./PropertyCard";

const RoomOption = ({ step, nextStep }) => {
    const rooms = [
      { label: "Single Sharing", icon: "/src/assets/single.png" },
      { label: "Double Sharing", icon: "/src/assets/double.png" },
      { label: "Triple Sharing", icon: "/src/assets/triple.png" },
      { label: "3+ Sharing", icon: "/src/assets/multiple.png" }
    ];
     
    return (
        <div>
    
           <PropertyCard />
           <p className="text-[#0012B9] mt-2">STEP {step} of 6</p>

           <div className="p-4">
               <h2 className="font-bold text-lg mb-2">Room Options</h2>
               <div className="space-y-2">
                   {rooms.map((room, index) => (
                       <div key={index} className="flex items-center justify-between bg-gray-200 p-3 rounded-md">
                           <div className="flex items-center gap-2">
                               <img src={room.icon} alt={room.label} className="w-6 h-6" />
                               <span>{room.label}</span>
                           </div>
                           <button className="text-[#69205D] font-semibold flex items-center gap-1">
                               + Add room
                           </button>
                       </div>
                   ))}
               </div>
           </div>

           {/* Next Button */}
           <button
               className="bg-[#69205D] text-white py-2 px-6 rounded-md w-full mt-4"
               onClick={nextStep}
           >
               Next
           </button>
       </div>
    );
};

export default RoomOption;
