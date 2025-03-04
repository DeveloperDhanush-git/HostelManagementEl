import React from "react";
import { Link } from "react-router-dom";
import { complaintCategories } from "../Components/Data/complaintData";

const ComplaintLinks = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Complaint Categories</h2>
            <ul className="list-disc pl-6">
                {Object.keys(complaintCategories).map((category) => (
                    <li key={category} className="mb-2">
                        <Link 
                            to={`/complaints/${category.replace(/\s+/g, "-").toLowerCase()}`}
                            className="text-blue-500 hover:underline"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComplaintLinks;
