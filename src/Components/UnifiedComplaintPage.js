import React from "react";
import { useParams } from "react-router-dom";
import ComplaintCategoryPage from "./ComplaintCategoryPage";
import { complaintCategories } from "../Components/Data/complaintData";
import plugin from "../../Assets/Plugin.png";  

const normalizeCategory = (slug) => {
    return decodeURIComponent(slug).replace(/-/g, " ").toLowerCase();
};

const UnifiedComplaintPage = () => {
    const { category } = useParams();
    const formattedCategory = normalizeCategory(category);

    // Ensure case-insensitive match
    const selectedCategoryKey = Object.keys(complaintCategories).find(
        (key) => key.toLowerCase() === formattedCategory
    );

    if (!selectedCategoryKey) {
        return <h2 className="text-center text-red-500">Invalid Complaint Category</h2>;
    }

    return (
        <ComplaintCategoryPage
            title={selectedCategoryKey}
            icon={plugin}
            categories={complaintCategories[selectedCategoryKey]}
        />
    );
};

export default UnifiedComplaintPage;
