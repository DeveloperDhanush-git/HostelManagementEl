import { useState } from "react";
import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";
import Calendar from "../components/Calender";
import BuildingImg from "../Assets/building_16484321-removebg-preview 2.png";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const propertyData = [
    {
      name: "Maha Hostel",
      image: BuildingImg,
      address: `No. 03, ABC Road\nABC Street,\nABC Colony,\nABC City, ABC State,\n6xxxx6`,
      totalTenants: 1,
      pending: 2,
      present: 7,
      absent: 1,
    },
    
  ];

  return (
    <div>
      <Header 
        title={
          <div className="flex flex-col mt-4 ml-2">
            <span className="text-[16px] sm:text-[18px] font-semibold mb-2">Attendance</span>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
        }
      />

      <div className="px-4 sm:px-12 mt-4">
        <button className="bg-[#69205D] text-white px-6 py2 rounded-lg text-[14px] sm:text-[18px] ml-4 shadow-md cursor-pointer">
          {propertyData.length} {propertyData.length === 1 ? "Property" : "Properties"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-2 p-4">
        {propertyData.map((property, index) => (
          <PropertyCard 
            key={index}
            name={property.name}
            image={property.image}
            address={property.address}
            totalTenants={property.totalTenants}
            pending={property.pending}
            present={property.present}
            absent={property.absent}
          />
        ))}
      </div>
    </div>
  );
};

export default Attendance;
