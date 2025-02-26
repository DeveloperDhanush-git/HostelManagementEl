// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";

// const SelectProperty = () => {
//   const [selectedProperties, setSelectedProperties] = useState([]);
//   const navigate = useNavigate();

//   // Property List
//   const properties = [
//     { id: 1, name: "Maha Hostel", address: "No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State, 6xxxx6" },
//     { id: 2, name: "Chennai Hostel", address: "No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State, 6xxxx6" }
//   ];

//   // Toggle Property Selection
//   const handlePropertyToggle = (id) => {
//     setSelectedProperties([id]); // Allow only one selection
//   };

//   // Handle Final Submission
//   const handleFinish = () => {
//     if (selectedProperties.length === 0) {
//       alert("Please select at least one property");
//       return;
//     }

//     // Retrieve existing staff details from localStorage
//     const staffDetails = JSON.parse(localStorage.getItem("staffDetails")) || {};
//     staffDetails.properties = selectedProperties.map(
//       (id) => properties.find((p) => p.id === id)?.name
//     );

//     // Retrieve existing staff list and update it
//     const staffList = JSON.parse(localStorage.getItem("staffList")) || [];
//     staffList.push(staffDetails);

//     // Save updated staff list
//     localStorage.setItem("staffList", JSON.stringify(staffList));

//     // Navigate to home or staff management page
//     navigate("/");
//   };

//   // Reset selection when clicking outside the properties
//   const handleOutsideClick = (e) => {
//     if (!e.target.closest(".property-selection")) {
//       setSelectedProperties([]);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen" onClick={handleOutsideClick}>
//       {/* Header */}
//       <Header title="Add Staff" />

//       {/* Content Section (Aligned with ml-4) */}
//       <div className="flex-1 p-4 ml-4">
//         <p className="text-blue-500 text-sm mb-2">STEP 3 of 3</p>
//         <h2 className="text-xl mb-2">Select access to property</h2>
//         <p className="bg-[#69205D] text-white px-4 py-2 inline-block rounded-md mb-2">2 Properties</p>

//         {/* Property Selection List */}
//         <div className="property-selection">
//           {properties.map((property) => (
//             <div
//               key={property.id}
//               className={`bg-white border-2 p-4 rounded-lg flex justify-between items-center my-2 ${
//                 selectedProperties.includes(property.id) ? "border-[#69205D]" : "border-gray-300"
//               }`}
//               onClick={(e) => e.stopPropagation()} // Prevents unwanted reset
//             >
//               {/* Left Side: Name & Icon */}
//               <div className="flex flex-col items-center w-32">
//                 <h4 className="font-semibold text-lg text-center whitespace-nowrap">
//                   {property.name}
//                 </h4>
//                 <img src="/Assest/hostel.png" alt="Hostel" className="w-14 h-14" />
//               </div>

//               {/* Right Side: Address */}
//               <div className="flex-1 mx-6 bg-[#F7F7F7] p-1.5 rounded-md">
//                 {property.address.split(",").map((line, index) => (
//                   <p key={index} className="text-center text-xs text-gray-700">
//                     {line.trim()}
//                   </p>
//                 ))}
//               </div>

//               {/* Radio Button */}
//               <input
//                 type="radio"
//                 name="propertySelection" // Ensures only one selection
//                 value={property.id}
//                 checked={selectedProperties.includes(property.id)}
//                 onChange={() => handlePropertyToggle(property.id)}
//                 className="w-6 h-6 accent-[#69205D] border-2 border-[#69205D] rounded-full cursor-pointer"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fixed Bottom Button (Aligned with ml-4) */}
//       <div className="p-4 ml-4 mt-auto">
//         <button
//           className="w-full bg-[#69205D] text-white p-3 rounded-md"
//           onClick={handleFinish}
//           disabled={selectedProperties.length === 0}
//         >
//           Add staff
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectProperty;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import PropertyCard from "./PropertyCard";

const SelectProperty = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  // Property List
  const properties = [
    {
      id: 1,
      name: "Maha Hostel",
      image: "/Assest/hostel.png",
      address: "No. 03, ABC Road\nABC Street, ABC Colony,\nABC City, ABC State-123456\n6xxxx6",
    },
    {
      id: 2,
      name: "Chennai Hostel",
      image: "/Assest/hostel.png",
      address: "No. 03, XYZ Road\nXYZ Street, XYZ Colony,\nXYZ City, XYZ State-654321\n6xxxx6",
    },
  ];

  // Toggle Property Selection (Allow Only One)
  const handlePropertySelect = (id) => {
    setSelectedProperty(id);
  };

  // Handle Final Submission
  const handleFinish = () => {
    if (!selectedProperty) {
      alert("Please select at least one property");
      return;
    }

    // Retrieve existing staff details from localStorage
    const staffDetails = JSON.parse(localStorage.getItem("staffDetails")) || {};
    staffDetails.properties = properties.find((p) => p.id === selectedProperty)?.name;

    // Retrieve existing staff list and update it
    const staffList = JSON.parse(localStorage.getItem("staffList")) || [];
    staffList.push(staffDetails);

    // Save updated staff list
    localStorage.setItem("staffList", JSON.stringify(staffList));

    // Navigate to home or staff management page
    navigate("/");
  };

  // Reset selection when clicking outside the properties
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".property-selection")) {
      setSelectedProperty(null);
    }
  };

  return (
    <div className="flex flex-col h-screen" onClick={handleOutsideClick}>
      {/* Header */}
      <Header title="Add Staff" />

      {/* Content Section */}
      <div className="flex-1 p-4 ml-4">
        <p className="text-blue-500 text-sm mb-2">STEP 3 of 3</p>
        <h2 className="text-xl mb-2">Select access to property</h2>
        <p className="bg-[#69205D] text-white px-4 py-2 inline-block rounded-md mb-4">
          {properties.length} Properties
        </p>

        {/* Property Selection List */}
        <div className="property-selection">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={(e) => {
                e.stopPropagation(); // Prevent reset when clicking inside
                handlePropertySelect(property.id);
              }}
              isSelected={selectedProperty === property.id}
            />
          ))}
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-4 ml-4 mt-auto">
        <button
          className="w-full bg-[#69205D] text-white p-3 rounded-md"
          onClick={handleFinish}
          disabled={!selectedProperty}
        >
          Add staff
        </button>
      </div>
    </div>
  );
};

export default SelectProperty;
