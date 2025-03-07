import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Header from "./Header";

const RentQR = () => {
  const navigate = useNavigate();

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col p-4" style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Rent QR" icons={["plus"]} onIconClick={() => navigate("/next-page")} />
      <div className="p-4">
        <p className="text-gray-700 ml-7">
          By turning off, you can deactivate the QR code.
        </p>
        <p className="text-gray-700 ml-7">
          You will not receive any money via RentQR, once deactivated.
        </p>
      </div>
    </div>
  );
};

export default RentQR;
