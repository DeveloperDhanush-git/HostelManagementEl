import PropertyCard from "./PropertyCard";
import TenantDetails from "./TenantDetails";
import { FaArrowLeft } from "react-icons/fa";

const MainPage = ({ buttonName, nextButton}) => {

    return (
        <div className="bg-white font-[Montserrat]">

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

            <p className="text-[#0012B9] mt-2 ml-11">STEP 2 of 6</p>

            <TenantDetails />

            {/* Next Button */}
            <div>
            <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md ml-11 w-197 text-sm md:text-base">
        {nextButton}
      </button>
            </div>

        </div>
    );
};

export default MainPage;
