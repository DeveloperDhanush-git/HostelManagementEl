import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";
import Button from "../Components/Button";

const TenantRequestsPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
   

      {/* Full-screen overlay & popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent  pb-4 rounded-lg">
          <div className="bg-white p-10 rounded-md shadow-lg w-full max-w-md mx-4 text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800 pb-4">
              Requests by Tenants
            </h3>

            {/* Requests List */}
            <div className="space-y-6">
              {/* Onboarding Request */}
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => navigate("/page2")} // Navigate to Page2 (RequestsPage)
              >
                <div className="flex items-center space-x-6">
                  <GoArrowDownLeft className="text-green-600 text-xl" />
                  <span className="text-gray-700 font-medium text-lg ml-6">
                    Onboarding Request
                  </span>
                </div>
                <span className="text-gray-500">0</span>
              </div>
              <hr className="border-gray-300 opacity-50 my-4" />

              {/* Move-out Request */}
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => navigate("/page3")} // Navigate to Page3
              >
                <div className="flex items-center space-x-6 ">
                  <GoArrowUpRight className="text-red-600 text-xl" />
                  <span className="text-gray-700 font-medium text-lg ml-6">
                    Move-out Request
                  </span>
                </div>
                <span className="text-gray-500">0</span>
              </div>

              <hr className="border-gray-300 opacity-50 my-4" />
            </div>

            {/* Close Button */}
            <div className="mt-10">
              <Button
                text="Close"
                size="lg"
                width="medium"
                height="50px"
                defaultColor="#69205D"
                textColor="white"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TenantRequestsPopup;
