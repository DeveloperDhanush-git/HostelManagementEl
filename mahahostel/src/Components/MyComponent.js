import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import hostelBuilding from "../Assets/Hostel Building.png";
import Header from "./DynamicComponents/Header";
import RectangleMeter from "./RectangleMeter";
import UpdatesCard from "./UpdatesCard";
import SquareCard from "./SquareCard";

const properties = [
  {
    id: "CRIB005679",
    name: "Maha Hostel",
    image: hostelBuilding,
    address: "No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State, 6xxxx6",
  },
  {
    id: "CRIB005680",
    name: "Chennai Hostel",
    image: hostelBuilding,
    address: "No. 04, XYZ Road, XYZ Street, XYZ Colony, XYZ City, XYZ State, 6xxxx7",
  },
  {
    id: "CRIB005681",
    name: "Coimbatore Hostel",
    image: hostelBuilding,
    address: "No. 05, LMN Road, LMN Street, LMN Colony, LMN City, LMN State, 6xxxx8",
  },
];

const MyComponent = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [selectedMonth, setSelectedMonth] = useState("December");

  if (!property) {
    return <p className="text-center text-red-500">Property not found!</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      
      <div className="w-full bg-white rounded-lg shadow-md border-2 border-[#69205D] p-4">
        <div className="flex justify-end">
          <button className="text-gray-500">
            
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <h1 className="mb-3 font-bold text-xl text-black text-center ">{property.name}</h1>
            <img src={property.image} alt="Hostel Icon" className="mb-8 w-30 h-30 object-cover" />
          </div>
          <div className="bg-[#F7F7F7] p-7 rounded-md text-xl text-gray-600 w-full md:w-2/3">
            <p>{property.address}</p>
          </div>
        </div>
        <div className="border-t-2 border-[#69205D] mt-2 pt-2 flex justify-between items-center">
          <p className="flex flex-row text-[#69205D] font-semibold text-lg"> <FiMoreHorizontal  className="mt-2 justify-end"size={24} />   {property.id}</p>
          <button className="flex items-center text-green-500 gap-2">
            <FaWhatsapp size={24} />
            <span className="text-lg font-medium">Share</span>
          </button>
        </div>
      </div>

      {/* Collection Section */}
      <div className="mt-6">
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
      </div>

      {/* Inventory Section */}
      <div className="mt-6">
        <RectangleMeter
          title="Inventory"
          occupied="10"
          vacant="5"
          meterImage="/assets/meters-removebg-preview.png"
        />
      </div>

      {/* Updates Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[18px] font-bold">Updates</p>
        </div>
        <div className="space-y-2 mb-4">
          <UpdatesCard image="/assets/image (7).png" title="Sales" count="0" />
          <UpdatesCard image="/assets/image (8).png" title="Complaints" count="0" />
          <UpdatesCard image="/assets/image (9).png" title="Requests by Tenants" count="2" />
          <UpdatesCard image="/assets/image (10).png" title="Outpasses and Attendance" count="2" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
