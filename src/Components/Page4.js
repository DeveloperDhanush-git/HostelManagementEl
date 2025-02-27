import { FaPlus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom"; 
import Header from "./Header";


const SingleRoomOption = ({ buttonName = "Next", nextButton = "/Page5" }) => {
    const navigate = useNavigate(); 
    const location = useLocation();

    // Handle state safely
    const selectedRoom = location.state?.selectedRoom ?? "Single"; 
    const room = location.state?.room ?? [];

    console.log("SingleRoomOption - Received state:", { selectedRoom, room });

    return (
        <div className="  bg-white min-h-screen rounded-lg  flex flex-col">
            <div className="flex-grow p-4">
            {/* Header */}
            <Header title="Add Property" />
            <div className=" flex-grow">
                {/* Main Content */}
                <div className="ml-4 flex-grow p-4 flex flex-col w-full  ">
                    <div className="w-full  bg-gray-200 rounded-md p-4 flex justify-between mt-2 ">
                        <span>Add Options</span>
                        <button 
                            className="text-[#69205D] flex items-center gap-1 cursor-pointer"
                            onClick={() => navigate("/Page5", { state: { selectedRoom, room } })} 
                        >
                            <FaPlus className="text-sm text-black" /> Add
                        </button>
                    </div>
                </div>
            </div>

            {/* Next Button */}
          
            </div>
         
        </div>
    );
};

export default SingleRoomOption;
