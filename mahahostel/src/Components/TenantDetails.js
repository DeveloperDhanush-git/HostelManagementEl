import React from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Header from "./Header";

const TenantDetails = () => {
    const location = useLocation();
    const user = location.state?.user || {};

    return (
        <div className="ontainer mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl">

            {/* Header */}
           <Header title="Tenant Details" />

           <div className="ml-8 mr-4">

            {/* User Details */}
            <div className="bg-white p-4 shadow-md rounded-b-lg">
                <p className="text-gray-500">Property 2</p>
                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">Room: {user.room} • Bed: {user.bed}</p>
            </div>
            
            {/* Booking Section */}
            <div className="bg-white p-4 shadow-md rounded-lg mt-4">
                <p className="text-md font-semibold text-gray-800 flex items-center">❌ Booking cancelled?</p>
                <p className="text-sm text-gray-500">Vacates unit instantly.</p>
                <button className="bg-[#69205D] text-white px-4 py-2 rounded-lg mt-2 w-full">Cancel</button>
            </div>

            {/* Shift Tenant */}
            <div className="bg-white p-4 shadow-md rounded-lg mt-4">
                <p className="text-md font-semibold text-gray-800 flex items-center">🔄 Shift tenant</p>
                <p className="text-sm text-gray-500">Change room or property.</p>
                <button className="bg-[#69205D] text-white px-4 py-2 rounded-lg mt-2 w-full">Change</button>
            </div>

            {/* Agreement Ended Section */}
            <div className="bg-white p-4 shadow-md rounded-lg mt-4">
                <p className="text-md font-semibold text-gray-800">📅 Agreement ended on</p>
                <p className="text-red-500 text-lg font-bold">{user.till}</p>
                <button className="bg-[#69205D] text-white px-4 py-2 rounded-lg mt-2 w-full">Extend stay</button>
            </div>

            {/* Tenant Moving Out Section */}
            <div className="bg-white p-4 shadow-md rounded-lg mt-4 border border-red-500">
                <p className="text-md font-semibold text-red-600 flex items-center">🚪 Tenant moving out?</p>
                <p className="text-sm text-gray-500">Select move-out date to vacate the unit. Don’t worry, you can still view tenant data.</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2 w-full">Remove tenant</button>
            </div>

            {/* Complaints Section */}
            <div className="bg-white p-4 shadow-md rounded-lg mt-4 border">
                <p className="text-md font-semibold text-gray-800">🛡️ Complaints</p>
                <p className="text-sm text-gray-500">0</p>
            </div>
            
            {/* Collection Section */}
            <div className="bg-white p-4 shadow-md rounded-lg mt-4 border">
                <p className="text-md font-semibold text-gray-800">💲 Collection</p>
                <p className="text-sm text-gray-500">₹10,000 due</p>
            </div>
            
            {/* View Details Section */}
            <div className="bg-white p-4 shadow-md rounded-lg mt-4 border">
                <p className="text-md font-semibold text-gray-800">📄 View Details</p>
                <div className="flex justify-between mt-2">
                    <button className="bg-gray-200 px-4 py-2 rounded-lg">Terms</button>
                    <button className="bg-gray-200 px-4 py-2 rounded-lg">Documents</button>
                    <button className="bg-gray-200 px-4 py-2 rounded-lg">Profile</button>
                </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 w-full mr-2">
                    <FaWhatsapp /> WhatsApp
                </button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 w-full ml-2">
                    <FaPhone /> Call
                </button>
            </div>
            </div>
        </div>
    );
};

export default TenantDetails;
