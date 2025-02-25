/*------------dynamic components-----------------*/
// title="Collection"
// selectedMonth={selectedMonth}
// setSelectedMonth={setSelectedMonth}
// pendingAmount={5000} 
// receivedAmount={15000} 
// totalCollection={20000} 
// statusMessage="All dues have been Paid"
// collectionIcon="/assets/image (4).png"
// pendingIcon="/assets/image (5).png"
// receivedIcon="/assets/image (6).png"
/*-----------------------------------------------*/

import MonthDropdown from "./MonthDropdown";
import { FaChevronRight } from "react-icons/fa";

const SquareCard = ({ 
  title, 
  selectedMonth, 
  setSelectedMonth, 
  pendingAmount, 
  receivedAmount, 
  totalCollection, 
  statusMessage, 
  collectionIcon, 
  pendingIcon, 
  receivedIcon 
}) => {
  return (
    <div className="bg-[rgba(124,157,179,0.4)] p-4 rounded-lg shadow-md w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src={collectionIcon} alt="Collection" className="w-4 h-4 sm:w-8 h-8" />
          <p className="text-[12px] sm:text-[16px] text-black-500 font-semibold">{title}</p>
        </div>
        <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      </div>
      <hr className="border-1 border-white rounded-lg mb-3" />

      <div className="flex justify-between px-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-1/2">
          <img src={pendingIcon} alt="Pending" className="w-12 h-12 object-contain" />
          <p className="font-semibold mt-2">Pending</p>
          <p className="text-lg font-bold mt-1 text-red-500">₹ {pendingAmount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-1/2">
          <img src={receivedIcon} alt="Received" className="w-12 h-12 object-contain" />
          <p className="font-semibold mt-2">Received</p>
          <p className="text-lg font-bold mt-1 text-green-500">₹ {receivedAmount}</p>
        </div>
      </div>
      <hr className="border-1 border-white rounded-lg mt-4" />

      <div className="p-4 mr-10 ml-10 mt-1 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-[17px] font-semibold">Total Collection</p>
        <p className="font-semibold">₹ {totalCollection}</p>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-md flex justify-between items-center">
        <button className="flex justify-between items-center w-full cursor-pointer p-1">
          <p className="text-[#69205D] font-semibold">{statusMessage}</p>
          <FaChevronRight className="text-[#69205D] w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SquareCard;
