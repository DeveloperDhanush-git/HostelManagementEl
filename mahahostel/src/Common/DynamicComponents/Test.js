import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import BuildingImg from "./Assests/hostel-building.png";

const Add = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");

  return (
    <div
      className=" min-h-screen flex flex-col bg-white rounded-lg mt-1"
      style={{ fontFamily: "Montserrat" }}
    >
      <div className="flex-grow p-4">
        <Header title="Add Tenant" />

        <div className="ml-6">
          <div className="bg-gray-200 p-3 rounded-md flex justify-between items-center mt-4">
            <h3 className="text-gray-700 text-sm md:text-base">
              Maha Hostel 01
            </h3>
            <img src={BuildingImg} alt="Hostel Icon" className="w-10 h-10" />
          </div>

          <p className="text-xs text-blue-500 mt-3">STEP 1 OF 3</p>
          <h3 className="text-lg font-semibold mt-2">Personal details</h3>

          <input
            type="text"
            placeholder="Full name"
            className="border p-2 w-full rounded mt-3 text-sm md:text-base"
          />

          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value="+91"
              disabled
              className="border p-2 w-16 rounded bg-gray-100 text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="Mobile number"
              className="border p-2 w-full rounded text-sm md:text-base"
            />
          </div>

          <h3 className="text-lg font-semibold mt-4">Gender</h3>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {["Male", "Female", "Others"].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-4 py-2 rounded-md text-sm md:text-base ${
                  gender === g
                    ? "bg-[#69205D] text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <h3 className="text-lg font-semibold mt-4">Select Occupation</h3>
          <div className="grid grid-cols-2 gap-3 mt-2 mb-5">
            {["Student", "Working Professional"].map((job) => (
              <button
                key={job}
                onClick={() => setOccupation(job)}
                className={`px-4 py-2 rounded-md text-sm md:text-base ${
                  occupation === job
                    ? "bg-[#69205D] text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {job}
              </button>
            ))}
          </div>
        </div>
        
      </div>
      <div className="p-4 ml-6">
      <Button button="/*Add from contacts" />
<Button button="Continue"
  defaultColor="#69205D"
  route="/addtenant"
  size="md"/>
  </div>
    </div>
  );
};

export default Add;
