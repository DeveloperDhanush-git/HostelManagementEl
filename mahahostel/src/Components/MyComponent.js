import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import hostelBuilding from "../Assets/Hostel Building.png";
import Header from "./DynamicComponents/Header";
import RectangleMeter from "./RectangleMeter";
import UpdatesCard from "./UpdatesCard";
import SquareCard from "./SquareCard";
import Button from "./DynamicComponents/Button";
import MonthDropdown from "./MonthDropdown";
import BedsComponent from "./DynamicComponents/BedsComponent";
import FilterModal from "./DynamicComponents/FilterModal";
import CollectionIcon from "../Assets/CollectionIcon.png";
import pendingIcon from "../Assets/PendingIcon.png";
import receivedIcon from "../Assets/ReceivedIcon.png";
import metersremovebgpreview from "../Assets/meters-removebg-preview.png"
import bed from "../Assets/bed.png";
import Sales from "../Assets/Sales.png";
import Complaints from "../Assets/Complaints.png";
import RequestsbyTenants from "../Assets/Request.png";
import Outpasses from "../Assets/Outpasses.png"
import avatar from "../Assets/avatar-male__8_-removebg-preview 1.png"
import bb from "../Assets/bb-removebg-preview 2.png"



const properties = [
  {
    id: "CRIB005679",
    name: "Maha Hostel",
    image: hostelBuilding,
    address: "11/118 ABCD Street, ABC City, ABC State,69054",
  },
  {
    id: "CRIB008234",
    name: "Sunrise PG",
    image: hostelBuilding,
    address: "11/118 ABCD Street, ABC City, ABC State,69054",
  },
  {
    id: "CRIB009876",
    name: "Green Stay",
    image: hostelBuilding,
    address: "12/118 ABCD Street, ABC City, ABC State,69054",
  },
  {
    id: "CRIB004321",
    name: "Elite",
    image: hostelBuilding,
    address: "13/118 ABCD Street, ABC City, ABC State,69054",
  },
  {
    id: "CRIB007890",
    name: "Comfort",
    image: hostelBuilding,
    address: "14/118 ABCD Street, ABC City, ABC State,69054",
  },
];

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [selectedMonth, setSelectedMonth] = useState("December");

  if (!property) {
    return <p className="text-center text-red-500">Property not found!</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg font-montserrat">
      <Header title="Add Property" />
      <div className="ml-6">
      <div className="w-full bg-white rounded-lg shadow-md border-2 border-[#69205D] p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <h1 className="mb-3 font-bold text-xl text-black text-center">{property.name}</h1>
            <img src={property.image} alt="Hostel Icon" className="mb-8 w-30 h-30 object-cover" />
          </div>
          <div className="bg-[#F7F7F7] px-7 py-3 rounded-md text-xl text-gray-600 w-115 mt-1">
  <p>
    {(() => {
      const addressParts = property.address.split(", ");
      return (
        <>
          <span>{addressParts[0] || ""}</span>
          <br />
          <span>{addressParts[1] || ""}</span>
          <br />
          <span>{addressParts[2] || ""}</span>
          <br />
          <span>{addressParts.slice(3).join(", ") || ""}</span>
        </>
      );
    })()}
  </p>
</div>


        </div>
        <div className="border-t-2 border-[#69205D] mt-2 pt-2 flex justify-between items-center">
          <p className="flex flex-row text-[#69205D] font-semibold text-lg">
            <FiMoreHorizontal className="mt-2" size={24} /> {property.id}
          </p>
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
          collectionIcon={CollectionIcon}
          pendingIcon={pendingIcon}
          receivedIcon={receivedIcon}
        />
      </div>

      {/* Inventory Section */}
      <div className="mt-6">
        <RectangleMeter
          title="Inventory"
          occupied="10"
          vacant="5"
          meterImage={metersremovebgpreview}
        />
      </div>
      

      <div className= "shadow-mg ">
      <BedsComponent
        imageSrc={bed}
        title="Manage Beds"
        description="Track every bed status and manage tenant move-in, move-out."
        buttonText="ADD BED INVENTORY"
        onButtonClick={() => setIsModalOpen(true)}
      />
      </div>

      <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        

      {/* Updates Section */}
      <div className="mt-2  bg-gray-100 p-4 rounded-lg shadow-md mb-4 g-2">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[18px] font-bold">Updates</p>
            <MonthDropdown
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          </div>
        <div className="space-y-2 mb-4">
          <UpdatesCard image={Sales} title="Sales" count="0" />
          <UpdatesCard image={Complaints} title="Complaints" count="0" />
          <UpdatesCard image={RequestsbyTenants} title="Requests by Tenants" count="2" />
          <UpdatesCard image={Outpasses} title="Outpasses and Attendance" count="2" />
        </div>
      </div>

      {/* Tenants and Staff Section */}

      <div className="shadow-md p-3">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-4" role="button" tabIndex="0">
        <div className="p-4 bg-gray-100 rounded-[12px] text-center shadow-md">
          <div className="cursor-pointer">
            <img src={avatar} alt="Tenants" className="w-25 h-25 mx-auto mb-2" />
            <p className="text-black-800 font-semibold">Tenants</p>
          </div>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg text-center shadow-md">
          <div className="cursor-pointer">
            <img src={bb} alt="Staff" className="w-25 h-25 mx-auto mb-2" />
            <p className="text-black-800 font-semibold">Staff</p>
          </div>
        </div>
      </div>

      {/* View Details Button */}
      <div className="flex justify-center mt-6">
        <Button button="View Details" defaultColor="#69205D" />
      </div>
      </div>
    </div>
    </div>
  );
};

export default MyComponent;
