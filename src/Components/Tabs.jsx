import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["ALL", "NEW", "IN PROGRESS", "CLOSED"];

  return (
    <div dir="ltr">
      <div className="flex p-4 gap-4 mx-auto sm:flex flex-row justify-start items-center overflow-x-auto scrollbar  sm:scrollbar-thumb-[#69205D] sm:snap-x scroll-ps-6 mx-4"> {/* Added mx-4 for margin on x-axis */}
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ml-4 ${
              activeTab === tab ? "bg-[#69205D] text-white" : "text-gray-700"
            } sm:px-2 sm:py-1 md:px-6 md:py-2`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;