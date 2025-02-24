/*------------dynamic components-----------------*/
// imageSrc="/assets/image.png" title="Properties" count={1}
/*-----------------------------------------------*/

import { FaChevronRight } from "react-icons/fa";
const CardsComponent = ({ imageSrc, title, count }) => {
  return (
    <button className="flex flex-col justify-between bg-[rgba(223,223,223,0.3)]
 p-4 rounded-lg shadow w-full h-[140px] cursor-pointer">
    
      <p className="font-bold text-lg flex items-center cursor-pointer">
        {title}  <span className="ml-1 text-black-800">
          <FaChevronRight />
        </span>
      </p>

      <div className="flex justify-between items-center">
        <img src={imageSrc} alt={title} className="w-15 h-15 object-contain" />
        <p className="text-[40px] font-bold text-black-800">{count}</p>
      </div>
    </button>
  );
};

export default CardsComponent;
