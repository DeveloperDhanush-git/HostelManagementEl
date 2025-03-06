import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Buildingg from "../Asset/buildingg.png";
import Header from "./Header";

// Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md border-2 border-[#69205D] p-4 cursor-pointer">
      <Link to={`/property/${property.id}`} className="block">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <p className="mb-3 font-bold text-md text-black text-center">
              {property.name}
            </p>
            <img src={property.image} alt={property.name} className="w-20 h-20 object-cover" />
          </div>
          <div className="mt-4 p-2 bg-[#F7F7F7] rounded-md text-sm text-gray-600 w-full md:w-2/3">
            <p className="whitespace-pre-line break-words leading-5">
              {property.address.replace(/, /g, "\n")}
            </p>
          </div>
        </div>
      </Link>

      {/* Centered Property ID & Right-aligned WhatsApp button */}
      <div className="border-t-2 border-[#69205D] mt-3 pt-2 flex items-right justify-between">
        <FiMoreHorizontal size={20} className="text-gray-500" />
        <p className="text-[#69205D] font-semibold text-lg text-right flex-1">
          {property.id}
        </p>
       
      </div>
    </div>
  );
};

// Main Component (EKYC)
const SalesSettings = () => {
  const [properties] = useState([
    { id: "CRIB005679", name: "Maha Hostel", address: "No. 03, ABC Road, ABC Colony, ABC City, ABC State, 6xxxx6", image: Buildingg },
    { id: "CRIB008123", name: "Chennai Hostel", address: "No. 05, XYZ Road, XYZ Colony, XYZ City, XYZ State, 7xxxx7", image: Buildingg },
    { id: "CRIB005678", name: "Sri Hostel", address: "No. 03, ABC Road, ABC Colony, ABC City, ABC State, 6xxxx6", image: Buildingg },
    { id: "CRIB008122", name: "ABC Hostel", address: "No. 05, XYZ Road, XYZ Colony, XYZ City, XYZ State, 7xxxx7", image: Buildingg },
    { id: "CRIB005677", name: "ZZZ Hostel", address: "No. 03, ABC Road, ABC Colony, ABC City, ABC State, 6xxxx6", image: Buildingg },
    { id: "CRIB008121", name: "Rithi Hostel", address: "No. 05, XYZ Road, XYZ Colony, XYZ City, XYZ State, 7xxxx7", image: Buildingg },
  ]);

  return (
    <div className="container  bg-white min-h-screen rounded-lg flex flex-col " style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Sales Settings" />

      {/* Property Count */}
      <div className="mt-2 ml-7">
        <p className="w-fit bg-[#69205D] text-lg font-semibold text-white rounded-lg px-4 py-2">
          {properties.length} Properties
        </p>
      </div>

      {/* Property Cards */}
      <div className="flex flex-col gap-4 mt-4 ml-7 ">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SalesSettings;
