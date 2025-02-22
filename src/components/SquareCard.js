import { useState } from "react";

const SquareCard = ({ imageSrc, title,  }) => {
  const [selectedMonth, setSelectedMonth] = useState("December");

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
      {/* Header (Collection & Dropdown) */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img src="/assets/image (4).png" alt="Collection" className="w-8 h-8" />
          <h3 className="text-[18px] font-semibold">Collection</h3>
        </div>
        <select
          className="border p-2 rounded-[12px] text-sm bg-white"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {[
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ].map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      {/* Square Cards Section */}
      <div className="flex justify-between px-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-1/2">
          <img src="/assets/image (5).png" alt="Pending" className="w-12 h-12 object-contain" />
          <h3 className="font-semibold mt-2">Pending</h3>
          <p className="text-lg font-bold mt-1 text-red-500">₹ 0</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-1/2">
          <img src="/assets/image (6).png" alt="Received" className="w-12 h-12 object-contain" />
          <h3 className="font-semibold mt-2">Received</h3>
          <p className="text-lg font-bold mt-1 text-green-500">₹ 0</p>
        </div>
      </div>

      {/* Total Collection Section */}
      <div className="p-4  mt-4 flex justify-between items-center">
        <p className="text-[17px] font-semibold">Total Collection</p>
        <p className="font-bold">₹ 0</p>
      </div>
      <div className="p-3 bg-white mt-2 rounded-lg shadow-md flex justify-center items-center cursor-pointer">
        <p className="text-[#69205D] font-semibold mr-10">All dues have been Paid</p>
        <img src="/assets/🦆 icon _chevron right arrow_.png" alt="Arrow" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default SquareCard;
