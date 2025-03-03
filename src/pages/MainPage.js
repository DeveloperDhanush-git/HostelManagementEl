import React from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/man_7122917-removebg-preview (1) 1 (1).png"; // Update path
import enquiryIcon from "../assets/search_17302568__1_-removebg-preview 1.png"; // Update path
import bookingIcon from "../assets/calendar_3483805-removebg-preview 1.png"; // Update path
import salesIcon from "../assets/graph_2074632-removebg-preview 1.png"; // Update path
import { FaChevronRight } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen p-6 bg-white">
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <img src={profileIcon} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
        <p className="text-[19px] font-semibold">Ravi</p>
      </div>

      <div className="flex flex-col justify-center mt-15">
      <div className="mt-4">
        <p className="bg-[#69205D] text-white px-4 py-2 rounded-md w-fit text-sm font-semibold mb-2">Updates</p>
      </div>

      {/* List Items */}
      <div className="mt-2 space-y-3">
        <ListItem icon={enquiryIcon} title="Enquiries" count="0" />
        <ListItem icon={bookingIcon} title="Bookings Request" count="0" />
        <ListItem icon={salesIcon} title="Sales Settings" description="Add/update commission details for your properties" />
      </div>

      {/* Another Updates Section */}
      <div className="mt-6">
        <p className="bg-[#69205D] text-white px-4 py-2 rounded-md w-fit text-sm font-semibold mb-4">Updates</p>
      </div>

      <ListItem icon={bookingIcon} title="Bookings Request" count="0" />
    </div>
    </div>
  );
};

// Component for List Item
const ListItem = ({ icon, title, count, description }) => (
  <div className="flex items-center bg-gray-200 p-3 rounded-md shadow-sm cursor-pointer">
    <img src={icon} alt={title} className="w-6 h-6 mr-3" />
    <div className="flex-1">
      <p className="text-[17px] font-semibold">{title}</p>
      {description ? <p className="text-sm text-gray-500">{description}</p> : <p className="text-sm font-bold">{count}</p>}
    </div>
    <p><FaChevronRight/></p>
  </div>
);

export default MainPage;
