import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "./Header";
import Button from "./Button";

const BankDetails = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = () => {
    navigate("/success"); // Navigate to success page
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col" style={{ fontFamily: "Montserrat" }}>
      <Header title="Add Details" />
      <div className="flex-grow">
        <div className="">
          <h2 className="text-lg ml-7 font-semibold">Bank details</h2>
          <p className="text-gray-500 ml-7 text-sm mt-1">
            Payments made by tenants via UPI, Debit Card, Credit Card etc. will reflect in this account.
          </p>
          
          {/* Toggle Buttons */}
          <div className="flex gap-2 ml-7 mt-4">
            <button
              className={`flex-1 py-2 rounded border ${selectedTab === "bank" ? "bg-[#69205D] text-white" : "border-gray-400 text-gray-700"}`}
              onClick={() => setSelectedTab("bank")}
            >
              Bank
            </button>
            <button
              className={`flex-1 py-2 rounded border ${selectedTab === "upi" ? "bg-[#69205D] text-white" : "border-gray-400 text-gray-700"}`}
              onClick={() => setSelectedTab("upi")}
            >
              UPI
            </button>
          </div>

          {/* Form Inputs */}
          {selectedTab === "bank" && (
            <div className="mt-4 ml-7 flex flex-col gap-3">
              <input type="text" placeholder="Account holder name" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Account number" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Re-enter account number" className="border p-2 rounded w-full" />
              <input type="text" placeholder="IFSC code" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Address" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Bank name" className="border p-2 rounded w-full" />
            </div>
          )}

          {selectedTab === "upi" && (
            <div className="mt-4 flex flex-col ml-7 gap-3">
              <input type="text" placeholder="VPA" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Account holder name" className="border p-2 rounded w-full" />
            </div>
          )}
        </div>
      </div> 
      <div className="mt-6 flex justify-center">
        <Button button="Submit" onClick={handleSubmit} />  {/* Add onClick */}
      </div>
    </div>
  );
};

export default BankDetails;
