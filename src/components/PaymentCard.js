import React from "react";

const PaymentCard = ({ icon, label, amount, color }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center w-1/2">
      <img src={icon} alt={label} className="w-12 h-12 object-contain" />
      <p className="font-semibold text-[14px] sm:text-xl mt-2">{label}</p>
      <p className={`text-[15px] sm:text-xl font-bold mt-1 ${color}`}>₹ {amount}</p>
    </div>
  );
};

export default PaymentCard;