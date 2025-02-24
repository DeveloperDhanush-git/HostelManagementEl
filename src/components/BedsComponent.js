/*------------dynamic components-----------------*/

// imageSrc = "/assets/bed.png"
// title = "Manage Beds"
// description = "Track every bed status and manage tenant move-in, move-out."
// buttonText = "ADD"
// onButtonClick = {() => alert("Add button clicked!")}

/*-----------------------------------------------*/

const BedsComponent = ({ imageSrc, title, description, buttonText}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4">
      <div className="flex items-center gap-2 sm:gap-8 w-full sm:w-auto ">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-10 h-10 object-contain "
          />
        )}

        <div className="text-center sm:text-left">
          <p className="font-semibold text-[17px]">
            {title}
          </p>
          <p className="text-[15px] max-w-xs">
            {description}
          </p>
        </div>
      </div>

      <button
        className="mt-4 sm:mt-0 px-8 sm:px-11 py-2 sm:py-3 bg-[#69205D] text-white rounded-[22px] text-[15px] w-full sm:w-auto cursor-pointer"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BedsComponent;