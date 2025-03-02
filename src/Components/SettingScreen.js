import React from "react";
import Image from "../Asset/image.png";
import Businessgrowth from "../Asset/businessgrowth.png";
import MoveOutImage from "../Asset/icon.png";
import EKYCImage from "../Asset/agreement.png";
import AcademicSessionImage from "../Asset/mortarboad.png";
import GuardianImage from "../Asset/single father.png";
import TrackMoveInsImage from "../Asset/down.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const SettingScreen = () => {
  return (
    <div className="container mx-auto bg-white min-h-screen max-w-4xl flex flex-col p-4" style={{ fontFamily: "Montserrat" }}>
      {/* Header */}
      <div className="bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
        <span className="text-2xl font-semibold">Settings</span>
      </div>

      {/* Help Section */}
      <div className="bg-gray-100 p-4 rounded-lg mt-4  flex flex-col">
        <div className="flex items-center gap-2">
          <img src={Image} alt="Help" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold ml-7">Need help</h3>
            <p className="text-sm ml-7">Call Support 24*7</p>
          </div>
        </div>
        <div className="flex gap-16 mt-3 justify-center">
          <button className="w-1/3 bg-white border border-[#69205D] text-[#69205D] py-2 rounded-lg text-sm">
            Call Us
          </button>
          <button className="w-1/3 bg-white border border-[#69205D] text-[#69205D] py-2 rounded-lg text-sm">
            WhatsApp
          </button>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="mt-6">
        <h4 className="text-gray-700 text-sm font-medium">Analytics</h4>
        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2">
          <div className="flex items-center gap-9">
            <img src={Businessgrowth} alt="Reports Icon" className="w-8 h-8" />
            <p className="text-gray-800">Reports</p>
          </div>
          <MdKeyboardArrowRight className="text-gray-500 text-lg" /> {/* Corrected Icon Usage */}
        </div>
      </div>

      {/* Tenant Settings */}
      <div className="mt-6">
        <h4 className="text-gray-700 text-sm font-medium">Tenant settings</h4>
        {[ 
          { image: MoveOutImage, text: "Move-out notice" },
          { image: EKYCImage, text: "e-KYC & agreement" },
          { image: AcademicSessionImage, text: "Academic session" },
          { image: GuardianImage, text: "Guardian / Parent" },
          { image: TrackMoveInsImage, text: "Track move-ins" }, 
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2">
            <div className="flex items-center gap-9"> {/* Adjusted gap between image and text */}
              <img src={item.image} alt={item.text} className="w-6 h-6" />
              <p className="text-gray-800">{item.text}</p>
            </div>
            <MdKeyboardArrowRight className="text-gray-500 text-lg" /> {/* Corrected Icon Usage */}
          </div> // Closing div for the item
        ))}
      </div>
    </div>
  );
};

export default SettingScreen;
