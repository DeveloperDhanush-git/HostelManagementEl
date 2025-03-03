import { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa"; 
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

const Unlink = () => {
  const navigate = useNavigate();
  const [bankDetails, setBankDetails] = useState(null);

  useEffect(() => {
    const savedBankDetails = localStorage.getItem("bankDetails");
    console.log("Retrieved from localStorage:", savedBankDetails);
    if (savedBankDetails) {
      try {
        setBankDetails(JSON.parse(savedBankDetails));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);
  

  const handleLinkBank = () => {
    navigate("/bank");
  };

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col relative">
      <div className="flex-grow p-4">
        <Header button="Unlink Properties" />

        {/* Maha Hostel Card */}
        <div className="bg-[#69205D] ml-6 mx-auto text-white p-6 rounded-2xl flex justify-between items-center mt-4">
          <div>
            <p className="text-2xl">Maha Hostel</p>
            <p className="text-2xl font-bold mt-3 text-center">35</p>
          </div>
          <button className="bg-blue-100 text-black px-6 py-4 rounded-full text-md font-semibold" onClick={handleLinkBank}>
            Link Bank
          </button>
        </div>

       {/* Display Bank Details Below Maha Hostel Card */}
{bankDetails ? (
  <div className="bg-gray-200 p-6 rounded-lg mt-6 ml-6 flex items-center">
    {/* Icon Section - Takes 1/3 Width */}
    <div className="w-1/5 flex justify-center">
      <FaUniversity className="text-blue-500 text-5xl w-24 h-24" />
    </div>

    {/* Content Section - Takes 2/3 Width */}
    <div className="w-4/5">
      <p className="text-lg"><span className="font-semibold">Bank Name:</span> {bankDetails.bankName}</p>
      <p className="text-lg"><span className="font-semibold">Account Holder:</span> {bankDetails.accountHolder}</p>
      <p className="text-lg"><span className="font-semibold">Account Number: </span>{bankDetails.accountNumber}</p>
      <p className="text-lg"><span className="font-semibold">IFSC Code:</span> {bankDetails.ifscCode}</p>
    </div>
  </div>
) : (
  <p className="text-center text-gray-500 mt-6">No bank details linked.</p>
)}

      </div>
    </div>
  );
};

export default Unlink;
