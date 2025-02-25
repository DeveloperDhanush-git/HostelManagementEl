import React, { useState } from "react";
import MayaImage from "../Assets/Maya.png";
import PropertyCard from "./PropertyCard";
import Header from "./DynamicComponents/Header";

const MyProperties = () => {
  const [properties, setProperties] = useState([
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
  ]);

  // Function to add a new property dynamically
  const addProperty = () => {
    const newProperty = {
      id: `CRIB00${5679 + properties.length + 1}`, // Generates unique ID
      name: `New Hostel ${properties.length + 1}`,
      image: MayaImage, // Using the same image for now
      address: `No. 0${properties.length + 6}, New Road, New Street, New Colony, New City, New State, 6xxxx${properties.length + 6}`,
    };
    setProperties([...properties, newProperty]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg mt-1">
      <Header title="Add Property" icons={["search", "plus"]} onPlusClick={addProperty} />
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
};

export default MyProperties;
