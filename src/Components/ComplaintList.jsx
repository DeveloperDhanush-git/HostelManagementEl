import React from "react";
import ComplaintCard from "./ComplaintCard";
import EmptyState from "./EmptyState";

const complaintsData = [
  { id: 1, title: "Broken AC in Room 201", description: "The air conditioner is not working properly.", date: "Jan 22, 2025", status: "New" },
  { id: 2, title: "Leaking Pipe in Bathroom", description: "The washroom sink pipe is leaking.", date: "Jan 20, 2025", status: "In Progress" },
  { id: 3, title: "Wi-Fi not working on 2nd floor", description: "The internet is very slow and not connecting.", date: "Jan 18, 2025", status: "Closed" },
  { id: 4, title: "Broken Window in Study Room", description: "One of the windows is broken, needs fixing.", date: "Jan 17, 2025", status: "New" },
];

const ComplaintList = ({ activeTab }) => {
  const filteredComplaints =
    activeTab === "ALL"
      ? complaintsData
      : complaintsData.filter((complaint) => complaint.status.toUpperCase() === activeTab);

  return (
    <div className="p-4">
      {filteredComplaints.length > 0 ? (
        filteredComplaints.map((complaint) => (
          <ComplaintCard key={complaint.id} {...complaint} />
        ))
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default ComplaintList;
