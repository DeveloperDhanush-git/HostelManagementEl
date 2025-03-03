import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaPhone, FaShieldAlt, FaDollarSign, FaUser } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import Header from "./Header";
import { MdCancel, MdOutlineApartment, MdOutlineCalendarMonth } from "react-icons/md";
import { BsBoxArrowRight } from "react-icons/bs";

const TenantDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user || {};

    // Modal state for Cancel Booking
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cancelReason, setCancelReason] = useState("");

    return (
        <div
            className="relative container mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl transition-all duration-300"
            style={{ fontFamily: "Montserrat" }}>

            {/* Content with Background Dim on Modal Open */}
            <div className={isModalOpen ? "opacity-50 transition-all duration-300" : "opacity-100"}>

                {/* Header */}
                <Header title="Tenant Details" icons={["settings"]} />

                <div className="ml-7 mr-4">
                    {/* User Details */}
                    <div className="bg-white p-4 shadow-md rounded-b-lg">
                        <p className="text-gray-500">Property 2</p>
                        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600">Room: {user.room} • Bed: {user.bed}</p>
                    </div>

                    {/* Booking Section */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-4">
                        <div className="flex items-start">
                            <MdCancel className="text-[#fad60e] text-lg mt-[2px]" />
                            <div className="ml-1">
                                <p className="text-md font-semibold text-gray-800">Booking cancelled?</p>
                                <p className="text-sm text-gray-500">Vacates unit instantly.</p>
                            </div>
                        </div>
                        <button
                            className="border border-[#69205D] text-[#69205D] px-4 py-2 rounded-lg mt-2 w-full cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Shift Tenant */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-4">
                        <div className="flex items-start">
                            <MdOutlineApartment className="text-[#0eabfa] text-lg mt-[2px]" />
                            <div className="ml-1">
                                <p className="text-md font-semibold text-gray-800">Shift tenant</p>
                                <p className="text-sm text-gray-500">Change room or property.</p>
                            </div>
                        </div>
                        <button
                            className="border border-[#69205D] text-[#69205D] px-4 py-2 rounded-lg mt-2 w-full cursor-pointer"
                            onClick={() => navigate("/shift", { state: { user } })}
                        >
                            Change
                        </button>
                    </div>
                    {/* Agreement Ended Section */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-4">
                        <div className="flex items-start">
                            <MdOutlineCalendarMonth className="text-[#db0b0b] text-lg mt-[2px]" />
                            <p className="text-md font-semibold text-gray-800 ml-1">Agreement ended on</p>
                        </div>
                        <p className="text-red-500 text-lg font-bold ml-6">{user.till}</p>
                        <button
                            className="border border-[#69205D] text-[#69205D] px-4 py-2 rounded-lg mt-2 w-full cursor-pointer"
                            onClick={() => navigate("/agreement", { state: { user } })}
                        >
                            Extend stay
                        </button>
                    </div>


                    {/* Tenant Moving Out Section */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-4 border border-red-500">
                        <p className="text-md font-semibold text-red-600 flex items-center">
                            <BsBoxArrowRight className="text-[#db0b0b] text-lg mr-1" /> Tenant moving out?</p>
                        <p className="text-sm text-gray-500 ml-5">Select move-out date to vacate the unit. Don't worry, you can still view tenant data.</p>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 w-full cursor-pointer" onClick={() => navigate("/moving-out", { state: { user } })}>Remove tenant</button>
                    </div>

                    {/* Complaints and Collection */}
                    <div className="bg-white p-4 shadow-md rounded-lg mt-4">
                        <div className="flex justify-between items-center px-4 py-3 border-b cursor-pointer" onClick={() => navigate("/complaints", { state: { user } })}>
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-2">
                                    <FaShieldAlt className="text-[#69205D]" />
                                    <p className="font-semibold text-gray-800">Complaints</p>
                                </div>
                                <p className="text-gray-500 text-sm pl-7">0</p>
                            </div>
                            <FaChevronRight className="text-gray-400" />
                        </div>

                        <div className="flex justify-between items-center px-4 py-3 cursor-pointer" onClick={() => navigate("/collection", { state: { user } })}>
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-2">
                                    <FaDollarSign className="text-[#69205D]" />
                                    <p className="font-semibold text-gray-800">Collection</p>
                                </div>
                                <p className="text-gray-500 text-sm pl-7">₹10,000 due</p>
                            </div>
                            <FaChevronRight className="text-gray-400" />
                        </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex justify-between mt-4 mb-4">
                        <button className="p-4 bg-green-500 text-white rounded-lg gap-2 w-full mr-2 flex justify-center items-center cursor-pointer" onClick={() => navigate("/whatsapp", { state: { user } })}>
                            <FaWhatsapp /> WhatsApp
                        </button>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg gap-2 w-full ml-2 flex justify-center items-center cursor-pointer" onClick={() => navigate("/call", { state: { user } })}>
                            <FaPhone /> Call
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-end justify-center"
                    onClick={() => setIsModalOpen(false)} // Close modal on clicking outside
                >
                    <div
                        className="bg-white p-6 rounded-t-lg w-full max-w-md shadow-lg border border-gray-300"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <h2 className="text-lg font-semibold mb-3">Cancel booking</h2>

                        {/* User Info */}
                        <div className="flex items-center space-x-3 mb-4">
                            <FaUser className="text-gray-500 text-2xl" />
                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-gray-500 text-sm">{`Room: ${user.room} • Bed: ${user.bed}`}</p>
                            </div>
                        </div>

                        {/* Reason Input */}
                        <div className="relative">
                            <textarea
                                className="w-full rounded-md p-3 bg-gray-100 text-gray-500 placeholder-gray-400 text-sm focus:outline-none"
                                placeholder="Cancellation reason (optional)"
                                maxLength={100}
                                value={cancelReason}
                                onChange={(e) => setCancelReason(e.target.value)}
                            ></textarea>

                            {/* Character Counter Outside */}
                            <p className="text-gray-400 text-xs text-right mt-1 mb-3">
                                {cancelReason.length}/100
                            </p>
                        </div>


                        {/* Done Button */}
                        <button
                            className="bg-[#69205D] text-white px-4 py-2 rounded-lg mt-3 w-full"
                            onClick={() => {
                                console.log("Cancelled with reason:", cancelReason);
                                setIsModalOpen(false);
                            }}
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TenantDetails;
