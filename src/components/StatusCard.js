const StatusCard = ({ image, label, count }) => {
    return (
        <div className="p-3 rounded-lg shadow-md text-center bg-[rgba(124,157,179,0.2)]">
        <img src={image} alt={label} className="w-6 h-6 mx-auto mb-2" />
        <p className="text-xs sm:text-sm text-gray-600">{label}</p>
      
        {/* Horizontal Line */}
        <hr className="my-2 border-1 border-white w-4/4 mx-auto rounded-lg" />
      
        <p className="text-sm sm:text-lg font-bold text-gray-800">{count}</p>
      </div>
      
    );
  };
  
  export default StatusCard;
  