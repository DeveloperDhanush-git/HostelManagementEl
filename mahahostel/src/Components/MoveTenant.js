import { useLocation } from "react-router-dom";
import Header from "./Header";
import { LuCreditCard } from "react-icons/lu";
import { MdEdit } from "react-icons/md";

const MoveTenant = () => {
    const location = useLocation();
    const { selectedProperty, rentCycle, totalDue } = location.state || {};

    return (
        <div className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
            <div className="flex-grow p-4">
                <Header title="Move Tenant" />

                <div className="ml-7 mr-4">
                    <p className="text-m text-blue-500 mt-3">STEP 3 OF 3</p>
                    <h3 className="text-xl font-semibold mt-2 mb-1">Account Summary</h3>

                    {/* Current Dues */}
                    <div className="w-full bg-gray-100 p-4 rounded-lg mt-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <LuCreditCard className="text-lg" />
                                <span className="text-lg font-semibold">Current Dues</span>
                            </div>
                            <span className="text-lg font-bold">₹ {totalDue}</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg mt-2 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-bold">₹ {totalDue}</p>
                                <p className="text-gray-500">Pending dues for this month</p>
                            </div>
                            <MdEdit className="text-gray-500 cursor-pointer text-xl" />
                        </div>

                    </div>

                    {/* Move-in Dues */}
                    <div className="w-full bg-gray-100 p-4 rounded-lg mt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">Move-in Dues</span>
                            <span className="text-blue-500 cursor-pointer">+ Add due</span>
                        </div>
                        <p className="text-red-500 mt-2">- Rent decreased by ₹ 1,000</p>
                        <p className="text-red-500">- Security deposit decreased by ₹ 6,500</p>

                        <div className="bg-yellow-100 p-2 rounded-md mt-2 text-yellow-800">
                            <p>⚠ Please add rent dues adjustments, if any!</p>
                        </div>
                    </div>

                    {/* Total Due */}
                    <div className="flex justify-between items-center mt-6 text-lg font-bold">
                        <span>Σ Total due</span>
                        <span>₹ {totalDue}</span>
                    </div>
                </div>
            </div>

            {/* Move Tenant Button */}
            <div className="ml-7 mr-2 p-4">
                <button className="w-full p-3 bg-[#69205D] text-white font-semibold rounded-lg">
                    Move Tenant
                </button>
            </div>
        </div>
    );
};

export default MoveTenant;
