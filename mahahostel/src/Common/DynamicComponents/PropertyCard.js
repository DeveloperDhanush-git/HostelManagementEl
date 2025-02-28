import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import hostelBuilding from "./Assests/hostel-building.png";

// Property Card Component
const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/bedinventory/${property.id}`, { state: property })}
      className="block  cursor-pointer"
    >
      <div className="bg-white rounded-lg flex flex-col" style={{ fontFamily: "Montserrat" }}>
        <div className="flex-grow p-4">
          <div className="w-full bg-white rounded-lg shadow-md border-2 border-[#69205D] p-4 ">
            <div className="flex flex-col md:flex-row items-center gap-5 ">
              <div className="flex flex-col items-center w-full md:w-1/3 ">
                <p className="mb-3 font-bold text-md text-black text-center ">
                  {property.name}
                </p>
                <img src={property.image} alt={property.name} className="w-20 h-20 object-cover" />
              </div>
              <div className="mt-7 p-2 bg-[#F7F7F7] rounded-md text-sm text-gray-600 w-full md:w-2/3 ">
                <p className="whitespace-pre-line break-words leading-5 ">
                  {property.address.replace(/, /g, "\n")}
                </p>
              </div>
            </div>
            <div className="border-t-2 border-[#69205D] mt-3 pt-2 flex justify-between items-center flex-col sm:flex-row ">
              <p className="flex text-[#69205D] font-semibold text-lg ">
                <FiMoreHorizontal size={20} className="mr-2 mt-1" />
                {property.id}
              </p>
              <button className="flex items-center text-green-500 gap-2 ">
                <FaWhatsapp size={20} />
                <span className="text-md font-medium ">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Property List Component
const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulating an API call
    const fetchProperties = async () => {
      const data = [
        { id: "CRIB005679", name: "Maha Hostel", address: "10/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
        { id: "CRIB008234", name: "Sunrise PG", address: "11/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
        { id: "CRIB009876", name: "Green Stay", address: "12/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
        { id: "CRIB004321", name: "Elite", address: "13/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
        { id: "CRIB007890", name: "Comfort", address: "14/118 ABCD Street, ABC City, ABC State,69054", image: hostelBuilding },
      ];
      setProperties(data);
    };

    fetchProperties();
  }, []);

  // Memoize filtered properties for better performance
  const filteredProperties = useMemo(() => {
    return properties.filter((property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [properties, searchQuery]);

  return (
    <div className="bg-white rounded-lg flex flex-col">
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow p-4">
          <Header
            title={
              <div className="flex flex-col mt-4 ">
                <span className="font-semibold mb-2 ">Add Tenant</span>
              </div>
            }
          />
          
          {/* Property Count */}
          <div className="mt-3 mx-8 ">
          <div className="">
          <p className="text-xs text-blue-500 mt-3">STEP 2 OF 5</p>
          <h3 className="text-lg font-semibold mt-2 mb-2">Personal details</h3>
          </div>
            <p className="w-40 bg-[#69205D] text-lg font-semibold text-white rounded px-4 py-2 ">
              {filteredProperties.length} Properties
            </p>
          </div>

          {/* Property Cards Grid */}
          <div className="mx-8 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
