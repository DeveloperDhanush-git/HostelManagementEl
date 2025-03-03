import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import mobileIcon from "../assets/PH 1.png"; // Update with actual image path
import logo from "../assets/Untitled_design__1___1_-removebg-preview 1.png"; // Update with actual image path

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
       <div className="flex-grow p-4">
      <div className="flex items-center justify-center">
      <img src={mobileIcon} alt="Mobile Icon" className="w-60 h-60 mb-6 mt-5" />
      </div>
      {/* Centered Content */}
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <img src={logo} alt="Sri Maha Hostel Logo" className="w-20 h-20 mt-4" />

        {/* Title and Subtitle */}
        <p className="text-[28px] font-semibold tracking-[2px]">Enter Your Mobile No.</p>
        <p className="text-sm tracking-[1px] text-gray-600">We'll send you an SMS verification code</p>

        {/* Mobile Input Field */}
        <div className="flex mt-4 border border-gray-300 bg-gray-200 rounded-md w-80">
          <div className="flex items-center px-5 py-2 border-r border-gray-400 mr-3">
            <p className="text-gray-600 font-semibold">+91</p>
          </div>
          <div className="flex-1 px-4 py-2">
            <input
              type="tel"
              placeholder="(999) 111-0000"
              className="w-full bg-transparent outline-none text-gray-600 tracking-[3px]"
            />
          </div>
        </div>
      </div>

      {/* Terms & Privacy */}
      <p className="text-xs text-gray-500 text-center mt-4">
        By continuing, I agree to the{" "}
        <span className="text-blue-500 underline">terms and conditions</span> and{" "}
        <span className="text-blue-500 underline">privacy policy</span> of Sri Maha Hostel.
      </p>
      </div>
      {/* Button */}
      <div className="w-full p-6">
        <Button button="Continue" defaultColor="#69205D" route="/verifyno" />
      </div>
    </div>
  );
};

export default Login;
