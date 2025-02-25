import React, { useState, useEffect } from "react";
import Header from "./Header";

const ManageStaff = () => {
  const [staffList, setStaffList] = useState([]);
  const [roomType, setRoomType] = useState("Admin"); // Default selection
  const [editIndex, setEditIndex] = useState(null); // Track edit mode
  const [editedStaff, setEditedStaff] = useState({
    name: "",
    phone: "",
    gender: "",
    subRoles: [],
    properties: [],
  });

  // Predefined sub-roles (Modify as needed)
  const availableSubRoles = ["Sub-role 1", "Sub-role 2", "Sub-role 3"];

  // Predefined properties (Modify as needed)
  const availableProperties = ["Property A", "Property B", "Property C"];

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem("staffList")) || [];
    setStaffList(storedStaff);
  }, []);

  // 🔹 Filter staff based on selected role
  const filteredStaff = staffList.filter((staff) =>
    roomType === "Admin"
      ? staff.role === "Admin Staff"
      : staff.role === "Service Staff"
  );

  // ✏ **Edit Button Click**
  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedStaff({ ...filteredStaff[index] });
  };

  // ✅ **Save Edited Data**
  const handleSaveEdit = () => {
    const updatedStaffList = [...staffList];
    const globalIndex = staffList.findIndex(
      (staff) => staff.name === filteredStaff[editIndex].name
    );
    updatedStaffList[globalIndex] = editedStaff;

    setStaffList(updatedStaffList);
    localStorage.setItem("staffList", JSON.stringify(updatedStaffList));

    setEditIndex(null);
  };

  return (
    <div>
      <Header title="Manage Staff" icons={["search", "plus"]} />

      {/* Toggle Admin & Service */}
      <div className="flex justify-left p-4 gap-3">
        {["Admin", "Service"].map((type) => (
          <button
            key={type}
            className={`px-5 py-2 rounded-md transition-colors ${
              roomType === type
                ? "bg-[#69205D] text-white"
                : "text-gray-700 hover:bg-[#69205D] hover:text-white"
            }`}
            onClick={() => setRoomType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Staff List */}
      <div className="p-4">
        {filteredStaff.length === 0 ? (
          <p className="text-gray-500">No {roomType} staff added yet.</p>
        ) : (
          filteredStaff.map((staff, index) => (
            <div key={index} className="flex items-center p-3 border rounded-lg my-2 justify-between">
              {editIndex === index ? (
                // 📝 Edit Form
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    value={editedStaff.name}
                    onChange={(e) => setEditedStaff({ ...editedStaff, name: e.target.value })}
                    className="block border p-2 rounded w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    value={editedStaff.phone}
                    onChange={(e) => setEditedStaff({ ...editedStaff, phone: e.target.value })}
                    className="block border p-2 rounded w-full mb-2"
                  />
                  <select
                    value={editedStaff.gender}
                    onChange={(e) => setEditedStaff({ ...editedStaff, gender: e.target.value })}
                    className="block border p-2 rounded w-full mb-2"
                  >
                    <option value="">Select Gender</option>
                    {["Male", "Female"].map((gender) => (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </select>

                  {/* Sub-role Selection (Now Fixed) */}
                  <div className="mb-2">
                    <label className="block font-semibold">Sub-roles:</label>
                    {availableSubRoles.map((sub) => (
                      <div key={sub} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={editedStaff.subRoles.includes(sub)}
                          onChange={() => {
                            setEditedStaff((prev) => ({
                              ...prev,
                              subRoles: prev.subRoles.includes(sub)
                                ? prev.subRoles.filter((s) => s !== sub)
                                : [...prev.subRoles, sub],
                            }));
                          }}
                          className="mr-2"
                        />
                        <label>{sub}</label>
                      </div>
                    ))}
                  </div>

                  {/* Property Selection */}
                  <div className="mb-2">
                    <label className="block font-semibold">Properties:</label>
                    {availableProperties.map((property) => (
                      <div key={property} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={editedStaff.properties.includes(property)}
                          onChange={() => {
                            setEditedStaff((prev) => ({
                              ...prev,
                              properties: prev.properties.includes(property)
                                ? prev.properties.filter((p) => p !== property)
                                : [...prev.properties, property],
                            }));
                          }}
                          className="mr-2"
                        />
                        <label>{property}</label>
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
                // 📌 Display Name & Sub-role Only
                <>
                  <div>
                    <h3 className="font-semibold">{staff.name || "Unnamed Staff"}</h3>
                    <p className="text-gray-600">{staff.subRoles.length > 0 ? staff.subRoles.join(", ") : "No Sub-Role Assigned"}</p>
                  </div>
                  <button onClick={() => handleEditClick(index)} className="text-blue-500">
                    ✏️ Edit
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageStaff;
