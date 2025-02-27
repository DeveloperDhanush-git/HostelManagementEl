import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";
import advanceRentIcon from "../Assets/mortgage_2506093-removebg-preview 1.png";
import securityDepositIcon from "../Assets/safety-box_1848151-removebg-preview 1.png";
import maintenanceIcon from "../Assets/settings_627495 1.png";
import electricityIcon from "../Assets/invoice_1957088-removebg-preview 1.png";
import foodIcon from "../Assets/food_5126468-removebg-preview 1.png";
import registrationIcon from "../Assets/register_3456426-removebg-preview 1.png";
import otherChargeIcon from "../Assets/price-list_4772983-removebg-preview 1.png";

const dues = [
  { id: 1, label: "Advance Rent", icon: advanceRentIcon, path: "/adddue/advance-rent" },
  { id: 2, label: "Security Deposit", icon: securityDepositIcon, path: "/adddue/security-deposit" },
  { id: 3, label: "Maintenance Charge", icon: maintenanceIcon, path: "/adddue/maintenance" },
  { id: 4, label: "Electricity Bill", icon: electricityIcon, path: "/adddue/electricity" },
  { id: 5, label: "Food Charge", icon: foodIcon, path: "/adddue/food" },
  { id: 6, label: "Registration Charge", icon: registrationIcon, path: "/adddue/registration" },
  { id: 7, label: "Other Charge", icon: otherChargeIcon, path: "/adddue/other" },
];

const AddDue = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleIconClick = (iconKey) => {
    if (iconKey === "plus") {
      alert("Add New Due functionality here!");
    }
  };

  const filteredDues = dues.filter((due) =>
    due.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4">
        <Header
          title="Add Due"
          onIconClick={handleIconClick}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Due List */}
        <div className="p-2 md:p-4 space-y-3 ml-3">
          {filteredDues.length > 0 ? (
            filteredDues.map((due) => (
              <div
                key={due.id}
                className="flex items-center justify-between bg-gray-200 p-2 md:p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => navigate(due.path)}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <img src={due.icon} alt={due.label} className="w-6 h-6 md:w-8 md:h-8" />
                  <p className="text-[12px] sm:text-[15px] font-semibold">{due.label}</p>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <FaPlus className="text-xs md:text-sm" />
                  <span className="text-[#69205D] text-[16px] md:text-lg mr-2 md:mr-3">Add</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-[15px]">No dues found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddDue;
