import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown } from "react-icons/fa";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex items-center px-2 space-x-2 text-white text-[13px] sm:text-[14px] cursor-pointer">
          <FaChevronDown className="text-white text-[12px] sm:text-[12px]" />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd MMM, yyyy"
        className="bg-transparent cursor-pointer"
      />
    </div>
  );
};

export default Calendar;
