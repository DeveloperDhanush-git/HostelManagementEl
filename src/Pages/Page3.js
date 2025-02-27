import { useState } from "react";
import Header from "../Components/Header";

const MoveOutRequests = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const requests = [
    { id: 1, name: "John Doe", status: "New" },
    { id: 2, name: "Jane Smith", status: "In-progress" },
    { id: 3, name: "Mark Lee", status: "Closed" },
  ];

  // Filter requests based on active tab
  const filteredRequests =
    activeTab === "ALL"
      ? requests
      : requests.filter(
          (request) => request.status.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <div className=" bg-white min-h-screen rounded-lg  flex flex-col p-6 shadow-lg ">
      <Header title="Move-out" />
    
      {/* Tabs */}
      <div className="flex justify-evenly space-x-3 mb-6 p-4 ml-6 ">
        {["ALL", "NEW", "IN-PROGRESS", "CLOSED"].map((tab) => (
          <button
            key={tab}
            className={`px-5 py-4 rounded-lg w-40 text-md font-medium ${
              activeTab === tab
                ? "bg-[#69205D] text-white  w-60 "
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Subheading */}
      <p className="text-gray-700 mb-4 ml-15">
        Displaying all move-out requests...
      </p>

      {/* Requests List */}
      <div className="space-y-3 ml-15">
        {filteredRequests.map((request) => (
          <div
            key={request.id}
            className="bg-gray-100 p-6 text-lg rounded-lg shadow-sm"
          >
            <h3 className="font-bold text-gray-800">{request.name}</h3>
            <p
              className={`text-sm ${
                request.status === "Closed"
                  ? "text-red-600"
                  : request.status === "In-progress"
                  ? "text-blue-600"
                  : "text-green-600"
              }`}
            >
              {request.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoveOutRequests;
