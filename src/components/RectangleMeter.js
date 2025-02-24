const RectangleMeterCard = ({ title, occupied, vacant, meterImage }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center 
    sm:items-start justify-start sm:justify-between 
    text-center sm:text-left gap-4 sm:gap-6 w-full 
    p-4 bg-[rgba(124,157,179,0.2)] rounded-lg shadow-md">
      
      {/* Left Section - Title, Today Text, and Image for Small Screens */}
      <div className="w-full flex flex-col items-center sm:w-auto sm:order-2">
        {/* Title & "TODAY" Above Image for Small Screens */}
        <h3 className="text-gray-800 font-bold text-lg sm:hidden">{title}</h3>
        <p className="text-gray-600 text-sm sm:hidden">TODAY</p>

        {/* Image */}
        <img src={meterImage} alt="Meter" className="w-40 sm:w-60 h-auto" />
      </div>

      {/* Right Section - Title, Today, and Cards (For Large Screens) */}
      <div className="flex flex-col gap-2 w-full sm:w-auto sm:order-1">
        {/* Title & "TODAY" for Large Screens */}
        <h3 className="text-gray-800 font-bold text-lg hidden sm:block">{title}</h3>
        <p className="text-gray-600 text-sm hidden sm:block">TODAY</p>

        {/* Occupied & Vacant Section */}
        <div className="flex sm:flex-row gap-3 sm:gap-5 mt-2 w-full sm:w-auto">
          <div className="bg-[#69205D] text-white p-4 rounded-lg text-center w-full sm:w-40">
            <p className="text-[16px]">Occupied</p>
            <p className="text-[15px] font-bold">{occupied}</p>
          </div>
          <div className="bg-[#69205D] text-white p-4 rounded-lg text-center w-full sm:w-40">
            <p className="text-[16px]">Vacant</p>
            <p className="text-[15px] font-bold">{vacant}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RectangleMeterCard;
