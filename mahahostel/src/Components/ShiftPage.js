import { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaSearch, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const properties = [
    { id: 1, name: "Property 1", location: "Prozone Mall, Coimbatore, Tamilnadu" },
    { id: 2, name: "Property 2", location: "Gandhipuram, Coimbatore, Tamilnadu" },
    { id: 3, name: "Property 3", location: "Ukkadam, Coimbatore, Tamilnadu" },
    { id: 4, name: "Property 4", location: "Kuniyamuthur, Coimbatore, Tamilnadu" },
    { id: 5, name: "Property 5", location: "Saravanampatti, Coimbatore, Tamilnadu" },
    { id: 6, name: "Property 6", location: "Ganapathy, Coimbatore, Tamil Nadu" },
];

export default function ShiftPage() {
    const navigate = useNavigate();
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const popupRef = useRef(null);

    // Close popup when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        }
        if (isPopupOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPopupOpen]);

    return (
        <div
            className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl p-4 transition-all duration-300"
            style={{ fontFamily: "Montserrat", minHeight: "100vh" }}
        >
            {/* Content with Background Dim on Modal Open */}
            <div className={isPopupOpen ? "opacity-50 flex-grow" : "opacity-100 flex-grow"}>
                {/* Header */}
                <div className="flex items-center space-x-3 mt-3">
                    <FaArrowLeft
                        className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200"
                        onClick={() => navigate(-1)}
                    />
                    <h2 className="text-xl font-bold text-black">Change Property</h2>
                </div>

                {/* Step Info */}
                <p className="text-[#69205D] font-bold mt-5">Step 1 of 3</p>
                <p className="text-black font-bold">Select property & unit</p>

                {/* Search Box */}
                <div className="bg-gray-100 p-4 rounded-lg mt-4 flex items-center space-x-2">
                    <FaSearch className="text-black text-lg" />
                    <input
                        type="text"
                        placeholder="Search property"
                        className="w-full bg-transparent outline-none placeholder-gray-500"
                    />
                </div>

                {/* Property List */}
                <div className="mt-4 mb-8 space-y-3 flex-grow">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className={`relative p-4 rounded-lg flex justify-between items-center cursor-pointer shadow-md transition duration-200 border ${selectedProperty === property.id ? "bg-white shadow-lg border-[#69205D]" : "border-gray-300 bg-white"
                                }`}
                            onClick={() => setSelectedProperty(property.id)}
                        >
                            {/* Left-side Curved Border */}
                            {selectedProperty === property.id && <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#69205D] rounded-l-full"></div>}

                            <div className="ml-4">
                                {/* "Current" Badge */}
                                {selectedProperty === property.id && (
                                    <span className="bg-[#69205D] text-white text-xs px-2 py-1 rounded-lg mb-1 inline-block">Current</span>
                                )}
                                {/* Property Name - Always Bold */}
                                <p className="font-bold text-gray-900">{property.name}</p>
                                <p className="text-gray-500 text-sm">{property.location}</p>
                            </div>

                            {/* Radio Button */}
                            <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedProperty === property.id ? "border-[#69205D]" : "border-gray-400"
                                    }`}
                            >
                                {selectedProperty === property.id && <div className="w-3.5 h-3.5 bg-[#69205D] rounded-full"></div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Continue Button */}
            <div className="w-full mt-auto mb-5">
                <button
                    className={`w-full p-4 text-white rounded-lg font-bold ${selectedProperty ? "bg-[#69205D]" : "bg-gray-400"}`}
                    disabled={!selectedProperty}
                    onClick={() => setIsPopupOpen(true)} // Open Popup
                >
                    Continue
                </button>
            </div>

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-end justify-center">
                    {/* Click Outside Close Wrapper */}
                    <div className="absolute inset-0" onClick={() => setIsPopupOpen(false)}></div>

                    {/* Popup Content */}
                    <div ref={popupRef} className="bg-white p-6 rounded-t-lg w-[95%] max-w-2xl shadow-lg relative">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Add shifting details</h2>
                            <FaTimes className="cursor-pointer text-gray-600" onClick={() => setIsPopupOpen(false)} />
                        </div>

                        {/* Inputs */}
                        <div className="mt-4 space-y-3">
                            <div className="relative flex items-center p-3 rounded-lg bg-gray-100">
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="w-full outline-none bg-transparent text-gray-900"
                                    onFocus={(e) => e.target.showPicker()} // Auto-show calendar
                                />
                            </div>

                            <select className="w-full p-3 rounded-lg bg-gray-100">
                                <option>1 Month</option>
                                <option>3 Months</option>
                                <option>6 Months</option>
                            </select>

                            <button
                                className="bg-[#69205D] text-white px-4 py-2 rounded-lg w-full mt-3"
                                onClick={() => {
                                    localStorage.setItem("selectedProperty", selectedProperty); // Store property in localStorage
                                    navigate("/select-unit", {
                                        state: {
                                            selectedProperty,
                                            selectedDate,
                                        }
                                    });
                                }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
