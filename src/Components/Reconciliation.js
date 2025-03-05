
import { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const Reconciliation = () => {
  const [fromDate, setFromDate] = useState(""); // Store From date
  const [toDate, setToDate] = useState(""); // Store To date
  const [selectedDuration, setSelectedDuration] = useState(""); // Track selected duration
  const [selectedFilter, setSelectedFilter] = useState(""); // Track selected filter

  // Function to handle duration selection
  const handleDurationClick = (label) => {
    const today = new Date();
    let from = "";
    let to = today.toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

    switch (label) {
      case "Today":
        from = to;
        break;
      case "This month":
        from = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split("T")[0];
        break;
      case "Last month":
        from = new Date(today.getFullYear(), today.getMonth() - 1, 1).toISOString().split("T")[0];
        to = new Date(today.getFullYear(), today.getMonth(), 0).toISOString().split("T")[0];
        break;
      case "Till date":
        from = "2024-01-01"; // Default start date (change if needed)
        break;
      default:
        return;
    }

    setFromDate(from);
    setToDate(to);
    setSelectedDuration(label); // Set selected duration for styling
  };

  // Function to handle filter selection
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter); // Set selected filter for styling
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col " style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Reconciliation Report" />
      <div className="flex-grow">
<div>
      {/* Select Duration */}
      <div className="mt-2 ml-9">
        <h4 className="text-gray-800 font-medium">Select duration</h4>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <input type="text" value={fromDate} placeholder="From" className="p-2 bg-gray-200 rounded w-full" disabled />
          <input type="text" value={toDate} placeholder="To" className="p-2 bg-gray-200 rounded w-full" disabled />
        </div>
        <div className="flex gap-2 mt-5">
          {["Today", "This month", "Last month", "Till date"].map((label, index) => (
            <button
              key={index}
              className={`border p-2 rounded transition-colors duration-300 ${
                selectedDuration === label ? "bg-[#69205D] text-white font-bold" : "bg-white text-black"
              }`}
              onClick={() => handleDurationClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Reports */}
      <div className="mt-6 ml-9">
        <h4 className="text-gray-800 font-medium">Filter reports</h4>
        <div className="flex gap-2 mt-2">
          {["Property", "City"].map((filter, index) => (
            <button
              key={index}
              className={`border p-2 pl-5 pr-5 rounded transition-colors duration-300 ${
                selectedFilter === filter ? "bg-[#69205D] text-white font-bold" : "bg-white text-black"
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Enter Email ID */}
      <div className="mt-6 ml-9">
        <h4 className="text-gray-800 font-medium">Enter Email ID</h4>
        <input type="email" placeholder="Email ID" className="p-2 bg-gray-200 rounded w-full mt-2" />
        <p className="text-sm text-[#69205D] mt-1">Add multiple email IDs separated by commas(,).</p>
        <p className="text-gray-600 mt-2">The report will be sent to this email ID.</p>
      </div>
      </div>
</div>

      <div className="mt-6 flex justify-center">
        <Button button="Send Email" />
      </div>
    </div>
  );
};

export default Reconciliation;

