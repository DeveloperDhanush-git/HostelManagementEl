import React from "react";

const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className="flex overflow-x-auto space-x-2 px-2 sm:justify-around">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`whitespace-nowrap px-6 py-2 rounded-md text-sm font-medium transition-all ${
            selectedTab === tab ? "bg-[#69205D] text-white" : "text-gray-700"
          }`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
