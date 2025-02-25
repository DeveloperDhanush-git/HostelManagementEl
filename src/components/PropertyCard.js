import { useNavigate } from "react-router-dom";

const PropertyCard = ({ name, image, address, totalTenants, pending, present, absent }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Main Property Card */}
      <div 
        className="rounded-lg p-5 bg-[rgba(124,157,179,0.3)] w-full max-w-2xl cursor-pointer transition-all duration-300 hover:bg-[rgba(124,157,179,0.4)] shadow-md"
        onClick={() => navigate("/save-attendance")}
      >
        {/* Top Section - Hostel Name & Address */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          {/* Left Section - Hostel Name & Icon */}
          <div className="flex flex-col items-center md:items-start w-full md:w-48">
            <h2 className="font-bold text-lg mb-2">{name}</h2>
            <img src={image} alt={`${name} Icon`} className="w-24 h-24 object-cover rounded-md" />
          </div>

          {/* Right Section - Address */}
          <div className="bg-white p-3 rounded-md text-sm text-gray-700 w-full md:w-3/4 shadow-md">
            {address.split("\n").map((line, index) => (
              <p key={index} className="whitespace-normal">{line}</p>
            ))}
          </div>
        </div>

        {/* Attendance Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-3">
          {[
            { label: "Total tenants", value: totalTenants, imgSrc: "/assets/all_5619329-removebg-preview 1.png" },
            { label: "Pending", value: pending, imgSrc: "/assets/folder_2570388-removebg-preview 1.png" },
            { label: "Present", value: present, imgSrc: "/assets/calendar_17645758-removebg-preview 1.png" },
            { label: "Absent", value: absent, imgSrc: "/assets/absent-removebg-preview 1.png" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-full sm:w-35"
            >
              <img src={item.imgSrc} alt={item.label} className="w-10 h-10" />
              <span className="text-sm font-semibold mt-2 min-h-[40px] flex items-center justify-center text-center">
                {item.label}
              </span>
              <span className="text-xl font-bold mt-1">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
