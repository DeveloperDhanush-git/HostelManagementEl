const RectangleCard = ({ imageSrc, title, description, buttonText, color, textcolor }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">
      {/* Left Side: Image + Title & Description */}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        {imageSrc && <img src={imageSrc} alt={title} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />}
        <div>
          <h4 className={`text-gray-800 font-semibold text-sm sm:text-base ${textcolor}`}>{title}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Right Side: Button */}
      <button className={`px-6 py-2 text-white font-medium rounded-[22px] mt-3 sm:mt-0 w-full sm:w-auto ${color}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default RectangleCard;
