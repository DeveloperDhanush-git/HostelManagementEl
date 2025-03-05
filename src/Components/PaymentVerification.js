import React, { useState } from "react";
import Header from "./Header";

const PaymentVerification = () => {
  const [editMode, setEditMode] = useState({
    hssjsj: true,
    ueeiueje: true,
    ehejej: true,
    raj: true,
    property2: true,
    property: true,
  });

  const handleToggle = (key) => {
    setEditMode((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Payment Verification" />
      <p className="text-gray-500 text-sm mt-2 ml-8">
        By turning it off, tenants will not receive rent reminders.
      </p>
      <div className="mt-4 space-y-2">
        {[
          { name: "property 1", location: "SS Colony, Ahmedabad" },
          { name: "property 2", location: "ABC Street, Ahmedabad" },
          { name: "property 3", location: "Town street, Ahmedabad" },
          { name: "property 4", location: "Kochi, Agartala" },
          { name: "property 5", location: "Prozone mall cbe, Abu" },
          { name: "property 6", location: "Ganapathy, Coimbatore" },
        ].map((item, index) => (
          <div key={item.name} className="flex justify-between ml-8 items-center pb-2 border-b border-gray-300">
            <div>
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.location}</p>
            </div>
            {/* Toggle Button */}
            <button
              onClick={() => handleToggle(item.name)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                editMode[item.name] ? "bg-green-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                  editMode[item.name] ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentVerification;
