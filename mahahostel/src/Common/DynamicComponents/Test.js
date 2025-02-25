import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button"

const Add = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");

  return (
    <div
      className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 h-auto flex flex-col md:p-6"
      style={{ fontFamily: "Montserrat" }}
    >


      <Header title="Add Tenant" />

    
      <div className="bg-gray-200 p-3 rounded-md flex justify-between items-center mt-4">
        <h3 className="text-gray-700 text-sm md:text-base">Maha Hostel 01</h3>
        <img src="" alt="Hostel Icon" className="w-6 h-6" />
      </div>

      
      <p className="text-xs text-blue-500 mt-3">STEP 1 OF 3</p>
      <h3 className="text-lg font-semibold mt-1">Personal details</h3>

      
      <input type="text" placeholder="Full name" className="border p-2 w-full rounded mt-2 text-sm md:text-base" />

     
      <div className="flex gap-2 mt-2">
        <input type="text" value="+91" disabled className="border p-2 w-16 rounded bg-gray-100 text-sm md:text-base" />
        <input type="text" placeholder="Mobile number" className="border p-2 w-full rounded text-sm md:text-base" />
      </div>

     
      <h3 className="text-lg font-semibold mt-4">Gender</h3>
      <div className="grid grid-cols-3 gap-3 mt-2">
        {["Male", "Female", "Others"].map((g) => (
          <button
            key={g}
            onClick={() => setGender(g)}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${
              gender === g ? "bg-[#69205D] text-white" : "bg-gray-300 text-black"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      
      <h3 className="text-lg font-semibold mt-4">Select Occupation</h3>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {["Student", "Working Professional"].map((job) => (
          <button
            key={job}
            onClick={() => setOccupation(job)}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${
              occupation === job ? "bg-[#69205D] text-white" : "bg-gray-300 text-black"
            }`}
          >
            {job}
          </button>
        ))}
      </div>


      <Button button="/*Add from contacts" />
      <Button button="Continue" defaultColor="#69205D" route="/addtenant" size="md" />
    </div>  
  );
};

export default Add;
