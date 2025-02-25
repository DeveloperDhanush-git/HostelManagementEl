import { FaPlus } from "react-icons/fa";
import Header from "./Header";

const SingleRoomOption = ({ buttonName, nextButton, nextStep }) => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Header */}
            <Header title="Single room option" />

            {/* Main Content */}
            <div className=" ml-4 flex-grow p-4 flex flex-col items-center">
                <div className="w-full max-w-4xl bg-gray-200 rounded-md p-4 flex justify-between mt-2">
                    <span>Add Options</span>
                    <button className="text-[#69205D] flex items-center gap-1 cursor-pointer">
                        <FaPlus className="text-sm text-black" /> Add
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SingleRoomOption;
