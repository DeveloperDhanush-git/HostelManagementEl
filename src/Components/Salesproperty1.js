import { useState } from "react";
import Header from "./Header";
import { FaDollarSign } from "react-icons/fa"; // Importing Dollar Icon
import Button from "./Button";


export default function SalesCommission() {
  const [commissionType, setCommissionType] = useState("percentage");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const rent = 10000; // Example rent amount, change as needed.

  const calculateCommission = () => {
    if (commissionType === "percentage") {
      const percentage = parseFloat(amount) || 0;
      const commissionValue = ((percentage / 100) * rent).toFixed(6); // 6 decimal places
      return `₹ ${commissionValue} = Sales commission`;
    } else {
      return `₹ ${amount || 0} = Sales commission`;
    }
  };

  return (
    <div
      className="container bg-white min-h-screen rounded-lg flex flex-col"
      style={{ fontFamily: "Montserrat", minHeight: "100vh" }}
    >
      <Header title="Sales Settings" />
      <div className="flex-grow">
      <h2 className="text-xl font-bold ml-8">Sales Commission</h2>
      <p className="mt-2 text-gray-600 ml-8">Commission type</p>

      <div className="flex space-x-4 my-2 ml-8"> {/* Adjusted spacing */}
        <button
          className={`w-40 px-4 py-2 rounded border ${
            commissionType === "percentage"
              ? "bg-[#E5C5E2] border-[#69205D]"
              : "border-gray-300"
          }`}
          onClick={() => setCommissionType("percentage")}
        >
          Percentage(%)
        </button>
        <button
          className={`w-40 px-4 py-2 rounded border ${
            commissionType === "flat"
              ? "bg-[#E5C5E2] border-[#69205D]"
              : "border-gray-300"
          }`}
          onClick={() => setCommissionType("flat")}
        >
          Flat amount
        </button>
      </div>

      <input
        type="number"
        placeholder={
          commissionType === "percentage"
            ? "Enter percentage(%) amount"
            : "Enter Amount"
        }
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-[97%] px-4 py-2 border rounded mt-5 ml-8"
      />

      <p className="mt-6 ml-8">Minimum agreement duration</p>
      <select
        className="w-[97%] px-4 py-2 border rounded mt-4 ml-8"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value="">Select duration</option>
        <option value="12">12 months</option>
        <option value="24">24 months</option>
      </select>

      {/* Commission Display Section */}
      <div className="mt-4 w-[97%] bg-yellow-100 p-3 mt-5 rounded flex items-center ml-8  ">
        <div className="bg-yellow-400 text-white p-2 rounded-full">
          <FaDollarSign size={20} />
        </div>
        <div className="ml-3">
          <p className="text-sm font-bold text-black"> {/* Applied text-black here */}
            {calculateCommission()}
          </p>
          <p className="text-xs text-gray-600">
            for a minimum agreement of {duration || 0} months
          </p>
        </div>
      </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button button="List for Sales" />
        </div>
    </div>
  );
}
