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

    const handleRoleSelect = (role, event) => {
        event.stopPropagation(); // Prevents the click from propagating to the parent container
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
        staffDetails.role = selectedRole;
        staffDetails.subRoles = selectedSubRoles;

        localStorage.setItem("staffDetails", JSON.stringify(staffDetails));

        navigate("/select-property");
    };

    return (
        <div className="flex flex-col h-screen" onClick={() => setSelectedRole("")}>
            {/* Header */}
            <Header title="Add Staff" />

            {/* Content Section */}
            <div className="flex-1 p-4 ml-4">
                <p className="text-blue-500 text-sm mb-2">STEP 2 of 3</p>
                <h2 className="text-xl">Define the type of work they’ll do</h2>

                <div className="my-4">
                    {Object.keys(roles).map((role) => (
                        <div key={role} onClick={(event) => event.stopPropagation()}>
                            {/* Role Selection (Radio Buttons) */}
                            <div
                                className={`border-2 p-4 rounded-lg cursor-pointer my-2 flex justify-between items-center ${
                                    selectedRole === role ? "border-[#69205D] text-[#69205D]" : ""
                                }`}
                                onClick={(event) => handleRoleSelect(role, event)}
                            >
                                <div>
                                    <h4 className="font-semibold">{role}</h4>
                                    <p className="text-sm text-gray-600">{roles[role].description}</p>
                                </div>

                                {/* Custom Radio Button for Role Selection */}
                                <div className="w-5 h-5 border-2 border-[#69205D] rounded-full flex items-center justify-center">
                                    <div
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            selectedRole === role ? "bg-[#69205D]" : "bg-transparent"
                                        }`}
                                    ></div>
                                </div>
                            </div>

                            {/* Sub-role Selection (Checkboxes) */}
                            {selectedRole === role && (
                                <div className="p-4 bg-[#F7F7F7] rounded-md">
                                    {roles[role].subRoles.map((subRole) => (
                                        <div key={subRole} className="flex justify-between items-center my-2">
                                            <label className="text-gray-700">{subRole}</label>
                                            
                                            <input
                                                type="checkbox"
                                                checked={selectedSubRoles.includes(subRole)}
                                                onChange={() => handleSubRoleToggle(subRole)}
                                                className="w-5 h-5"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Bottom Button */}
            <div className="p-4 ml-4 mt-auto">
                <button className="w-full bg-[#69205D] text-white p-3 rounded-md" onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SelectRole;
