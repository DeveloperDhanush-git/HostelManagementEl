const BusinessExpensesCard = ({ iconSrc, title }) => {
    return (
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-xl w-full max-w-lg">
        <div className="flex items-center gap-4">
          <div className="bg-[#8EDFEB] p-3 rounded-[15px] shadow-md">
            <img src={iconSrc} alt="Icon" className="w-8 h-8" />
          </div>
  
          <p className="text-black-800 font-semibold text-lg">{title}</p>
        </div>
  
        <span className="text-blue-500 text-[35px] font-bold">↗</span>
      </div>
    );
  };
  
  export default BusinessExpensesCard;
  