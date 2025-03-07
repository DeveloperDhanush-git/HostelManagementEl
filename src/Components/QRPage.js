import React from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

const QRPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-lg font-semibold mb-4">Bank QR Code</h2>
      <QRCodeCanvas value="https://your-rent-payment-link.com" size={180} />
      <button 
        onClick={() => navigate("/")}
        className="p-3 w-32 rounded-lg mt-4 bg-[#69205D] text-white"
      >
        Done
      </button>
    </div>
  );
};

export default QRPage;