import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import logo from "../assets/logo-removebg-preview 1 (2).png"

const FirstPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
  <div className="flex flex-grow p-4 items-center justify-center">
      <div className="text-center p-6">
        <p className="text-[35px] font-bold">
          Welcome to Hostel Management
        </p>
        <p className="text-[18px] mt-2 ">
        Easily book your stay, Explore amenities and services,
        <p>Manage your reservations</p>
        </p>
        <img src={logo} alt="Hostel Logo" className="w-100 h-40 mx-auto mt-4" />
      </div>
      </div>
      <div className="p-6 w-full">
        <Button button="Get Started" defaultColor="#69205D" route="/login" />
      </div>
    </div>
  );
};

export default FirstPage;
