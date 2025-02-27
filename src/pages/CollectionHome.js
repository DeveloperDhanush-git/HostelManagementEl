import React, { useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tab"; 
import Dues from "../components/Dues";
import Paid from "../components/Paid";

const CollectionHome = () => {
  const [selectedTab, setSelectedTab] = useState("Dues");
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const tabs = ["Dues", "Paid"];

  // Dynamic icons based on selected tab
  const icons = selectedTab === "Dues" ? ["sliders", "bell", "plus"] : ["search", "bell", "plus"];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4">
        {/* Header Component */}
        <Header 
          title="Collection"
          icons={icons}  
          onIconClick={(icon) => {
            if (icon === "plus") {
              window.location.href = "/adddue"; 
            } else if (icon === "sliders") {
              console.log("Filter button clicked!"); 
            } else if (icon === "bell") {
              console.log("Notifications clicked!"); 
            } else if (icon === "search") {
              console.log("Search button clicked!"); 
            }
          }} 
          showSearch={true} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        
          <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {/* Tab Content with Filtered Results */}
        <div className="mt-4 p-2 md:p-4">
          {selectedTab === "Dues" ? <Dues searchQuery={searchQuery} /> : <Paid searchQuery={searchQuery} />}
        </div>
      </div>
    </div>
  );
};

export default CollectionHome;
