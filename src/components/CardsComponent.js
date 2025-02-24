const CardsComponent = ({ imageSrc, title, count }) => {
    return (
      <div className="flex flex-col justify-between bg-[#DFDFDF] p-4 rounded-lg shadow w-full h-[140px]">
        {/* Card Title with > Icon */}
        <h3 className="font-bold text-lg flex items-center">
          {title} <span className="ml-1 text-gray-500">&gt;</span>
        </h3>
  
        {/* Image and Count */}
        <div className="flex justify-between items-center">
          <img src={imageSrc} alt={title} className="w-15 h-15 object-contain" />
          <p className="text-[40px] font-bold text-gray-900">{count}</p>
        </div>
      </div>
    );
  };
  
  export default CardsComponent;
  