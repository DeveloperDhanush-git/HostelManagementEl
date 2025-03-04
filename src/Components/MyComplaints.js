import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/DynamicComponents/Header";
import plugin from "../Assets/Plugin.png";

const complaints = [
    "Electrical", "Plumbing", "Air Conditioner", "Security", "Appliances",
    "Housekeeping", "Others", "Medical", "Carpentry", "Common area",
    "Community", "Laundry", "Repairs and Maintenance", "Food and Beverage",
    "Finance", "Onboarding", "Internet and Connection"
];

const ComplaintPage = () => {
    const navigate = useNavigate();

    const handleClick = (complaint) => {
        const formattedComplaint = complaint.toLowerCase().replace(/\s+/g, "-");
        navigate(`/complaints/${formattedComplaint}`);
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center font-[Montserrat]">
            <div className="w-full min-h-screen rounded-lg flex flex-col p-6">
                <Header title="Add Complaint" />

                <div className="text-left ml-5 p-2">
                    <h2 className="text-2xl md:text-3xl font-bold">What's your complaint?</h2>
                    <p className="text-lg md:text-xl text-gray-700">Select complaint type</p>
                </div>

                <div className="p-6 grid grid-cols-3 md:grid-cols-5 gap-7 w-full">
                    {complaints.map((complaint, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-4 rounded-4xl shadow-lg flex flex-col items-center cursor-pointer"
                            onClick={() => handleClick(complaint)}
                        >
                            <img src={plugin} alt={complaint} className="w-12 h-12 mb-2" />
                            <p className="text-center font-semibold">{complaint}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComplaintPage;
