/*------------dynamic components-----------------*/
// title = "Reminder!"
// description = "Bank account not linked for this property"
// buttonText = "Link"
// color = "bg-[#69205D]"
// textcolor = { "text-red-500"}
/*-----------------------------------------------*/

const RectangleCard = ({ imageSrc, title, description, buttonText, color, textcolor }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">

      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        {imageSrc && <img src={imageSrc} alt={title} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />}
        <div>
          <p className={`text-black-800 font-semibold text-[15px] sm:text-[16px] ${textcolor}`}>{title}</p>
          <p className="text-xs sm:text-sm text-black-800">{description}</p>
        </div>
      </div>

      <button className={`px-6 py-2 text-white font-medium rounded-[22px] mt-3 sm:mt-0 w-full sm:w-auto ${color} cursor-pointer`}>
        {buttonText}
      </button>
    </div>
  );
};

export default RectangleCard;
