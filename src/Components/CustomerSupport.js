import React from "react";

import Header from "./DynamicComponents/Header";
import Phone from "../Assets/Phone.png";
import MailIcon from "../Assets/MailIcon.png";
import Headphone from "../Assets/Headphone.png";
import WhatsappIcon from "../Assets/WhatsappIcon.png";

const CustomerSupport = () => {
    return (

        <div className=" flex flex-col w-full overflow-hidden"
            style={{ fontFamily: "'Montserrat', sans-serif" }} // Inline Montserrat font
        >
            {/* Full-width container for Desktop & Responsive for Mobile */}
            <div className=" flex flex-col p-6">

                {/* Header */}
                <Header title="Customer Support" />

                {/* Support Message */}
                <div className="flex items-center justify-center gap-6 py-12">
                    <img src={Headphone} alt="Support" className="w-24 h-24" />
                    <div className="text-left ">
                        <p className="text-gray-700 text-xl font-semibold">Facing any issue with the app?</p>
                        <p className="text-lg text-gray-500">Call support available 24*7</p>
                    </div>
                </div>

                {/* Contact Options */}
                <div className="space-y-8  ">
                    {/* Phone Support */}
                    <div className=" ml-7 flex items-center justify-between bg-[rgba(124,157,179,0.2)] p-6 rounded-lg shadow-md">
                        <div>
                            <p className="text-gray-600 text-lg">Call Us</p>
                            <p className="text-2xl font-semibold">+91 908 060 0914</p>
                        </div>
                        <img src={Phone} alt="Phone" className="w-16 h-16" />
                    </div>

                    {/* Email Support */}
                    <div className="ml-7 flex items-center justify-between bg-[rgba(124,157,179,0.2)] p-6 rounded-lg shadow-md">
                        <div>
                            <p className="text-gray-600 text-lg">Mail Us</p>
                            <p className="text-2xl font-semibold underline">srimahaladieshostel@gmail.com</p>
                        </div>
                        <img src={MailIcon} alt="Mail" className="w-16 h-16" />
                    </div>
                </div>

                {/* WhatsApp Support */}
                <div className=" ml-7 mt-30">
                    <button className="w-full  flex items-center justify-center gap-4 border text-[#69205D] py-5 rounded-lg shadow-lg text-xl ">
                        <img src={WhatsappIcon} alt="WhatsApp" className="w-10 h-10" />
                        Chat on WhatsApp
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CustomerSupport;
