import { Link } from "react-router-dom";
import Image from "../Asset/image.png";
import Businessgrowth from "../Asset/businessgrowth.png";
import MoveOutImage from "../Asset/icon.png";
import EKYCImage from "../Asset/agreement.png";
import AcademicSessionImage from "../Asset/mortarboad.png";
import GuardianImage from "../Asset/single father.png";
import TrackMoveInsImage from "../Asset/down.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import BankReceipt from "../Asset/alert.png";
import Bankreminder from "../Asset/bill.png";
import Onlinepayment from "../Asset/credit-card.png";
import Paymentverification from "../Asset/cashless.png";
import Bank from "../Asset/bank.png";
import RentQR from "../Asset/qr-code.png";
import Attendance from "../Asset/attendance.png";
import Market from "../Asset/market.png";
import Privacypolicy from "../Asset/policy.png";
import Customersupport from "../Asset/customerservice.png";

const SettingScreen = () => {
  return (
    <div className="container mx-auto bg-white min-h-screen max-w-4xl flex flex-col p-4 font-Montserrat">
      
      {/* Header */}
      <div className="bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
        <span className="text-2xl font-semibold">Settings</span>
      </div>

      {/* Help Section */}
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <div className="flex items-center gap-2">
          <img src={Image} alt="Help" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold ml-7">Need help</h3>
            <p className="text-sm ml-7">Call Support 24*7</p>
          </div>
        </div>
        <div className="flex gap-4 mt-3 justify-center">
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
        <h4 className="text-[#69205D] font-medium">Analytics</h4>
        <Link to="/report">
          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2 cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={Businessgrowth} alt="Reports Icon" className="w-8 h-8" />
              <p className="text-gray-800">Reports</p>
            </div>
            <MdKeyboardArrowRight className="text-[#69205D] text-lg" />
          </div>
        </Link>
      </div>

      {/* Tenant Settings */}
      <div className="mt-6">
        <h4 className="text-[#69205D] font-medium">Tenant settings</h4>
        {[
          { image: MoveOutImage, text: "Move-out notice", link: "/move-out" },
          { image: EKYCImage, text: "e-KYC & agreement", link: "/e-kyc-agreement" },
          { image: AcademicSessionImage, text: "Academic session", link: "/academic-session" },
          { image: GuardianImage, text: "Guardian / Parent", link: "/guardian" },
          { image: TrackMoveInsImage, text: "Track move-ins", link: "/track-move-ins" },
        ].map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.text} className="w-6 h-6" />
                <p className="text-gray-800">{item.text}</p>
              </div>
              <MdKeyboardArrowRight className="text-[#69205D] text-lg" />
            </div>
          </Link>
        ))}
      </div>

      {/* Finance Settings */}
      <div className="mt-6">
        <h4 className="text-[#69205D] font-medium">Finance settings</h4>
        {[
          { image: BankReceipt, text: "Rent Reminder", link: "/rent-reminder" },
          { image: Bankreminder, text: "Rent receipts", link: "/rent-receipts" },
          { image: Onlinepayment, text: "Online payment", link: "/online-payment" },
          { image: Paymentverification, text: "Payment Verification", link: "/payment-verification" },
          { image: Bank, text: "Bank account", link: "/bank-account" },
          { image: RentQR, text: "Rent QR", link: "/rent-qr" },
        ].map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.text} className="w-6 h-6" />
                <p className="text-gray-800">{item.text}</p>
              </div>
              <MdKeyboardArrowRight className="text-[#69205D] text-lg" />
            </div>
          </Link>
        ))}
      </div>

      {/* Operations */}
      <div className="mt-6">
        <h4 className="text-[#69205D] font-medium">Operations</h4>
        <Link to="/attendance-outpass">
          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2">
            <div className="flex items-center gap-4">
              <img src={Attendance} alt="Attendance Icon" className="w-6 h-6" />
              <p className="text-gray-800">Attendance and outpass</p>
            </div>
            <MdKeyboardArrowRight className="text-[#69205D] text-lg" />
          </div>
        </Link>
      </div>

      {/* Sales Settings */}
      <div className="mt-6">
        <h4 className="text-[#69205D] font-medium">Sales settings</h4>
        <Link to="/market-place-listing">
          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2">
            <div className="flex items-center gap-4">
              <img src={Market} alt="Market Icon" className="w-6 h-6" />
              <p className="text-gray-800">Market place listing</p>
            </div>
            <MdKeyboardArrowRight className="text-[#69205D] text-lg" />
          </div>
        </Link>
      </div>

      {/* Legal */}
      <div className="mt-6">
        <h4 className="text-[#69205D] font-medium">Legal</h4>
        {[
          { image: Privacypolicy, text: "Privacy policy", link: "/privacy-policy" },
          { image: Customersupport, text: "Customer support", link: "/customer-support" },
        ].map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mt-2">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.text} className="w-6 h-6" />
                <p className="text-gray-800">{item.text}</p>
              </div>
              <MdKeyboardArrowRight className="text-[#69205D] text-lg" />
            </div>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <button className="border border-[#69205D] text-[#69205D] mt-9 py-2 mb-6 rounded-md w-full text-2xl font-semibold">
        Logout
      </button>
    </div>
  );
};

export default SettingScreen;
