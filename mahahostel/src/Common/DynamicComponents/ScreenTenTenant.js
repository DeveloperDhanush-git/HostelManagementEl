import React from "react";
import Header from "./Header";
import Button from "./Button";

const AddTenant = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 h-auto flex flex-col md:p-6">

        <Header title="Add Tenant" />
      <div className="mt-4 bg-gray-100 p-3 rounded-md">
        <div className="flex justify-between">
          <span className="font-semibold">Maha Hostel</span>
          <span className="text-gray-500">📷</span>
        </div>
      </div>
      <p className="text-blue-500 text-sm mt-3">STEP 3 of 3</p>
      <h2 className="font-bold text-lg mt-1">Account Summary</h2>
      <p className="text-gray-600">Collection</p>
      <div className="bg-gray-100 p-3 rounded-md mt-2">
        <div className="flex justify-between">
          <span>💰 Security deposit</span>
          <span>₹2500</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>📅 11 Dec - 31 Dec, 24</span>
          <span>₹4200</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>⏳ Total Dues</span>
          <span>₹6700</span>
        </div>
      </div>
      <p className="font-semibold mt-4">Any due or advance?</p>
      <div className="space-y-2">
        {["No dues", "Pending dues", "Excess payment", "Token amount"].map(
          (option, index) => (
            <label
              key={index}
              className="flex items-center border rounded-md p-2 cursor-pointer"
            >
              <input type="radio" name="due" className="mr-2" />
              {option}
            </label>
          )
        )}
      </div>
      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded" />
          <span>Allow online payments</span>
        </label>
      </div>
      <div className="bg-gray-100 p-3 rounded-md mt-3">
        <p className="font-semibold">Online payment</p>
        <div className="flex justify-between mt-2">
          <span>Total due</span>
          <span>₹6700</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Paid Amount</span>
          <span>₹0</span>
        </div>
        <div className="flex justify-between mt-2 font-bold">
          <span>Pending</span>
          <span>₹0</span>
        </div>
      </div>

      <Button button="Add Tenant" defaultColor="#69205D" route="/success"/>
    </div>
  );
};

export default AddTenant;
