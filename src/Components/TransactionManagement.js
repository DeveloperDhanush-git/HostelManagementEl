import React from "react";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import Wallet from "../../src/Assets/spending-removebg-preview 1.png";
import bank from "../Assets/Bank.png";
import recorded from "../Assets/edit-removebg-preview 1.png";
import Header from "../Components/DynamicComponents/Header";

const TransactionManagement = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center font-montserrat overflow-hidden">
      {/* Container */}
      <div className="w-full min-h-screen rounded-lg flex flex-col p-6">
        {/* Header */}
        <Header title="My Transaction" icons={["sliders"]} />

        {/* Transaction Cards */}
        <div className="bg-gray-100 rounded-lg flex flex-col items-center mt-5 gap-5">
          {/* Top Card (Overall) */}
          <div className="bg-white p-6 rounded-2xl w-60 h-42 flex flex-col items-center justify-center shadow-md">
            <img src={Wallet} alt="Wallet" className="w-20 h-20" />
            <p className="font-semibold mt-2 text-black">Over all</p>
            <p className="text-blue-600 text-lg">₹1000</p>
          </div>

          {/* Grid for Other Cards */}
          <div className="flex flex-col items-center gap-6">
            {/* First Row - Received & Paid */}
            <div className="flex gap-15">
              <div className="bg-white p-6 rounded-xl w-60 h-42 flex flex-col items-center justify-center shadow-md">
                <GoArrowDownLeft className="text-7xl text-green-600" />
                <p className="font-semibold mt-2 text-green-600">Received</p>
                <p className="text-green-600 text-lg">₹5,000</p>
              </div>

              <div className="bg-white p-6 rounded-xl w-60 h-42 flex flex-col items-center justify-center shadow-md">
                <GoArrowUpRight className="text-7xl text-blue-600" />
                <p className="font-semibold mt-2 text-blue-600">Paid</p>
                <p className="text-blue-600 text-lg">₹1000</p>
              </div>
            </div>

            {/* Second Row - Bank & Recorded */}
            <div className="flex gap-15">
              <div className="bg-white p-6 rounded-xl w-60 h-42 flex flex-col items-center justify-center shadow-md">
                <img src={bank} alt="Bank" className="w-20 h-20" />
                <p className="font-semibold mt-2 text-black">Bank</p>
                <p className="text-black text-lg">₹5,000</p>
              </div>

              <div className="bg-white p-6 rounded-2xl w-60 h-42 flex flex-col items-center justify-center shadow-md">
                <img src={recorded} alt="Recorded" className="w-20 h-20" />
                <p className="font-semibold mt-2 text-blue-600">Recorded</p>
                <p className="text-blue-600 text-lg">₹1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionManagement;
