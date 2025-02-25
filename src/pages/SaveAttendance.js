import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Header from "../components/Header";
import TabComponent from "../components/Tab"; // Import the TabComponent
import Calendar from "../components/Calender"; // Import the Calendar

const floors = ["GROUND", "FIRST", "SECOND", "THIRD", "FOURTH"];

const initialAttendanceData = {
  GROUND: [
    { id: 1, name: "Ravi", room: "01", bed: "02", status: "present" },
    { id: 2, name: "Sam", room: "03", bed: "04", status: "absent" },
    { id: 11, name: "Sam", room: "03", bed: "04", status: "absent" },
  ],
  FIRST: [
    { id: 3, name: "John", room: "201", bed: "02", status: "present" },
    { id: 4, name: "Smith", room: "202", bed: "01", status: "absent" },
  ],
  SECOND: [
    { id: 5, name: "Mike", room: "301", bed: "03", status: "present" },
    { id: 6, name: "David", room: "302", bed: "02", status: "absent" },
  ],
  THIRD: [
    { id: 7, name: "Leo", room: "401", bed: "01", status: "present" },
    { id: 8, name: "Chris", room: "402", bed: "02", status: "absent" },
  ],
  FOURTH: [
    { id: 9, name: "Kevin", room: "501", bed: "03", status: "present" },
    { id: 10, name: "Brian", room: "502", bed: "02", status: "absent" },
  ],
};

const SaveAttendance = () => {
  const [selectedFloor, setSelectedFloor] = useState("GROUND");
  const [attendance, setAttendance] = useState(initialAttendanceData);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Added state for calendar

  // Function to toggle student attendance status
  function toggleStatus(floor, id) {
    setAttendance((prevData) => {
      return {
        ...prevData,
        [floor]: prevData[floor].map((student) =>
          student.id === id
            ? { ...student, status: student.status === "present" ? "absent" : "present" }
            : student
        ),
      };
    });
  }

  return (
    <div className="w-full">
      {/* Header with Attendance Title & Calendar */}
      <Header 
        title={
          <div className="flex flex-col mt-4">
            <span className="text-[14px] sm:text-[18px] font-semibold mb-2">Attendance</span>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
        } 
        icons={["search", "sliders"]}
      />

      {/* Floor Tabs with Horizontal Scroll */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <TabComponent tabs={floors} selectedTab={selectedFloor} setSelectedTab={setSelectedFloor} />
      </div>

      {/* Attendance List */}
      <div className="mt-4 space-y-4 pb-20">
        {attendance[selectedFloor].map((student) => (
          <div
            key={student.id}
            className="flex flex-col sm:flex-row justify-between items-center border border-[#69205D] border-2 rounded-lg p-4 shadow-md"
          >
            {/* Left Side - User Info */}
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-2xl text-gray-500" />
              <div>
                <p className="font-medium text-[18px] sm:text-[16px]">{student.name}</p>
                <p className="text-gray-600 text-[15px] sm:text-[14px]">
                  Room No: <span className="font-semibold">{student.room}</span> | Bed No:{" "}
                  <span className="font-semibold">{student.bed}</span>
                </p>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="flex bg-gray-200 rounded-lg overflow-hidden mt-2 sm:mt-0">
              <button
                className={`px-4 py-1 text-[14px] sm:text-[15px] cursor-pointer ${
                  student.status === "present" ? "bg-[#224605] text-white" : "text-gray-600"
                }`}
                onClick={() => toggleStatus(selectedFloor, student.id)}
              >
                Present
              </button>
              <button
                className={`px-4 py-1 text-[14px] sm:text-[15px] cursor-pointer ${
                  student.status === "absent" ? "bg-[#FF0000] text-white" : "text-gray-600"
                }`}
                onClick={() => toggleStatus(selectedFloor, student.id)}
              >
                Absent
              </button>
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className="mt-6 w-full px-2 sm:px-0">
          <button
            className="p-4 bg-[#69205D] text-white rounded-lg text-[15px] sm:text-lg font-semibold w-full shadow-md cursor-pointer"
          >
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveAttendance;
