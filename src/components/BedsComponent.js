const BedsComponent = ({ imageSrc }) => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Left Section: Image */}
      <div className="flex items-center gap-3">
        {imageSrc && <img src={imageSrc} alt="Beds" className="w-10 h-10 object-contain" />}
        
        {/* Text Content */}
        <div>
          <h4 className="text-gray-800 font-semibold text-[17px] ">Manage Beds</h4>
          <p className="text-[15px] text-gray-500">
            Track every bed status and manage tenant move-in, move-out.
          </p>
        </div>
      </div>

      {/* Right Section: Button */}
      <button className="px-11 py-3 bg-[#69205D] text-white rounded-[22px] text-[15px] ">
        ADD
      </button>
    </div>
  );
};

export default BedsComponent;
