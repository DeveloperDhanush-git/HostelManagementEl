import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";

const RecordPayment = () => {
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentMode, setPaymentMode] = useState(""); // Track selected payment mode

  const handleDateChange = (e) => {
    setPaymentDate(e.target.value);
  };

  return (
    <div
      className="container mx-auto bg-white min-h-screen rounded-lg max-w-4xl flex flex-col"
      style={{ fontFamily: "Montserrat" }}
    >
      <div className="flex-grow">
        <Header title="Record Payment"/>

        <div className="w-full">
          <div className="mt-4 ml-8 mr-4 space-y-3">
            
            <input
              type="text"
              placeholder="Search tenant"
              className="w-full p-2 border border-gray-300 rounded-lg placeholder-gray-500 
              focus:outline-none focus:ring-0 focus:border-gray-300"
            />
            <input
              type="text"
              placeholder="Amount paid"
              className="w-full p-2 border border-gray-300 rounded-lg placeholder-gray-500 
              focus:outline-none focus:ring-0 focus:border-gray-300"
            />
            <input
              type={paymentDate ? "date" : "text"}
              placeholder="Payment date"
              className="w-full p-2 border border-gray-300 rounded-lg placeholder-gray-500 
              focus:outline-none focus:ring-0 focus:border-gray-300"
              value={paymentDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              onChange={handleDateChange}
            />

            <select
              className={`w-full p-2 border border-gray-300 rounded-lg ${
                paymentMode ? "text-black" : "text-gray-500"
              } focus:outline-none focus:ring-0 focus:border-gray-300`}
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
            >
              <option value="" disabled>
                Payment mode
              </option>
              <option value="bank-transfer">Bank Transfer</option>
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </select>

            <input
              type="text"
              placeholder="UTR/Reference no."
              className="w-full p-2 border border-gray-300 rounded-lg placeholder-gray-500 
              focus:outline-none focus:ring-0 focus:border-gray-300"
            />
            <input
              type="text"
              placeholder="Received by"
              className="w-full p-2 border border-gray-300 rounded-lg placeholder-gray-500 
              focus:outline-none focus:ring-0 focus:border-gray-300"
            />
            <textarea
              placeholder="Description (optional)"
              className="w-full p-2 border border-gray-300 rounded-lg placeholder-gray-500 
              focus:outline-none focus:ring-0 focus:border-gray-300"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <Button button="Save" />
      </div>
    </div>
  );
};

export default RecordPayment;

