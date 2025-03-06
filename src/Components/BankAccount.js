import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import Header from "./Header";
import Button from "./Button";

const BankAccount = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active");
  const [activeAccounts, setActiveAccounts] = useState([
    { bankName: "ICICI Bank", accountHolder: "Ragul", accountNumber: "XXXX1234", ifscCode: "ICIC0001234" },
    { bankName: "HDFC Bank", accountHolder: "Deva", accountNumber: "XXXX5678", ifscCode: "HDFC0005678" },
  ]);
  const [inactiveAccounts, setInactiveAccounts] = useState([
    { bankName: "State Bank of India", accountHolder: "Krishna", accountNumber: "XXXX9876", ifscCode: "SBIN0009876" },
  ]);

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col" style={{ fontFamily: "Montserrat" }}>
      <Header title="Bank Account" />
      <div className="flex-grow">
        <div className="flex items-center  pb-2">
          <button
            className={`flex-1 py-2 font-semibold ${
              activeTab === "active" ? "text-[#69205D] ml-7 border-b-2 border-[#69205D]" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("active")}
          >
            ACTIVE
          </button>
          <button
            className={`flex-1 py-2 font-semibold ${
              activeTab === "inactive" ? "text-[#69205D] border-b-2 border-[#69205D]" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("inactive")}
          >
            IN-ACTIVE
          </button>
        </div>

        <div className="bg-red-100 ml-7 text-red-600 p-2 rounded justify-center mb-4 text-sm">
  <strong>Bank account not linked for 6 properties</strong>  
  <span className=" font-bold"> View &gt;</span>
</div>

        <div>
          {activeTab === "active" ? (
            activeAccounts.length > 0 ? (
              activeAccounts.map((acc, index) => (
                <div key={index} className="bg-white p-4 ml-7  rounded-lg mb-2 flex items-center shadow-md">
                  <div className="bg-gray-300 p-2 rounded-full">
                    <FaUniversity className="text-[#69205D] text-2xl" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">{acc.bankName}</h3>
                    <p className="text-sm">Holder: {acc.accountHolder}</p>
                    <p className="text-sm">A/C: {acc.accountNumber} | IFSC: {acc.ifscCode}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center ml-7 text-gray-500 mt-6">
                <FaUniversity className="text-gray-400 text-6xl mx-auto mb-2" />
                <p>No active bank account added</p>
              </div>
            )
          ) : (
            inactiveAccounts.map((acc, index) => (
              <div key={index} className="bg-white ml-7  p-4 rounded-lg mb-2 flex items-center shadow-md">
                <div className="bg-gray-300 p-2 rounded-full">
                  <FaUniversity className="text-[#69205D] text-2xl" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">{acc.bankName}</h3>
                  <p className="text-sm">Holder: {acc.accountHolder}</p>
                  <p className="text-sm">A/C: {acc.accountNumber} | IFSC: {acc.ifscCode}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Corrected Button Section */}
      <div className="mt-6  flex justify-center">
        <Button button="Add bank account" onClick={() => navigate("/add-bank-account")} />
      </div>
    </div>
  );
};

export default BankAccount;
