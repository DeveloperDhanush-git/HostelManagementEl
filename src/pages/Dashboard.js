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
import MonthDropdown from "../components/MonthDropdown";
import { FaChevronRight } from "react-icons/fa";


const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("December");
  return (
    <div className="space-y-4  mx-auto p-4 sm:p-6 bg-[#F7F7F7] rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}>


      <ProfileComponent
        name="Praveen"
        hostelName="SREE MAHA HOSTEL"
        profileImage="/assets/man_7122917-removebg-preview (1) 1.png"
      />


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
          textcolor={"text-black-800"}
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


      <SquareCard
        title="Collection"
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        pendingAmount={5000}
        receivedAmount={15000}
        totalCollection={20000}
        statusMessage="All dues have been Paid"
        collectionIcon="/assets/image (4).png"
        pendingIcon="/assets/image (5).png"
        receivedIcon="/assets/image (6).png"
      />


      <RectangleMeter
        title="Inventory"
        occupied="10"
        vacant="5"
        meterImage="/assets/meters-removebg-preview.png"
      />
      <BedsComponent
        imageSrc="/assets/bed.png"
        title="Manage Beds"
        description="Track every bed status and manage tenant move-in, move-out."
        buttonText="ADD"
      />

      <div className="p-4 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[18px] font-bold">Tenant Management</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <StatusCard image="/assets/icon.png" label="Moving-In" count="2" />
          <StatusCard image="/assets/icon (1).png" label="Moving-Out" count="6" />
          <StatusCard image="/assets/agreement-end.png" label="Agreement End" count="2" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[18px] font-bold">Updates</p>
            <MonthDropdown
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          </div>

          <div className="space-y-2 mb-4">
            <UpdatesCard image="/assets/image (7).png" title="Sales" count="0" />
            <UpdatesCard image="/assets/image (8).png" title="Complaints" count="0" />
            <UpdatesCard image="/assets/image (9).png" title="Requests by Tenants" count="2" />
            <UpdatesCard image="/assets/image (10).png" title="Outpasses and Attendance" count="2" />
          </div>
        </div>

        <TenantStaffCard
          tenantsImage="/assets/avatar-male__8_-removebg-preview 1.png"
          tenantsTitle="Tenants"
          staffImage="/assets/bb-removebg-preview 2.png"
          staffTitle="Staff"
        />

        <RecordMoneyCard />

        <div className="flex justify-between items-center mb-2 ">
          <h3 className="text-black-800 font-semibold">Community</h3>
          <button className="text-[15px] text-[#69205D] font-semibold flex items-center p-2 cursor-pointer">
            View<FaChevronRight className="text-black-800 w-4 h-4" />
          </button>
        </div>

        <div className="mb-4 bg-[rgba(124,157,179,0.2)] rounded-[15px]">
          <CommunityCard
            image="/assets/community-removebg-preview 1.png"
            text="Communication with your tenants and staff by sharing content to groups."
          />
        </div>

        <div className="mb-4 bg-[rgba(124,157,179,0.2)] rounded-[15px]">
          <CommunityCard
            image="/assets/image (11).png"
            text="Facing any issue with this app? Call support available 24x7."
          />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
