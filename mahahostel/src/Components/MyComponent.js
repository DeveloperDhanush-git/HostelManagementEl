import React from "react";
import { useParams } from "react-router-dom";
import MayaImage from "../Assets/Maya.png";
import Collection from "./Collection"; // ✅ Import Collection Component
import HostelDetails from "./HostelDetails"; // ✅ Import HostelDetails Component
import Dashboard from "./Updates";

const properties = [
  {
    id: "CRIB005679",
    name: "Maha Hostel",
    image: MayaImage,
    address: "No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State, 6xxxx6",
  },
  {
    id: "CRIB005680",
    name: "Chennai Hostel",
    image: MayaImage,
    address: "No. 04, XYZ Road, XYZ Street, XYZ Colony, XYZ City, XYZ State, 6xxxx7",
  },
  {
    id: "CRIB005681",
    name: "Coimbatore Hostel",
    image: MayaImage,
    address: "No. 05, LMN Road, LMN Street, LMN Colony, LMN City, LMN State, 6xxxx8",
  },
];

const MyComponent = () => {
  const { id } = useParams(); // ✅ Get property ID from URL
  const property = properties.find((p) => p.id === id); // ✅ Find the selected property

  if (!property) {
    return <p className="text-center text-red-500">Property not found!</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg mt-1">
      <h2 className="text-2xl font-bold">{property.name}</h2>
      <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-md mt-3" />
      <p className="text-gray-600 mt-2">{property.address}</p>
      <span className="text-purple-700 text-sm">{property.id}</span>

      {/* ✅ Add Collection Component */}
      <div className="mt-6">
        <Collection />
      </div>

      {/* ✅ Add HostelDetails Component */}
      <div className="mt-6">
        <HostelDetails />
      </div>
      {/* Add Updates */}
      <div className="mt-6">
        <Dashboard/>
      </div>
    </div>
  );
};

export default MyComponent;
