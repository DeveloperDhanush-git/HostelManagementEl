import React from "react";
import pendingIcon from "../Assets/receive-mail_10678379-removebg-preview 1.png"; // Update path
import receivedIcon from "../Assets/image (12).png"; // Update path
import PaymentCard from "./PaymentCard"; // Import PaymentCard component
import DueCard from "./DueCard"; // Import DueCard component
import NoFeeIcon from "../Assets/no-fee_5486093-removebg-preview 1.png"; // Update path

const Dues = ({ searchQuery }) => {
  const duesList = [
    { id: 1, name: "Electricity Bill", amount: 1500, color: "bg-red-500", icon: "⚡" },
    { id: 2, name: "Water Bill", amount: 800, color: "bg-blue-500", icon: "💧" },
    { id: 3, name: "Maintenance Fee", amount: 2000, color: "bg-green-500", icon: "⚙️" },
    { id: 4, name: "Rent", amount: 5000, color: "bg-red-500", icon: "🏠" },
  ];

  const paidList = [{ id: 1, name: "Alice", pendingAmount: 200, receivedAmount: 800 }];

  // Filter dues based on search query
  const filteredDues = duesList.filter((due) =>
    due.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter paid transactions based on search query
  const filteredPaid = paidList.filter((entry) =>
    entry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Display Paid Transactions */}
      {filteredPaid.length > 0 ? (
        filteredPaid.map((entry) => (
          <div key={entry.id} className="flex justify-between px-2 gap-4">
            <PaymentCard icon={pendingIcon} label="Received" amount={entry.pendingAmount} color="text-red-500" />
            <PaymentCard icon={receivedIcon} label="Sales Commission" amount={entry.receivedAmount} color="text-green-500" />
          </div>
        ))
      ) : (
        <p className="text-gray-500">No transactions found</p>
      )}
   <hr className="my-4 border-black border-1 rounded-lg " />
      {/* Display Dues */}
      {filteredDues.length > 0 ? (
        filteredDues.map((due) => <DueCard key={due.id} {...due}/>)
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <img src={NoFeeIcon} alt="No Fee" className="w-24 h-24 mb-3" />
          <p className="text-lg font-semibold">Your dues are all clear !!</p>
          <p className="text-gray-500 text-sm">Enjoy your day</p>
        </div>
      )}
    </div>
  );
};

export default Dues;
