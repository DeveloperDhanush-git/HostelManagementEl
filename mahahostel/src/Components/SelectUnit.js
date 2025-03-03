import { useState, useEffect } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const SelectUnit = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedProperty, setSelectedProperty] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [activeTab, setActiveTab] = useState("GROUND");

    useEffect(() => {
        const propertyFromState = location.state?.selectedProperty;
        const propertyFromStorage = localStorage.getItem("selectedProperty");
        const storedDate = location.state?.selectedDate || "";

        setSelectedProperty(propertyFromState || propertyFromStorage || "Property 2");
        setSelectedDate(storedDate);
    }, [location.state]);

    const units = ["001", "002", "003", "004", "005", "006", "007"];

    return (
        <div className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
            {/* Header */}
            <Header title="Select unit" icons={["search", "plus"]} />

            <div className="ml-7 mr-5"> 
            {/* Property Name */}
            <div className="text-gray-500 text-sm">Property {selectedProperty}</div>

            {/* Status & Date Filter */}
            <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-md my-3">
                <button className="flex items-center gap-2 bg-purple-200 text-purple-700 font-semibold py-2 px-4 rounded-full border border-purple-300 shadow-sm">
                    <FaHourglassHalf className="text-sm" />
                    Pending dues
                    <span className="ml-1">▼</span>
                </button>

                <div className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full text-sm">
                    {selectedDate ? selectedDate : "No Date Selected"}
                </div>
            </div>

            {/* Floor Tabs */}
            <div className="flex space-x-5 mb-3">
                {["GROUND", "SECOND"].map((tab) => (
                    <button
                        key={tab}
                        className={`pb-2 ${activeTab === tab ? "border-b-2 border-purple-600 font-semibold text-purple-600" : "text-gray-500"}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Unit List */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-gray-600 mb-2 font-medium">{activeTab} Floor</div>
                {units.map((unit) => (
                    <div key={unit} className="flex items-center  py-2">
                        {/* Unit Number Box + Empty Box Together */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md text-gray-700 text-lg w-15  h-20 justify-center shadow-sm">
                                {unit} <span className="ml-2 text-gray-400">›</span>
                            </div>

                            {/* Empty Box (Closer to Unit Box) */}
                            <div className="w-15 h-20 border-2 border-gray-300 rounded-md"></div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default SelectUnit;
