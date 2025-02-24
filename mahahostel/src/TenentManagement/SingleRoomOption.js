import { FaArrowLeft, FaPlus } from "react-icons/fa";

const SingleRoomOption = ({ buttonName, nextButton, nextStep }) => {


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

            <div className="p-4 ml-11 mr-4 bg-gray-200 rounded-md mt-2 flex justify-between">
                <span>Add Options</span>
                <button className="text-[#69205D] flex items-center gap-1 cursor-pointer">
                    <FaPlus className="text-sm text-black" /> Add
                </button>
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

export default SingleRoomOption;
