import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import illustration from "../assets/Enter_OTP-bro-removebg-preview 2.png"; // Update with actual image path
import Button from "../components/Button";

const Verifyno = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
       <div className="flex-grow p-4">
      <div className="flex items-center justify-center">
      <img src={illustration} alt="OTP Illustration" className="w-60 h-60 mb-6 mt-5" />
      </div>
      {/* Centered Content */}
      <div className="flex flex-col items-center text-center mt-10">
        {/* Title & Subtitle */}
        <p className="text-[28px] font-semibold tracking-[2px]">Enter verification code</p>
        <p className="text-sm tracking-[1px] text-gray-500">
          Please enter the verification code sent to your email.
        </p>

        {/* OTP Input */}
        <div className="flex mt-4">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType="tel"
            shouldAutoFocus
            renderInput={(props) => (
              <input
                {...props}
                className="w-14 h-12 border border-gray-300 bg-gray-200 text-xl text-center rounded-md mx-2 px-6"
              />
            )}
            containerStyle="flex"
          />
        </div>
      </div>

      {/* Terms & Privacy */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        By continuing, I agree to the{" "}
        <span className="text-blue-500 underline">terms and conditions</span> and{" "}
        <span className="text-blue-500 underline">privacy policy</span>.
      </p>
      </div>
      {/* Button */}
      <div className="w-full p-6">
        <Button button="Continue" defaultColor="#69205D" route="/hostel-form" />
      </div>
    </div>
  );
};

export default Verifyno;
