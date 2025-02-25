import { FaArrowRight } from "react-icons/fa";  

const CommunityCard = ({ image, text }) => {
  return (
    <div className="p-3 flex flex-row font-[500] items-center gap-3 justify-between cursor-pointer "  role="button">
      <img src={image} alt="Community" className="w-10 h-9 flex-shrink-0" />

      <p className="text-[13px] sm:text-[16px] text-black-800 flex-1">{text}</p>

        <button className="p-2 cursor-pointer">
        <FaArrowRight className="text-gray-700 w-5 h-5" />
      </button>
    </div>
  );
};

export default CommunityCard;
