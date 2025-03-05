import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const TenantPage = () => {
    const [selectedTab, setSelectedTab] = useState("active");
    const [selectedAction, setSelectedAction] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState("Today");
    const [moveInCompleted, setMoveInCompleted] = useState("Yes");
    const [appDownloaded, setAppDownloaded] = useState(null);

    const modalRef = useRef(null);
    const navigate = useNavigate();

    const usersData = {
        active: [{ name: "Ravi", room: "01", bed: "02", till: "31-01-2025" }],
        inactive: [{ name: "Sam", room: "02", bed: "03", till: "3-12-2024" }],
        invited: [{ name: "Suresh", room: "01", bed: "02", till: "31-01-2025" }],
    };

    const durations = ["Today", "Next 7 days", "This month", "Next month", "Next 6 months", "Next 12 months", "Total Duration"];

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedAction(null);
            }
        }

        if (selectedAction) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedAction]);

    return (
        <div className="relative container mx-auto bg-white min-h-screen rounded-lg flex flex-col transition-all duration-300"
            style={{ fontFamily: "Montserrat" }}>

            <div className={selectedAction ? "opacity-50 transition-all duration-300" : "opacity-100"}>

                {/* Header */}
                <Header title="Tenants" icons={["search", "plus"]} />

                {/* Active tab */}
                <div className="ml-7 mr-4">
                    <div className="mt-6 flex justify-between rounded-lg p-4">
                        {["active", "inactive", "invited"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`cursor-pointer px-6 py-2 rounded-lg transition-all duration-300 ${selectedTab === tab
                                    ? "bg-[#69205D] text-white font-semibold"
                                    : "bg-gray-300 text-gray-700 hover:text-[#69205D]"
                                    }`}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Movein, Moveout, App */}
                    {selectedTab === "active" && (
                        <div className="bg-[#69205D] rounded-lg p-4 flex justify-between gap-4 mt-4">
                            <button className="bg-gray-200 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold cursor-pointer" onClick={() => setSelectedAction("movein")}>↩ Move-Ins</button>
                            <button className="bg-gray-200 text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold cursor-pointer" onClick={() => setSelectedAction("moveout")}>↗ Move-Outs</button>
                            <button className="bg-gray-200 text-green-700 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold cursor-pointer" onClick={() => setSelectedAction("app")}>✅ App</button>
                        </div>
                    )}

                    {/* User Details */}
                    <div className="mt-6 flex justify-center">
                        {usersData[selectedTab].map((user, index) => (
                            <div
                                key={index}
                                className="border border-[#69205D] rounded-lg p-3 flex flex-col gap-2 w-full max-w-sm cursor-pointer"
                                onClick={() => navigate("/tenant-details", { state: { user } })}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <FaUser className="text-gray-700 text-md" />
                                        <span className="font-medium text-gray-800">{user.name}</span>
                                    </div>
                                    <span className="text-gray-700 text-sm">Room No: {user.room}</span>
                                    <span className="text-gray-700 text-sm">Bed No: {user.bed}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 text-sm">
                                    <FaCalendarAlt />
                                    <span className="font-medium">Till: {user.till}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popup */}
            {selectedAction && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-6 rounded-t-lg shadow-lg z-50 ml-25 mr-20">
                    <div ref={modalRef} className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
                            {selectedAction === "movein" ? "Move-ins" : selectedAction === "moveout" ? "Move-outs" : "App Download"}
                        </h2>

                        {/* Movein completed */}
                        {selectedAction === "movein" && (
                            <div className="mt-3 mb-2 text-center">
                                <p className="text-sm text-gray-500 mb-1">Move-in completed</p>
                                <div className="flex justify-center gap-2">
                                    <button className={`cursor-pointer px-4 py-2 rounded-lg font-medium ${moveInCompleted === "Yes" ? "bg-[#69205D] text-white" : "bg-gray-300 text-gray-700"}`} onClick={() => setMoveInCompleted("Yes")}>Yes</button>
                                    <button className={`cursor-pointer px-4 py-2 rounded-lg font-medium ${moveInCompleted === "No" ? "bg-[#69205D] text-white" : "bg-gray-300 text-gray-700"}`} onClick={() => setMoveInCompleted("No")}>No</button>
                                </div>
                            </div>
                        )}

                        {/* Durations */}
                        {selectedAction !== "app" && <p className="text-sm text-gray-500 mb-2 text-center">Duration</p>}
                        {selectedAction !== "app" && (
                            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                                {durations.map(duration => (
                                    <button key={duration} onClick={() => setSelectedDuration(duration)} className={`cursor-pointer px-3 py-2 rounded-lg font-medium ${selectedDuration === duration ? "bg-[#69205D] text-white" : "bg-gray-300 text-gray-700"}`}>{duration}</button>
                                ))}
                            </div>
                        )}

                        {/* App downloaded */}
                        {selectedAction === "app" && (
                            <div className="flex flex-col items-center gap-3">
                                <div className="bg-gray-100 p-4 rounded-lg w-120 flex flex-col gap-2">
                                    <label className="flex justify-between items-center cursor-pointer">
                                        <span className="text-gray-800">Downloaded</span>
                                        <input
                                            type="radio"
                                            name="appDownload"
                                            value="Downloaded"
                                            checked={appDownloaded === "Downloaded"}
                                            onChange={() => setAppDownloaded("Downloaded")}
                                            className="form-radio text-[#69205D] accent-[#69205D]" />
                                    </label>
                                    <label className="flex justify-between items-center cursor-pointer">
                                        <span className="text-gray-800">Not Downloaded</span>
                                        <input
                                            type="radio"
                                            name="appDownload"
                                            value="Not Downloaded"
                                            checked={appDownloaded === "Not Downloaded"}
                                            onChange={() => setAppDownloaded("Not Downloaded")}
                                            className="form-radio text-[#69205D] accent-[#69205D]" />
                                    </label>
                                </div>
                            </div>
                        )}
                        
                        {/* Buttons */}
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => {
                                    if (selectedAction === "movein" || selectedAction === "moveout") {
                                        setMoveInCompleted("Yes");
                                        setSelectedDuration("Today");
                                    } else if (selectedAction === "app") {
                                        setAppDownloaded(null);
                                    }
                                }}
                                className="border border-[#69205D] text-[#69205D] px-4 py-2 rounded-lg font-medium cursor-pointer">Clear filter</button>
                            <button onClick={() => setSelectedAction(null)} className="bg-[#69205D] text-white px-4 py-2 rounded-lg font-medium cursor-pointer">Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TenantPage;
