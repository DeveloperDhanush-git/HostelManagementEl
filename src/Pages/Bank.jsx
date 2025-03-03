import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Button from "../Components/Button";

const Bank = () => {
  const navigate = useNavigate();
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    ifscCode: "",
  });

  // Update state when input changes
  const handleChange = (e) => {
    setBankDetails({
      ...bankDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!bankDetails.bankName || !bankDetails.accountHolder || !bankDetails.accountNumber || !bankDetails.ifscCode) {
      alert("Please fill all fields before saving!");
      return;
    }
  
    localStorage.setItem("bankDetails", JSON.stringify(bankDetails));  
   
  
    navigate("/success", { state: { name: "Fetched Bank Details" } }); 
  };
  
  
  
  

  return (
    <div className="container bg-white min-h-screen rounded-lg flex flex-col p-6">
      <Header button="Bank Information" />

      <form className="mt-6 ml-6">
        <label className="block text-lg font-medium text-gray-700">Bank Name</label>
        <input type="text" name="bankName" value={bankDetails.bankName} onChange={handleChange} className="w-full border-2 border-gray-300 rounded p-2 mt-1" />

        <label className="block text-lg font-medium text-gray-700 mt-4">Account Holder Name</label>
        <input type="text" name="accountHolder" value={bankDetails.accountHolder} onChange={handleChange} className="w-full border-2 border-gray-300 rounded p-2 mt-1" />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-gray-700 mt-4">Account Number</label>
            <input type="text" name="accountNumber" value={bankDetails.accountNumber} onChange={handleChange} className="w-full border-2 border-gray-300 rounded p-2 mt-1" />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mt-4">IFSC Code</label>
            <input type="text" name="ifscCode" value={bankDetails.ifscCode} onChange={handleChange} className="w-full border-2 border-gray-300 rounded p-2 mt-1" />
          </div>
        </div>
      </form>

      <div className="flex justify-center mt-6 ml-6">
        <Button button="Save" onClick={handleSave} />
      </div>
    </div>
  );
};

export default Bank;
