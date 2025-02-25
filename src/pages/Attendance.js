import { useState } from "react";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import Calendar from "../components/Calender"; // Import Calendar

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      {/* Header with Attendance Title & Calendar Inside */}
      <Header 
        title={
          <div className="flex flex-col mt-4 ml-2">
            <span className="text-[14px] sm:text-[18px] font-semibold mb-2">Attendance</span>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
        }
      />

      {/* Responsive Button */}
      <div className="px-4 sm:px-12 mt-4">
        <button className="bg-[#69205D] text-white px-6 py-2 rounded-lg text-[14px] sm:text-[18px] ml-4 shadow-md cursor-pointer">
          1 Properties
        </button>
      </div>

      {/* Property Card Container */}
      <div className="max-w-4xl mx-auto space-y-2 p-4">
        <PropertyCard 
          name="Maha Hostel"
          image="/assets/building_16484321-removebg-preview 2.png"
          address={`No. 03, ABC Road\nABC Street,\nABC Colony,\nABC City, ABC State,\n6xxxx6`}
          totalTenants={10}
          pending={2}
          present={7}
          absent={1}
        />
      </div>
    </div>
  );
};

export default Attendance;
