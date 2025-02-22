import React from "react";
import Hostel from "../Assets/Hostel Building.png"; 
import MayaImage from "../Assets/Maya.png";
import PropertyCard from "./PropertyCard";

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

const MyProperties = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg mt-1">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
};

export default MyProperties;
