/*------------dynamic components-----------------*/
// image="/assets/icon.png" label="Moving-In" count="2" 
/*-----------------------------------------------*/

import { FaChevronRight } from "react-icons/fa";
const StatusCard = ({ image, label, count }) => {
  return (
    <button className="p-3 rounded-lg shadow-md text-center bg-[rgba(124,157,179,0.3)] cursor-pointer">
  
      <img src={image} alt={label} className="w-6 h-6 mx-auto mb-2" />
      <p className="text-[11px] sm:text-sm">{label}</p>

      <hr className="my-2 border-1 border-white w-4/4 mx-auto rounded-lg" />

      <div
        className="flex justify-around items-center w-full p-2"
      >
        <p className="text-sm sm:text-lg font-bold">{count}</p>
        <FaChevronRight className="text-black w-4 h-4" />
      </div>
    </button>
  );
};

export default StatusCard;
