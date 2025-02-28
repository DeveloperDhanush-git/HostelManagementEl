import Header from '../Components/Header';
import Tabs from "../Components/Tabs";
import ComplaintList from "../Components/ComplaintList";
import FilterModal from "../Components/FilterModal";

import React, { useState } from "react";

const Allpages = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    sharingType: [],
    gender: "",
    roomFeatures: [],
  });

  // Handle icon clicks
  const handleIconClick = (iconKey) => {
    if (iconKey === "sliders") {
      setIsFilterOpen(true); // ✅ Open filter modal when sliders icon is clicked
    }
  };
  // const [complaints, setComplaints] = useState([]); // Empty complaints array
  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col relative">
      <div className="flex-grow p-4">
        {/* Header with proper alignment */}
        
        
        
      <Header 
      buttonName="Complaints"
      icons={["sliders"]} // ✅ Only the sliders icon remains
       onIconClick={handleIconClick} // ✅ Pass click handler
        />
         

  {/* Tabs */}
  <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

{/* Complaint List */}
<ComplaintList activeTab={activeTab} />
<FilterModal
          isOpen={isFilterOpen}
          filters={filters}
          setFilters={setFilters} // Pass filter state
          onClose={() => setIsFilterOpen(false)}
        />
</div>
      </div>
    
  );
};

export default Allpages;
