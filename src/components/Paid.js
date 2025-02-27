import React from "react";
import NoFeeIcon from "../Assets/no-fee_5486093-removebg-preview 1.png";
import PaymentCard from "./PaymentCard"; // Importing the reusable component

import receivedIcon from "../Assets/receive-mail_10678379-removebg-preview 1.png"; 
import commissionIcon from "../Assets/image (12).png"; 

const Paid = ({ searchQuery }) => {
  const paidTransactions = [
    { id: 1, label: "Electricity Bill", amount: 1500, bgColor: "bg-green-500", textColor: "text-white", icon: "⚡" },
    { id: 2, label: "Water Bill", amount: 800, bgColor: "bg-blue-500", textColor: "text-white", icon: "💧" },
    { id: 3, label: "Maintenance Fee", amount: 2000, bgColor: "bg-purple-500", textColor: "text-white", icon: "⚙️" },
  ];

  const filteredTransactions = paidTransactions.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Summary Cards */}
      <div className="flex justify-between px-2 gap-4">
        <PaymentCard icon={receivedIcon} label="Pending" amount={100} color="text-red-500" />
        <PaymentCard icon={commissionIcon} label="Received" amount={700} color="text-green-500" />
      </div>

      <hr className="my-4 border-black border-1 rounded-lg" />

      {/* Paid Transactions List */}
      {filteredTransactions.length > 0 ? (
        filteredTransactions.map((item) => (
          <div 
            key={item.id} 
            className={`text-sm ${item.bgColor} p-4 rounded-lg shadow-md flex items-center mb-3 text-white`}
          >
            <span className="text-2xl mr-3">{item.icon}</span>
            <div>
              <p className="font-semibold text-lg">{item.label}</p>
              <p className={`text-sm ${item.textColor}`}>₹ {item.amount}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <img src={NoFeeIcon} alt="No Fee" className="w-24 h-24 mb-3" />
          <p className="text-lg font-semibold">Looks like no one paid their dues</p>
          <p className="text-gray-500 text-sm">Enjoy your day</p>
        </div>
      )}
    </div>
  );
};

export default Paid;
