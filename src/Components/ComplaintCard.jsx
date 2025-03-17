import React from "react";

const ComplaintCard = ({ title, description, date, status }) => {
  const statusColors = {
    "New": "bg-red-500",
    "In Progress": "bg-yellow-500",
    "Closed": "bg-green-500",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 sm:w-full">
      <h2 className="font-bold">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-400 text-xs">{date}</span>
        <span className={`px-4 py-2 min-w-[100px] text-center inline-block text-white text-xs rounded ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default ComplaintCard;
