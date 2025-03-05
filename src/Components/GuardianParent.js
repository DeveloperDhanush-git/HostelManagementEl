import { Link } from "react-router-dom"; // Ensure this import exists
import { ChevronRight } from "@mui/icons-material";
import Header from "./Header";

export default function GuardianParent() {
  return (
    <div className="container mx-auto bg-white min-h-screen rounded-lg flex flex-col max-w-4xl" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Guardian/Parent" />
      <p className="mt-3 ml-9 text-gray-600 text-sm">
        Manage the guardian/parent settings for all your tenants
      </p>

      {/* Edit Parent Details */}
      <Link to="/guardian/edit-parent-details">
        <div className="mt-4 ml-8 bg-white shadow-md rounded-lg p-4 flex justify-between items-center cursor-pointer">
          <div>
            <h3 className="text-gray-800 font-semibold">Edit parent details</h3>
            <p className="text-gray-500 text-sm">
              Allow tenants to edit parent name and number
            </p>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
      </Link>

      {/* Send Rent Reminders */}
      <Link to="/guardian/rent-reminder">
        <div className="mt-4 ml-8 bg-white shadow-md rounded-lg p-4 flex justify-between items-center cursor-pointer">
          <div>
            <h3 className="text-gray-800 font-semibold">Send rent reminders</h3>
            <p className="text-gray-500 text-sm">
              Rent reminders will be sent to parent’s mobile
            </p>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
      </Link>
    </div>
  );
}
