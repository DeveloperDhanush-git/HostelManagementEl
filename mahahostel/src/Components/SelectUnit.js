import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBed, FaCheck } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";

const SelectUnit = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedProperty, setSelectedProperty] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState("GROUND");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [unitDetails, setUnitDetails] = useState({});
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isVacancyDropdownOpen, setIsVacancyDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Pending dues");
    const [selectedVacancy, setSelectedVacancy] = useState("Vacant");

    useEffect(() => {
        const propertyFromState = location.state?.selectedPropertyName;
        const propertyFromStorage = localStorage.getItem("selectedProperty");

        setSelectedProperty(propertyFromState || propertyFromStorage || "Property 2");
    }, [location.state]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".date-picker-dropdown")) {
                setIsDateOpen(false);
            }
            if (!event.target.closest(".dropdown")) {
                setIsDropdownOpen(false);
            }
            if (!event.target.closest(".vacancy-dropdown")) {
                setIsVacancyDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const unitData = {
        "001": { bedType: "DOUBLE", price: 4000, security: 2000, facilities: ["Shared Washroom", "Fan", "Cupboard"] },
        "002": { bedType: "DOUBLE", price: 4000, security: 2000, facilities: ["Shared Washroom", "Fan", "Cupboard"] },
        "003": { bedType: "SINGLE", price: 5000, security: 2500, facilities: ["Private Washroom", "Fan", "Wardrobe"] },
        "004": { bedType: "SINGLE", price: 6000, security: 2500, facilities: ["Private Washroom", "AC", "Balcony"] },
        "005": { bedType: "3+", price: 2500, security: 2200, facilities: ["Shared Washroom", "Fan", "Desk"] },
        "006": { bedType: "TRIPLE", price: 3500, security: 1800, facilities: ["Shared Washroom", "Fan", "Cupboard"] },
        "007": { bedType: "TRIPLE", price: 3000, security: 1500, facilities: ["Shared Washroom", "Fan", "Bunk Bed"] },
    };

    const openModal = (unit) => {
        setSelectedUnit(unit);
        setUnitDetails(unitData[unit] || {});
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col transition-all duration-300" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
            <div className={isModalOpen ? "opacity-50 flex-grow" : "opacity-100 flex-grow"}>
                <Header
                    title={
                        <span className="">
                            <span className="font-semibold">Select Unit</span> &nbsp;
                            <span className="text-sm">{selectedProperty}</span>
                        </span>
                    }
                    icons={["bed", "sliders"]}
                />



                <div className="ml-7 mr-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-4">
                        {/* Status Dropdown */}
                        <div className="relative dropdown">
                            <button className="bg-[#D8E0E6] text-black px-4 py-2 rounded-lg text-sm w-full" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                {selectedOption} ▼
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute bg-white shadow-md rounded-lg mt-1 w-full z-10">
                                    {["Pending dues", "Off-boarding", "Move-in", "Token pending"].map((option) => (
                                        <button key={option} className="w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => {
                                            setSelectedOption(option);
                                            setIsDropdownOpen(false);
                                        }}>
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Date Picker */}
                        <div className="relative date-picker-dropdown">
                            <button className="bg-[#D8E0E6] text-black rounded-lg text-sm w-full py-2 px-4" onClick={() => setIsDateOpen(!isDateOpen)}>
                                {selectedDate instanceof Date && !isNaN(selectedDate) ? selectedDate.toDateString() : "Select a Date"} ▼
                            </button>
                            {isDateOpen && (
                                <div className="absolute bg-white shadow-md rounded-lg mt-1 z-10">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => {
                                            setSelectedDate(date);
                                            setIsDateOpen(false);
                                        }}
                                        inline
                                    />
                                </div>
                            )}
                        </div>

                        {/* Vacancy Dropdown */}
                        <div className="relative vacancy-dropdown">
                            <button className="bg-[#D8E0E6] text-black px-4 py-2 rounded-lg text-sm w-full" onClick={() => setIsVacancyDropdownOpen(!isVacancyDropdownOpen)}>
                                {selectedVacancy} ▼
                            </button>
                            {isVacancyDropdownOpen && (
                                <div className="absolute bg-white shadow-md rounded-lg mt-1 w-full z-10">
                                    {["Vacant", "Occupied", "Both"].map((option) => (
                                        <button key={option} className="w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => {
                                            setSelectedVacancy(option);
                                            setIsVacancyDropdownOpen(false);
                                        }}>
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="text-gray-600 mb-2 font-medium">{activeTab} Floor</div>
                        {Object.keys(unitData).map((unit) => (
                            <div key={unit} className="flex items-center py-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md text-gray-700 text-lg w-15 h-20 justify-center shadow-sm">
                                        {unit} <span className="ml-2 text-gray-400">›</span>
                                    </div>
                                    <div className="w-15 h-20 border-2 border-gray-300 rounded-md cursor-pointer" onClick={() => openModal(unit)}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center" onClick={closeModal}>
                    <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
                        <div className="text-gray-900 font-semibold text-lg mb-3 flex items-center justify-between w-full">
                            <div className="flex items-center gap-3 text-gray-800 whitespace-nowrap">
                                <span className="mr-4">Bed Details</span>
                                <FaBed className="text-lg" />
                                <span className="text-gray-900 font-semibold">{selectedUnit}</span>
                                <MdOutlineBed className="text-lg" />
                                <span className="text-gray-800 font-semibold">
                                    {unitDetails.bedType === "SINGLE" ? "1"
                                        : unitDetails.bedType === "DOUBLE" ? "2"
                                            : unitDetails.bedType === "TRIPLE" ? "3"
                                                : "3+"}
                                </span>
                            </div>
                            <span className="bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-lg font-medium">
                                VACANT
                            </span>
                        </div>

                        <div className="mt-3 text-[#53dd23] font-bold text-lg uppercase tracking-wide flex items-center justify-center">
                            {unitDetails.bedType}
                        </div>

                        <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                            {unitDetails.facilities?.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FaCheck className="text-[#53dd23]" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 text-xl font-bold text-gray-900 flex items-center justify-center">₹ {unitDetails.price}/</div>
                        <div className="text-gray-500 text-sm flex items-center justify-center">Security - ₹ {unitDetails.security}</div>

                        <button
                            className="mt-9 w-full bg-[#69205D] text-white py-3 rounded-lg font-semibold text-lg shadow-md"
                            onClick={() => navigate("/add-tenant", { state: { selectedUnit, unitDetails } })}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default SelectUnit;
