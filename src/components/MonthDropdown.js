import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // For dropdown icon

const MonthDropdown = ({ selectedMonth, setSelectedMonth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="relative w-30 sm:w-48">

      <div
        className="p-2 rounded-[12px] text-[12px] sm:text-[16px] bg-white w-full 
        cursor-pointer outline-none focus:ring-2 focus:ring-gray-300 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedMonth}
        <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <ul className="absolute w-full bg-white shadow-lg rounded-md mt-2 max-h-40 overflow-y-auto z-10">
          {months.map((month) => (
            <li
              key={month}
              className="p-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setSelectedMonth(month);
                setIsOpen(false);
              }}
            >
              {month}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MonthDropdown;
