import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import logo from "../assets/logo-removebg-preview 1 (2).png";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen max-w-2xl mx-auto text-center p-6">
      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-center items-center p-4">
        <p className="text-3xl font-bold">Welcome to Hostel Management</p>
        <p className="text-lg mt-4">
          Easily book your stay, explore amenities and services,  
          <br /> Manage your reservations.
        </p>
        <img src={logo} alt="Hostel Logo" className="w-80 h-40 mt-6" />
      </div>

      {/* Button at the Bottom */}
      <div className="w-full p-2">
        <Button button="Get Started" defaultColor="#69205D" route="/login" />
      </div>
    </div>
  );
};

export default FirstPage;
