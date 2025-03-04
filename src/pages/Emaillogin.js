import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import emailIcon from "../assets/email_3624728 2.png"; // Update with actual image path
import logo from "../assets/Untitled_design__1___1_-removebg-preview 1.png"; // Update with actual image path

const EmailLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen max-w-2xl mx-auto text-center p-6">
      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-center items-center p-6 w-full">
        
        {/* Email Icon */}
        <img src={emailIcon} alt="Email Icon" className="w-55 h-55 mb-6" />

        <div>
        <div className="w-full flex justify-start ml-5 mb-6">
          <div className="relative w-18 h-18">
            {/* Outer Border (Black Outline with Purple Fill) */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#69205D] rounded-lg border-2 border-black"></div>

            {/* Inner Border (White Background with Blue Outline) */}
            <div className="absolute top-2 left-2 w-full h-full bg-white rounded-lg border-2 border-[#05009F]"></div>

            {/* Logo Image - Placed Above Borders */}
            <img src={logo} alt="Sri Maha Hostel Logo" className="absolute top-0 left-2 w-full h-full rounded-lg z-10" />
          </div>
        </div>

        <p className="text-2xl font-semibold tracking-wider">Enter Your Email ID</p>
        <p className="text-sm text-gray-600 mt-2">
          We'll send you an email verification code
        </p>

        {/* Centered Email Input Field with Adjusted Width */}
        <div className="flex flex-col items-center w-full">
          <div className="flex mt-4 border border-gray-300 bg-gray-200 rounded-md w-85">
            <div className="flex-1 px-5 py-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none text-gray-600 tracking-widest"
              />
            </div>
          </div>
        </div>

        {/* Login via Mobile Number Link */}
        <p
          className="text-[#69205D] mt-4 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login via Mobile Number
        </p>
        </div>
        {/* Terms & Privacy */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, I agree to the{" "}
          <span className="text-blue-500 underline">terms and conditions</span> and{" "}
          <span className="text-blue-500 underline">privacy policy</span> of Sri Maha Hostel.
        </p>
      </div>

      {/* Continue Button */}
      <div className="w-full p-2">
        <Button button="Continue" defaultColor="#69205D" route="/verifyno" />
      </div>
    </div>
  );
};

export default EmailLogin;
