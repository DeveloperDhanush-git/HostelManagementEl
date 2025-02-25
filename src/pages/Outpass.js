import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Header from "../components/Header";
import Tabs from "../components/Tab"; // Import the Tabs component

const tabs = ["ALL", "NEW", "APPROVED", "PENDING", "CLOSED"];

const allOutpassData = [
  { id: 1, name: "Ravi", date: "2024-02-20", status: "NEW" },
  { id: 2, name: "Sam", date: "2024-02-21", status: "APPROVED" },
  { id: 3, name: "John", date: "2024-02-22", status: "PENDING" },
  { id: 4, name: "John", date: "2024-02-22", status: "CLOSED" },
];

const statusColors = {
  NEW: "bg-blue-500",
  APPROVED: "bg-green-500",
  PENDING: "bg-yellow-500",
  CLOSED: "bg-red-500",
};

const OutPass = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");

  const filteredOutpassData =
    selectedTab === "ALL"
      ? allOutpassData
      : allOutpassData.filter((request) => request.status === selectedTab);

  return (
    <div>
      <Header title="Outpass" />
      
      {/* Dynamic Tabs Component */}
      <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* OutPass List */}
      <div className="mt-4 space-y-4 pb-20 px-2 sm:px-4">
        {filteredOutpassData.length > 0 ? (
          filteredOutpassData.map((request) => (
            <div
              key={request.id}
              className="flex flex-col sm:flex-row justify-between items-center border border-[#69205D] border-2 rounded-lg p-4 shadow-md bg-white"
            >
              {/* User Info */}
              <div className="flex items-center space-x-4">
                <FaUserCircle className="text-3xl text-gray-500" />
                <div>
                  <p className="font-medium text-[18px] sm:text-[16px]">{request.name}</p>
                  <p className="text-gray-600 text-[15px] sm:text-[14px]">
                    Date: <span className="font-semibold">{request.date}</span>
                  </p>
                </div>
              </div>

              {/* Status Label */}
              <div
                className={`px-6 py-2 rounded-lg text-white font-semibold w-full sm:w-40 text-center mt-3 sm:mt-0 ${
                  statusColors[request.status] || "bg-gray-500"
                }`}
              >
                {request.status}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">No OutPass requests</p>
        )}
      </div>
    </div>
  );
};

export default OutPass;
