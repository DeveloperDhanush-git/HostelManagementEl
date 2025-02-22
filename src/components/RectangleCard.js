const RectangleCard = ({ imageSrc, title, description, buttonText, color, textcolor }) => {
  return (
    <div className="flex-1 flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
      {/* Left Side: Image + Title & Description */}
      <div className="flex items-center gap-3">
        {imageSrc && <img src={imageSrc} alt={title} className="w-10 h-10 object-contain" />}
        <div>
          <h4 className={`text-gray-800 font-semibold text-sm ${textcolor}`}>{title}</h4>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>

      {/* Right Side: Button */}
      <button className={`px-7 py-2 text-white font-medium rounded-[22px] ${color}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default RectangleCard;
