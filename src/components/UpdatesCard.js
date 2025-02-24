import { FaChevronRight } from "react-icons/fa";

const UpdateCard = ({ image, title, count }) => {
  return (
    <button 
      className="flex justify-between items-center bg-[rgba(0,0,0,0.1)] p-3 rounded-lg shadow-md focus:outline-none cursor-pointer w-full"
      type="button"
    >
      <div className="flex items-center gap-3">
        <img src={image} alt={title} className="w-8 h-8 object-contain" />
        <p className="text-black-800 font-medium text-[16px]">{title}</p>
      </div>

      <div className="flex items-center gap-2 p-2 rounded-lg">
        <p className="text-black-800 text-[16px] font-semibold">{count}</p>
        <FaChevronRight className="text-black w-4 h-4" />
      </div>
    </button>
  );
};

export default UpdateCard;
