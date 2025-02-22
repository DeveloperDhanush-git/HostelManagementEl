const BusinessExpensesCard = ({ iconSrc, title }) => {
    return (
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-xl w-full max-w-lg">
        {/* Left Side: Icon & Text */}
        <div className="flex items-center gap-4">
          {/* Icon Container with Box Shadow */}
          <div className="bg-[#8EDFEB] p-3 rounded-[15px] shadow-md">
            <img src={iconSrc} alt="Icon" className="w-8 h-8" />
          </div>
  
          {/* Title */}
          <p className="text-gray-900 font-semibold text-lg">{title}</p>
        </div>
  
        {/* Right Side: Bigger Arrow Icon */}
        <span className="text-blue-500 text-[35px] font-bold">↗</span>
      </div>
    );
  };
  
  export default BusinessExpensesCard;
  