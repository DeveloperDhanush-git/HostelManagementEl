import React from "react";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Header from "./Header";
import Button from "./Button"

const AddTenant = () => {
  const [rentalType, setRentalType] = useState("Monthly");
  const [rentCycle, setRentCycle] = useState("01-01");

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 h-auto flex flex-col md:p-6">

        <Header title="Add Tenant"/>
      
      <div className="bg-gray-100 p-3 rounded-md mb-4 flex justify-between">
        <span>Maha Hostel 01</span>
        <FaCalendarAlt className="text-gray-500" />
      </div>
      
      <p className="text-blue-600 text-sm">STEP 2 of 3</p>
      <h2 className="font-semibold text-lg mb-2">Terms of agreement</h2>
      
      <p className="text-sm font-medium">Rental type</p>
      <div className="flex gap-2 my-2">
        {['Monthly', 'One-time', 'Daily(short stay)'].map((type) => (
          <button
            key={type}
            onClick={() => setRentalType(type)}
            className={`px-3 py-2 rounded-md text-sm ${rentalType === type ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            {type}
          </button>
        ))}
      </div>
      
      <input type="text" placeholder="Monthly Rent" className="w-full border rounded-md p-2 mb-2" />
      <input type="text" placeholder="Security deposit" className="w-full border rounded-md p-2 mb-2" />
      <input type="text" placeholder="Maintenance" className="w-full border rounded-md p-2 mb-2" />
      <div className="relative">
        <input type="text" placeholder="Agreement start date" className="w-full border rounded-md p-2" />
        <FaCalendarAlt className="absolute right-3 top-3 text-gray-500" />
      </div>
      
      <h3 className="font-semibold text-lg mt-4">Add tenant move-in date</h3>
      <p className="text-sm font-medium">Rent cycle</p>
      <div className="flex gap-2 my-2">
        {['01-01', '15-15', 'Date to Date'].map((cycle) => (
          <button
            key={cycle}
            onClick={() => setRentCycle(cycle)}
            className={`px-3 py-2 rounded-md text-sm ${rentCycle === cycle ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            {cycle}
          </button>
        ))}
      </div>
      
      <input type="text" placeholder="Agreement duration" className="w-full border rounded-md p-2 mb-2" />
      <input type="text" placeholder="Lock in period" className="w-full border rounded-md p-2 mb-2" />
      <input type="text" placeholder="Notice period" className="w-full border rounded-md p-2 mb-4" />

      <Button button="Continue" defaultColor="#69205D"/>
    </div>
  );
};

export default AddTenant;
