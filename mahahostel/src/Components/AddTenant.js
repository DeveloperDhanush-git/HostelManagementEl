import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import buildingIcon from "../Assest/build.png";
import { IoIosArrowDown } from "react-icons/io";

const AddTenant = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Define states
    const [selectedProperty, setSelectedProperty] = useState("");
    const [rentalType, setRentalType] = useState("");
    const [rentCycle, setRentCycle] = useState("");
    const [agreementDuration, setAgreementDuration] = useState("");
    const [lockInPeriod, setLockInPeriod] = useState("");
    const [noticePeriod, setNoticePeriod] = useState("");
    const [agreementStartDate, setAgreementStartDate] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const [monthlyRent, setMonthlyRent] = useState("");
    const [securityDeposit, setSecurityDeposit] = useState("");
    const [maintenance, setMaintenance] = useState("");

    const [isAgreementDurationOpen, setIsAgreementDurationOpen] = useState(false);
    const [isLockInPeriodOpen, setIsLockInPeriodOpen] = useState(false);
    const [isNoticePeriodOpen, setIsNoticePeriodOpen] = useState(false);

    const periodOptions = [];
    for (let i = 1; i <= 12; i += 0.5) {
        periodOptions.push(`${i} months`);
    }

    const toggleDropdown = (setter) => setter((prev) => !prev);

    useEffect(() => {
        const propertyFromState = location.state?.selectedProperty;
        const propertyFromStorage = localStorage.getItem("selectedProperty");
        const storedDate = location.state?.selectedDate || "";

        setSelectedProperty(propertyFromState || propertyFromStorage || "Property 2");
        setSelectedDate(storedDate);
    }, [location.state]);

    // Calculate total due amount
    const totalDue =
        (parseFloat(monthlyRent) || 0) +
        (parseFloat(securityDeposit) || 0) +
        (parseFloat(maintenance) || 0);

    return (
        <div className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
            
                <Header title="Add Tenant" />

                <div className="ml-3">
                    {/* Property Info */}
                    <div className="w-full px-4 mt-4">
                        <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
                            <div>
                                <div className="text-lg font-semibold">{selectedProperty}</div>
                            </div>
                            <img src={buildingIcon} alt="Hostel" className="w-12 h-12" />
                        </div>
                    </div>

                    <div className="p-6">
                        <p className="text-m text-blue-500 mt-3">STEP 2 OF 3</p>
                        <h3 className="text-xl font-semibold mt-2 mb-1">Terms of Agreement</h3>

                        {/* Rental Type */}
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">Rental Type</span>
                        </div>
                        <div className="flex gap-2 my-2 mb-4">
                            {["Monthly", "One-time", "Daily(short stay)"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setRentalType(type)}
                                    className={`px-3 py-2 rounded-md text-sm ${rentalType === type ? "bg-[#69205D] text-white" : "bg-[#D8E0E6] text-black"}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Inputs for Rent Details */}
                        <input
                            type="number"
                            placeholder="Monthly Rent"
                            className="w-full border rounded-md p-2 mb-2"
                            value={monthlyRent}
                            onChange={(e) => setMonthlyRent(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Security Deposit"
                            className="w-full border rounded-md p-2 mb-2"
                            value={securityDeposit}
                            onChange={(e) => setSecurityDeposit(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Maintenance"
                            className="w-full border rounded-md p-2 mb-2"
                            value={maintenance}
                            onChange={(e) => setMaintenance(e.target.value)}
                        />

                        {/* Agreement Start Date */}
                        <div className="relative">
                            <input
                                type="date"
                                className="w-full border rounded-md p-2 pr-10"
                                value={agreementStartDate}
                                onChange={(e) => setAgreementStartDate(e.target.value)}
                            />
                        </div>

                        {/* Rent Cycle Selection */}
                        <h3 className="font-semibold text-lg mt-4 mb-1">Add Tenant Move-in Date</h3>
                        <p className="text-lg font-semibold">Rent Cycle</p>
                        <div className="flex gap-2 my-2 mb-4">
                            {["01-01", "15-15", "Date to Date"].map((cycle) => (
                                <button
                                    key={cycle}
                                    onClick={() => setRentCycle(cycle)}
                                    className={`px-3 py-2 rounded-md text-sm ${rentCycle === cycle ? "bg-[#69205D] text-white" : "bg-[#D8E0E6] text-black"}`}
                                >
                                    {cycle}
                                </button>
                            ))}
                        </div>

                        {/* Agreement, Lock-in, and Notice Period Dropdowns */}
                        <div className="flex flex-col gap-4">
                            {[{
                                label: "Agreement Duration",
                                state: agreementDuration,
                                setState: setAgreementDuration,
                                isOpen: isAgreementDurationOpen,
                                setIsOpen: setIsAgreementDurationOpen
                            }, {
                                label: "Lock-in Period",
                                state: lockInPeriod,
                                setState: setLockInPeriod,
                                isOpen: isLockInPeriodOpen,
                                setIsOpen: setIsLockInPeriodOpen
                            }, {
                                label: "Notice Period",
                                state: noticePeriod,
                                setState: setNoticePeriod,
                                isOpen: isNoticePeriodOpen,
                                setIsOpen: setIsNoticePeriodOpen
                            }].map(({ label, state, setState, isOpen, setIsOpen }) => (
                                <div key={label} className="relative">
                                    <button
                                        onClick={() => toggleDropdown(setIsOpen)}
                                        className="w-full border rounded-md p-2 text-left flex justify-between items-center"
                                    >
                                        <span>{state || `Select ${label}`}</span>
                                        <IoIosArrowDown className="text-gray-500" />
                                    </button>
                                    {isOpen && (
                                        <ul className="absolute w-full border rounded-md mt-1 bg-white max-h-40 overflow-y-auto" style={{ zIndex: 1000 }}>
                                            {periodOptions.map((option, index) => (
                                                <li
                                                    key={index}
                                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                                    onClick={() => {
                                                        setState(option);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Continue Button */}
                <div className="ml-5 mr-1 p-4">
                    <button
                        className="w-full p-3 bg-[#69205D] text-white font-semibold rounded-lg"
                        onClick={() => navigate("/move-tenant", { state: { selectedProperty, rentCycle, totalDue } })}
                    >
                        Continue
                    </button>
                </div>
            
        </div>
    );
};

export default AddTenant;
