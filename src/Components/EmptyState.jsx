import React from "react";
import { FaRegCommentDots } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <FaRegCommentDots className="text-gray-400 text-5xl" />
      <p className="text-gray-500 mt-2">No complaints found.</p>
    </div>
  );
};

export default EmptyState;
