import { useState } from "react";
import Header from "../Components/Header";

const RequestsPage = () => {
  const [activeTab, setActiveTab] = useState("NEW");
  const [requests, setRequests] = useState([
    { id: 1, name: "John Doe", room: 101, status: "Pending" },
    { id: 2, name: "Mark Johnson", room: 103, status: "Pending" },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "CLOSED") {
      setRequests((prevRequests) =>
        prevRequests.map((request) => ({ ...request, status: "Closed" }))
      );
    } else {
      setRequests((prevRequests) =>
        prevRequests.map((request) => ({ ...request, status: "Pending" }))
      );
    }
  };

  return (
    <div className="bg-white min-h-screen rounded-lg flex flex-col p-6">
      <Header
        title="Request by tenants"
        icons={["search"]}
        onIconClick={(icon) => console.log(`${icon} clicked!`)}
      />

      <div className="flex-grow p-4 ml-10 ">
        {/* Separate Buttons for NEW & CLOSED */}
        <div className="flex  justify-center gap-30 mb-3">
          <button
            className={`px-5 py-4 rounded-md text-sm font-medium w-60 ${
              activeTab === "NEW"
                ? "bg-[#69205D] text-white text-lg"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabChange("NEW")}
          >
            NEW
          </button>

          <button
            className={`px-5 py-2 rounded-md text-sm font-medium w-60 ${
              activeTab === "CLOSED"
                ? "bg-[#69205D] text-white text-lg"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleTabChange("CLOSED")}
          >
            CLOSED
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-3">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <h3 className="font-bold">{request.name}</h3>
              <p className="text-gray-600">
                Room: {request.room} - Onboarding Request
              </p>
              <p className="text-gray-700">
                Status:{" "}
                <span
                  className={
                    request.status === "Closed"
                      ? "text-[#69205D]"
                      : "text-[#69205D]"
                  }
                >
                  {request.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
