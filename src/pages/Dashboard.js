import { useState } from "react";
import ProfileComponent from "../components/ProfileComponent";
import CardsComponent from "../components/CardsComponent";
import RectangleCard from "../components/RectangleCard";
import SquareCard from "../components/SquareCard";
import RectangleMeter from "../components/RectangleMeter";
import StatusCard from "../components/StatusCard";
import UpdatesCard from "../components/UpdatesCard";
import CommunityCard from "../components/CommunityCard";
import TenantStaffCard from "../components/TenantStaffCard";
import RecordMoneyCard from "../components/RecordMoneyCard";
import BedsComponent from "../components/BedsComponent";
const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("December");
  return (
<div className="space-y-4 max-w-4xl mx-auto p-4 sm:p-6 bg-[#F7F7F7] rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}>

    
      <ProfileComponent />

   
      <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center">

        <CardsComponent imageSrc="/assets/image.png" title="Properties" count={1} />
        <CardsComponent imageSrc="/assets/image (1).png" title="Beds" count={12} />
        <CardsComponent imageSrc="/assets/avatar-male__8_-removebg-preview 1.png" title="Tenants" count={0} />
        <CardsComponent imageSrc="/assets/bb-removebg-preview 2.png" title="Staffs" count={0} />
      </div>

      <div className="flex gap-4">
  <RectangleCard 
    imageSrc="/assets/image (2).png"
    title="Profile Completed"
    description="Add tenant to start your business"
    buttonText="75%"
    color="bg-[#69205D]"
    textcolor={"text-black-500"}
  />
  
  <RectangleCard 
    imageSrc="/assets/image (3).png"
    title="Reminder!"
    description="Bank account not linked for this property"
    buttonText="Link"
    color="bg-[#69205D]"
    textcolor={"text-red-500"}
  />
</div>


      <SquareCard />

      <RectangleMeter 
  title="INVENTORY"
  occupied="3"
  vacant="9"
  meterImage="/assets/Untitled_design__2___1_-removebg-preview 1.png" // Change this path based on your image location
/>

      <BedsComponent imageSrc="/assets/bed.png"/>
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Tenant Management</h3>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <StatusCard image="/assets/icon.png" label="Moving-In" count="2" />
        <StatusCard image="/assets/icon (1).png" label="Moving-Out" count="6" />
        <StatusCard image="/assets/agreement-end.png" label="Agreement End" count="2" />
      </div>

      {/* Updates Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Header with Title & Dropdown */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 font-semibold">Updates</h3>
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

      {/* Updates Cards */}
      <div className="space-y-2 mb-4">
        <UpdatesCard image="/assets/image (7).png" title="Sales" count="0" />
        <UpdatesCard image="/assets/image (8).png" title="Complaints" count="0" />
        <UpdatesCard image="/assets/image (9).png" title="Requests by Tenants" count="2" />
        <UpdatesCard image="/assets/image (10).png" title="Outpasses and Attendance" count="2" />
      </div>
    </div>

      {/* Tenants & Staff Cards */}
      <TenantStaffCard />

      {/* Record Money Card */}
      <RecordMoneyCard />

      {/* Community Section */}
      <div className="flex justify-between items-center mb-2 ">
        <h3 className="text-gray-800 font-semibold">Community</h3>
        <button className="text-xs text-purple-600 flex items-center">
          View &gt;
        </button>
      </div>

      <div className="p-3 bg-[rgba(124,157,179,0.2)] rounded-lg shadow-md flex items-center gap-3 mb-4">
        <CommunityCard 
          image="/assets/community-removebg-preview 1.png" 
          text="Communication with your tenants and staff by sharing content to groups."
        />
      </div>
    </div>

    </div>
  );
};

export default Dashboard;
