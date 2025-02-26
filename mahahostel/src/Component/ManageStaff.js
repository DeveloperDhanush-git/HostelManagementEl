import React, { useState, useEffect } from "react";
import Header from "./Header";

const ManageStaff = () => {
  const [staffList, setStaffList] = useState([]);
  const [selectedRole, setSelectedRole] = useState("Admin Staff"); // Default filter
  const [editIndex, setEditIndex] = useState(null);
  const [editedStaff, setEditedStaff] = useState(null);

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem("staffList")) || [];
    setStaffList(storedStaff);
  }, []);

  const roles = {
    "Admin Staff": {
      subRoles: ["Sales Admin", "Rent Admin", "Complaints Admin"],
    },
    "Service Staff": {
      subRoles: ["Electrical", "Plumbing", "Air Conditioner", "Security", "Appliances", "Housekeeping"],
    },
  };

  const properties = [
    { id: 1, name: "Maha Hostel" },
    { id: 2, name: "Chennai Hostel" }
  ];

  //  Filter staff based on selected role
  const filteredStaff = staffList.filter((staff) => staff.role === selectedRole);

  //  **Edit Button Click**
  const handleEditClick = (index) => {
    const globalIndex = staffList.findIndex((staff) => staff === filteredStaff[index]);
    setEditIndex(globalIndex);
    setEditedStaff({ ...staffList[globalIndex] });
  };

  //  **Handle Input Change (Name, Phone, Gender)**
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStaff((prev) => ({ ...prev, [name]: value }));
  };

  //  **Handle Sub-Role Selection**
  const handleSubRoleChange = (subRole) => {
    setEditedStaff((prev) => {
      const updatedSubRoles = prev.subRoles.includes(subRole)
        ? prev.subRoles.filter((item) => item !== subRole)
        : [...prev.subRoles, subRole];

      return { ...prev, subRoles: updatedSubRoles };
    });
  };

  //  **Handle Property Selection**
  const handlePropertyToggle = (propertyName) => {
    setEditedStaff((prev) => {
      const updatedProperties = prev.properties.includes(propertyName)
        ? prev.properties.filter((p) => p !== propertyName)
        : [...prev.properties, propertyName];

      return { ...prev, properties: updatedProperties };
    });
  };

  //  **Save Edited Data**
  const handleSaveEdit = () => {
    if (editIndex === null || !editedStaff) return;

    const updatedStaffList = [...staffList];
    updatedStaffList[editIndex] = editedStaff;

    setStaffList(updatedStaffList);
    localStorage.setItem("staffList", JSON.stringify(updatedStaffList));
    setEditIndex(null); // Exit edit mode
  };

  return (
    <div className="flex flex-col min-h-screen" onClick={() => setEditIndex(null)}>
      <Header title="Manage Staff" icons={["search", "plus"]} />

      <div className="ml-4">
        {/* Toggle Admin & Service - Disabled while Editing */}
        <div className="flex justify-left p-4 gap-3">
          {["Admin Staff", "Service Staff"].map((role) => (
            <button
              key={role}
              className={`px-5 py-2 rounded-md transition-colors ${selectedRole === role
                  ? "bg-[#69205D] text-white"
                  : "cursor-pointer"
                } ${editIndex !== null ? "opacity-50 cursor-not-allowed" : ""}`} // Disable during edit
              onClick={() => editIndex === null && setSelectedRole(role)} // Prevent switch during edit
              disabled={editIndex !== null} // Disable button during edit
            >
              {role}
            </button>
          ))}
        </div>

        {/* Staff List */}
        <div className="p-4">
          {filteredStaff.length === 0 ? (
            <p className="text-gray-500">No {selectedRole} staff added yet.</p>
          ) : (
            filteredStaff.map((staff, index) => {
              const globalIndex = staffList.findIndex((s) => s === staff);

              if (editIndex !== null && editIndex !== globalIndex) {
                return null; // Hide other staff details when editing
              }

              return (
                <div
                  key={index}
                  className="p-3 bg-white rounded-lg my-2"
                  onClick={(e) => e.stopPropagation()} // Prevent closing edit mode when clicking inside
                >
                  {editIndex === globalIndex ? (
                    //  Edit Form
                    <div>
                      <label className="block font-semibold">Name:</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={editedStaff.name}
                        onChange={handleInputChange}
                        className="block border p-2 rounded w-full mb-2"
                      />
                      <label className="block font-semibold">Mobile Number:</label>
                      <input
                        type="tel" // Allows only a numeric keypad on mobile
                        name="phone"
                        placeholder="Phone"
                        value={editedStaff.phone}
                        onChange={(e) => setEditedStaff((prev) => ({ ...prev, phone: e.target.value.replace(/\D/g, '') }))} // Remove non-numeric characters
                        maxLength={10} // Restrict input to 10 digits
                        className="block border p-2 rounded w-full mb-2"
                      />


                      {/* 🔹 Gender Selection */}
                      <div className="mb-2">
                        <label className="block font-semibold">Gender:</label>
                        <select
                          name="gender"
                          value={editedStaff.gender}
                          onChange={handleInputChange}
                          className="block border p-2 rounded w-full"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* 🔹 Sub-role Selection */}
                      <div className="mb-2">
                        <label className="block font-semibold">Sub-roles:</label>
                        {roles[selectedRole].subRoles.map((sub) => (
                          <div key={sub} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={editedStaff.subRoles.includes(sub)}
                              onChange={() => handleSubRoleChange(sub)}
                              className="mr-2"
                            />
                            <label>{sub}</label>
                          </div>
                        ))}
                      </div>

                      {/* 🔹 Property Selection (Restored) */}
                      <div className="mb-2">
                        <label className="block font-semibold">Properties:</label>
                        {properties.map((property) => (
                          <div key={property.id} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={editedStaff.properties.includes(property.name)}
                              onChange={() => handlePropertyToggle(property.name)}
                              className="mr-2"
                            />
                            <label>{property.name}</label>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={handleSaveEdit}
                        className="bg-[#69205D] text-white px-4 py-2 rounded mt-2"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    // 📌 Display Staff Details
                    <div className="flex items-center w-full">
                      <img
                        src="/Assest/contact-pic.png"
                        alt="Staff Icon"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{staff.name || "Unnamed Staff"}</h3>
                        <p className="text-gray-600">
                          {staff.subRoles.length > 0 ? staff.subRoles.join(", ") : "No Sub-Role Assigned"}
                        </p>
                      </div>
                      {/* <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditClick(index);
                        }}
                        className="text-blue-500 cursor-pointer ml-auto"
                      >
                        ✏️ Edit
                      </button> */}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageStaff;
