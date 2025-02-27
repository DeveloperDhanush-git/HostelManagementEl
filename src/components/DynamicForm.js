import React from "react";
import Header from "./Header"; // Import Header component

const formDetails = {
  "advance-rent": {
    title: "Advance Rent",
    amountLabel: "Advance Rent Details",
    descriptionPlaceholder: "Description of advance rent details...",
  },
  "security-deposit": {
    title: "Security Deposit",
    amountLabel: "Security Deposit Due Details",
    descriptionPlaceholder: "Description of the security deposit...",
  },
  maintenance: {
    title: "Maintenance Charge",
    amountLabel: "Maintenance Charge Due Details",
    descriptionPlaceholder: "Description of the maintenance charges...",
  },
  electricity: {
    title: "Electricity Bill",
    amountLabel: "Electricity Bill Due Details",
    descriptionPlaceholder: "Description of the electricity charges...",
  },
  food: {
    title: "Food Charge",
    amountLabel: "Food Charge Due Details",
    descriptionPlaceholder: "Description of the food charges...",
  },
  registration: {
    title: "Registration Charge",
    amountLabel: "Registration Charge Due Details",
    descriptionPlaceholder: "Description of the registration charges...",
  },
  other: {
    title: "Other Charge",
    amountLabel: "Other Charge Due Details",
    descriptionPlaceholder: "Description of the additional charges...",
  },
};

const DynamicForm = ({ formType }) => {
  const formData = formDetails[formType] || {
    title: "Form",
    amountLabel: "Amount",
    descriptionPlaceholder: "Describe the details...",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4">
        <Header title={formData.title} />

        {/* Form Fields */}
        <div className="ml-3 space-y-4 p-6">
          {/* Add Tenant */}
          <div className="flex flex-col">
            <p className="mb-1">Add Tenant</p>
            <input
              type="text"
              placeholder="Search Tenant"
              className="w-full p-2 border rounded-md"
              aria-label="Search Tenant"
            />
          </div>

          {/* Amount Field */}
          <div className="flex flex-col">
            <p className="mb-1">{formData.amountLabel}</p>
            <input
              type="number"
              placeholder={formData.amountLabel}
              className="w-full p-2 border rounded-md"
              aria-label={formData.amountLabel}
            />
          </div>

          {/* Start Date & End Date Fields */}
          <div className="flex gap-3">
            <div className="w-1/2">
              <p className="text-gray-600 text-sm mb-1">Start Date</p>
              <input type="date" name="Startdate" className="w-full p-2 border rounded-md" />
            </div>
            <div className="w-1/2">
              <p className="text-gray-600 text-sm mb-1">End Date</p>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>
          </div>

          {/* Due Date Field */}
          <div>
            <p className="text-gray-600 text-sm mb-1">Due Date</p>
            <input type="date" className="w-full p-2 border rounded-md" />
          </div>

          {/* Remind Me Checkbox */}
          <div className="flex items-center justify-end gap-2">
            <input type="checkbox" id="remind" className="w-4 h-4" />
            <label htmlFor="remind" className="text-gray-600 text-sm">
              Remind me about this due
            </label>
          </div>

          {/* Description Field */}
          <textarea
            className="w-full p-2 border rounded-md"
            placeholder={formData.descriptionPlaceholder}
          ></textarea>
        </div>
        <div className="p-4 ml-3">
          <button className="w-full  bg-[#69205D] text-white p-2 rounded-[12px]">
            Add Due
          </button>
        </div>
      </div>


    </div>
  );
};

export default DynamicForm;
