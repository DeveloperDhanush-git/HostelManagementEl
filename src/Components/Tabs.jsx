import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["ALL", "NEW", "IN PROGRESS", "CLOSED"];

  return (
    <div className="flex  p-4 gap-4  mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-2 rounded-md text-sm font-medium cursor-pointer ml-4 ${
            activeTab === tab ? "bg-[#69205D] text-white" : "text-gray-700"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
        
      ))}
     

            
           
    </div>
  );
};

export default Tabs;
