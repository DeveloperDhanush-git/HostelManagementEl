import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const SelectRole = () => {
    const [selectedRole, setSelectedRole] = useState("");
    const [selectedSubRoles, setSelectedSubRoles] = useState([]);
    const navigate = useNavigate();

    const roles = {
        "Admin Staff": {
            description: "Caretaker, sales admin, etc.",
            subRoles: ["Sales Admin", "Rent Admin", "Complaints Admin"],
        },
        "Service Staff": {
            description: "Housekeeping, electrician, etc.",
            subRoles: ["Electrical", "Plumbing", "Air Conditioner", "Security", "Appliances", "Housekeeping"],
        },
    };

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setSelectedSubRoles([]); // Reset sub-roles when switching roles
    };

    const handleSubRoleToggle = (subRole) => {
        setSelectedSubRoles((prev) =>
            prev.includes(subRole) ? prev.filter((item) => item !== subRole) : [...prev, subRole]
        );
    };

    const handleContinue = () => {
        if (!selectedRole || selectedSubRoles.length === 0) {
            alert("Please select at least one sub-role.");
            return;
        }

        const staffDetails = JSON.parse(localStorage.getItem("staffDetails")) || {};
        staffDetails.role = selectedRole;  // Save selected role
        staffDetails.subRoles = selectedSubRoles; // Save sub-roles

        localStorage.setItem("staffDetails", JSON.stringify(staffDetails));

        navigate("/select-property"); // Navigate to next step
    };

    return (
        <div>
            <Header title="Add staff" />
            <p className="text-blue-500 text-sm">STEP 2 of 3</p>
            <h2 className="text-xl font-bold">Define the type of work they’ll do</h2>

            <div className="my-4">
                {Object.keys(roles).map((role) => (
                    <div key={role}>
                        <div className={`border p-4 rounded-lg cursor-pointer my-2 ${selectedRole === role ? "border-[#69205D] text-[#69205D]" : ""}`} onClick={() => handleRoleSelect(role)}>
                            <h4 className="font-semibold">{role}</h4>
                            <p className="text-sm text-gray-600">{roles[role].description}</p>
                        </div>

                        {selectedRole === role && (
                            <div className="p-4 bg-gray-50 rounded-md">
                                {roles[role].subRoles.map((subRole) => (
                                    <div key={subRole} className="flex justify-between items-center my-2">
                                        <label className="text-gray-700">{subRole}</label>
                                        <input type="checkbox" checked={selectedSubRoles.includes(subRole)} onChange={() => handleSubRoleToggle(subRole)} className="w-5 h-5" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className="w-full bg-[#69205D] text-white p-3 rounded-md mt-4" onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
};

export default SelectRole;

