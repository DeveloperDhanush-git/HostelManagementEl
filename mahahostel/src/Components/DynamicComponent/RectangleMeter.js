import { FaChevronRight } from "react-icons/fa";

const RectangleMeterCard = ({ title, occupied, vacant, meterImage }) => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center 
    sm:items-start justify-start sm:justify-between 
    text-center sm:text-left gap-4 sm:gap-6 w-full 
    p-4 bg-[rgba(124,157,179,0.4)] rounded-lg shadow-md font-montserrat">
      
      <button 
        className="absolute top-5 right-5 flex items-center gap-2 
        text-[#69205D] font-bold text-sm cursor-pointer font-montserrat"
      >
        <span>View</span>
        <FaChevronRight className="w-4 h-4" />
      </button>

      <div className="w-full flex flex-col items-center sm:w-auto sm:order-2">
        <p className="text-black-800 font-bold text-[16px] sm:hidden font-montserrat">{title}</p>
        <p className="text-black-800 text-[16px] sm:hidden font-montserrat">TODAY</p>
        <img src={meterImage} alt="Meter" className="w-40 sm:w-60 h-auto sm:mr-10" />
      </div>

      <div className="flex flex-col gap-2 w-full sm:w-auto sm:order-1">
        <p className="text-black-800 font-bold text-[18px] hidden sm:block font-montserrat">{title}</p>
        <p className="text-black-800 text-sm hidden sm:block font-montserrat">TODAY</p>

        <div className="flex sm:flex-row gap-3 sm:gap-5 mt-2 w-full sm:w-auto">
          <button 
            className="bg-[#69205D] text-white p-4 rounded-lg text-center w-full sm:w-40 flex flex-col items-center justify-center cursor-pointer font-montserrat"
          >
            <span className="text-[16px] font-montserrat">Occupied</span>
            <span className="text-[15px] font-bold font-montserrat">{occupied}</span>
          </button>
          <button 
            className="bg-[#69205D] text-white p-4 rounded-lg text-center w-full sm:w-40 flex flex-col items-center justify-center cursor-pointer font-montserrat"
          >
            <span className="text-[16px] font-montserrat">Vacant</span>
            <span className="text-[15px] font-bold font-montserrat">{vacant}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RectangleMeterCard;
