import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Components/DynamicComponents/Header";
import { complaintCategories } from "./Data/complaintData";
import PluginIcon from "../Assets/Plugin.png"; // Import Plugin icon

const ComplaintCategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate(); // React Router navigation
    const [selectedIssues, setSelectedIssues] = useState({});

    // Normalize category name
    const formattedCategory = decodeURIComponent(category).replace(/-/g, " ").toLowerCase();

    // Find the correct category key (case-insensitive)
    const selectedCategoryKey = Object.keys(complaintCategories).find(
        (key) => key.toLowerCase() === formattedCategory
    );

    if (!selectedCategoryKey) {
        return <h2 className="text-center text-red-500">Category not found</h2>;
    }

    const subcategories = complaintCategories[selectedCategoryKey];

    // Handle issue selection
    const handleSubcategoryClick = (subcategory, issue) => {
        setSelectedIssues((prev) => {
            const key = `${subcategory}-${issue}`;
            return {
                ...prev,
                [key]: !prev[key], // Toggle selection state
            };
        });
    };

    return (
        <div className="bg-white min-h-screen rounded-lg flex flex-col">
            <div className="flex-grow p-4">

                {/* Header */}
                <Header title="Add Complaint" />

                <div className="w-full p-6">
                    {/* Category Name with Plugin Image */}
                    <h2 className="ml-4 text-lg font-semibold text-[#0012B9] flex items-center mb-4">
                        <img src={PluginIcon} alt="Plugin Icon" className="w-6 h-6 mr-2" />
                        {selectedCategoryKey}
                    </h2>

                    {/* Main Title */}
                    <h2 className="ml-5 text-2xl font-bold mb-4 text-left">Please select your problem</h2>

                    {/* Complaint Issues */}
                    <div className="ml-5 flex flex-col gap-5 text-left">
                        {Object.entries(subcategories).map(([subcategory, issues], index) => (
                            <div key={index} className="w-full">
                                <h3 className="text-lg font-semibold">{subcategory}</h3>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    {issues.map((issue, i) => {
                                        const key = `${subcategory}-${issue}`;
                                        return (
                                            <div
                                                key={i}
                                                className={`px-4 py-2 rounded-full text-sm cursor-pointer transition 
                                                    ${selectedIssues[key] ? "bg-[#69205D] text-white" : "bg-gray-200 "}`}
                                                onClick={() => handleSubcategoryClick(subcategory, issue)}
                                            >
                                                {issue}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Continue Button */}
            <div className=" p-4  ml-6">
                <button
                    className="w-full  bg-[#69205D] text-white text-lg py-4 rounded-lg text-center"
                    onClick={() => navigate("/")} // Navigate to homepage
                >
                    Continue
                </button>
            </div>
        </div>

    );
};

export default ComplaintCategoryPage;
