const RectangleMeterCard = ({ title, beds, occupied, vacant, meterImage }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="flex flex-col gap-1 w-full ">
        {/* Title & Beds Info */}
        <h3 className="text-gray-800 font-bold">{title}</h3>
        <p className="text-gray-600 text-sm">TODAY</p>

        {/* Occupied & Vacant Section */}
        <div className="flex gap-5 mt-2">
          <div className="bg-[#69205D] text-white p-3 rounded-[9px] text-center w-40">
            <p className=" text-[16px] ">Occupied</p>
            <p className="text-[15px] font-bold ">{occupied}</p>
          </div>
          <div className="bg-[#69205D] text-white p-3 rounded-[9px] text-center w-40">
            <p className="text-[16px] ">Vacant</p>
            <p className="text-[15px] font-bold">{vacant}</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center">
        {/* View Link (Above the Image) */}
        <button className="text-[16px] text-purple-600 flex items-center">
          View &gt;
        </button>
        
        <div className="w-50 h-50">
        <img src={meterImage} alt="Meter" className=" w-60 h-50" />
      </div>
    </div>
    </div>
  );
};

export default RectangleMeterCard;



