import React from "react";
import { useParams } from "react-router-dom";
import { complaintCategories } from "./Data/complaintData"
import Header from "../Components/DynamicComponents/Header";

const ComplaintDetailsPage = () => {
    const { category, subcategory } = useParams();

    const formattedCategory = category.replace(/-/g, " ");
    const formattedSubcategory = subcategory.replace(/-/g, " ");
    
    const complaints = complaintCategories[formattedCategory]?.[formattedSubcategory];

    if (!complaints) {
        return <h2 className="text-center text-red-500">Complaint details not found</h2>;
    }

    return (
        <div className="bg-gray-100 flex flex-col items-center font-[Montserrat]">
            <div className="w-full min-h-screen rounded-lg flex flex-col p-6">
                <Header title={`${formattedCategory} - ${formattedSubcategory}`} />

                <div className="text-left ml-5 p-2">
                    <h2 className="text-2xl md:text-3xl font-bold">Please select your problem</h2>
                </div>

                <div className="p-6 w-full flex flex-wrap gap-3">
                    {complaints.map((issue, index) => (
                        <div key={index} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
                            {issue}
                        </div>
                    ))}
                </div>

                <button className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg mt-6">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default ComplaintDetailsPage;
