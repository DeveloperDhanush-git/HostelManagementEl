import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";

const RecordPayment = () => {
  const [paymentDate, setPaymentDate] = useState("");

  const handleDateChange = (e) => {
    setPaymentDate(e.target.value);
  };

  return (
    <div
      className="container mx-auto bg-white min-h-screen rounded-lg max-w-4xl flex flex-col"
      style={{ fontFamily: "Montserrat" }}
    >
      <div className="flex-grow ">
        <Header />

        <div className="w-full">
          {/* Form Fields */}
          <div className="mt-4 ml-8 mr-4 space-y-3">
            <input
              type="text"
              placeholder="Search tenant"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Amount paid"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type={paymentDate ? "date" : "text"}
              placeholder="Payment date"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={paymentDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              onChange={handleDateChange}
            />

            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Payment mode</option>
              <option>Bank Transfer</option>
              <option>Cash</option>
              <option>UPI</option>
            </select>
            <input
              type="text"
              placeholder="UTR/Reference no."
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Received by"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Description (optional)"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-4 flex justify-center">
        <Button button="Save" />
      </div>

    </div>
  );
};

export default RecordPayment;
