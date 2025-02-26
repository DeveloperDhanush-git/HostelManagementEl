import React from "react";


const PropertyCard = ({ property, onSelect, isSelected }) => (
    <div className="flex justify-center">
      <div
        className="flex w-full max-w-2xl items-center p-2 border-2 rounded-xl shadow-sm bg-white mb-6 cursor-pointer font-montserrat"
        onClick={onSelect}
      >
        <div>
          <h3 className="text-xl font-bold ml-4 mr-7 mb-3">{property.name}</h3>
          <img src={property.image} alt="Property" className="w-17 h-17 object-cover rounded-lg ml-10 mb-3" />
        </div>
        <div className="flex-1 ml-2 mr-6">
          <p className="text-gray-700 bg-gray-100 p-1 rounded-md text-base w-full">
            {property.address.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="w-5 h-5 border-2 border-[#69205D] rounded-full flex items-center justify-center">
          <div
            className={`w-3 h-3 rounded-full transition-all ${
              isSelected ? "bg-[#69205D]" : "bg-transparent"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
  
  export default PropertyCard;
  