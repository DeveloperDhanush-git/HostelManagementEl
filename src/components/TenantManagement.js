import React from "react";
import UpdatesCard from "./UpdatesCard";
const TenantManagement = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Tenant Management Header */}
<div className="flex justify-between items-center mb-4">
  <h2 className="text-lg font-bold text-gray-800">Tenant Management</h2>
  <button className="px-4 py-2 text-[14px] bg-[#7C9DB3] text-white font-semibold rounded-full flex items-center gap-2">
    Total Duration
    <img src="/assets/Vector.png" alt="Arrow Down" className="w-3 h-2" />
  </button>
</div>

      {/* Moving In, Moving Out, Agreement Ending */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <StatusCard image="/assets/icon.png" label="Moving-In" count="2" />
        <StatusCard image="/assets/icon (1).png" label="Moving-Out" count="6" />
        <StatusCard image="/assets/agreement-end.png" label="Agreement End" count="2" />
      </div>

      {/* Updates Section */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 font-semibold">Updates</h3>
        <button className="px-4 py-2 text-[14px] text-black bg-white font-semibold rounded-full flex items-center gap-2">
            December
    <img src="/assets/Vector.png" alt="Arrow Down" className="w-3 h-2" />
  </button>
      </div>

      <div className="space-y-2 mb-4">
  <UpdatesCard image="/assets/image (7).png" title="Sales"  count="0"/> 
  <UpdatesCard image="/assets/image (8).png" title="Complaints"  count="0"/>
  <UpdatesCard image="/assets/image (9).png" title="Requests by Tenants"  count="0"/>
  <UpdatesCard image="/assets/image (10).png" title="Outpasses and Attendance"  count="0"/>
</div>


      {/* Tenants & Staff */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md">
          <img src="/assets/avatar-male__8_-removebg-preview 1.png" alt="Tenants" className="w-28 h-28 mx-auto mb-2" />
          <p className="text-gray-700 font-semibold">Tenants</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg text-center shadow-md">
          <img src="/assets/bb-removebg-preview 2.png" alt="Staff" className="w-28 h-28 mx-auto mb-2" />
          <p className="text-gray-700 font-semibold">Staff</p>
        </div>
      </div>

      {/* Record Money Section */}
      <div className="p-3 bg-white rounded-lg shadow-md flex items-center gap-3 mb-4">
        <img src="/assets/speech-bubble_4429060-removebg-preview 1.png" alt="Money" className="w-8 h-8" />
        <p className="text-[14px] text-gray-600">
          Record money received in cash, DD, Cheque or others
        </p>
      </div>

      {/* Community Section */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 font-semibold">Community</h3>
        <button className="text-xs text-purple-600 flex items-center">
          View &gt;
        </button>
      </div>

      <div className="p-3 bg-white rounded-lg shadow-md flex items-center gap-3 mb-4">
        <CommunityCard image="/assets/community-removebg-preview 1.png" text="Communication with your tenants and staff by sharing content to groups."/>
      </div>
    </div>
  );
};

// Component for Status Cards
const StatusCard = ({ image, label, count }) => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-md text-center">
      <img src={image} alt={label} className="w-6 h-6 mx-auto mb-1" />
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-bold text-gray-800">{count}</p>
    </div>
  );
};

// Component for Community Cards
const CommunityCard = ({ image, text }) => {
  return (
    <div className="p-3 flex gap-3 items-center">
      <img src={image} alt="Community" className="w-10 h-9" />
      <p className="text-[15px] text-gray-600">{text}</p>
    </div>
  );
};

export default TenantManagement;
