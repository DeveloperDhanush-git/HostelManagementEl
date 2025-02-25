import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown } from "react-icons/fa";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex items-center space-x-1 text-white text-[10px] sm:text-[12px] cursor-pointer">
          <FaChevronDown className="text-white text-[12px] sm:text-[12px]" />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMM dd, yyyy"
        className="bg-transparent cursor-pointer"
      />
    </div>
  );
};

export default Calendar;
