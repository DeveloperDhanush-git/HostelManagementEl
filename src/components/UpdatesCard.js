const UpdateCard = ({ image, title, count }) => {
    return (
      <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md">
        {/* Left Side: Image, Title, and Count */}
        <div className="flex items-center gap-3">
          <img src={image} alt={title} className="w-8 h-8 object-contain" />
          <div>
            <h4 className="text-gray-800 font-medium text-sm">{title}</h4>
            <p className="text-black-800 text-[16px] font-semibold">{count}</p>
          </div>
        </div>
  
        {/* Right Side: Arrow Icon */}
        <img 
          src="/assets/🦆 icon _chevron right arrow_.png" 
          alt="Arrow" 
          className="w-4 h-4" 
        />
      </div>
    );
  };
  
  export default UpdateCard;
  