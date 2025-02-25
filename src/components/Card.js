import { FaChevronRight } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Card = ({ title, image, link }) => {
  return (
    <Link
      to={link}
      aria-label={`Navigate to ${title}`}
      className="block w-full ml-3"
    >
      <div className="flex items-center justify-between p-4 bg-[rgba(124,157,179,0.4)] 
          rounded-lg"
      >
        <div className="flex items-center gap-5">
          <img src={image} alt={title} className="w-12 h-12 object-cover rounded-md" />
          <span className="text-[15px] sm:text-[18px] font-semibold text-gray-900">{title}</span>
        </div>
        <FaChevronRight className="text-gray-700" />
      </div>
    </Link>
  );
};

export default Card;
