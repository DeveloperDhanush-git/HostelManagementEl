import React from "react";

const DueCard = ({ icon, name, amount, color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md mb-3 flex items-center ${color} text-white`}>
      <span className="text-2xl mr-3">{icon}</span>
      <div>
        <p className="font-semibold text-[14px] sm:text-xl">{name}</p>
        <p className="text-[14px] sm:text-sm">₹ {amount}</p>
      </div>
    </div>
  );
};

export default DueCard;
