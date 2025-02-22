import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaEllipsisV } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${property.id}`); // ✅ Navigate to MyComponent with property ID
  };

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md flex flex-col cursor-pointer"
      onClick={handleClick} // ✅ Click to navigate
    >
      <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-md" />
      <div className="mt-3">
        <h3 className="text-lg font-bold">{property.name}</h3>
        <p className="text-sm text-gray-600">{property.address}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-purple-700 text-sm">{property.id}</span>
          <div className="flex items-center space-x-2">
            <FaWhatsapp className="text-green-500 text-lg cursor-pointer" />
            <FaEllipsisV className="text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
