import { useState } from "react";
import { FaMoneyBillWave, FaBullhorn, FaFileAlt, FaClock } from "react-icons/fa";

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));

  const icons = {
    Sales: <FaMoneyBillWave />,
    Complaints: <FaBullhorn />,
    "Requests by Tenants": <FaFileAlt />,
    "Outpasses and Attendance": <FaClock />,
  };

  const monthlyData = {
    January: { Sales: 10, Complaints: 3, "Requests by Tenants": 5, "Outpasses and Attendance": 8 },
    February: { Sales: 15, Complaints: 2, "Requests by Tenants": 4, "Outpasses and Attendance": 10 },
    December: { Sales: 0, Complaints: 0, "Requests by Tenants": 2, "Outpasses and Attendance": 2 },
  };

  const currentData = monthlyData[selectedMonth] || { Sales: 0, Complaints: 0, "Requests by Tenants": 0, "Outpasses and Attendance": 0 };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 mb-2 text-black rounded-lg">
      <div className="flex justify-between w-full max-w-4xl mb-6 bg-gray ">
        <h2 className="text-2xl font-semibold ">Updates</h2>
        <select
          className="p-2 rounded-md bg-white text-black flex "
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }))
            .map((month) => <option key={month} value={month}>{month}</option>)}
        </select>
      </div>

      <div className="space-y-4 w-full max-w-4xl">
        {Object.entries(currentData).map(([title, value]) => (
          <div key={title} className="flex items-start  bg-white text-black gap-5 p-4 rounded-lg shadow-md">
            <span className="text-3xl">{icons[title]}</span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold flex items-start">{title}</h3>
              <p className="text-xl font-bold flex items-start">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
