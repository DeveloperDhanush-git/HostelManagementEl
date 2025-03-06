import { Phone, Mail } from "lucide-react";
import Header from "./Header";

export default function CustomerSupport() {
  return (
    <div
      className="container bg-white min-h-screen rounded-lg flex flex-col"
      style={{ fontFamily: "Montserrat", minHeight: "100vh" }}
    >
      <Header title="Customer Support" />

      <p className="ml-7 text-gray-700">Facing any issue with the app?</p>
      <p className="ml-7 text-gray-500 mb-4">Call support available 24 * 7</p>

      <div className="flex items-center bg-gray-200 p-3 ml-7 rounded-md mb-3">
        <Phone className="mr-2 text-gray-700" size={20} />
        <span className="text-gray-700">+918012345678</span>
      </div>

      <div className="flex items-center bg-gray-200 ml-7 p-3 rounded-md mb-3">
        <Mail className="mr-2 text-gray-700" size={20} />
        <span className="text-gray-700">support@hms.in</span>
      </div>

      <button className="bg-green-500 ml-7 text-white p-3 rounded-md font-semibold mt-6 hover:bg-green-600">
        Chat on WhatsApp
      </button>
    </div>
  );
}
